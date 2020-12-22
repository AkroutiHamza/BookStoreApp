import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Subject, Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {JwtResponse} from '../../response/JwtResponse';
import {BookInOrder} from '../../models/BookInOrder';
import {debounceTime, switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../enum/Role';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, AfterContentChecked {

    constructor(private cartService: CartService,
                private userService: UserService,
                private router: Router) {
        this.userSubscription = this.userService.currentUser.subscribe(user => this.currentUser = user);
    }

    BookInOrders = [];
    total = 0;
    currentUser: JwtResponse;
    userSubscription: Subscription;

    private updateTerms = new Subject<BookInOrder>();
    sub: Subscription;

    static validateCount(BookInOrder) {
        const max = BookInOrder.stock;
        if (BookInOrder.count > max) {
            BookInOrder.count = max;
        } else if (BookInOrder.count < 1) {
            BookInOrder.count = 1;
        }
        console.log(BookInOrder.count);
    }

    ngOnInit() {
        this.cartService.getCart().subscribe(books => {
            this.BookInOrders = books;
        });

        this.sub = this.updateTerms.pipe(



            // wait 300ms after each keystroke before considering the term
            debounceTime(300),



            //
            // ignore new term if same as previous term
            // Same Object Reference, not working here
            //  distinctUntilChanged((p: BookInOrder, q: BookInOrder) => p.count === q.count),
            //
            // switch to new search observable each time the term changes


            switchMap((BookInOrder: BookInOrder) => this.cartService.update(BookInOrder))
        ).subscribe(book => {
                if (book) { throw new Error(); }
            },
            _ => console.log('Update Item Failed'));
    }

    ngOnDestroy() {
        if (!this.currentUser) {
            this.cartService.storeLocalCart();
        }
        this.userSubscription.unsubscribe();
    }

    ngAfterContentChecked() {
        this.total = this.BookInOrders.reduce(
            (prev, cur) => prev + cur.count * cur.price, 0);
    }

    addOne(BookInOrder) {
        BookInOrder.count++;
        CartComponent.validateCount(BookInOrder);
        if (this.currentUser) { this.updateTerms.next(BookInOrder); }
    }

    minusOne(BookInOrder) {
        BookInOrder.count--;
        CartComponent.validateCount(BookInOrder);
        if (this.currentUser) { this.updateTerms.next(BookInOrder); }
    }

    onChange(BookInOrder) {
        CartComponent.validateCount(BookInOrder);
        if (this.currentUser) { this.updateTerms.next(BookInOrder); }
    }


    remove(BookInOrder: BookInOrder) {
        this.cartService.remove(BookInOrder).subscribe(
            success => {
               this.BookInOrders = this.BookInOrders.filter(e => e.BookId!== BookInOrder.BookId);
                console.log('Cart: ' + this.BookInOrders);
            },
            _ => console.log('Remove Cart Failed'));
    }

    checkout() {
        if (!this.currentUser) {
            this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
        } else if (this.currentUser.role !== Role.Customer) {
            this.router.navigate(['/seller']);
        } else {
            this.cartService.checkout().subscribe(
                _ => {
                    this.BookInOrders = [];
                },
                error1 => {
                    console.log('Checkout Cart Failed');
                });
            this.router.navigate(['/']);
        }

    }
}


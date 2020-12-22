import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {BookService} from "../../services/Book.service";
import {JwtResponse} from "../../response/JwtResponse";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {BookStatus} from "../../enum/BookStatus";
import {Book} from "../../models/Book";
import {Role} from "../../enum/Role";

@Component({
    selector: 'app-book.list',
    templateUrl: './book.list.component.html',
    styleUrls: ['./book.list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

    constructor(private userService: UserService,
                private BookService: BookService,
                private route: ActivatedRoute) {
    }

    Role = Role;
    currentUser: JwtResponse;
    page: any;
    BookStatus = BookStatus;
    private querySub: Subscription;

    ngOnInit() {
        this.querySub = this.route.queryParams.subscribe(() => {
            this.update();
        });
    }

    ngOnDestroy(): void {
        this.querySub.unsubscribe();
    }

    update() {
        if (this.route.snapshot.queryParamMap.get('page')) {
            const currentPage = +this.route.snapshot.queryParamMap.get('page');
            const size = +this.route.snapshot.queryParamMap.get('size');
            this.getbooks(currentPage, size);
        } else {
            this.getbooks();
        }
    }

    getbooks(page: number = 1, size: number = 5) {
        this.BookService.getAllInPage(+page, +size)
            .subscribe(page => {
                this.page = page;
            });

    }


    remove(Books: Book[], Book) {
        this.BookService.delelte(Book).subscribe(_ => {
                Books = Books.filter(e => e.BookId != Book);
            },
            err => {
            });
    }


}

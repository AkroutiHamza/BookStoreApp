import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Book} from "../../models/Book";
import {BookService} from "../../services/Book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css']
})
export class bookEditComponent implements OnInit, AfterContentChecked {

    book = new Book();

    constructor(private BookService: BookService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    BookId: string;
    isEdit = false;

    ngOnInit() {
        this.BookId = this.route.snapshot.paramMap.get('id');
        if (this.BookId) {
            this.isEdit = true;
            this.BookService.getDetail(this.BookId).subscribe(book => this.book = book);
        }

    }

    update() {
        this.BookService.update(this.book).subscribe(book => {
                if (!book) throw new Error();
                this.router.navigate(['/seller']);
            },
            err => {
            });

    }

    onSubmit() {
        if (this.BookId) {
            this.update();
        } else {
            this.add();
        }
    }

    add() {
        this.BookService.create(this.book).subscribe(book => {
                if (!book) throw new Error;
                this.router.navigate(['/']);
            },
            e => {
            });
    }

    ngAfterContentChecked(): void {
        console.log(this.book);
    }
}

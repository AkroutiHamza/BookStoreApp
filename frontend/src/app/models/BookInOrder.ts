import {Book} from "./Book";

export class BookInOrder {
    BookId: number;
    author: string;
    title: string;
    price: number;
    BookIcon: string;
    releaseDate: string;
    stock: number;
    bookStatus: number;
    count: number;

    constructor(Book:Book, quantity = 1){
        this.BookId = Book.BookId;
        this.author = Book.author;
        this.title = Book.title;
        this.price = Book.price;
        this.BookIcon=Book.BookIcon;
        this.releaseDate = Book.releaseDate;
        this.stock = Book.stock;
        this.count = quantity;
        
    }
}

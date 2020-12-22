import {BookInOrder} from "./BookInOrder";

export class Book {
    BookId: number;
    author: string;
    title: string;
    price: number;
    BookIcon: string;
    releaseDate: string;
    stock: number;
    bookStatus: number; // 0: onsale 1: offsale
    
  /*  createTime: string;
    updateTime: string;
   */

    constructor(BookInOrder?: BookInOrder) {
        if (BookInOrder) {
            this.BookId = BookInOrder.BookId;
            this.author = BookInOrder.author;
            this.title = BookInOrder.title;
            this.price = BookInOrder.price;
            this.BookIcon=BookInOrder.BookIcon;
            this.releaseDate = BookInOrder.releaseDate;
            this.stock = BookInOrder.stock;
            this.bookStatus = 0;
        } else {
            this.BookId = 100;
            this.author = '';
            this.title = '';
            this.price = 0;
            this.BookIcon='';
            this.releaseDate = '10/12/2020';
            this.stock = 100;
            this.bookStatus = 0;
        }
    }
}


import {Book} from './models/Book';

export const books: Book[] = [
  {
    BookId: 20695,
    title: 'Core Java',
    author: 'Cay Horstmann',
    price: 30.00,
    BookIcon:'https://images-na.ssl-images-amazon.com/images/I/41f6Rd6ZEPL._SX363_BO1,204,203,200_.jpg',
    releaseDate: '2018-03-10',
    stock: 96,
    bookStatus:0
  },



{
  BookId: 20695,
    title: 'Carthage:',
    author: ' Captivating History ',
    price: 5.00,
    BookIcon:'  https://m.media-amazon.com/images/I/41O9PaBrQ2L._SY346_.jpg',
    releaseDate: '2017-04-10',
    stock: 0,
    bookStatus:1


},
  {
    BookId: 27400,
    title: 'Me: Elton John Official Autobiography',
    author: 'Kindle Edition',
    price: 66.00,
    BookIcon:'https://m.media-amazon.com/images/I/51y8+fZ4bcL.jpg',
    releaseDate: '2000-04-30',
    stock: 960,
    bookStatus:0
  },
  {
    BookId: 236560,
    title: 'Head First Java, 2nd Edition ',
    author: 'Bert Bates',
    price: 47.09,
    BookIcon:'https://images-na.ssl-images-amazon.com/images/I/51BSxeykubL._SX258_BO1,204,203,200_.jpg',
    releaseDate: '2020-12-07',
    stock: 60,
    bookStatus:0
  },
  {
    BookId: 269560,
    title: 'The Last to See Her: A Novel',
    author: 'Courtney Evan Tate',
    price: 39.99,
    BookIcon:'https://m.media-amazon.com/images/I/41BEMtJ+xML._SY346_.jpg',
    releaseDate: '2020-03-10',
    stock: 60,
    bookStatus:0
  },   
  { BookId: 298560,
    title: 'هاري بوتر وحجر الفيلسوف',
    author: ' رجاء عبد الله ',
    price: 20.3,
    BookIcon:'https://m.media-amazon.com/images/I/51-POkW9g5L.jpg',
    releaseDate: '2005-07-10',
    stock: 71,
    bookStatus:0}
    ,
    {
    BookId: 27860,
    title: 'Germania: A Novel of Nazi Berlin',
    author: 'Harald Gilbers',
    price: 39.99,
    BookIcon:'https://m.media-amazon.com/images/I/41GNLohgplL.jpg',
    releaseDate: '2005-07-10',
    stock: 71,
    bookStatus:0
    }
];

export const prod: Book = {
  BookId: 20695,
  title: 'Core Java',
  author: 'Cay Horstmann',
  price: 30.00,
  BookIcon:'https://images-na.ssl-images-amazon.com/images/I/41f6Rd6ZEPL._SX363_BO1,204,203,200_.jpg',
  releaseDate: '2018-03-10',
  stock: 96,
  bookStatus:1
};


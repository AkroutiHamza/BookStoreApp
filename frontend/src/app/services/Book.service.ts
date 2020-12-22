import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Book} from '../models/Book';
import {apiUrl} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private bookUrl = `${apiUrl}/book`;


    constructor(private http: HttpClient) {
    }

    getAllInPage(page: number, size: number): Observable<any> {
        const url = `${this.bookUrl}?page=${page}&size=${size}`;
        return this.http.get(url)
            .pipe(
                // tap(_ => console.log(_)),
            )
    }

  

    getDetail(id: String): Observable<Book> {
        const url = `${this.bookUrl}/${id}`;
        return this.http.get<Book>(url).pipe(
            catchError(_ => {
                console.log("Get Detail Failed");
                return of(new Book());
            })
        );
    }

    update(Book: Book): Observable<Book> {
        const url = `${apiUrl}/seller/book/${Book.BookId}/edit`;
        return this.http.put<Book>(url, Book);
    }

    create(Book: Book): Observable<Book> {
        const url = `${apiUrl}/seller/book/new`;
        return this.http.post<Book>(url, Book);
    }


    delelte(Book: Book): Observable<any> {
        const url = `${apiUrl}/seller/book/${Book.BookId}/delete`;
        return this.http.delete(url);
    }


    /**  
     * Handle Http operation that failed .
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */

     

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

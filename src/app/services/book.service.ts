import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/books'

  constructor(private http : HttpClient) { }

  getBook(id: String){
    return this.http.get<Book>(`${this.apiUrl}/${id}`).toPromise();
  }

  getAllBooks(){
    return this.http.get<Book[]>(this.apiUrl).toPromise();
  }

  deleteBook(id: String){
    return this.http.delete(`${this.apiUrl}/${id}`).toPromise();
  }

  createBook(book: Book){
    return this.http.post(this.apiUrl, book).toPromise();
  }

  updateBook(bookId: String, book: Book){
    return this.http.put(`${this.apiUrl}/${bookId}`, book).toPromise();
  }

  updatePrice(bookId: String, book: Book){
    return this.http.put(`${this.apiUrl}/price/${bookId}`, book).toPromise();
  }
}

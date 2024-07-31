import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/books'

  constructor(private http : HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this.apiUrl).toPromise();
  }
}

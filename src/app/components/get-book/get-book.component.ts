import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-book',
  standalone: true,
  imports: [
    NavComponent,
    CommonModule
  ],
  templateUrl: './get-book.component.html',
  styleUrl: './get-book.component.css'
})
export class GetBookComponent {

  data: Book[] = [];

  constructor(private bookService : BookService){}

  ngOnInit(): void{
    this.bookService.getAllBooks()
    .then(books => {
      if(books){
        this.data = books
      } else{
        this.data = []
      }
      console.log(this.data)
    })
    .catch(error => console.error(error));
  }

  deleteBook(bookId: string): void {
    this.bookService.deleteBook(bookId)
    .then(book => {
      console.log(book)
      this.ngOnInit()
    })
    .catch(error => console.error(error))
  }
}

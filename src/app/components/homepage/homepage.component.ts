import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NavComponent,
    CommonModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  data: Book[] = [];

  constructor(
    private router : Router,
    private bookService : BookService
  ){}

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

  updateBook(bookId: string): void {
    this.router.navigate(['/update', bookId]);
  }
}

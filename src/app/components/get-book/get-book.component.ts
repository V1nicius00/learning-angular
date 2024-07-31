import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-get-book',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './get-book.component.html',
  styleUrl: './get-book.component.css'
})
export class GetBookComponent {

  constructor(private bookService : BookService){}

  getAllBooks(){
    this.bookService.getAllBooks()
    .then(books => console.log(books))
    .catch(error => console.error(error));
  }
}

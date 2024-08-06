import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    NavComponent,
    FormsModule
  ],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {

  constructor(private bookService : BookService){};

  bookName: string = '';
  author: string = '';
  description: string = '';
  price: number = 0;
  releaseDate: Date = new Date();

  createBook(): void{
    const book = {
      bookName: this.bookName,
      author: this.author,
      description: this.description,
      price: this.price,
      releaseDate: this.releaseDate
    }

    this.bookService.createBook(book)
    .then(book => console.log(book))
    .catch(error => console.error(error))
  }
}

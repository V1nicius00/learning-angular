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
    if(this.validateFields()){
      this.bookService.createBook(book)
      .then(book => console.log(book))
      .catch(error => console.error(error))
    } else{
      console.log("Please fill out all the fields")
    }
  }

  private validateFields(): boolean {
    return this.bookName.trim() !== '' &&
    this.author.trim() !== '' &&
    this.description.trim() !== '' &&
    this.price > 0 &&
    this.releaseDate instanceof Date && !isNaN(this.releaseDate.getTime());
  }
}

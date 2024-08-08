import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';


@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [
    NavComponent,
    FormsModule
  ],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {

  constructor(private booKService : BookService){};

  selectedValue: string = 'updateBook';
  bookId: string = '';
  bookName: string = '';
  author: string = '';
  description: string = '';
  price: number = 0;
  releaseDate: Date = new Date();

  update(): void{
    if(this.validateFields()){
      const book = {
        bookName: this.bookName,
        author: this.author,
        description: this.description,
        price: this.price,
        releaseDate: this.releaseDate
      }
      switch (this.selectedValue) {
        case "updateBook":
          this.updateBook(this.bookId, book)
          break;
        case "updatePrice":
          this.updatePrice(this.bookId, book)
          break;
        default:
          console.error("Unvalid radio value.")
          break;
      }
    } else {
      console.log("Please fill out all fields.")
    }
  }

  private validateFields(): boolean {
    return this.bookId.trim() !== '' &&
    this.bookName.trim() !== '' &&
    this.author.trim() !== '' &&
    this.description.trim() !== '' &&
    this.price > 0 &&
    this.releaseDate instanceof Date && !isNaN(this.releaseDate.getTime());
  }

  private updateBook(bookId: string, book: Book){
    this.booKService.updateBook(bookId, book)
    .then(book => console.log(book))
    .catch(error => console.error(error))
  }

  private updatePrice(bookId: string, book: Book){
    this.booKService.updatePrice(bookId, book)
    .then(book => console.log(book))
    .catch(error => console.error(error))
  }

}

import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [
    NavComponent,
    FormsModule
  ],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent {

  constructor(private bookService : BookService){}

  bookId: string = '';

  deleteBook(){
    if(this.bookId.trim() !== ''){
      this.bookService.deleteBook(this.bookId)
      .then(book => console.log(book))
      .catch(error => console.error(error));
    } else {
      console.log("Book ID field is null")
    }
  }


}

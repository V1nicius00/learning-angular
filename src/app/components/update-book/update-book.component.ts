import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private bookService : BookService
  ){};

  bookId: string | null = null;
  book: Book = {
    id: '',
    bookName: '',
    author: '',
    description: '',
    price: 0,
    releaseDate: new Date()
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');
      if(this.bookId){
        this.bookService.getBook(this.bookId)
        .then(b => {
          if(b){
            this.book = b
          } else {
            this.router.navigate(['/not-found'])
          }
        })
        .catch(error => console.error(error))
      }
    })
  }

  update(): void{
    if(this.validateFields()){
      this.updateBook(this.bookId!, this.book)
      this.router.navigate(['/'])
    } else {
      console.log("Please fill out all fields.")
    }
  }

  private validateFields(): boolean {
    const releaseDate = this.book.releaseDate instanceof Date ? this.book.releaseDate : new Date(this.book.releaseDate);

    return this.book.bookName.trim() !== '' &&
    this.book.author.trim() !== '' &&
    this.book.description.trim() !== '' &&
    this.book.price > 0 &&
    !isNaN(releaseDate.getTime());
  }

  private updateBook(bookId: string, book: Book){
    this.bookService.updateBook(bookId, book)
    .then(book => console.log(book))
    .catch(error => console.error(error))
  }

}

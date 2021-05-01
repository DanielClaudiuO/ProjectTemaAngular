import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book .models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent {
  public books: Book[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadBooks();
  }

  public deleteBook(book: Book) {
    this.http.delete(this.baseUrl + 'api/books/' + book.id).subscribe(result => {
      this.loadBooks();
    }, error => console.error(error))
  }

  loadBooks() {
    this.http.get<Book[]>(this.baseUrl + 'api/books').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
}

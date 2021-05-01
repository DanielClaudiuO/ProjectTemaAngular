import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book .models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html'
})
export class BookAddComponent {
  

  public book: Book = <Book>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveBook() {
    this.http.post(this.baseUrl + 'api/books', this.book).subscribe(result => {
      this.router.navigateByUrl("/books");
    }, error => console.error(error))
  }
}


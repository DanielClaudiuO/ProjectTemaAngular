import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book .models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html'
})
export class BookEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  public book: Book = <Book>{};
  public id: String;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id,
        this.loadBook();
    })
  }

  public loadBook() {
    this.http.get<Book>(this.baseUrl + 'api/books/' + this.id).subscribe(result => {
      this.book = result;
    }, error => console.error(error))

  }
  public editBook() {
    this.http.put<Book>(this.baseUrl + 'api/books/' + this.id, this.book).subscribe(result => {
      this.router.navigateByUrl("/books");
    }, error => console.error(error))

  }

}

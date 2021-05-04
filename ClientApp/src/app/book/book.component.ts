import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book .models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['counterStyle.css']
})
export class BookComponent {
  public books: Book[];
  displayedColumns: string[] = ['id', 'name', 'author', 'firstEdition', 'edit', 'delete'];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadBooks();
    this.dataSource = new MatTableDataSource(this.books);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

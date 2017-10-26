import {Component, OnInit} from '@angular/core'
import { BookService } from "app/shared/bookservice";
import { IBook } from "app/shared/models/book";

@Component({
    selector : "app-book",
    templateUrl : "books.component.html",
    styleUrls : ["books.component.css"]
})
export class BooksComponent implements OnInit {
  
    books: IBook[];
    constructor(private bookService : BookService){

    }
    ngOnInit(): void {
         this.bookService.getAllBooks().subscribe(data =>
         {
             console.log("data is ");
             console.log(data);
             this.books = data;
         })
    }


}
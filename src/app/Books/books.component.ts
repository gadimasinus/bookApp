import {Component, OnInit} from '@angular/core'
import { BookService } from "app/shared/bookservice";
import { IBook } from "app/shared/models/book";
import {GridOptions} from 'ag-grid';
//import 'ag-grid/dist/styles/ag-grid.css';
//import('ag-grid/dist/styles/ag-grid.css');

@Component({
    selector : "app-book",
    templateUrl : "books.component.html",
    styleUrls : ["books.component.css"]
})
export class BooksComponent implements OnInit {
  
    books: IBook[];
    gridOptions  : GridOptions;
    constructor(private bookService : BookService){
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName : "Title",
                field : "title",
               
            },
            {
                headerName : "Author",
                field : "author",
              
            },
            {
                headerName : "Genre",
                field : "genre",
                
            },
            {
                headerName : "Read",
                field : "read",
               
            }
        ]
    }
    ngOnInit(): void {
         this.bookService.getAllBooks().subscribe(data =>
         {
             console.log("data is ");
           //  console.log(data);
             this.books = data;
             this.gridOptions.rowData = this.books;  
               console.log(this.gridOptions.rowData);
         });
          
    }

 onReady(data){
    console.log("grid is ready");
    data.api.sizeColumnsToFit();
 }
}
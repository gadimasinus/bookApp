import { Component, OnInit } from '@angular/core'
import { BookService } from "app/shared/bookservice";
import { IBook } from "app/shared/models/book";
import { GridOptions } from 'ag-grid';
//import 'ag-grid/dist/styles/ag-grid.css';
//import('ag-grid/dist/styles/ag-grid.css');

@Component({
    templateUrl: "books.component.html",
    styleUrls: ["books.component.css"]
})
export class BooksComponent implements OnInit {

    books: IBook[];
    gridOptions: GridOptions;
    constructor(private bookService: BookService) {
        console.log('in books component');
        
        this.gridOptions = <GridOptions>{ enableSorting: true };

        this.gridOptions.columnDefs = [
            {
                headerName: "Title",
                field: "title",
                 cellRenderer: function (params) {
                    return '<a href="" target="_blank">' + params.value + '</a>'
                }

            },
            {
                headerName: "Author",
                field: "author"

            },
            {
                headerName: "Genre",
                field: "genre",
                filter: "text"

            },
            {
                headerName: "Read",
                field: "read",
                type: "boolean",
                cellRendererParams: {
                    checkbox: true
                }
               
            }
        ]
    }
    ngOnInit(): void {
        this.bookService.getAllBooks().subscribe(data => {
            console.log("data is ");
            //  console.log(data);
            this.books = data;
            this.gridOptions.rowData = this.books;
            console.log(this.gridOptions.rowData);
        });

    }

    onReady(data) {
        console.log("grid is ready");
        data.api.sizeColumnsToFit();
    }
}
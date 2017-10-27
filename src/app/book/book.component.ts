import {Component} from'@angular/core';
import {BookService} from "../shared/bookservice";

@Component({
    selector : "app-book-detail",
    templateUrl : "book.component.html"
})
export class BookComponent{
    constructor(private bookService : BookService){

    }

}
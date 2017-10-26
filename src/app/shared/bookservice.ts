import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {IBook} from "./models/book";
import {Observable} from "rxjs";

@Injectable()
export class BookService{
  baseUrl : string = "http://localhost:8000/api"

  constructor(private http : Http) {

  }

  getAllBooks() {
      console.log("getting data from book service");
      
      let fullURl : string = this.baseUrl + "/books";
      return this.http.get(fullURl).map(response => {
          return response.json();
      })
      .catch(err => {
         console.log("error getting data" + err);
         throw Observable.throw(err);
      });
  }

}

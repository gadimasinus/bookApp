import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AgGridModule} from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { BookService } from "app/shared/bookservice";
import { BooksComponent } from "app/Books/books.component";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgGridModule.withComponents([BooksComponent])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

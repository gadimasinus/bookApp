import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AgGridModule} from 'ag-grid-angular';
import {routing,appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { BookService } from "app/shared/bookservice";
import { BooksComponent } from "app/Books/books.component";
import { BookComponent } from "app/Book/book.component";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AgGridModule.withComponents([BooksComponent]),
  ],
  providers: [BookService,appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

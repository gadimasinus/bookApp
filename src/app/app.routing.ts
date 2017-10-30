import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from "./Books/books.component";
import {BookComponent} from "./Book/book.component";


const config : Routes = [
    {path : '',redirectTo : 'books', pathMatch : 'full'},
    {path : 'books',component : BooksComponent},
    {path :'book',component : BookComponent},
    {path :'*',redirectTo : 'books'}
];

export const appRoutingProviders : any[]=[];
export const routing = RouterModule.forRoot(config,{useHash:true});

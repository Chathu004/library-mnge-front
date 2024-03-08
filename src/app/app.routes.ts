import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewBorrowersComponent } from './page/view-borrowers/view-borrowers.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"view-all-books",
        component:ViewAllBooksComponent
    },
    {
        path:"sign-up",
        component:RegisterComponent
    },
    {
        path:"view-borrowers",
        component:ViewBorrowersComponent
    },
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"

    }
];

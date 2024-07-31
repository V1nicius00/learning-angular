import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { GetBookComponent } from './pages/get-book/get-book.component';
import { DeleteBookComponent } from './pages/delete-book/delete-book.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: "create",
        component: CreateBookComponent
    },
    {
        path: "update",
        component: UpdateBookComponent
    },
    {
        path: "get",
        component: GetBookComponent
    },
    {
        path: "delete",
        component: DeleteBookComponent
    }
];

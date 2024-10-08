import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { GetBookComponent } from './components/get-book/get-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
        path: "update/:id",
        component: UpdateBookComponent
    },
    {
        path: "get",
        component: GetBookComponent
    },
    {
        path: "delete",
        component: DeleteBookComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

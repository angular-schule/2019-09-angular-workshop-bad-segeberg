import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookContainerComponent } from './create-book-container/create-book-container.component';
import { SearchComponent } from './search/search.component';
import { IsAuthorizedGuard } from '../shared/is-authorized.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: CreateBookContainerComponent },
  { path: 'search', component: SearchComponent },
  { path: ':isbn', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

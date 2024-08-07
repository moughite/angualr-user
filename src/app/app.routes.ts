import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './persons/list-person/list-person.component';
import { NewPersonComponent } from './persons/new-person/new-person.component';
import { NgModule } from '@angular/core';
import { ListUserComponent } from './users/list-user/list-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';

export const routes: Routes = [
  { path: '', component: ListPersonComponent },

  // person 
  { path: 'persons', component: ListPersonComponent },
  { path: 'new-person', component: NewPersonComponent },
  { path: 'persons/:id', component: PersonDetailComponent },

 //users 
  { path: 'users', component: ListUserComponent },
  { path: 'users/:id', component: UserDetailsComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
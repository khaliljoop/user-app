import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path:'formulaire',component:UserFormComponent}
];

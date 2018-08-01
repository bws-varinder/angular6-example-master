import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {ViewEventComponent} from "./view-event/view-event.component";
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-event', component: AddUserComponent },
  { path: 'list-events', component: ListUserComponent },
  { path: 'edit-event', component: EditUserComponent },
  { path: 'view-event', component: ViewEventComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);

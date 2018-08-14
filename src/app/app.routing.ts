import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddEventComponent} from "./add-event/add-event.component";
import {ListEventComponent} from "./list-event/list-event.component";
import {EditEventComponent} from "./edit-event/edit-event.component";
import {ViewEventComponent} from "./view-event/view-event.component";
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'list-events', component: ListEventComponent },
  { path: 'edit-event', component: EditEventComponent },
  { path: 'view-event', component: ViewEventComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);

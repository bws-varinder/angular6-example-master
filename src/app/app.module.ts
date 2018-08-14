import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import {ListEventComponent} from "./list-event/list-event.component";
import {ViewEventComponent, SafePipe} from "./view-event/view-event.component";
import {EventService} from "./service/event.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ListEventComponent,
        AddEventComponent,
        EditEventComponent,
        ViewEventComponent,
        SafePipe
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [AuthenticationService, EventService],
    bootstrap: [AppComponent]
})
export class AppModule { }

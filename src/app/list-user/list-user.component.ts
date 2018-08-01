import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {EventObj} from "../model/user.model";

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
    events: EventObj[];

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
        this.userService.getEvents(-1).subscribe(data => {
            if (data.Status > 0) {
                this.events = data.details;
            }
            else {
                alert(data.Message)
            }

        });
    }

    deleteEvent(event: EventObj): void {
        this.userService.deleteUser(event.EventId)
            .subscribe(data => {
                this.events = this.events.filter(u => u !== event);
            })
    };

    editEvent(event: EventObj): void {
        localStorage.removeItem("editEventId");
        localStorage.setItem("editEventId", event.EventId.toString());
        this.router.navigate(['edit-event']);
    };

    viewEvent(event: EventObj): void {
        localStorage.removeItem("editEventId");
        localStorage.setItem("editEventId", event.EventId.toString());
        this.router.navigate(['view-event']);
    };

    addEvent(): void {
        this.router.navigate(['add-event']);
    };
}

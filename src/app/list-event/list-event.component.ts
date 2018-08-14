import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventService} from "../service/event.service";
import {EventObj} from "../model/event.model";

@Component({
    selector: 'app-list-event',
    templateUrl: './list-event.component.html',
    styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
    events: EventObj[];

    constructor(private router: Router, private eventService: EventService) { }

    ngOnInit() {
        this.eventService.getAllEvents().subscribe(data => {
            if (data.Status > 0) {
                this.events = data.Data;
            }
            else {
                alert(data.Message)
            }

        });
    }

    deleteEvent(event: EventObj): void {
        this.eventService.deleteEvent(event.EventId)
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

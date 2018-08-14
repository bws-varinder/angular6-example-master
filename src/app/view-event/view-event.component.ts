import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import {EventService} from "../service/event.service";
import {Router} from "@angular/router";
import {EventObj} from "../model/event.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
    selector: 'app-view-event',
    templateUrl: './view-event.component.html',
    styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

    event: EventObj;
    EventDetails: EventObj;
    constructor(private formBuilder: FormBuilder, private router: Router, private eventService: EventService) { }

    ngOnInit() {
        let EventId = localStorage.getItem("editEventId");
        if (!EventId) {
            alert("Invalid action.")
            this.router.navigate(['list-event']);
            return;
        }

        this.eventService.getEvents(+EventId)
            .subscribe(data => {
                if (data.Status > 0) {
                    this.EventDetails = data.Data;
                }
                else {
                    alert(data.Message)
                }
            });
    }

}

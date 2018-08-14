import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../service/event.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private router: Router, private eventService: EventService) { }
    Submitted = false;
    addForm: FormGroup;

    ngOnInit() {

        this.addForm = this.formBuilder.group({
            EventId: [0],
            EventName: ['', Validators.required],
            CategoryName: ['', Validators.required],
            EventTime: [''],
            Day: ['', Validators.required],
            Month: ['', Validators.required],
            Year: ['', Validators.required],
            Hour: ['', Validators.required],
            Minute: ['', Validators.required],
            Address1: ['', Validators.required],
            Address2: ['', Validators.required],
            Address3: ['', Validators.required],
            Address4: ['', Validators.required],
            EventDescription: ['', Validators.required],
            YoutubeUrl: ['', Validators.required],
            CreatedDate: [new Date],
            UpdatedDate: [new Date]
        });

    }

    onSubmit() {
        console.log(1)
        if (this.addForm.valid) {
            this.addForm.value.EventTime = this.addForm.value.Day + '/' + this.addForm.value.Month + '/' + this.addForm.value.Year + " " + this.addForm.value.Hour + ':' + this.addForm.value.Minute;
            this.eventService.createEvent(this.addForm.value)
                .subscribe(data => {
                    console.log(data)
                    if (data.Status > 0) {
                        this.router.navigate(['list-events']);
                    }
                    else {
                        alert(data.Message)
                    }
                });
        }
        else {
            this.Submitted = true;
        }
    }

}

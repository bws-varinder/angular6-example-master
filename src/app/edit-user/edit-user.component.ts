import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {EventObj} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

    Submitted = false;
    event: EventObj;
    editForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

    ngOnInit() {
        let EventId = localStorage.getItem("editEventId");
        if (!EventId) {
            alert("Invalid action.")
            this.router.navigate(['list-events']);
            return;
        }

        this.editForm = this.formBuilder.group({
            EventId: [],
            EventName: ['', Validators.required],
            CategoryName: ['', Validators.required],
            EventTime: [],
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
            YoutubeUrl: ['', Validators.required]
        });

        this.userService.getEvents(+EventId)
            .subscribe(data => {
                console.log(data)
                if (data.Status > 0) {
                    this.editForm.setValue(data.details[0]);
                }
                else {
                    alert(data.Message)
                }
            });
    }

    onSubmit() {
        if (this.editForm.valid) {
            this.editForm.value.EventTime = this.editForm.value.Day + '/' + this.editForm.value.Month + '/' + this.editForm.value.Year + " " + this.editForm.value.Hour + ':' + this.editForm.value.Minute;
            this.userService.createUpdateUser(this.editForm.value)
                .subscribe(data => {
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

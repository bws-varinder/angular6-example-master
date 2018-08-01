import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }
    Submitted = false;
    addForm: FormGroup;

    ngOnInit() {

        this.addForm = this.formBuilder.group({
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

    }

    onSubmit() {
        console.log(1)
        if (this.addForm) {
            this.addForm.value.EventTime = this.addForm.value.Day + '/' + this.addForm.value.Month + '/' + this.addForm.value.Year + " " + this.addForm.value.Hour + ':' + this.addForm.value.Minute;
            this.userService.createUpdateUser(this.addForm.value)
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

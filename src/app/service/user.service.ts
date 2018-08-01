import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';
import {EventObj} from "../model/user.model";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8080/user-portal/users';



    getEvents(id: number) {
        return this.http.get<EventObj[]>("http://localhost:57464/fetchEvents/" + id);
    }

    createUpdateUser(user: EventObj) {
        return this.http.post("http://localhost:57464/CreateUpdateEvent", JSON.stringify(user), httpOptions);
    }

    deleteUser(id: number) {
        return this.http.get("http://localhost:57464/DeleteEvent/" + id);
    }
}

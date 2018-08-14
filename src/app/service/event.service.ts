import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';
import {EventObj, ResultObj, BasicResultObj} from "../model/event.model";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {
    constructor(private http: HttpClient) { }

    api: string = "http://localhost:50415/api/Events/";

    getAllEvents() {
        return this.http.get<ResultObj>(this.api + "FetchAllEvents/");
    }

    getEvents(id: number) {
        return this.http.get<ResultObj>(this.api + "fetchEvent/" + id);
    }

    createEvent(event: EventObj) {
        return this.http.post<BasicResultObj>(this.api + "CreateEvent/", JSON.stringify(event), httpOptions);
    }

    updateEvent(event: EventObj) {
        return this.http.post<BasicResultObj>(this.api + "UpdateEvent/", JSON.stringify(event), httpOptions);
    }

    deleteEvent(id: number) {
        return this.http.get<BasicResultObj>(this.api + "DeleteEvent/" + id);
    }
}

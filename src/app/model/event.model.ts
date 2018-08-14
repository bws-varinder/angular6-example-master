export class EventObj {
    EventId: number;
    EventName: string;
    CategoryName: string;
    EventTime : string;
    Address1: string;
    Address2: string;
    Address3: string;
    Address4: string;
    EventDescription: string;
    YoutubeUrl: string;
    CreatedDate: Date;
    UpdatedDate: Date;
}

export class ResultObj {
    Status: number;
    Message: string;
    Data: any;
}

export class BasicResultObj {
    Status: number;
    Message: string;
}

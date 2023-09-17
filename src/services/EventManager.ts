import { Subject } from "rxjs";
import { injectable } from "inversify";

export type EventData = {
  type: string;
  data: number;
};

export interface IEventManager {
  subscribeToEvent(callback: (data: EventData) => void): void;
  emitEvent(data: EventData): void;
}

@injectable()
export class EventManager {
  private eventSubject = new Subject<EventData>();

  subscribeToEvent(callback: (data: EventData) => void) {
    console.log("subscribeToEvent");
    this.eventSubject.subscribe(callback);
  }

  emitEvent(data: EventData) {
    console.log("emitEvent");
    debugger;
    this.eventSubject.next(data);
  }
}

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

  // Method to subscribe to events
  subscribeToEvent(callback: (data: EventData) => void) {
    debugger;
    console.log("subscribeToEvent");
    this.eventSubject.subscribe(callback);
  }

  // Method to emit events
  emitEvent(data: EventData) {
    debugger;
    this.eventSubject.next(data);
  }
}

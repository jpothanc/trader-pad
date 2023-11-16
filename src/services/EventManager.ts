import { Subject } from "rxjs";
import { injectable } from "inversify";

export type EventData = {
  type: string;
  data: any;
};

export interface IEventManager {
  subscribeToEvent(callback: (data: EventData) => void): void;
  publish(data: EventData): void;
  getEvents(): Subject<EventData>;
}

@injectable()
export class EventManager {
  private events = new Subject<EventData>();

  subscribeToEvent(callback: (data: EventData) => void) {
    console.log("subscribeToEvent");
    this.events.subscribe(callback);
  }

  getEvents(): Subject<EventData> {
    return this.events;
  }

  publish(data: EventData) {
    console.log("emitEvent");
    this.events.next(data);
  }
}

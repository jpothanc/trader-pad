import { Subject } from "rxjs";
import { injectable } from "inversify";

export type EventData = {
  type: string;
  data: any;
};

export interface IEventManager {
  publish(data: EventData): void;
  getEvents(): Subject<EventData>;
}

@injectable()
export class EventManager {
  private events = new Subject<EventData>();

  getEvents(): Subject<EventData> {
    return this.events;
  }

  publish(data: EventData) {
    this.events.next(data);
  }
}

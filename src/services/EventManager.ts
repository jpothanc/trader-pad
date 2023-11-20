import { Subject } from "rxjs";
import { injectable } from "inversify";

export enum EventType {
  UNKNOWN = "UNKNOWN",
  GUI = "GUI",
  ORDER = "ORDER",
}

export enum EventId {
  UNKNOWN = "UNKNOWN",
  MSG_UI_ORDER_ENTRY = "MSG_UI_ORDER_ENTRY",
  MSG_UI_REFRESH_TICKETS = "MSG_UI_REFRESH_TICKETS",
  MSG_UI_GRID_SELECTION_CHANGE = "MSG_UI_GRID_SELECTION_CHANGE",
  MSG_ORDER_NOTIFICATION = "MSG_ORDER_NOTIFICATION",
}

export type Payload = {
  data: any;
};

export type EventData = {
  type: EventType;
  id: EventId;
  payload: Payload;
};

export interface IEventManager {
  getUIEvents(): Subject<EventData>;
  getOrderEvents(): Subject<EventData>;
  publish(eventData: EventData): void;
}

@injectable()
export class EventManager implements IEventManager {
  private uiEvents = new Subject<EventData>();
  private orderEvents = new Subject<EventData>();

  getUIEvents(): Subject<EventData> {
    return this.uiEvents;
  }
  getOrderEvents(): Subject<EventData> {
    return this.orderEvents;
  }

  publish(eventData: EventData) {
    if (eventData === undefined) return;

    console.log(
      "publishing event: ",
      eventData.id,
      " with data: ",
      eventData?.payload?.data
    );
    this.getSubject(eventData.type).next(eventData);
  }

  getSubject(type: EventType): Subject<EventData> {
    if (type === EventType.GUI) {
      return this.uiEvents;
    } else {
      return this.orderEvents;
    }
  }
}

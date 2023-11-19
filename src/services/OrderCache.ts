import { inject, injectable } from "inversify";
import { EventId, EventType, type IEventManager } from "./EventManager";

export interface IOrderCache {
  set(data: any): void;
  update(data: any): void;
  get(): any;
  getSize(): number;
}

@injectable()
export class OrderCache implements IOrderCache {
  private data: any | null;
  private eventManager: IEventManager;

  constructor(@inject("EventManager") eventManager: IEventManager) {
    this.eventManager = eventManager;
    console.log("OrderCache strated.");
  }
  getSize(): number {
    return this.data?.length;
  }
  update(update: any): void {
    this.data = this.data.concat(JSON.parse(update));
    this.publishEvent(this.data);
  }

  set(data: any): void {
    this.data = data;
    this.publishEvent(this.data);
  }
  get() {
    return this.data;
  }
  publishEvent(data: any): void {
    this.eventManager.publish({
      type: EventType.ORDER,
      id: EventId.MSG_ORDER_NOTIFICATION,
      payload: {
        data: data,
      },
    });
  }
}

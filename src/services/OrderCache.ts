import { inject, injectable } from "inversify";
import type { IEventManager } from "./EventManager";

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
    this.eventManager.publish({ type: "OrderCache", data: this.data });
  }

  set(data: any): void {
    this.data = data;
    this.eventManager.publish({ type: "OrderCache", data: this.data });
  }
  get() {
    return this.data;
  }
}

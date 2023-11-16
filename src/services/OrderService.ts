import { inject, injectable } from "inversify";
import type { IOrderCache } from "./OrderCache";
import type { INotificationService } from "./SignalRService";
import { Subject } from "rxjs";

export interface IOrderService {
  queryOrders(apiUrl: string): void;
  getNotification(): Subject<any>;
}

@injectable()
export class OrderService implements IOrderService {
  private orderCache: IOrderCache;
  private notifyService: INotificationService;

  constructor(
    @inject("OrderCache") orderCache: IOrderCache,
    @inject("SignalRService") notifyService: INotificationService
  ) {
    this.notifyService = notifyService;
    this.orderCache = orderCache;
  }

  getNotification(): Subject<any> {
    return this.notifyService.getNotification();
  }

  queryOrders(apiUrl: string) {
    fetchData(apiUrl).then((data) => {
      console.log("queryOrders" + data);
      this.orderCache.set(data);
    });
  }
}
async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

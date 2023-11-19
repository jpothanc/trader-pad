import container from "../services/Container";
import { IOrderCache } from "../services/OrderCache";
import { IOrderService } from "../services/OrderService";
import { INotificationService } from "../services/SignalRService";

export enum InstanceNames {
  OrderService = "OrderService",
  OrderCache = "OrderCache",
  EventManager = "EventManager",
  SignalRService = "SignalRService",
}

export function getInstance(name: string): any {
  switch (name) {
    case "OrderService":
      return container.get<IOrderService>("OrderService");
    case "OrderCache":
      return container.get<IOrderCache>("OrderCache");
    case "EventManager":
      return container.get<IOrderCache>("EventManager");
    case "SignalRService":
      return container.get<INotificationService>("SignalRService");
  }
}

import { Container } from "inversify";
import {
  INotificationService,
  SignalRService,
} from "../services/SignalRService";
import { IEventManager, EventManager } from "../services/EventManager";
import { IOrderCache, OrderCache } from "../services/OrderCache";
import { IOrderService, OrderService } from "./OrderService";

const container = new Container();
container
  .bind<INotificationService>("SignalRService")
  .to(SignalRService)
  .inSingletonScope();

container
  .bind<IEventManager>("EventManager")
  .to(EventManager)
  .inSingletonScope();

container.bind<IOrderCache>("OrderCache").to(OrderCache).inSingletonScope();

container
  .bind<IOrderService>("OrderService")
  .to(OrderService)
  .inSingletonScope();

export default container;

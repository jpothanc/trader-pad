import { injectable } from "inversify";
import * as signalR from "@microsoft/signalr";
import config from "../config.json";
import { Subject, Subscription } from "rxjs";

export interface ISignalRService {
  getConnectionId(): string | null;
  subscribeToEvent(callback: (data: any) => void): Subscription;
  unSubscribeToEvent(subs: Subscription | null): void;
  emitEvent(data: any): void;
}

@injectable()
export class SignalRService implements ISignalRService {
  private connection: signalR.HubConnection;
  private eventSubject = new Subject<any>();
  private subscription: Subscription | null = null;

  constructor() {
    console.log("SignalRService Started");
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(config.orderStore.hub)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();
    this.init();
  }

  emitEvent(data: any): void {
    this.eventSubject.next(data);
  }

  private async init(): Promise<void> {
    this.connection
      ?.start()
      .then(() => {
        console.log("Hub connection started.");
      })
      .catch((e: Error) => {
        console.log("Hub connection failed." + e.message);
      })
      .finally(() => {});

    this.connection?.on("notify", (data) => {
      //console.log(data);
      this.emitEvent(data);
    });
  }

  subscribeToEvent(callback: (data: any) => void): Subscription {
    console.log("subscribeToEvent");
    this.subscription = this.eventSubject.subscribe(callback);
    return this.subscription;
  }

  unSubscribeToEvent(subs: Subscription): void {
    console.log("unSubscribeToEvent");
    this.subscription?.unsubscribe();
    subs?.unsubscribe();
  }

  getConnectionId() {
    return this.connection?.connectionId;
  }
}

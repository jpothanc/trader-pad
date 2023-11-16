import { injectable } from "inversify";
import * as signalR from "@microsoft/signalr";
import config from "../config.json";
import { Subject } from "rxjs";

export interface ISignalRService {
  getConnectionId(): string | null;
  publish(data: any): void;
  getNotification(): Subject<any>;
}

@injectable()
export class SignalRService implements ISignalRService {
  private connection: signalR.HubConnection;
  private notification = new Subject<any>();

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(config.orderStore.hub)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();
    this.init();
    console.log("SignalRService started.");
  }

  getNotification(): Subject<any> {
    return this.notification;
  }

  publish(data: any): void {
    this.notification.next(data);
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
      this.publish(data);
    });
  }

  getConnectionId() {
    return this.connection?.connectionId;
  }
}

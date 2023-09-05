import * as signalR from "@microsoft/signalr";
import { useState, useEffect, useMemo } from "react";
import { useConsoleLog } from "./useConsoleLog";

const useSignalR = (url: string, notifyTicket: (data: any) => void) => {
  const [hubConnection, setHubConnection] =
    useState<signalR.HubConnection | null>(null);

  const connection = useMemo(() => {
    console.log("useMemo");
    return new signalR.HubConnectionBuilder()
      .withUrl(url)
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }, [url]);

  useEffect(() => {
    console.log("useEffect");
    setHubConnection(connection);

    connection
      ?.start()
      .then(() => {
        useConsoleLog("Hub connection started.");
        connection?.on("notify", (data) => {
          notifyTicket(data);
        });
      })
      .catch(() => {
        useConsoleLog("Hub connection failed");
      })
      .finally(() => {});
    return () => {
      if (connection?.state === "Connected") {
        connection?.stop().then(() => {
          useConsoleLog("Hub connection stopped.");
        });
      }
    };
  }, [url]);

  return hubConnection;
};

export default useSignalR;

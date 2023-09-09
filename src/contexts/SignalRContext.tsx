import { ReactNode } from "react";
import { useState, useEffect, useContext, createContext, useMemo } from "react";
import * as signalR from "@microsoft/signalr";
import config from "../config.json";

type props = {
  children: ReactNode;
};
const HubConnectionContext = createContext<signalR.HubConnection | null>(null);

const SignalRContext = ({ children }: props) => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null
  );

  const hubConnection = useMemo(() => {
    console.log("useMemo");
    return new signalR.HubConnectionBuilder()
      .withUrl(config.orderStore.hub)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }, [1]);

  useEffect(() => {
    console.log("SignalRContext useEffect");

    hubConnection
      ?.start()
      .then(() => {
        console.log("Hub connection started.");
      })
      .catch((e: Error) => {
        console.log("Hub connection failed." + e.message);
      })
      .finally(() => {
        setConnection(hubConnection);
      });

    return () => {
      if (hubConnection?.state === "Connected") {
        debugger;

        hubConnection?.stop().then(() => {
          console.log("Hub connection stopped.");
        });
      }
    };
  }, [connection?.connectionId]);

  return (
    <HubConnectionContext.Provider value={connection}>
      {children}
    </HubConnectionContext.Provider>
  );
};

export function useHubConnection() {
  return useContext(HubConnectionContext);
}

export default SignalRContext;

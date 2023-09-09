import { useEffect } from "react";
import { useHubConnection } from "../contexts/SignalRContext";

const useSignalR = (url: string, notifyTicket: (data: any) => void) => {
  const connection = useHubConnection();

  useEffect(() => {
    if (connection?.state === "Connected") {
      console.log("Already connected" + connection?.connectionId);
      return;
    }
    console.log("Initializing Hub connection." + connection?.connectionId);

    connection?.on("notify", (data) => {
      console.log("notify");
      notifyTicket(data);
    });
  }, [connection?.connectionId]);

  return connection;
};

export default useSignalR;

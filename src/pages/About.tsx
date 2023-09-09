import container from "../services/Container";
import { ISignalRService } from "../services/SignalRService";
import { IEventManager, EventData } from "../services/EventManager";
import { useEffect } from "react";

export const About = () => {
  const signalRService = container.get<ISignalRService>("SignalRService");
  const eventManager = container.get<IEventManager>("EventManager");
  useEffect(() => {
    // Subscribe to events
    eventManager.subscribeToEvent((data) => {
      console.log(`Received event: ${data.type} - ${data.data}`);
    });
    // eventManager.
  }, []);

  return <div>About</div>;
};

export default About;

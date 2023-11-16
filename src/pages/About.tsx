import container from "../services/Container";
import { INotificationService } from "../services/SignalRService";
import { IEventManager, EventData } from "../services/EventManager";
import { useEffect } from "react";

export const About = () => {
  const signalRService = container.get<INotificationService>("SignalRService");
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
2;
export default About;

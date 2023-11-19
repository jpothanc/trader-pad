import { EventId } from "../services/EventManager";

export type uiEvents = {
  id: EventId;
  callback: () => void;
};

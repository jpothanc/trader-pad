import _default from "react-select";
import OrderEntryDlg from "../dialogs/orderentry/OrderEntryDlg";
import { EventData, EventId, EventType } from "../services/EventManager";

export interface ModalRef {
  open: () => void;
  close: () => void;
  setDetails: (title: string, content: string) => void;
}

export function getDialogInstance(name: string, ref: any) {
  switch (name) {
    case "OrderEntry":
      return <OrderEntryDlg title1="Alert" ref={ref} />;
  }
}

export function getUIEventWithPayload(
  eventId: EventId,
  payload: any
): EventData {
  return {
    type: EventType.GUI,
    id: eventId,
    payload: { data: payload },
  };
}

export function getUIEvent(eventId: EventId): EventData {
  return {
    type: EventType.GUI,
    id: eventId,
    payload: { data: "" },
  };
}

export function getUICallbackEvent(eventId: EventId, callback: any): EventData {
  switch (eventId) {
    case EventId.MSG_UI_ORDER_ENTRY:
      return {
        type: EventType.GUI,
        id: EventId.MSG_UI_ORDER_ENTRY,
        payload: { data: callback },
      };
  }
  return getUknownEvent();
}

export function getUknownEvent(): EventData {
  return {
    type: EventType.UNKNOWN,
    id: EventId.UNKNOWN,
    payload: { data: "" },
  };
}

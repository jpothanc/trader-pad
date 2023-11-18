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

export function getUIEvent(eventId: EventId): EventData {
  switch (eventId) {
    case EventId.UI_ORDER_ENTRY:
      return {
        type: EventType.GUI,
        id: EventId.UI_ORDER_ENTRY,
        payload: { data: "OrderEntry" },
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

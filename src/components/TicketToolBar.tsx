import { useRef } from "react";
import { ModalRef, getUIEvent } from "../utils/dialogUtils";
import { getInstance, InstanceNames } from "../utils/factory";
import { EventId, IEventManager } from "../services/EventManager";
import useModalDlg from "../hooks/useModalDlg";

const TicketToolBar = () => {
  const modalRef = useRef<ModalRef | null>(null);
  const eventManager = getInstance(InstanceNames.EventManager) as IEventManager;
  useModalDlg({ modalRef });

  return (
    <>
      <div className="actions-nav-bar">
        <div className="actions-nav-bar__content">
          <div className="functions">
            <button
              className="btn"
              onClick={() =>
                eventManager.publish(getUIEvent(EventId.UI_ORDER_ENTRY))
              }
            >
              Order Entry
            </button>
            <button
              className="btn"
              onClick={() =>
                eventManager.publish(getUIEvent(EventId.UI_ORDER_ENTRY))
              }
            >
              Send
            </button>
            <button className="btn">Amend</button>
            <button className="btn">Cancel</button>
            <button className="btn">Export</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketToolBar;

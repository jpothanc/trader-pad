import { useRef } from "react";
import { ModalRef, getUIEvent } from "../utils/dialogUtils";
import { getInstance, InstanceNames } from "../utils/factory";
import { EventId, IEventManager } from "../services/EventManager";
import useModalDlgEvents from "../hooks/events/useModalDlgEvents";

const TicketToolBar = () => {
  const modalRef = useRef<ModalRef | null>(null);
  const eventManager = getInstance(InstanceNames.EventManager) as IEventManager;
  useModalDlgEvents({ modalRef });

  return (
    <>
      <div className="actions-nav-bar">
        <div className="actions-nav-bar__content">
          <div>
            <button
              className="toolbar-btn"
              onClick={() =>
                eventManager.publish(getUIEvent(EventId.MSG_UI_REFRESH_TICKETS))
              }
            >
              &nbsp;&nbsp;R&nbsp;&nbsp;
            </button>
          </div>
          <div className="functions">
            <button
              className="toolbar-btn"
              onClick={() =>
                eventManager.publish(getUIEvent(EventId.MSG_UI_ORDER_ENTRY))
              }
            >
              Order Entry 
            </button>
            <button
              className="toolbar-btn"
              onClick={() =>
                eventManager.publish(getUIEvent(EventId.MSG_UI_ORDER_ENTRY))
              }
            >
              Send
            </button>
            <button className="toolbar-btn">Amend</button>
            <button className="toolbar-btn">Cancel</button>
            <button className="toolbar-btn">Export</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketToolBar;

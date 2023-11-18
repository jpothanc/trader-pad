import { MutableRefObject, useEffect } from "react";

import { getInstance, instanceNames } from "../utils/factory";
import { EventData, EventId, IEventManager } from "../services/EventManager";
import { ModalRef } from "../utils/dialogUtils";

type Props = {
  modalRef: MutableRefObject<ModalRef | null>;
};

const useModalDlg = ({ modalRef }: Props) => {
  const eventManager = getInstance(instanceNames.EventManager) as IEventManager;

  useEffect(() => {
    const subscription = eventManager
      ?.getUIEvents()
      .subscribe((event: EventData) => {
        if (event.id === EventId.UI_ORDER_ENTRY) {
          console.log("DialogCore" + event.id);
          modalRef?.current?.open();
        }
      });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);
};

export default useModalDlg;

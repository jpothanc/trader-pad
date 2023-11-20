import { useEffect } from "react";

import { getInstance, InstanceNames } from "../../utils/factory";
import { EventData, EventId, IEventManager } from "../../services/EventManager";

type Props = {
  uiEvents: (event: EventData) => void;
};

const useUIEvents = ({ uiEvents }: Props) => {
  const eventManager = getInstance(InstanceNames.EventManager) as IEventManager;

  useEffect(() => {
    const subscription = eventManager
      ?.getUIEvents()
      .subscribe((event: EventData) => {
        if (event.id === EventId.MSG_UI_REFRESH_TICKETS) {
          uiEvents(event);
        }
        if (event.id === EventId.MSG_UI_GRID_SELECTION_CHANGE) {
          uiEvents(event);
        }
      });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);
};

export default useUIEvents;

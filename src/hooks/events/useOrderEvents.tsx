import { useEffect } from "react";
import { IEventManager, EventData } from "../../services/EventManager";
import { getInstance, InstanceNames } from "../../utils/factory";
import { IOrderService } from "../../services/OrderService";
import { IOrderCache } from "../../services/OrderCache";
import config from "../../config/config.json";

type Props = {
  setOrders: (arg0: any) => void;
};
0;

const useOrderEvents = ({ setOrders }: Props) => {
  console.log("useOrderQuery");
  const eventManager = getInstance(InstanceNames.EventManager) as IEventManager;
  const orderService = getInstance(InstanceNames.OrderService) as IOrderService;
  const orderCache = getInstance(InstanceNames.OrderCache) as IOrderCache;

  useEffect(() => {
    const signalRConnection = orderService
      .getNotification()
      .subscribe((data) => {
        orderCache.update(data);
      });
    const apiQueryOrders =
      config.orderStore.api_base_url + config.orderStore.api_orders;
    orderService.queryOrders(apiQueryOrders);

    const subscription = eventManager
      ?.getOrderEvents()
      .subscribe((event: EventData) => {
        setOrders(event.payload.data);
        // const keys = Object.keys(event.data[0]);
        // setColumns(toColumnDefs(keys));
      });

    return () => {
      subscription?.unsubscribe();
      signalRConnection?.unsubscribe();
    };
  }, []);
};

export default useOrderEvents;

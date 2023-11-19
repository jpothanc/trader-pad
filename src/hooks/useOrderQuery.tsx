import { useEffect } from "react";
import { IEventManager, EventData } from "../services/EventManager";
import { getInstance, InstanceNames } from "../utils/factory";
import { IOrderService } from "../services/OrderService";
import { IOrderCache } from "../services/OrderCache";

type Props = {
  setOrders: (arg0: any) => void;
};
0;

const useOrderQuery = ({ setOrders }: Props) => {
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
    orderService.queryOrders("https://localhost:7213/Order/orders?criteria=1");

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

export default useOrderQuery;

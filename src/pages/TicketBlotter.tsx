import BasicGrid from "../components/BasicGrid";
import { useState, useMemo, useEffect, useCallback } from "react";
import * as helperJs from "../services/Helper";
import config from "../config.json";
import { ISignalRService } from "../services/SignalRService";
import container from "../services/Container";
import { IOrderCache } from "../services/OrderCache";
import { Subscription } from "rxjs";

const TicketBlotter = () => {
  const [rowData, setRowData] = useState<any | null>(null);
  const [refresh, setRefresh] = useState(false);

  const cache = container.get<IOrderCache>("OrderCache");

  const columnDefs = useMemo(() => helperJs.fetchColumnDefs(), []);
  const [subs, setSubs] = useState<Subscription | null>(null);

  const signalRService = container.get<ISignalRService>("SignalRService");

  const refreshBlotter = useCallback(() => {
    console.log("Refreshing Blotter");
    setRowData(cache.get());
  }, []);
  useEffect(() => {
    refreshBlotter();

    return () => {};
  }, []);

  useEffect(() => {
    var s = signalRService.subscribeToEvent((data) => {
      console.log(data);
      var prev = cache.get();
      //debugger;
      var gridData = null;
      if (prev != undefined) {
        console.log("Getting Data");
        gridData = [JSON.parse(data), ...prev];
      } else {
        //debugger;
        gridData = [JSON.parse(data)];
        // gridData = helperJs.fetchRowData();
        //console.log("Setting data" + gridData);
        // setRowData((prevData: any) => {
        //   var parsed = [JSON.parse(firstData), ...prevData];
        //   cache.set(parsed);
        // });
      }
      setRowData(gridData);
      cache.set(gridData);
    });
    setSubs(s);

    return () => {
      signalRService.unSubscribeToEvent(subs);
    };
  }, []);

  //useSignalR(config.orderStore.hub, notifyTicket);

  // function notifyTicket(data: any): void {
  //   console.log(JSON.parse(data));
  //   setRowData((prevData: any) => {
  //     console.log("data :" + prevData?.length);
  //     return [JSON.parse(data), ...prevData];
  //   });
  // }

  return (
    <>
      <button onClick={() => refreshBlotter()}>Refresh</button>
      <BasicGrid
        columnDefs={columnDefs}
        rowData={rowData}
        theme={config.app.theme}
      />
    </>
  );
};

export default TicketBlotter;

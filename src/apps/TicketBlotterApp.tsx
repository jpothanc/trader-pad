import BasicGrid from "../components/BasicGrid";
import { useState, useMemo, useCallback } from "react";
import * as gridHelper from "../utils/gridHelper";
import config from "../config/config.json";
import useOrderEvents from "../hooks/events/useOrderEvents";
import { getInstance } from "../utils/factory";
import { IOrderCache } from "../services/OrderCache";
import TicketToolBar from "../components/TicketToolBar";
import useUIEvents from "../hooks/events/useUIEvents";
import SummaryBar from "../components/SummaryBar";

const TicketBlotterApp = () => {
  const [rowData, setRowData] = useState<any>([]);

  const cache = useMemo(() => getInstance("OrderCache") as IOrderCache, []);
  useOrderEvents({ setOrders: setRowData });
  const columnDefs = useMemo(() => gridHelper.fetchColumnDefs(), []);
  useUIEvents({ uiEvents: () => refreshBlotter() });

  const refreshBlotter = useCallback(() => {
    console.log("Refreshing Blotter");
    setRowData(cache.get());
  }, []);

  return (
    <>
      <TicketToolBar />
      <SummaryBar/> 
    {/* Tickets:({cache.getSize()}) */}
      <BasicGrid
        columnDefs={columnDefs}
        rowData={rowData}
        theme={config.app.theme}
      />
    </>
  );
};

export default TicketBlotterApp;

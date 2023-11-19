import BasicGrid from "../components/BasicGrid";
import { useState, useMemo, useCallback } from "react";
import * as gridHelper from "../utils/gridHelper";
import config from "../config/config.json";
import useOrderQuery from "../hooks/useOrderQuery";
import { getInstance } from "../utils/factory";
import { IOrderCache } from "../services/OrderCache";
import TicketToolBar from "../components/TicketToolBar";

const TicketBlotterApp = () => {
  const [rowData, setRowData] = useState<any>([]);

  const cache = useMemo(() => getInstance("OrderCache") as IOrderCache, []);
  useOrderQuery({ setOrders: setRowData });
  const columnDefs = useMemo(() => gridHelper.fetchColumnDefs(), []);

  const refreshBlotter = useCallback(() => {
    console.log("Refreshing Blotter");
    setRowData(cache.get());
  }, []);

  return (
    <>
      <TicketToolBar />
      <button className="btn" onClick={() => refreshBlotter()}>&nbsp;R&nbsp;</button>
      {cache.getSize()}
      <BasicGrid
        columnDefs={columnDefs}
        rowData={rowData}
        theme={config.app.theme}
      />
    </>
  );
};

export default TicketBlotterApp;

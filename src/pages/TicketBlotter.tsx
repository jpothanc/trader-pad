import BasicGrid from "../components/BasicGrid";
import { useState, useMemo } from "react";
import useSignalR from "../hooks/useSignalR";
import * as helperJs from "../services/Helper";
import config from "../config.json";

const TicketBlotter = () => {
  const [rowData, setRowData] = useState(() => helperJs.fetchRowData());
  const columnDefs = useMemo(() => helperJs.fetchColumnDefs(), []);

  useSignalR(config.orderStore.hub, notifyTicket);

  function notifyTicket(data: any): void {
    console.log(JSON.parse(data));
    setRowData((prevData: any) => [JSON.parse(data), ...prevData]);
  }

  return (
    <>
      <BasicGrid
        columnDefs={columnDefs}
        rowData={rowData}
        theme={config.app.theme}
      />
    </>
  );
};

export default TicketBlotter;

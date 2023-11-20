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
import { EventData, EventId } from "../services/EventManager";

const TicketBlotterApp = () => {
  const [rowData, setRowData] = useState<any>([]);

  const cache = useMemo(() => getInstance("OrderCache") as IOrderCache, []);
  useOrderEvents({ setOrders: setRowData });
  const columnDefs = useMemo(() => gridHelper.fetchColumnDefs(), []);
  
  useUIEvents({
    uiEvents: (event: EventData) => {
      switch (event.id) {
        case EventId.MSG_UI_REFRESH_TICKETS:
          refreshBlotter();
          break;
      }
    },
  });

  const refreshBlotter = useCallback(() => {
    console.log("Refreshing Blotter");
    setRowData(cache.get());
  }, []);

  return (
    <>
      <TicketToolBar />
      <SummaryBar />
      {/* Tickets:({cache.getSize()}) */}
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ width: "30px", paddingLeft: "5px" }}>
          {" "}
          <button className="toolbar-btn" onClick={refreshBlotter}>
            &nbsp;R&nbsp;
          </button>
        </div>
        <BasicGrid
          columnDefs={columnDefs}
          rowData={rowData}
          theme={config.app.theme}
        />
      </div>
    </>
  );
};

export default TicketBlotterApp;

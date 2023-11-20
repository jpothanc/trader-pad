//Executed Value, Qty, AvgPrice
//Buy/Sell Value, Buy/Sell Exec Value
//BPS from VWAP,
//Pending Qty

import useUIEvents from "../hooks/events/useUIEvents";
import { EventData, EventId } from "../services/EventManager";

import { getSummaryBarApi, post } from "../utils/restHelper";
import { OrderSummaryInfo } from "../models/OrderSummaryInfo";
import { useState } from "react";
import SummaryBarItem from "./SummaryBarItem";
const SummaryBar = () => {
  const [data, setData] = useState<OrderSummaryInfo>({} as OrderSummaryInfo);

  useUIEvents({
    uiEvents: (event: EventData) => {
      switch (event.id) {
        case EventId.MSG_UI_GRID_SELECTION_CHANGE:
          getSummaryData(event.payload);
          console.log("Summary Bar Change");
          break;
      }
    },
  });

  async function getSummaryData(payload: any): Promise<void> {
    const responseData = await post(getSummaryBarApi(), payload.data);
    const data = (await responseData.json()) as OrderSummaryInfo;
    setData(data);
    Object.keys(data).forEach((key) => {
      console.log(`${key} = ${data[key as keyof OrderSummaryInfo]}`);
    });
  }

  return (
    <>
      <div className="summary">
        <SummaryBarItem header="value" value={data.orderValue} />
        <SummaryBarItem header="execValue" value={data.execValue} />
        <SummaryBarItem header="pendingValue" value={data.pendingValue} />
        <SummaryBarItem header="size" value={data.size} />
        <SummaryBarItem header="executed" value={data.executed} />
        <SummaryBarItem header="pending" value={data.pending} />
        <SummaryBarItem
          header="marketPercent"
          value={data.marketPercent}
          color="success"
        />
      </div>
    </>
  );
};

export default SummaryBar;

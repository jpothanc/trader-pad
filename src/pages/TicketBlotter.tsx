import * as signalR from "@microsoft/signalr";
import BasicGrid from "../components/BasicGrid";
import { useState, useMemo, useEffect } from "react";
// Define the SignalR hub URL
const signalRHubUrl = "https://localhost:7213/hub";
const TicketBlotter = () => {
  const [rowData, setRowData] = useState([
    {
      orderid: "1",
      state: "Live",
      product: "6758.T",
      acronym: "F10",
      size: 10000,
      price: "MKT",
    },
    {
      orderid: "2",
      state: "Live",
      product: "1301.T",
      acronym: "HSBC",
      size: 10000,
      price: "LMT:2000",
    },
  ]);

  //   const stateStyle = (params: aggri) => {

  //   }

  const [columnDefs, setColData] = useState([
    { field: "orderid" },
    {
      field: "state",
      cellStyle: (params: any) => {
        if (params.value === "Live") {
          return { backgroundColor: "darkgreen" };
        } else {
          return null; // Return null for default styling
        }
      },
    },
    { field: "account" },
    { field: "product" },
    { field: "acronym" },
    { field: "size" },
    { field: "price" },
    { field: "cstamp" },
    { field: "entity" },
    { field: "ostamp" },
    { field: "cstamp" },
    { field: "qdone" },
    { field: "txfaccount" },
  ]);

  // Use useMemo to memoize the SignalR connection
  const hubConnection = useMemo(() => {
    console.log("useMemo");
    return new signalR.HubConnectionBuilder()
      .withUrl(signalRHubUrl)
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }, [signalRHubUrl]);

  useEffect(() => {
    // Initialize SignalR connection and subscribe to updates here
    console.log("useEffect");
    hubConnection
      ?.start()
      .then(() => {
        console.log("SignalR connection started.");
        hubConnection?.on("notify", (data) => {
          console.log(JSON.parse(data));
          console.log("SignalR update.");
          setRowData((prevData) => [JSON.parse(data), ...prevData]);
        });
      })
      .catch(() => {
        console.log("SignalR connection Failed");
      })
      .finally(() => {});
    return () => {
      // Cleanup: Stop the SignalR connection when the component unmounts
      if (hubConnection?.state === "Connected") {
        hubConnection?.stop().then(() => {
          console.log("SignalR connection stopped.");
        });
      }
    };
  }, [signalRHubUrl]);

  return (
    <>
      TicketBlotter
      <BasicGrid
        columnDefs={columnDefs}
        rowData={rowData}
        theme="ag-theme-alpine-dark"
      />
    </>
  );
};

export default TicketBlotter;

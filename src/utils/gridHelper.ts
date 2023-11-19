export function fetchColumnDefs(): any {
  return [
    { field: "orderid" },
    {
      field: "state",
      width: 80,

      cellStyle: (params: any) => {
        if (params.value === "Live") {
          return { backgroundColor: "darkgreen" };
        } else {
          return null; // Return null for default styling
        }
      },
    },
    { field: "account", width: 110 },
    { field: "product", width: 110 },
    { field: "acronym", width: 110 },
    { field: "size", width: 110 },
    { field: "price", width: 110 },
    { field: "cstamp", width: 110 },
    { field: "entity", width: 110 },
    { field: "ostamp", width: 110 },
    { field: "cstamp", width: 110 },
    { field: "qdone", width: 110 },
    { field: "txfaccount", width: 110 },
  ];
}

export function fetchWatchColumnDefs(): any {
  const width = 110;
  return [
    { field: "product", maxWidth: width },
    { field: "Close" },
    { field: "Ask" },
    { field: "AskSize" },
    { field: "Bid" },
    { field: "size" },
    { field: "BidSize" },
    { field: "VWAP" },
    { field: "Volume" },
  ];
}

export function toColumnDefs(cols: string[]): any {
  const colDefs: any = [];
  cols.forEach((c) => {
    colDefs.push({
      field: c,
      resizable: true,
      tooltipField: c,
    });
  });
  return colDefs;
}

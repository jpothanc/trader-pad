export function fetchColumnDefs(): any {
  return [
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
  ];
}

export function fetchWatchColumnDefs(): any {
  return [
    { field: "product" },
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

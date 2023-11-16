export function fetchRowData(): any {
  return [
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
  ];
}



export function fetchWatchRowData(): any {
  return [
    {
      product: "6758.T",
      Close: 5400,
      Ask: 0,
      AskSize: 0,
      Bid: 0,
      BidSize: 0,
      VWAP: 0,
      Volume: 0,
    },
    {
      product: "0005.HK",
      Close: 44,
      Ask: 0,
      AskSize: 0,
      Bid: 0,
      BidSize: 0,
      VWAP: 0,
      Volume: 0,
    },
  ];
}


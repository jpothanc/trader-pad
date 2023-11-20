export type OrderSummaryRequest = {
    orderIds: string[]
}

export function createSummaryRequest(selectedRows:any[]) : OrderSummaryRequest{
     const orderId = selectedRows[0]["orderid"];
     const orderIds: string[] = [];
     orderIds.push(orderId);
     return {orderIds: orderIds};
}
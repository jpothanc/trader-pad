import config from "../config/config.json";
export async function post(url: string, data: any): Promise<Response> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    return await response; // Parse the response body as JSON
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export function getOrderCreationApi(): string {
  return config.orderStore.api_base_url + config.orderStore.api_order_create;
}

export function getSummaryBarApi(): string {
  return config.orderStore.api_base_url + config.orderStore.api_order_summary;
}

import { useEffect } from "react";

export const useConsoleLog = (message: string) => {
  useEffect(() => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${message}`);
  }, [message]);
};

import BasicGrid from "../components/BasicGrid";
import { useMemo } from "react";
import config from "../config/config.json";
import { fetchWatchColumnDefs } from "../utils/gridHelper";
import { fetchWatchRowData } from "../utils/data";

const WatchListApp = () => {
  const rowData = useMemo(() => fetchWatchRowData(), []);
  const columnDefs = useMemo(() => fetchWatchColumnDefs(), []);

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

export default WatchListApp;

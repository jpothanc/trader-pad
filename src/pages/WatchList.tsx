import BasicGrid from "../components/BasicGrid";
import { useMemo } from "react";
import * as helperJs from "../services/Helper";
import config from "../config.json";

const WatchList = () => {
  const rowData = useMemo(() => helperJs.fetchWatchRowData(), []);
  const columnDefs = useMemo(() => helperJs.fetchWatchColumnDefs(), []);

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

export default WatchList;

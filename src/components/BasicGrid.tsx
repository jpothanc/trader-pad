import { AgGridReact } from "ag-grid-react";
import { useMemo, useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { InstanceNames, getInstance } from "../utils/factory";
import { EventId, IEventManager } from "../services/EventManager";
import { getUIEventWithPayload } from "../utils/dialogUtils";
import { createSummaryRequest } from "../models/Requests";

type blotterProps = {
  columnDefs: any;
  rowData: any;
  theme: string;
};

const BasicGrid = ({ columnDefs, rowData, theme }: blotterProps) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "90%" }), []);
  const gridStyle = useMemo(() => ({ height: 400, width: "100%" }), []);
  const gridRef = useRef<AgGridReact>(null);
  const eventManager = getInstance(InstanceNames.EventManager) as IEventManager;

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      cellStyle: { fontSize: "11px" },
    }),
    []
  );
  // Access the grid API

  const onSelectionChanged = () => {
    const selectedRows = gridRef?.current?.api.getSelectedRows();
    if (selectedRows != null && selectedRows?.length > 0) {
      console.log(selectedRows[0]["orderid"]);
      const summaryRequest = createSummaryRequest(selectedRows);

      eventManager.publish(
        getUIEventWithPayload(
          EventId.MSG_UI_GRID_SELECTION_CHANGE,
          summaryRequest
        )
      );
    }
    // gridRef?.current?.api.applyTransaction({ add: [item] }); // Insert the row
  };

  // function test() {
  //   // Insert data into the grid
  //   const newRowData = { id: 3, name: "Alice" };
  //   gridRef?.current?.api?.applyTransaction({ add: [newRowData] });
  // }

  return (
    <div style={containerStyle}>
      <div className={theme} style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          rowHeight={25}
          headerHeight={25}
          animateRows={false}
          ref={gridRef}
          //domLayout="autoHeight"
          onSelectionChanged={() => onSelectionChanged()}
        />
      </div>
    </div>
  );
};

export default BasicGrid;

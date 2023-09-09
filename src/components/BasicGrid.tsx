import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useRef, useCallback } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";

type blotterProps = {
  columnDefs: any;
  rowData: any;
  theme: string;
};

const BasicGrid = ({ columnDefs, rowData, theme }: blotterProps) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: 800, width: "100%" }), []);
  const gridRef = useRef<AgGridReact>(null);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      cellStyle: { fontSize: "12px" },
    }),
    []
  );
  // Access the grid API

  const onSelectionChanged = () => {
    const selectedRows = gridRef?.current?.api.getSelectedRows();
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
          animateRows={true}
          ref={gridRef}
          onSelectionChanged={() => onSelectionChanged()}
        />
      </div>
    </div>
  );
};

export default BasicGrid;

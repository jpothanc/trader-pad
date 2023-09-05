import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "../index.css";
interface blotterProps {
  columnDefs: any;
  rowData: any;
  theme: string;
}

const BasicGrid = ({ columnDefs, rowData, theme }: blotterProps) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: 800, width: "100%" }), []);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <div style={containerStyle}>
      <div className={theme} style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default BasicGrid;

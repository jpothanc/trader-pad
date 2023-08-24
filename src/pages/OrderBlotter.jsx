import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useRef, useMemo, useState } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";

const OrderBlotter = ({columnDefs, rowData}) => {

  const gridRef = useRef();

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
   
  return (
   <div className="ag-theme-material" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRows={true}
        ref={gridRef}
      />
    </div>
  )
}

export default OrderBlotter
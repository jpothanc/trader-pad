import React, { useCallback, useRef, useMemo, useState } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import OrderBlotter from './pages/OrderBlotter'
import WatchList from './pages/WatchList'
import About from './pages/About'
import NavBar from './components/NavBar'
import GlobalStyle from './components/globalStyles'

const App = () => {
 const [rowData, setRowData] = useState([
    { id: 1, state: "Live", product:"6758.T", client:"F10",size:10000, price: 5000 },
    { id: 2, state: "Live", product:"1301.T", client:"HSBC",size:10000, price: 2000 },
    
  ]);
  const [columnDefs, setColData] = useState([
    { field: "id" },
    { field: "state" },
    { field: "product" },
    { field: "client" },
    { field: "size" },
    { field: "price" },
  ]);

  return (
    <>
    <Router>
      <GlobalStyle />
     <NavBar />
      <Routes>
        <Route path = "/" element = {<OrderBlotter 
        columnDefs={columnDefs} 
        rowData={rowData}/>}/>
        <Route path = "/watch" element = {<WatchList/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App
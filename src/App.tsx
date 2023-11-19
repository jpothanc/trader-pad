//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketBlotterApp from "./apps/TicketBlotterApp";
import OrderEntry from "./dialogs/orderentry/OrderEntry";
import WatchListApp from "./apps/WatchListApp";
import About from "./pages/About";
import NavBarMain from "./components/NavBarMain";
import DashBoard from "./pages/DashBoard";

const App = () => {
  console.log("app");
  return (
    <>
      <Router>
        <NavBarMain />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/tickets" element={<TicketBlotterApp />} />
          <Route path="/orderentry" element={<OrderEntry />} />
          <Route path="/watch" element={<WatchListApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

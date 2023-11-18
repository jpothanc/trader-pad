//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketBlotter from "./pages/TicketBlotter";
import OrderEntry from "./dialogs/orderentry/OrderEntry";
import WatchList from "./pages/WatchList";
import About from "./pages/About";
import NavBarMain from "./components/NavBarMain";

const App = () => {
  console.log("app");
  return (
    <>
      <Router>
        <NavBarMain />
        <Routes>
          <Route path="/" element={<TicketBlotter />} />
          <Route path="/orderentry" element={<OrderEntry />} />
          <Route path="/watch" element={<WatchList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

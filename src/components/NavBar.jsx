import React from "react";
import {Link } from "react-router-dom";
import { NavbarContainer } from "./globalStyles";

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Trader-Pad
          </a>
          
          <div className="collapse navbar-collapse" id="navbarNav" >
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React, { useRef } from "react";
import { useState } from "react";
import { getInstance, instanceNames } from "../utils/factory";
import { ModalRef, getUIEvent } from "../utils/dialogUtils";
import { EventId, IEventManager } from "../services/EventManager";
import useModalDlg from "../hooks/useModalDlg";

const TradeNavBar = () => {
  const [navStyle, setNavStyle] = useState("nav");
  const [hamStyle, setHamStyle] = useState("hamburger");

  const handleHamburger = (event: React.MouseEvent<HTMLDivElement>) => {
    const divIdentifier = event.currentTarget.getAttribute("data-identifier");
    console.log(divIdentifier);

    var style = navStyle === "nav" ? "nav--open" : "nav";
    setNavStyle(style);

    style = hamStyle === "hamburger" ? "hamburger--open" : "hamburger";
    setHamStyle(style);
  };

  const modalRef = useRef<ModalRef | null>(null);
  const eventManager = getInstance(instanceNames.EventManager) as IEventManager;
  useModalDlg({ modalRef });

  return (
    <>
      <header className="header">
        <div className="actions-nav-bar">
          <div className="actions-nav-bar__content">
            <div className="banner">
              <a href="#" className="logo">
                <img src="/vite.svg" alt="logo" className="logo__img" />
                <span className="logo__text">Trader Pad</span>
              </a>
            </div>
            <div className="functions">
              <button
                className="btn"
                onClick={() =>
                  eventManager.publish(getUIEvent(EventId.UI_ORDER_ENTRY))
                }
              >
                Order Entry
              </button>
              <button
                className="btn"
                onClick={() =>
                  eventManager.publish(getUIEvent(EventId.UI_ORDER_ENTRY))
                }
              >
                Send
              </button>
              <button className="btn">Amend</button>
              <button className="btn">Cancel</button>
              <button className="btn">Export</button>
            </div>

            <div
              className={hamStyle}
              data-identifier="hamStyle"
              onClick={(e) => handleHamburger(e)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TradeNavBar;

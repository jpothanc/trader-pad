import { useState } from "react";

const NavBar = () => {
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

  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="top-bar__content">
            <nav className={navStyle} data-identifier="navStyle">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Tickets
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/watch" className="nav__link">
                    Watch
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/about" className="nav__link">
                    About
                  </a>
                </li>
              </ul>
            </nav>
            <div className="support">
              <section className="phone">
                <i className="fa fa-phone icon" aria-hidden="true"></i>
                1-800922-04444
              </section>
              <section className="email">
                <i className="fa fa-envelope icon" aria-hidden="true"></i>
                support@trader-pad.com
              </section>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="bottom-bar__content">
            <div className="banner">
              <a href="#" className="logo">
                <img src="/vite.svg" alt="logo" className="logo__img" />
                <span className="logo__text">Trader Pad</span>
              </a>
            </div>
            <nav className={navStyle} data-identifier="navStyle">
              <ul className="nav__list_f">
                <li className="nav__item">
                  <a href="/about" className="btn">
                    Order Entry
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/about" className="btn">
                    Send
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/about" className="btn">
                    Cancel
                  </a>
                </li>
              </ul>
            </nav>
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

export default NavBar;

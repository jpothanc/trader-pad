import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "react-avatar";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";
import TradeNavBar from "./TradeNavBar";
import { useRef } from "react";
import { EventId, IEventManager } from "../services/EventManager";
import { getInstance, instanceNames } from "../utils/factory";
import useModalDlg from "../hooks/useModalDlg";
import { ModalRef, getDialogInstance, getUIEvent } from "../utils/dialogUtils";

const NavBarMain = () => {
  const modalRef = useRef<ModalRef | null>(null);
  const eventManager = getInstance(instanceNames.EventManager) as IEventManager;
  useModalDlg({ modalRef });

  return (
    <>
      <Navbar
        expand="sm"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container fluid style={{ fontSize: "12px" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="logo_main">
                <span className="logo_text">trader pad</span>
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <LinkContainer to="/watch">
                  <Nav.Link>Watch</Nav.Link>
                </LinkContainer>
              </Nav.Item>

              <NavDropdown title="Trading" id="basic-nav-dropdown">
                <NavDropdown.Item
                  className="dropdown-item"
                  onClick={() =>
                    eventManager.publish(getUIEvent(EventId.UI_ORDER_ENTRY))
                  }
                >
                  <Nav.Link>Order Entry</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/orderentry">
                    <Nav.Link>Send</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/orderentry">
                    <Nav.Link>Amend</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/orderentry">
                    <Nav.Link>Cancel</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/orderentry">
                    <Nav.Link>Export</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
            <div className="d-flex">
              <div
                style={{
                  alignSelf: "center",
                  paddingRight: "10px",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Jessish Pothancheri
              </div>
              <Avatar
                name="Jessish Pothancheri"
                size="40"
                round="50px"
                color="black"
                fgColor="#00bfa5"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TradeNavBar />
      {getDialogInstance("OrderEntry", modalRef)}
    </>
  );
};

export default NavBarMain;

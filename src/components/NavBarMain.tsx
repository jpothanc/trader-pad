import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "react-avatar";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useRef } from "react";
import { EventId, IEventManager } from "../services/EventManager";
import { getInstance, InstanceNames } from "../utils/factory";
import useModalDlgEvents from "../hooks/events/useModalDlgEvents";
import { ModalRef, getDialogInstance, getUIEvent } from "../utils/dialogUtils";

const NavBarMain = () => {
  const modalRef = useRef<ModalRef | null>(null);
  const eventManager = getInstance(InstanceNames.EventManager) as IEventManager;
  useModalDlgEvents({ modalRef });

  return (
    <>
      <div className="navbar-custom">
        <Navbar
          expand="sm"
          bg="dark"
          data-bs-theme="dark"
          sticky="top"
          className="navbar-custom"
        >
          <Container fluid style={{ fontSize: "12px" }}>
            <LinkContainer to="/">
              <Navbar.Brand>
                <div className="logo_main">
                  <span className="logo_text">Trader Pad</span>
                </div>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item>
                  <LinkContainer to="/tickets">
                    <Nav.Link>Tickets</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/watch">
                    <Nav.Link>Watch</Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <NavDropdown title="Trading" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    className="dropdown-item"
                    onClick={() =>
                      eventManager.publish(
                        getUIEvent(EventId.MSG_UI_ORDER_ENTRY)
                      )
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
                    fontSize: "10px",
                  }}
                >
                  Jessish Pothancheri
                </div>
                <Avatar
                  name="Jessish Pothancheri"
                  size="30"
                  round="50px"
                  color="black"
                  fgColor="RGB(23, 162, 184)"
                />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {getDialogInstance("OrderEntry", modalRef)}
    </>
  );
};

export default NavBarMain;

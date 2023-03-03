import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sitenavbar.css";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import SiteModal from "../modal/SiteModal";
function Sitenavbar() {
  const [show, setShow] = useState(false);

  return (
    <Navbar className="pt-3" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={"/assets/images/white-logo-sidebyside.png"}
            alt="logo"
            width="200"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-3">
            <Nav.Link id="home" href="#home">
              Why Funnelll
            </Nav.Link>
            <Nav.Link href="#link">Integrations</Nav.Link>
            <Nav.Link href="#link">Dashboards</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
          </Nav>
          <Form className="form">
            <Button className="mr-3 btn-main">Get Started Free</Button>
            <Button className="login nav-color" onClick={() => setShow(true)}>
              Login
            </Button>
            <SiteModal show={show} close={() => setShow(false)} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sitenavbar;

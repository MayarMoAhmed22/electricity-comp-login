import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/logo.jpeg";
import "./Navbar.css";
export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="text-left">
          Alexandria Electricity Distribution Co. <br />{" "}
          <div className="center-text">Commercial Affairs</div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-responsive" />

        <Navbar.Collapse
          id="navbar-responsive"
          className="justify-content-between"
        >
          <Navbar.Brand className="logo-center mx-auto d-none d-lg-block">
            <img src={logo} alt="Company Logo" className="navbar-logo" />
          </Navbar.Brand>

          <Navbar.Brand className="text-right ms-auto">
            شركة الاسكندرية لتوزيع الكهرباء <br   />{" "}
            <div className="center-text">قطاعات الشئون التجارية</div>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

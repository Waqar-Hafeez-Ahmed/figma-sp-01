import "../Style/NavBar.css";
import logo from "../../public/svg/logo image.svg";

//     // <div
//     //   id="menu"
//     //   style={{
//     //     zIndex: "1",
//     //     position: "relative",
//     //     padding: "10px 0",
//     //     color: "white",
//     //   }}
//     // >
//     //   <div
//     //     className="row"
//     //     style={{ display: "flex", justifyContent: "space-around" }}
//     //   >
//     //     <div
//     //       className="col-1"
//     //       style={{
//     //         display: "flex",
//     //         justifyContent: "space-around",
//     //         alignSelf: "center",
//     //       }}
//     //     >
//     //       <img className="site-logo" src={logo} alt="logo" />
//     //     </div>

//     //     <div
//     //       className="col-5"
//     //       style={{
//     //         display: "flex",
//     //         justifyContent: "space-around",
//     //         alignSelf: "center",
//     //         marginRight: 80,
//     //       }}
//     //     >
//     //       <NavDropdown title="Find Talent" href="/">
//     //         <NavDropdown.Item href="/">Find Talent</NavDropdown.Item>
//     //       </NavDropdown>
//     //       {/* <img className="dot" src={dot} alt="dot" /> */}
//     //       <NavDropdown title="Find Job/Project" href="/">
//     //         <NavDropdown.Item href="/">Find Job/Project</NavDropdown.Item>
//     //       </NavDropdown>
//     //       {/* <img className="dot" src={dot} alt="dot" /> */}
// <NavDropdown title="We are jobless" id="collasible-nav-dropdown">
//   <NavDropdown.Item href="/action/3.1">
//     We are jobless
//   </NavDropdown.Item>
//   <NavDropdown.Item href="/action/3.2">
//     Another action
//   </NavDropdown.Item>
//   <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
//   <NavDropdown.Divider />
//   <NavDropdown.Item href="#action/3.4">
//     Separated link
//   </NavDropdown.Item>
// </NavDropdown>
//     //       {/* <img className="dot" src={dot} alt="dot" /> */}
//     //       <Nav.Link href="#pricing">Refer Friends</Nav.Link>
//     //     </div>
//     //     <div
//     //       className="col-3"
//     //       style={{
//     //         display: "flex",
//     //         justifyContent: "space-around",
//     //         alignItems: "center",
//     //       }}
//     //     >
// <Nav.Link href="#deets">Apply as a Freelancer</Nav.Link>
// <Button
//   className="nav-btn"
//   style={{ fontSize: 14 }}
//   variant="outline-success"
// >
//   Hire Talent
// </Button>
// <Nav.Link eventKey={2} href="#memes">
//   Log in
// </Nav.Link>
//     //     </div>
//     //   </div>
//     // </div>

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="none"
      variant="dark"
      style={{ position: "relative", zIndex: 1 }}
      // className="nav"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="col-2">
            <img className="site-logo" src={logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Find Talent" href="/">
              <NavDropdown.Item href="/">Find Talent</NavDropdown.Item>{" "}
            </NavDropdown>
            <NavDropdown title="Find Job/Project" href="/">
              <NavDropdown.Item href="/">Find Job/Project</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="We are jobless" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/action/3.1">
                We are jobless
              </NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Refer Friends</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Apply as a Freelancer</Nav.Link>
            <Button
              className="nav-btn"
              style={{ fontSize: 14 }}
              variant="outline-success"
            >
              Hire Talent
            </Button>
            <Nav.Link eventKey={2} href="#memes">
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

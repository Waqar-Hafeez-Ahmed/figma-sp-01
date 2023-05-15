import "./NavBar.css";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../public/svg/logo image.svg";
import dot from "../public/assets/dot.png";

const NavBar = () => {
  return (
    // <Navbar
    //   className="nav"
    //   collapseOnSelect
    //   expand="lg"
    //   bg="none"
    //   variant="dark"
    // >
    //   {/* <Container fluid> */}
    //   <Row>
    //     <Col xxl={{ span: 2, offset: 1 }}>
    //       <Navbar.Brand href="#home">
    //         <img className="site-logo" src={logo} alt="logo" />
    //       </Navbar.Brand>
    //     </Col>

    //     <Col xxl={{ span: 7 }}>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
    //       <Nav className="me-auto">
    //         <NavDropdown title="Find Talent" href="/">
    //           <NavDropdown.Item href="/">Find Talent</NavDropdown.Item>
    //         </NavDropdown>
    //         <img className="dot" src={dot} alt="dot" />
    //         <NavDropdown title="Find Job/Project" href="/">
    //           <NavDropdown.Item href="/">Find Job/Project</NavDropdown.Item>
    //         </NavDropdown>
    //         <img className="dot" src={dot} alt="dot" />
    //         <NavDropdown title="We are jobless" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">
    //             We are jobless
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <img className="dot" src={dot} alt="dot" />

    //         <Nav.Link href="#pricing">Refer Friends</Nav.Link>
    //       </Nav>
    //     </Col>
    //     <Col xxl={3}>
    //       <Nav>
    //         <Nav.Link href="#deets">Apply as a Freelancer</Nav.Link>
    //         <Button
    //           className="nav-btn"
    //           style={{ fontSize: 14 }}
    //           variant="outline-success"
    //         >
    //           Hire Talent
    //         </Button>
    //         <Nav.Link eventKey={2} href="#memes">
    //           Log in
    //         </Nav.Link>
    //       </Nav>
    //       {/* </Navbar.Collapse> */}
    //     </Col>
    //   </Row>
    //   {/* </Container> */}
    // </Navbar>

    <div
      className=""
      style={{
        zIndex: "1",
        position: "relative",
        padding: "10px 0",
        color: "white",
      }}
    >
      <div
        className="row"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div
          className="col-1"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignSelf: "center",
          }}
        >
          <img className="site-logo" src={logo} alt="logo" />
        </div>
        <div
          className="col-5"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignSelf: "center",
            marginRight: 80,
          }}
        >
          <NavDropdown title="Find Talent" href="/">
            <NavDropdown.Item href="/">Find Talent</NavDropdown.Item>
          </NavDropdown>
          {/* <img className="dot" src={dot} alt="dot" /> */}
          <NavDropdown title="Find Job/Project" href="/">
            <NavDropdown.Item href="/">Find Job/Project</NavDropdown.Item>
          </NavDropdown>
          {/* <img className="dot" src={dot} alt="dot" /> */}
          <NavDropdown title="We are jobless" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              We are jobless
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          {/* <img className="dot" src={dot} alt="dot" /> */}
          <Nav.Link href="#pricing">Refer Friends</Nav.Link>
        </div>
        <div
          className="col-4"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;

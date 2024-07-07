import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

const Navbare = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const logOut = () => localStorage.removeItem("currentUser");
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" style={{ marginRight: "auto" }}>
          JBOY TECH ROOMS
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Rooms" className="navend">
            Rooms
          </Nav.Link>
          {user ? (
            <>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <i class="bi bi-person-circle"></i>
                  {user.user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">profile</Dropdown.Item>
                  <Dropdown.Item href="/" onClick={logOut}>
                    logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <Nav.Link href="/register" className="">
                Register
              </Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbare;

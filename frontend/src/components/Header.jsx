
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const logout = () => { localStorage.removeItem("token"); navigate("/login"); };
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>COMP3123 Assignment 2</Navbar.Brand>
        <Nav className="ms-auto">{token && <Nav.Link onClick={logout}>Logout</Nav.Link>}</Nav>
      </Container>
    </Navbar>
  );
}

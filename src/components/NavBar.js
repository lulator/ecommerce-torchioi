import {NavDropdown, Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'

function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
        <img src={logo} className="App-logo" alt="logo" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
            <NavDropdown title="Menú" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Entradas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pizzas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Empanadas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }


export default NavBar
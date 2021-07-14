import {NavDropdown, Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'

const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
        <img src={logo} className="App-logo" alt="logo" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
            <NavDropdown title="Eshop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Abrigos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Denim</Nav.Link>
            <Nav.Link href="#home">Girls</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }


export default NavBar
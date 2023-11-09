import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCart } from 'feather-icons-react/build/IconComponents';


function Header() {
    
  return (
    <div>
       <h1>
       <Navbar  bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Eat Club</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <div className='text-white'><ShoppingCart></ShoppingCart></div>
        </Container>
      </Navbar>
       </h1>
    </div>
  )
}

export default Header
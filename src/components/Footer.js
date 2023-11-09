import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <h1>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><span className='text-center'>All rights are recived to EATCLUB@2023</span></Navbar.Brand>
          
        </Container>
      </Navbar>
        </h1>
    </div>
  )
}

export default Footer
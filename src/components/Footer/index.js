import React from 'react'
import { Container, Nav, Col } from 'react-bootstrap';
import { RiMoonFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsMedium } from 'react-icons/bs';

function Footer() {
  return (
    <Container className='bg-white' fluid>
      <Col className='d-flex'>
        <h5>
          Built by 
          <span>Selene <RiMoonFill /> Grosset</span>
        </h5>
      </Col>
      <Col>
      <Nav>
        <Nav.Link href="https://github.com/SGrossett" target='_blank' className=''>
          <BsGithub size={22} />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/selene-grossett/" target='_blank' className=''>
          <FaLinkedinIn size={22} />
        </Nav.Link>
        <Nav.Link href="https://medium.com/@selene_816" target='_blank' className=''>
          <BsMedium size={22} />
        </Nav.Link>
      </Nav>
      </Col>
    </Container>
  )
}

export default Footer
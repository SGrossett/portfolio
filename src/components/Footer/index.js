import './footer.css';
import React from 'react'
import { Container, Nav, Col, Row } from 'react-bootstrap';
import { RiMoonFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsMedium } from 'react-icons/bs';

function Footer() {
  return (
    <Container className='d-flex footer-border mt-5' fluid>
      <Col className='d-flex mt-2'>
        <p className='mb-0 nav-padding text-white'>
          <span className='d-block pb-1 text-neonPink'>Built by: &nbsp;</span>
          <span className=''>Selene <RiMoonFill className='crescentMoon'/> Grossett</span>
        </p>
      </Col>
      <Col className='mt-2 mb-1'>
        <Nav className='justify-content-end'>
          <Nav.Link href="https://github.com/SGrossett" target='_blank' className='text-neonPink p-2 pb-1'>
            <BsGithub size={22} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/selene-grossett/" target='_blank' className='text-neonPink p-2 pb-1'>
            <FaLinkedinIn size={22} />
          </Nav.Link>
          <Nav.Link href="https://medium.com/@selene_816" target='_blank' className='text-neonPink p-2 pb-1'>
            <BsMedium size={22} />
          </Nav.Link>
        </Nav>
        <p className='d-flex justify-content-end text-white'>2022</p>
      </Col>
    </Container>
  )
}

export default Footer
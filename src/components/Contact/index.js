import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="bg-white">
      <Row className='bg-success mx-5 pt-5 pb-5'>
        <Col className='bg-primary mx-'>1</Col>
        <Col xs={1}></Col>
        <Col className='bg-secondary'>2</Col>
      </Row>
    </Container>
  )
}

export default Contact;
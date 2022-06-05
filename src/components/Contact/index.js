import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="bg-white">
      <Row className='bg-success mx-5 pt-5 pb-5'>
        <Col className='bg-primary mx-'>
          <h1>Contact</h1>
          <p> Not a fan of forms? Still get in touch and shoot me an email &nbsp;
            <em>
              <a 
                href='mailto:selene.grossett@gmail.com'
                className='text-black'
              >here</a>
            </em>
            .
          </p>
        </Col>
        <Col xs={1}></Col>
        <Col className='bg-secondary'>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
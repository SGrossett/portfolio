import './contact.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="contact-bg">
      <Row className='mx-4 pt-5 pb-5'>
        <Col className='bg-primary px-3' lg={5} >
          <h1 className='pt-3'>Contact</h1>
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
        <Col ></Col>
        <Col className='bg-secondary' lg={6}>
          <Form className='pb-3'>
            <Form.Group className="mb-3 pt-3" controlId="formName">
              <Form.Label className='text-uppercase'>Full name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className='text-uppercase'>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="fromMessage">
              <Form.Label className='text-uppercase'>Message</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button variant="primary mb-2" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
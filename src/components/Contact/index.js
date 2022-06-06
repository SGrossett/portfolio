import './contact.css';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import laptopGirl from './images/laptopGirl-arrow.png';

function Contact() {
  return (
    <Container className="contact-container">
      <Row className='mx-4 '>
        <Col className='b-primary px-3' lg={5} >
          <h1 className='pb-1 contact-h1 text-info'>Contact</h1>
          <p> Not a fan of forms? Still get in touch and shoot me an email &nbsp;
            <em>
              <a 
                href='mailto:selene.grossett@gmail.com'
                className='text-black font-bold'
              >here</a>
            </em>
            .
          </p>
          <Col className='d-flex justify-content-center mt-5'>
            <Image src={laptopGirl}/>
          </Col>
        </Col>
        <Col ></Col>
        <Col className='b-secondary p-4 contact-bg rounded-container' lg={6}>
          <Form className='pb-3 px-3'>
            <Form.Group className="mb-3 pt-3" controlId="formName">
              <Form.Label className='text-uppercase text-info'>Full name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className='text-uppercase text-info'>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="fromMessage">
              <Form.Label className='text-uppercase text-info'>Message</Form.Label>
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
            <Button variant="primary " type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
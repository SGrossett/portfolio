import './contact.css';
import { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

import Media from 'react-media';
import arrowGirl from './images/laptopGirl-arrow.png';


function Contact() {
  return (
    <Media queries={{
      small: "(max-width: 575px)",
      medium: "(min-width: 600px) and (max-width: 991px)",
      large: "(min-width: 992px)"
    }}>
      <Container className="contact-container">
        <Row className='mx-4 '>
          <Col className='b-primary px-3' lg={5} >
            <h1 className='pb-1 contact-h1 text-info'>Contact</h1>
            <p className='text-info2'>Get in touch or email me directly &nbsp;
              <em>
                <a 
                  href='mailto:selene.grossett@gmail.com'
                  className='text-white font-bold'
                >here</a>
              </em>
              .
            </p>
            
            <Col className='d-flex justify-content-center mt-5'>
              <Image src={arrowGirl}/>
            </Col>
          </Col>
          <Col ></Col>
          <Col className='b-secondary p-4 contact-bg rounded-container' lg={6}>
            <Form className='pb-3 px-3'>
              <Form.Group className="mb-3 pt-3" controlId="formName">
                <Form.Label className='text-uppercase text-bg'>Full name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='text-uppercase text-bg'>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="fromMessage">
                <Form.Label className='text-uppercase text-bg'>Message</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <Button className='contact-button'  type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Media>
      
  )
}

export default Contact;
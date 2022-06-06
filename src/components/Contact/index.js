import './contact.css';
import { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

import emailjs from 'emailjs-com';
import Media from 'react-media';
import arrowGirl from './images/laptopGirl-arrow.png';
import laptopGirl from './images/sharp-laptopGirl.png';

function Contact() {
    const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_template', event.target, 'nmR3oYZoLBroxDeLt')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert(`Thank you! Your message has been sent.`);
        event.target.reset();
    }, function(err) {
        console.log('FAILED...', err);
    });
  }

  return (
    <Container className="contact-container">
      <Row className='mx-4'>
        <Col className='px-3' lg={5} >
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
          <Media queries={{
            small: "(max-width: 575px)",
            medium: "(min-width: 576px) and (max-width: 991px)",
            large: "(min-width: 992px)"
          }}>
            {matches => (
              <Fragment>
                {matches.medium && 
                <Col className='d-flex justify-content-center mt-4'>
                  <Image src={laptopGirl}/>
                </Col>
                }
                {matches.large && 
                  <Col className='d-flex justify-content-center mt-5'>
                    <Image src={arrowGirl}/>
                  </Col>
                }
              </Fragment>
            )}
          </Media>
        </Col>
        <Col ></Col>
        <Col className='b-secondary p-4 contact-bg rounded-container form-mobile' lg={6}>
          <Form className='pb-3 px-3' onSubmit={sendEmail}>
            <Form.Group className="mb-3 pt-3" controlId="formName">
              <Form.Label className='text-uppercase text-bg'>Full name</Form.Label>
              <Form.Control type="text" name='name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromEmail">
              <Form.Label className='text-uppercase text-bg'>Email</Form.Label>
              <Form.Control type="email" name='email' />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label className='text-uppercase text-bg'>Message</Form.Label>
              <Form.Control as="textarea" name='message' rows={8} />
            </Form.Group>
            <Button className='contact-button'  type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>      
  )
}

export default Contact;
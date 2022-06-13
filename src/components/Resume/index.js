import './resume.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Carousel, Stack } from 'react-bootstrap';

import ResumeOverview from '../ResumeOverview';
import resumePDF from '../ResumeFile/Selene_Grossett_Resume.pdf';

function Resume() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container className="contact-container">
      <Row className='mx-4'>
        <Col className='px-3'>
          <h1 className='font-4 pb-1 contact-h1 text-info'>Resume</h1>
          <p className='text-info2 font-5'>
            Reach out on my &nbsp;
            <em>
              <Link 
                to='/contact' 
                className='text-white font-bold'
              >contact page</Link>
            </em> 
             &nbsp; page or click to &nbsp; 
            <em>
              <Link 
                to={resumePDF} 
                target='_blank'
                className='text-white font-bold'
              >download</Link>
            </em>
            &nbsp; my resume.
          </p>
        </Col>
      </Row>
      <Row className='preview-row mt-5'>
          <iframe 
            src={`${resumePDF}#view=fitH&toolbar=0`} 
            title='My Resume'
            scrolling='auto'
            className='mt-4'
          />
      </Row>
      <Row className='container'>
        <Col>
          <Button 
            variant='info p-2 mt-5 text-uppercase font-bold info-button'
            onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Minimize Resume' : 'Complete Resume Overview'}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='mt-5'>
          {showMore ? <ResumeOverview /> : '' }
        </Col>
      </Row>
    </Container> 
  )
}

export default Resume;
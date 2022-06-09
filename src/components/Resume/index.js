import './resume.css';
import { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import PDF from './Selene_Grossett_Resume.pdf';

function Resume() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container className="contact-container">
      <Row className='mx-4'>
        <Col className='px-3'>
          <h1 className='pb-1 contact-h1 text-info'>Resume</h1>
          <p className='text-info2 '>Reach out on my contact page or click to &nbsp; 
            <em>
              <a 
                href='mailto:selene.grossett@gmail.com'
                className='text-white font-bold'
              >download</a>
            </em>
            &nbsp; my resume.
          </p>
        </Col>
      </Row>
      <Row className='preview-row mt-5'>
          <iframe 
            src={`${PDF}#view=fitH&toolbar=0`} 
            title='My Resume'
            scrolling='auto'
            className='mt-4'
          />
      </Row>
      <Row className='container'>
        <Col>
          <Button 
            variant='info w-25 p-2 mt-5 text-uppercase font-bold'
            onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Minimize Resume' : 'Complete Resume Overview'}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='mt-5'>
          {showMore ? 
            <Container>
              <Card bg='white'>
                <Card.Header><h5>Skills</h5></Card.Header>
                <Card.Body>
                  <ul>
                    <li>
                      <p className='font-bold mb-1'>Programming Languages & Database</p>
                      <p>JavaScript, Python, C++, Ruby, JSX, SQL, PHP, MySQL, PostgreSQL</p>
                    </li>
                    <li>
                      <p className='font-bold mb-1'>Frameworks & Libraries</p>
                      <p>React, Node.js, Next.js, Bootstrap, jQuery, Mocha, Axios, Ajax, Express, Chai</p>
                    </li>
                    <li>
                      <p className='font-bold mb-1'>Markup & Styling</p>
                      <p>JHTML, CSS, SCSS, Tailwind CSS</p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <Card bg='white'>
                <Card.Header><h5>Work Experience</h5></Card.Header>
                <Card.Body>
                
                </Card.Body>
              </Card>
              <Card bg='white'>
                <Card.Header><h5>Education</h5></Card.Header>
                <Card.Body>
                
                </Card.Body>
              </Card>
              <Card bg='white'>
                <Card.Header><h5>Certifications</h5></Card.Header>
                <Card.Body>
                
                </Card.Body>
              </Card>
              
            </Container> : '' }
        </Col>
      </Row>
    </Container> 
  )
}

export default Resume
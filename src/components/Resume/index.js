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
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <p className='font-bold mb-1'>Programming Languages & Database</p>
                      <p>JavaScript, Python, C++, Ruby, JSX, SQL, PHP, MySQL, PostgreSQL</p>
                    </li>
                    <li className='list-group-item'>
                      <p className='font-bold mb-1'>Frameworks & Libraries</p>
                      <p>React, Node.js, Next.js, Bootstrap, jQuery, Mocha, Axios, Ajax, Express, Chai</p>
                    </li>
                    <li className='list-group-item'>
                      <p className='font-bold mb-1'>Markup & Styling</p>
                      <p>JHTML, CSS, SCSS, Tailwind CSS</p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <Card bg='white'>
                <Card.Header><h5>Work Experience</h5></Card.Header>
                <Card.Body>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-0 font-bold">Self-Employed</h5>
                        <medium className='font-bold'>Brantford</medium>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1 font-italic">Private STEM & Special Needs Tutor</p>
                        <small>September 2015 – Present</small>
                      </div>
                      <ul>
                        <li>Educate average, advanced, and learning disabled students in Math, English, and STEM course materials.</li>
                        <li>Formulate lesson plans to strengthen academic performance for optimal outcomes.</li>
                      </ul>
                    </li>
                    <li className='list-group-item'>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-0 font-bold">Frontline Consulting</h5>
                        <medium className='font-bold'>Edmonton, Alberta</medium>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1 font-italic">Software Developer</p>
                        <small>March 2022 - April 2022</small>
                      </div>
                      <ul>
                        <li></li>
                        <li></li>
                      </ul>
                    </li>
                    <li className='list-group-item'>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-0 font-bold">Halycon IQ</h5>
                        <medium className='font-bold'>Toronto, Ontario</medium>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1 font-italic">Full Stack Web Developer</p>
                        <small>February 2022 - April 2022</small>
                      </div>
                      <ul>
                        <li></li>
                        <li></li>
                      </ul>
                    </li>
                    <li className='list-group-item'>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-0 font-bold">IndiGrowth Health & Wellness</h5>
                        <medium className='font-bold'>Victoria, British Columbia</medium>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1 font-italic">Web Developer</p>
                        <small>February 2022 - March 2022</small>
                      </div>
                      <ul>
                        <li></li>
                        <li></li>
                      </ul>
                    </li>
                    <li className='list-group-item'>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-0 font-bold">Nanotech Innovation</h5>
                        <medium className='font-bold'>Toronto, Ontario</medium>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1 font-italic">Website Design</p>
                        <small>February 2022 - March 2022</small>
                      </div>
                      <ul>
                        <li></li>
                        <li></li>
                      </ul>
                    </li>
                    
                    	  

                  </ul>
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
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
                      <h5 className='font-bold mb-1'>Programming Languages & Database</h5>
                      <p>JavaScript, Python, C++, Ruby, JSX, SQL, PHP, MySQL, PostgreSQL</p>
                    </li>
                    <li className='list-group-item'>
                      <h5 className='font-bold mb-1'>Frameworks & Libraries</h5>
                      <p>React, Node.js, Next.js, Bootstrap, jQuery, Mocha, Axios, Ajax, Express, Chai</p>
                    </li>
                    <li className='list-group-item'>
                      <h5 className='font-bold mb-1'>Markup & Styling</h5>
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
                        <li>Worked on the Level Up - Website Development project through Riipen involving two other team members to build a hockey league tournament scoreboard and scheduler.</li>
                        <li>Redesigned a WordPress site to implement scalable frontend templates and design modules.</li>
                        <li>Responsible for creating the scoreboard, tournament bracket functionality, and user/tournament registration.</li>
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
                        <li>Collaborated with four other team members to spearhead a new brand and design system for MarkitIQ, an advertising website that allows users to buy, sell, or trade items.</li>
                        <li>Created accessible, responsive, and functional user interfaces to allow visitors on any device to have the same perfect user experience.</li>
                        <li>Responsible for the UX and UI designs and implementing the code for the product display pages.</li>
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
                        <li>Worked on the Online Health Services Section for Health and Wellness Website project through Riipen involving four other team members in order to launch a new site with added services.</li>
                        <li>Performed database and code optimization for WordPress using JavaScript, HTML, and CSS.</li>
                        <li>Responsible for the Health Services and Counselling Landing pages.</li>
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
                        <li>Worked closely with a small team to develop the site design, navigation and functionality for various landing pages and ad campaigns.</li>
                        <li>Created interactive prototypes and conducted user testing.</li>
                        <li>Responsible for the UI design.</li>
                      </ul>
                    </li>
                    <li className='list-group-item d-flex'>
                      <a 
                        href='https://www.linkedin.com/in/selene-grossett/details/experience/' 
                        target='_blank'
                        className='ml-auto'
                      >
                        View full work experience on LinkedIn
                      </a>
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
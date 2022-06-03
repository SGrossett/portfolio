import './home.css';
import { Row, Col, Container, Card, Stack, Button } from 'react-bootstrap';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

import luffyCard from './images/luffyCard.jpg';
import schedulerCard from './images/schedulerCard2.jpg';
import suCard from './images/suCard2.jpg';
import introCard from './images/introCard.jpg';
import healthCard from './images/healthCard.jpg';
import markitCard from './images/markitCard.jpg';
import pomifyCard from './images/pomifyCard2.png';
import counsellingCard from './images/counsellingCard2.png'


function HomePage() {
  return (
    <div>
      <Container >
        <Stack className='heading'>
          <Row>
            <p className='text-info font-1 mb-2'>Hello, my name is</p>
          </Row>
          <Row>
            <h1 className='text-info2 font-2'>Selene Grossett.</h1>
          </Row>
          <Row>
            <h1 className='text-white font-3'>Developer, Designer and Book Lover</h1>
          </Row>
          <Row>
            <p className='w- mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula mauris nunc, vel semper mauris tempor ultrices. Donec magna sem, pretium quis mauris vitae, rutrum tristique risus. Suspendisse tristique laoreet neque eget pharetra. Nunc vehicula sem a lacus hendrerit dapibus.</p>
          </Row>
          <Row>
            <Button variant="outline-info hire-button">Hire me!</Button>{' '}
          </Row>
        </Stack>
        <Stack gap={5}>
          <Row>
            <h2 className='text-white'>Featured Projects</h2>
          </Row>
          
          <Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4 justify-content-center">
            {projects.map((project) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={project.image} className='cardImage' />
                    <Card.ImgOverlay className="d-flex flex-column text-white">
                      <Card.Title className='cardTitle'>{project.title}</Card.Title>
                      <Card.Text>
                        {/* {project.text} */}
                      </Card.Text>
                      <Card.Footer className="mt-auto d-flex justify-content-between">
                        <small className="text-white">
                          {project.demo && 
                            <a href={project.demo} target="_blank" className='text-decoration-none text-white' rel="noopener noreferrer">
                              Demo
                            </a>
                          }
                        </small>
                        <small className="text-white ">
                        {project.github && 
                            <a href={project.github} target="_blank" className='text-decoration-none text-white' rel="noopener noreferrer">
                              GitHub
                            </a>
                          }
                        </small>
                      </Card.Footer>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
          </Row>
          <Row className="ml-auto">
            <h3 className='text-neonPink'>

              <a href='/projects' target="_blank" className='text-decoration-none text-info' rel="noopener noreferrer">
                See All Projects --
                <HiOutlineChevronDoubleRight />
              </a>
            </h3>
          </Row>
        </Stack>
      </Container>
    </div>
  )
}

export default HomePage;


const projects = [
  {
    image: healthCard,
    title: 'Health Coaching',
    text: '',
    demo: 'https://staging8.indigrowthhealth.com/health-coaching-3/',
    github: ''
  },
  {
    image: markitCard,
    title: 'MarkitIQ',
    text: 'Landing pages for a site that makes landing pages.',
    demo: 'https://markit-iq-demo.netlify.app/',
    github: ''
  },
  {
    image: counsellingCard,
    title: 'Counselling',
    text: 'A Spotify integrated Pomodoro app that acts as a time management tool that plays music, minimizes distractions, and tracks your progress while you study. Built with Next.js, Tailwind CSS, and Prisma.',
    demo: 'https://staging8.indigrowthhealth.com/counselling/',
    github: ''
  },
  {
    image: luffyCard,
    title: 'Tweeter',
    text: 'A single-page Twitter clone built with HTML, CSS, JS, jQuery and AJAX.',
    demo: 'https://sesi-tweeter.herokuapp.com/',
    github: 'https://github.com/SGrossett/tweeter-react'
  },
  {
    image: suCard,
    title: 'Tribute to Steven Universe',
    text: 'A Steven Universe tribute page. freeCodeCamp Responsive Web Design Project',
    demo: '',
    github: 'https://github.com/SGrossett/steven-universe-tribute'
  },
  {
    image: introCard,
    title: 'Intro Section with Dropdown Menu',
    text: 'A Frontend Mentor challenge that demonstrates ability to create responsive navigation menus.',
    demo: '',
    github: 'https://github.com/SGrossett/intro-section-w-dropdown'
  },
  {
    image: schedulerCard,
    title: 'Scheduler',
    text: 'A SPA built with React that allows users to book and cancel interviews. Data is persisted by the API server using a PostgreSQL database and the client application communicates with an API server over HTTP, using JSON format.',
    demo: '',
    github: 'https://github.com/SGrossett/scheduler'
  },
  {
    image: pomifyCard,
    title: 'Pomify',
    text: 'A Spotify integrated Pomodoro app that acts as a time management tool that plays music, minimizes distractions, and tracks your progress while you study. Built with Next.js, Tailwind CSS, and Prisma.',
    demo: '',
    github: 'https://github.com/SGrossett/practice-final'
  },

]
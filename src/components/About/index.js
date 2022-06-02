import { Row, Col, Container, Card } from 'react-bootstrap';
import './about.css';

import luffyCard from './images/luffyCard.jpg';
import schedulerCard from './images/schedulerCard.jpg';
import suCard from './images/suCard2.jpg';
import introCard from './images/introCard.jpg';
import healthCard from './images/healthCard.jpg';
import markitCard from './images/markitCard.jpg';


function AboutPage() {
  return (
    <div>
      <Container >
        <Row>
          <p>Hello, my name is</p>
        </Row>
        <Row>
          <h2>Selene Grossett</h2>
        </Row>
        <Row>
          <h2>Programmer, Designer and Book Lover</h2>
          {true}
        </Row>
        <Row>
          <h2>Featured Projects</h2>
        </Row>
        <Row xs={1} md={2} lg={4} className="g-4 ">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <Card
                className=" "
                
              >
                <Card.Img variant="top" src={luffyCard} />
                <Card.ImgOverlay className="d-flex flex-column text-white">
                  <Card.Title >Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Footer className="mt-auto">
                    <small className="text-muted">Demo</small>
                    <small className="text-muted">GitHub</small>

                  </Card.Footer>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default AboutPage;


const projects = [
  {
    image: luffyCard,
    title: 'Tweeter',
    text: 'A single-page Twitter clone built with HTML, CSS, JS, jQuery and AJAX.',
    demo: 'https://sesi-tweeter.herokuapp.com/',
    github: 'https://github.com/SGrossett/tweeter-react'
  },
  {
    image: markitCard,
    title: 'MarkitIQ',
    text: 'Landing pages for a site that makes landing pages.',
    demo: 'https://markit-iq-demo.netlify.app/',
    github: ''
  },
  {
    image: schedulerCard,
    title: 'Scheduler',
    text: 'A SPA built with React that allows users to book and cancel interviews. Data is persisted by the API server using a PostgreSQL database and the client application communicates with an API server over HTTP, using JSON format.',
    demo: '',
    github: 'https://github.com/SGrossett/scheduler'
  },
  {
    image: healthCard,
    title: 'IndiGrowth Health Coaching',
    text: '',
    demo: 'https://staging8.indigrowthhealth.com/health-coaching-3/',
    github: ''
  },
  {
    image: introCard,
    title: 'Intro Section with Dropdown Menu',
    text: 'A Frontend Mentor challenge that demonstrates ability to create responsive navigation menus.',
    demo: '',
    github: 'https://github.com/SGrossett/intro-section-w-dropdown'
  },
  {
    image: suCard,
    title: 'Tribute to Steven Universe',
    text: 'A Steven Universe tribute page. freeCodeCamp Responsive Web Design Project',
    demo: '',
    github: 'https://github.com/SGrossett/steven-universe-tribute'
  },
  {
    image: luffyCard,
    title: 'Pomify',
    text: 'A Spotify integrated Pomodoro app that acts as a time management tool that plays music, minimizes distractions, and tracks your progress while you study. Built with Next.js, Tailwind CSS, and Prisma.',
    demo: '',
    github: 'https://github.com/SGrossett/practice-final'
  },
  {
    image: tinyCard,
    title: 'TinyApp',
    text: 'A full stack web app built with Node and Express that allows users to shorten long URLS.',
    demo: '',
    github: 'https://github.com/SGrossett/practice-final'
  }
]
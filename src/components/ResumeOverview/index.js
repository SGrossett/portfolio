import { Container, Row, Col, Button, Card, Carousel, Stack } from 'react-bootstrap';

import PFE from './images/PFE-cert.jpg';
import PDS from './images/PDS-cert.jpg';
import SDET from './images/SDET-cert.jpg';
import OODS from './images/OODS-cert.jpg';
import L2SK from './images/L2SK-cert.jpg';
import UPAW from './images/UPAW-cert.jpg';
import CVDP from './images/CVDP-cert.jpg';
import CCP from './images/CCP-cert.jpg';
import UPOS from './images/UPOS-cert.jpg';
import PFDU from './images/PFDU-cert.jpg';
import I2H from './images/I2H-cert.jpg';
import UDWP from './images/UDWP-cert.jpg';
import I2C from './images/I2C-cert.jpg';
import JADS from './images/JADS-cert.jpg';
import PS from './images/python-specialization.jpg';
import FSK from './images/FSK-cert.jpg';
import KAH from './images/KAH-cert.jpg';
import LHL from './images/LHLFramed-cert.jpg';

function ResumeOverview() {
  return (
    <Container className='showmore-container'>
      <Stack gap={4}>
        <Card bg='white'>
          <Card.Header className='bg-greyBlue'><h5 className='uppercase mb-0 p-1 font-bold'>Skills</h5></Card.Header>
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
          <Card.Header className='bg-greyBlue'><h5 className='uppercase mb-0 p-1 font-bold'>Work Experience</h5></Card.Header>
          <Card.Body>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <div class='d-flex w-100 justify-content-between'>
                  <h5 class='mb-0 font-bold'>Self-Employed</h5>
                  <medium className='font-bold'>Brantford</medium>
                </div>
                <div class='d-flex w-100 justify-content-between'>
                  <p class='mb-1 font-italic'>Private STEM & Special Needs Tutor</p>
                  <small>September 2015 ??? Present</small>
                </div>
                <ul>
                  <li>Educate average, advanced, and learning disabled students in Math, English, and STEM course materials.</li>
                  <li>Formulate lesson plans to strengthen academic performance for optimal outcomes.</li>
                </ul>
              </li>
              <li className='list-group-item'>
                <div class='d-flex w-100 justify-content-between'>
                  <h5 class='mb-0 font-bold'>Frontline Consulting</h5>
                  <medium className='font-bold'>Edmonton, Alberta</medium>
                </div>
                <div class='d-flex w-100 justify-content-between'>
                  <p class='mb-1 font-italic'>Software Developer</p>
                  <small>March 2022 - April 2022</small>
                </div>
                <ul>
                  <li>Worked on the Level Up - Website Development project through Riipen involving two other team members to build a hockey league tournament scoreboard and scheduler.</li>
                  <li>Redesigned a WordPress site to implement scalable frontend templates and design modules.</li>
                  <li>Responsible for creating the scoreboard, tournament bracket functionality, and user/tournament registration.</li>
                </ul>
              </li>
              <li className='list-group-item'>
                <div class='d-flex w-100 justify-content-between'>
                  <h5 class='mb-0 font-bold'>Halycon IQ</h5>
                  <medium className='font-bold'>Toronto, Ontario</medium>
                </div>
                <div class='d-flex w-100 justify-content-between'>
                  <p class='mb-1 font-italic'>Full Stack Web Developer</p>
                  <small>February 2022 - April 2022</small>
                </div>
                <ul>
                  <li>Collaborated with four other team members to spearhead a new brand and design system for MarkitIQ, an advertising website that allows users to buy, sell, or trade items.</li>
                  <li>Created accessible, responsive, and functional user interfaces to allow visitors on any device to have the same perfect user experience.</li>
                  <li>Responsible for the UX and UI designs and implementing the code for the product display pages.</li>
                </ul>
              </li>
              <li className='list-group-item'>
                <div class='d-flex w-100 justify-content-between'>
                  <h5 class='mb-0 font-bold'>IndiGrowth Health & Wellness</h5>
                  <medium className='font-bold'>Victoria, British Columbia</medium>
                </div>
                <div class='d-flex w-100 justify-content-between'>
                  <p class='mb-1 font-italic'>Web Developer</p>
                  <small>February 2022 - March 2022</small>
                </div>
                <ul>
                  <li>Worked on the Online Health Services Section for Health and Wellness Website project through Riipen involving four other team members in order to launch a new site with added services.</li>
                  <li>Performed database and code optimization for WordPress using JavaScript, HTML, and CSS.</li>
                  <li>Responsible for the Health Services and Counselling Landing pages.</li>
                </ul>
              </li>
              <li className='list-group-item'>
                <div class='d-flex w-100 justify-content-between'>
                  <h5 class='mb-0 font-bold'>Nanotech Innovation</h5>
                  <medium className='font-bold'>Toronto, Ontario</medium>
                </div>
                <div class='d-flex w-100 justify-content-between'>
                  <p class='mb-1 font-italic'>Website Design</p>
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
          <Card.Header className='bg-greyBlue'><h5 className='uppercase mb-0 p-1 font-bold'>Education</h5></Card.Header>
          <Card.Body>
            <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
                <div class='d-flex w-100 justify-content-between'>
                  <h5 class='mb-0 font-bold'>Lighthouse Labs</h5>
                  <medium className='font-bold'>Toronto, Ontario</medium>
                </div>
                <div class='d-flex w-100 justify-content-between'>
                  <p class='mb-1 font-italic'>Full Stack Web Development</p>
                  <small class='font-italic'>Graduation Date: February 2022</small>
                </div>
              </li>
              <li className='list-group-item'>
                <div class='d-flex w-100 justify-content-between'>
                  <h5 class='mb-0 font-bold'>Oakwood University</h5>
                  <medium className='font-bold'>Huntsville, Alabama</medium>
                </div>
                <div class='d-flex w-100 justify-content-between'>
                  <p class='mb-1 font-italic'>Bachelor of Science in Applied Mathematics (summa cum laude)</p>
                  <small class='font-italic'>Graduation Date: May 2019</small>
                </div>
                <ul className='mt-1'>
                  <li><strong>GPA:</strong> 3.93</li>
                  <li><strong>Key Courses:</strong> Discrete Structures, Computer Logic Design, Advanced Computer Networking, Programming Languages </li>
                  <li><strong>Organizations/Awards:</strong> Alpha Chi National Honor Society, Dean???s List, Chandler Foundation, United Givings</li>
                </ul>
              </li>
            </ul>
          </Card.Body>
        </Card>
        <Card bg='white'>
          <Card.Header className='bg-greyBlue'><h5 className='uppercase mb-0 p-1 font-bold'>Certifications</h5></Card.Header>
          <Card.Body>
            <Carousel variant='dark'>
              <Carousel.Item>
                <Row>
                  {slide1_certs.map((cert) => (
                    <Col class='mb-3'>
                      <Card>
                        <Card.Img variant='top' src={cert.imgage} />
                        <Card.Body>
                            <Card.Title>{cert.title}</Card.Title>
                            <Card.Text>{cert.description}</Card.Text>
                            <br/>
                        </Card.Body>
                      </Card>
                  </Col>
                  ))}
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row>
                {slide2_certs.map((cert) => (
                    <Col class='mb-3'>
                      <Card>
                        <Card.Img variant='top' src={cert.imgage} />
                        <Card.Body>
                            <Card.Title>{cert.title}</Card.Title>
                            <Card.Text>{cert.description}</Card.Text>
                            <br/>
                        </Card.Body>
                      </Card>
                  </Col>
                  ))}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                {slide3_certs.map((cert) => (
                    <Col class='mb-3'>
                      <Card>
                        <Card.Img variant='top' src={cert.imgage} />
                        <Card.Body>
                            <Card.Title>{cert.title}</Card.Title>
                            <Card.Text>{cert.description}</Card.Text>
                            <br/>
                        </Card.Body>
                      </Card>
                  </Col>
                  ))}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                {slide4_certs.map((cert) => (
                    <Col class='mb-3'>
                      <Card>
                        <Card.Img variant='top' src={cert.imgage} />
                        <Card.Body>
                            <Card.Title>{cert.title}</Card.Title>
                            <Card.Text>{cert.description}</Card.Text>
                            <br/>
                        </Card.Body>
                      </Card>
                  </Col>
                  ))}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                {slide5_certs.map((cert) => (
                    <Col class='mb-3'>
                      <Card>
                        <Card.Img variant='top' src={cert.imgage} />
                        <Card.Body>
                            <Card.Title>{cert.title}</Card.Title>
                            <Card.Text>{cert.description}</Card.Text>
                            <br/>
                        </Card.Body>
                      </Card>
                  </Col>
                  ))}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                {slide6_certs.map((cert) => (
                    <Col class='mb-3'>
                      <Card>
                        <Card.Img variant='top' src={cert.imgage} />
                        <Card.Body>
                            <Card.Title>{cert.title}</Card.Title>
                            <Card.Text>{cert.description}</Card.Text>
                            <br/><br/>
                        </Card.Body>
                      </Card>
                  </Col>
                  ))}
                </Row>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  )
}

export default ResumeOverview;


const slide1_certs = [
  {
    imgage: PS,
    title: 'Python for Everybody Specialization',
    description: 'University of Michigan'
  },
  {
    imgage: JADS,
    title: 'JavaScript Algorithms and Data Structures',
    description: 'freeCodeCamp'
  },
  {
    imgage: UPOS,
    title: 'Using Python to Interact witht the Operating System \n',
    description: 'Google'
  }
]

const slide2_certs = [
  {
    imgage: PDS,
    title: 'Python Data Structures',
    description: 'University of Michigan'
  },
  {
    imgage: LHL,
    title: 'Full Stack Web Development',
    description: 'Lighthouse Labs'
  },
  {
    imgage: PFDU,
    title: 'Programming Foundations with JavaScript, HTML, and CSS',
    description: 'Duke University'
  }
]

const slide3_certs = [
  {
    imgage: SDET,
    title: 'Smart Devices & Mobile Emerging Technologies',
    description: 'Yonsei University'
  },
  {
    imgage: CCP,
    title: 'Crash Course on Python',
    description: 'Google'
  },
  {
    imgage: UDWP,
    title: 'Using Databases with Python',
    description: 'University of Michigan'
  }
]

const slide4_certs = [
  {
    imgage: KAH,
    title: 'The Korean Alphabet: An Introduction to Hangeul',
    description: 'Sungkyunkwan University'
  },
  {
    imgage: PFE,
    title: 'Programming for Everybody (Getting Started with Python)',
    description: 'University of Michigan'
  },
  {
    imgage: OODS,
    title: 'Object-Oriented Data Structures in C++',
    description: 'University of Illinois at Urbana-Champaign'
  }
];

const slide5_certs = [
  {
    imgage: UPAW,
    title: 'Using Python to Access the Web',
    description: 'University of Michigan'
  },
  {
    imgage: CVDP,
    title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
    description: 'University of Michigan'
  },
  {
    imgage: L2SK,
    title: 'Learn to Speak Korean 1',
    description: 'Yonsei University'
  }
];

const slide6_certs = [
  {
    imgage: I2H,
    title: 'Introduction to HTML5',
    description: 'University of Michigan'
  },
  {
    imgage: I2C,
    title: 'Introduction to CSS3',
    description: 'University of Michigan'
  },
  {
    imgage: FSK,
    title: 'First Step Korean',
    description: 'Yonsei University'
  }
];
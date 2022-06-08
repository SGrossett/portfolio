import './resume.css';
import { Container, Row, Col } from 'react-bootstrap';
import resumePDF from './Selene_Grossett_Resume.pdf';

function Resume() {
  const resumeURL = 'https://docs.google.com/document/d/e/2PACX-1vSysddCjlw7sc3Mj52GspP0OcKkKh2cSFu8fXM6Pcex2WGpg0EuFx1tcrk9gMiR1V0peZi0ES4I81FS/pub?embedded=true';

  return (
    <Container className="contact-container">
      <Row className='mx-4'>
        <Col className='px-3'>
          <h1 className='pb-1 contact-h1 text-info'>Resume</h1>
          <p className='text-info2'>Reach out on my contact page or click to &nbsp; 
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
      <Row>
        {/* <iframe
          src={resumeURL}
          frameBorder="0"
          scrolling="auto"
          title="My Resume"
          className=''
          > */}
        <iframe 
          src={resumePDF} 
          title='My Resume'  
        />
        
      </Row>
    </Container> 
  )
}

export default Resume
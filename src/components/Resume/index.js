import { Container, Row, Col } from 'react-bootstrap';

function Resume() {
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

    </Container> 
  )
}

export default Resume
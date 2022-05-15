import { Row, Col, Container } from 'react-bootstrap';
function AboutPage() {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  )
}

export default AboutPage
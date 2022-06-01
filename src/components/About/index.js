import { Row, Col, Container, Card } from 'react-bootstrap';
import './about.css';
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
        <Row>
          <h2>Featured Projects</h2>
        </Row>
        <Row xs={1} md={2} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card
                className="luffyCard"
                
              >
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/2987571/screenshots/7084912/luffy-01_4x.png" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Footer>
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
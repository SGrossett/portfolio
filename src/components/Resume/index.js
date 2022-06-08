import './resume.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import PDF from './Selene_Grossett_Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
      <Row className='preview-row mt-5'>
        {/* <iframe
          src={resumeURL}
          frameBorder="0"
          scrolling="auto"
          title="My Resume"
          className=''
          > */}
          <iframe 
            src={`${PDF}#view=fitH&toolbar=0`} 
            title='My Resume'
            scrolling='auto'
            className='mt-4'
          />

        {/* <Document file={PDF} onContextMenu={(e) => e.preventDefault()}>
          <Page pageNumber={1} />
        </Document>       */}
      </Row>
    </Container> 
  )
}

export default Resume
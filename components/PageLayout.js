import { Navbar, Nav, Container } from 'react-bootstrap'

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="page-header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand
              href="/"
              className="title"
              style={{ color: 'rgb(189, 193, 197)' }}
            >
              UCI Course Viewer
            </Navbar.Brand>
            <Nav justify="right">
              <Nav.Link
                onClick={() =>
                  window.open(
                    'https://github.com/samyadave/UCIcourseviewer',
                    '_blank'
                  )
                }
                style={{ color: 'rgb(189, 193, 197)' }}
              >
                {' '}
                Github
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="page-body">{children}</div>
      <div className="page-footer">Made by The Best Team </div>
    </>
  )
}

export default PageLayout

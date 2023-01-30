import { Navbar, Nav, Container } from 'react-bootstrap'

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="page-header">
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/" style={{ color: 'white' }}>
              Course Viewer
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{ color: 'white' }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: 'white' }}>
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="page-body">{children}</div>
      <div className="page-footer">Course-Viewer</div>
    </>
  )
}

export default PageLayout

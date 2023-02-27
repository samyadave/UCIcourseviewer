import { Navbar, Nav, Container, Image } from 'react-bootstrap'

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="page-header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image src={'/peterLogo.png'} width="96px" height="50px" />
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
      <div className="page-footer">Made with ❤️ by INF 151 BestTeam</div>
    </>
  )
}

export default PageLayout

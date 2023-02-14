// HOME PAGE
import { useRouter } from 'next/router'
import { Button, Container, Form, Row } from 'react-bootstrap'

import PageLayout from '../components/PageLayout'

const Home = () => {
  const router = useRouter()

  return (
    <PageLayout>
      <Container>
        <Row>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ marginTop: 250 }}
          >
            <Form.Control type="email" placeholder="Search" />
          </Form.Group>
        </Row>
        <Row>
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push('departments')}
          >
            Browse
          </Button>{' '}
        </Row>
      </Container>
    </PageLayout>
  )
}

export default Home

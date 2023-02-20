// HOME PAGE
import { useRouter } from 'next/router'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import PageLayout from '../components/PageLayout'

const Home = () => {
  const router = useRouter()

  return (
    <PageLayout>
      <Container style={{ height: '100vh' }}>
        <Row>
          <Text variant="light" size="medium">
            {' '}
            Hi{' '}
          </Text>
        </Row>

        <Row>
          <Form.Group>
            className="page-body" style={{ marginTop: 150 }}
            <Form.Control type="email" placeholder="Search by Department" />
          </Form.Group>
        </Row>

        <Row>
          <Button variant="light" size="medium">
            {' '}
            OR{' '}
          </Button>
        </Row>

        <Row>
          <Button
            variant="primary"
            size="medium"
            onClick={() => router.push('departments')}
          >
            {' '}
            Continue{' '}
          </Button>
        </Row>
      </Container>
    </PageLayout>
  )
}

export default Home

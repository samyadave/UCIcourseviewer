// HOME PAGE

import { DEPTS } from '@/backend/queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'

import PageLayout from '../components/PageLayout'

const Home = () => {
  const { data, loading } = useQuery(DEPTS)

  const router = useRouter()

  const deptsMap = new Map()
  data?.result.map((course) =>
    deptsMap.set(course.department_name, course.department)
  )

  const deptsArr = Array.from(deptsMap.keys())

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
        </Row>{' '}
        <Row>
          <Button variant="primary" className="browse-button">
            Browse
          </Button>{' '}
        </Row>
      </Container>
    </PageLayout>
  )
}

export default Home

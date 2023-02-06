import { DEPTS } from '@/backend/queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  Button,
  Card,
  Col,
  Container,
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
    deptsMap.set(
      course.department_name,
      course.department
    )
  )

  const deptsArr = Array.from(deptsMap.keys())

  return (
    <PageLayout>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row xs={1} md={3} className="g-2">
            {deptsArr.map((dept) => (
              <Col key={deptsMap.get(dept)}>
                <Card onClick={() => router.push(`../depts/${deptsMap.get(dept), encodeURIComponent(deptsMap.get(dept))}`)}>
                  <Card.Title>{dept}</Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </PageLayout>
  )
}

export default Home

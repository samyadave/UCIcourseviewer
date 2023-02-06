import { GET_COURSE, SCHEDULE } from '@/backend/queries'
import { useQuery } from '@apollo/client'
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

const DeptPage = () => {
  const router = useRouter()
  const { title } = router.query

  const { data, loading } = useQuery(SCHEDULE)

  return (
    <PageLayout>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row xs={1} md={3} className="g-2">
            {data?.result.map((c) => (
              <Col key={c.section.code}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{c.course.title}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{c.section.type}</ListGroup.Item>
                    <ListGroup.Item>{c.section.code}</ListGroup.Item>
                    <ListGroup.Item>
                      {c.instructors.map((instructor) => (
                        <p>{instructor.name}</p>
                      ))}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </PageLayout>
  )
}

export default DeptPage

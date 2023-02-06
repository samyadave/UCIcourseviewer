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

  const deptsSet = new Set() // check comparator so Set knows how to find duplicates
  data?.result.map((course) =>
    deptsSet.add({
      deptName: course.department_name,
      deptId: course.department,
    })
  )

  const deptsArr = Array.from(deptsSet)

  return (
    <PageLayout>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row xs={1} md={3} className="g-2">
            {deptsArr.map((dept) => (
              <Col key={dept.deptId}>
                <Card onClick={() => router.push(`../depts/${dept.deptId}`)}>
                  <Card.Title>{dept.deptName}</Card.Title>
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

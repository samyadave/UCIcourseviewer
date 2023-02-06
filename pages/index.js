import { DEPTS } from '@/backend/queries'
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

const Home = () => {
  const arr = ['hello', 'test', 'obj1', 'hello', 'test', 'obj1']

  return (
    <PageLayout>
      <Container>
        <Row xs={1} md={3} className="g-2">
          {/* map -> does an intended function for each item in array */}
          {arr.map((deptName) => (
            <Col key={deptName}>
              <Card>
                <Card.Title>{deptName}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </PageLayout>
  )
}

export default Home

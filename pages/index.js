import { GET_COURSE } from '@/backend/queries'
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
  const { data, loading } = useQuery(GET_COURSE)
  return (
    <PageLayout>
      <Container>
        <Button>Button Test</Button>
        <p>{data?.title}</p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </PageLayout>
  )
}

export default Home

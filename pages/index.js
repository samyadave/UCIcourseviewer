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
  const { data, loading } = useQuery(DEPTS)
  const deptsSet =  new Set()
  data?.result.map((course) => (
    deptsSet.add(course.department_name)
  ))
  const deptsArr = Array.from(deptsSet)
  console.log("DeptsSet: ")
  console.log(deptsSet)
  console.log("DeptsArr: ")
  console.log(deptsArr)
  return (
    <PageLayout>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row xs={1} md={3} className="g-2">
            {deptsArr.map((dept) => (
            <Col key={dept}>
              <Card>
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

// {/* <PageLayout>
//       <Container>
//         <Row xs={1} md={3} className="g-2">
//           {/* map -> does an intended function for each item in array */}
//           {arr.map((dept) => (
//             <Col key={dept.department_name}>
//               <Card>
//                 <Card.Title>{dept.department_name}</Card.Title>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
// /PageLayout> */}
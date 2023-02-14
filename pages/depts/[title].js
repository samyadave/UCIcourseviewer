// INDIVIDUAL DEPARTMENT PAGE - ALL COURSES IN DEPT

import { GET_COURSE, SCHEDULE } from '@/backend/queries'
import Course from '@/components/Course'
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
  Stack,
} from 'react-bootstrap'

import PageLayout from '../../components/PageLayout'

const DeptPage = () => {
  const router = useRouter()
  const { title } = router.query

  const { loading, data } = useQuery(SCHEDULE, {
    variables: {
      year: 2023,
      quarter: 'Winter',
      department: title,
    },
    errorPolicy: 'all',
  })

  const courseTitles = new Set()
  const courseMap = new Map()
  data?.result.map((course) => {
    courseTitles.add(course.course.title)
    courseMap.set(
      course.course.title,
      course.course.department + ' ' + course.course.number
    )
  })

  const courseArry = Array.from(courseTitles)

  return (
    <PageLayout>
      <Container>
        <h1>{title}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Stack gap={4}>
            {courseArry.map((c) => (
              <Card style={{ width: '100' }} key={c}>
                <Card.Header>{courseMap.get(c) + ' - ' + c}</Card.Header>
                <ListGroup
                  horizontal
                  style={{ width: '95%', textAlign: 'center' }}
                >
                  <Col xs={1}>Section</Col>
                  <Col xs={2}>CRN</Col>
                  <Col xs={2}>Days</Col>
                  <Col xs={2}>Time</Col>
                  <Col xs={2}>Building</Col>
                  <Col xs={2}>Instructors</Col>
                </ListGroup>
                {data?.result.map((e) => {
                  return e.course.title == c ? (
                    <>
                      <ListGroup
                        horizontal
                        className="list-group-flush"
                        style={{ width: '100v' }}
                      >
                        {/* <ListGroup.Item>{e.course.title}</ListGroup.Item> */}
                        <Col xs={1}>
                          <ListGroup.Item>{e.section.type}</ListGroup.Item>
                        </Col>
                        <Col xs={2}>
                          <ListGroup.Item>{e.section.code}</ListGroup.Item>
                        </Col>
                        <Col xs={2}>
                          <ListGroup.Item>
                            {e.meetings.map((m) => m.days)}
                          </ListGroup.Item>
                        </Col>
                        <Col xs={2}>
                          <ListGroup.Item>
                            {e.meetings.map((m) => m.time)}
                          </ListGroup.Item>
                        </Col>
                        <Col xs={2}>
                          <ListGroup.Item>
                            {e.meetings.map((m) => m.building)}
                          </ListGroup.Item>
                        </Col>
                        <Col xs={'3'}>
                          <ListGroup.Item>
                            {e.instructors.at(0).name == null &&
                            e.instructors.at(-1).name == null ? (
                              <p>Not available</p>
                            ) : (
                              <>
                                {e.instructors.map((instructor) => (
                                  <p>{instructor?.name}</p>
                                ))}
                              </>
                            )}
                          </ListGroup.Item>
                        </Col>
                      </ListGroup>
                    </>
                  ) : null
                })}
              </Card>
            ))}
          </Stack>
        )}
      </Container>
    </PageLayout>
  )
}

export default DeptPage

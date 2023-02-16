// INDIVIDUAL DEPARTMENT PAGE - ALL COURSES IN DEPT

import { GET_COURSE, SCHEDULE } from "@/backend/queries"
import Course from "@/components/Course"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Stack,
  Accordion,
  useAccordionButton,
} from "react-bootstrap"

import PageLayout from "../../components/PageLayout"

function CustomToggle({ children, eventKey }) {
  return (
    <button
      type="button"
      style={{
        border: "0px",
        backgroundColor: "rgba(52, 52, 52, 0)",
        textAlign: "left",
        color: "rgb(189,193,197)",
        width: "100%",
      }}
      onClick={useAccordionButton(eventKey)}
      flush
    >
      {children}
    </button>
  )
}

const textWhite = "rgb(189,193,197)"

const DeptPage = () => {
  const router = useRouter()
  const { title } = router.query

  const { loading, data } = useQuery(SCHEDULE, {
    variables: {
      year: 2023,
      quarter: "Winter",
      department: title,
    },
    errorPolicy: "all",
  })

  const courseTitles = new Set()
  const courseMap = new Map()
  data?.result.map((course) => {
    courseTitles.add(course.course?.title)
    courseMap.set(
      course.course?.title,
      course.course?.department + " " + course.course?.number
    )
  })

  const courseArry = Array.from(courseTitles)

  return (
    <PageLayout>
      <Container>
        <h1 style={{ color: textWhite }}>{title}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Accordion defaultActiveKey="0" alwaysOpen>
            {courseArry.map((c) => (
              <Card className="course-cards">
                <Card.Header>
                  <CustomToggle eventKey={c}>
                    {courseMap.get(c) + " - " + c}
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={c}>
                  <Card.Body>
                    <ListGroup
                      horizontal
                      style={{ width: "95%", textAlign: "center" }}
                    >
                      <Col style={{ color: textWhite }} xs={1}>
                        Section
                      </Col>
                      <Col style={{ color: textWhite }} xs={2}>
                        CRN
                      </Col>
                      <Col style={{ color: textWhite }} xs={2}>
                        Days
                      </Col>
                      <Col style={{ color: textWhite }} xs={2}>
                        Time
                      </Col>
                      <Col style={{ color: textWhite }} xs={2}>
                        Building
                      </Col>
                      <Col style={{ color: textWhite }} xs={2}>
                        Instructors
                      </Col>
                    </ListGroup>
                    {data?.result.map((e) => {
                      return e.course?.title == c ? (
                        <>
                          <ListGroup
                            horizontal
                            className="list-group-flush"
                            style={{ width: "100v" }}
                          >
                            {/* <ListGroup.Item>{e.course.title}</ListGroup.Item> */}
                            <Col xs={1}>
                              <ListGroup.Item className="list-field">
                                <p style={{ color: textWhite }}>
                                  {e.section.type}
                                </p>
                              </ListGroup.Item>
                            </Col>
                            <Col xs={2}>
                              <ListGroup.Item className="list-field">
                                <p style={{ color: textWhite }}>
                                  {e.section.code}
                                </p>
                              </ListGroup.Item>
                            </Col>
                            <Col xs={2}>
                              <ListGroup.Item className="list-field">
                                <p style={{ color: textWhite }}>
                                  {e.meetings.map((m) => m.days)}
                                </p>
                              </ListGroup.Item>
                            </Col>
                            <Col xs={2}>
                              <ListGroup.Item className="list-field">
                                <p style={{ color: textWhite }}>
                                  {e.meetings.map((m) => m.time)}
                                </p>
                              </ListGroup.Item>
                            </Col>
                            <Col xs={2}>
                              <ListGroup.Item className="list-field">
                                <p style={{ color: textWhite }}>
                                  {e.meetings.map((m) => m.building)}
                                </p>
                              </ListGroup.Item>
                            </Col>
                            <Col xs={"3"}>
                              <ListGroup.Item className="list-field">
                                <p style={{ color: textWhite }}>
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
                                </p>
                              </ListGroup.Item>
                            </Col>
                          </ListGroup>
                        </>
                      ) : null
                    })}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        )}
      </Container>
    </PageLayout>
  )
}

export default DeptPage

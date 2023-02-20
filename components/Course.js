import { Accordion, Card, Col, ListGroup } from 'react-bootstrap'

const textWhite = 'rgb(189,193,197)'

const Course = ({ c, CustomToggle, courseMap, data }) => {
  return (
    <Card className="course-cards">
      <Card.Header>
        <CustomToggle eventKey={c}>{courseMap.get(c) + ' - ' + c}</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={c}>
        <Card.Body>
          <ListGroup horizontal style={{ width: '95%', textAlign: 'center' }}>
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
                  style={{ width: '100v' }}
                >
                  {/* <ListGroup.Item>{e.course.title}</ListGroup.Item> */}
                  <Col xs={1}>
                    <ListGroup.Item className="list-field">
                      <p style={{ color: textWhite }}>{e.section.type}</p>
                    </ListGroup.Item>
                  </Col>
                  <Col xs={2}>
                    <ListGroup.Item className="list-field">
                      <p style={{ color: textWhite }}>{e.section.code}</p>
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
                  <Col xs={'3'}>
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
  )
}

export default Course

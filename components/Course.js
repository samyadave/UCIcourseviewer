import { Accordion, Card, Col, ListGroup } from 'react-bootstrap'
import styles from './Course.module.scss'

const textWhite = 'rgb(189,193,197)'

const Course = ({ c, CustomToggle, courseMap, data, courses }) => {
  return (
    <Card className={`courses course-cards `}>
      <Card.Header>
        <CustomToggle eventKey={c}>{courseMap.get(c) + ' - ' + c}</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={c}>
        <Card.Body>
          <ListGroup horizontal style={{ width: '95%', textAlign: 'center' }}>
            <Col key={'section'} style={{ color: textWhite }} xs={1}>
              Section
            </Col>
            <Col key={'CRN'} style={{ color: textWhite }} xs={2}>
              CRN
            </Col>
            <Col key={'Days'} style={{ color: textWhite }} xs={2}>
              Days
            </Col>
            <Col key={'Time'} style={{ color: textWhite }} xs={2}>
              Time
            </Col>
            <Col key={'Building'} style={{ color: textWhite }} xs={2}>
              Building
            </Col>
            <Col key={'Instructors'} style={{ color: textWhite }} xs={2}>
              Instructors
            </Col>
          </ListGroup>

          {courses.map((course) => (
            <div>
              <ListGroup
                horizontal
                className="list-group-flush"
                style={{ width: '100v' }}
              >
                <Col key={'section'} xs={1}>
                  <ListGroup.Item className="list-field">
                    <p style={{ color: textWhite, marginBottom: 0 }}>
                      {course.section.type
                        ? course.section.type
                        : 'Not Available'}
                    </p>
                  </ListGroup.Item>
                </Col>
                <Col key={'CRN'} xs={2}>
                  <ListGroup.Item className="list-field">
                    <p style={{ color: textWhite, marginBottom: 0 }}>
                      {course.section.code
                        ? course.section.code
                        : 'Not Available'}
                    </p>
                  </ListGroup.Item>
                </Col>
                <Col key={'Meetings'} xs={2}>
                  <ListGroup.Item className="list-field">
                    {course.meetings.map((m) => (
                      <p key={m} style={{ color: textWhite, marginBottom: 0 }}>
                        {m.days ? m.days : 'Not Available'}
                      </p>
                    ))}
                  </ListGroup.Item>
                </Col>
                <Col key={'Time'} xs={2}>
                  <ListGroup.Item className="list-field">
                    <p style={{ color: textWhite, marginBottom: 0 }}>
                      {course.meetings.map((m) =>
                        m.time ? m.time : 'Not Available'
                      )}
                    </p>
                  </ListGroup.Item>
                </Col>
                <Col key={'Building'} xs={2}>
                  <ListGroup.Item className="list-field">
                    {course.meetings.map((m) => (
                      <p k={m} style={{ color: textWhite, marginBottom: 0 }}>
                        {m.building ? m.building : 'Not Available'}
                      </p>
                    ))}
                  </ListGroup.Item>
                </Col>
                <Col key={'Instructors'} xs={'3'}>
                  <ListGroup.Item className="list-field">
                    <div style={{ color: textWhite, marginBottom: 0 }}>
                      {course.instructors.at(0).name == null &&
                      course.instructors.at(-1).name == null ? (
                        <p style={{ color: textWhite, marginBottom: 0 }}>
                          Not available
                        </p>
                      ) : (
                        <>
                          {course.instructors.map((instructor) => (
                            <p
                              key={course.course?.code}
                              style={{ color: textWhite, marginBottom: 0 }}
                            >
                              {instructor?.name}
                            </p>
                          ))}
                        </>
                      )}
                    </div>
                  </ListGroup.Item>
                </Col>
              </ListGroup>
            </div>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default Course

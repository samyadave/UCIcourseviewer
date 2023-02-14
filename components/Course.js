import { Card, ListGroup } from 'react-bootstrap'

const Course = (obj) => {
  return (
    <Card style={{ width: '95%' }}>
      <Card.Header>{obj.course.title}</Card.Header>

      <ListGroup horizontal className="list-group-flush">
        <ListGroup.Item>{obj.course.title}</ListGroup.Item>
        <ListGroup.Item>{obj.section.type}</ListGroup.Item>
        <ListGroup.Item>{obj.section.code}</ListGroup.Item>
        <ListGroup.Item>
          {obj.instructors.map((instructor) => (
            <p>{instructor.name}</p>
          ))}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Course

import { Card, Col } from 'react-bootstrap'

const Dept = ({ dept, router }) => {
  return (
    <Col style={{ width: '25%' }}>
      <Card
        style={{ height: '5rem', textAlign: 'center' }}
        bg="dark"
        text="light"
        className="deptCard"
        onClick={() => router.push(`../depts/${dept.code}`)}
      >
        <Card.Body className="dept">
          <Card.Title
            style={{
              marginBottom: '0',
            }}
          >
            {dept.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Dept

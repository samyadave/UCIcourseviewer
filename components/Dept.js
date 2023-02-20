import { Button, Card, Col } from 'react-bootstrap'

const Dept = ({ dept, deptsMap, router }) => {
  return (
    <Col style={{ width: '25%' }}>
      <Card
        style={{ height: '5rem', textAlign: 'center' }}
        bg="dark"
        text="light"
        className="deptCard"
        onClick={() =>
          router.push(
            `../depts/${
              (deptsMap.get(dept), encodeURIComponent(deptsMap.get(dept)))
            }`
          )
        }
      >
        <Card.Body className="dept">
          <Card.Title
            style={{
              marginBottom: '0',
            }}
          >
            {dept}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Dept

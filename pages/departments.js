// SORT ALL DEPTS BY SCHOOL

import { DEPTS } from '@/backend/queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { Card, Col, Container, Row } from 'react-bootstrap'
import PageLayout from '../components/PageLayout'

const DeptPage = () => {
  const { data, loading } = useQuery(DEPTS)

  const router = useRouter()

  // key: schoolName
  // values: {deptName1, deptName2}

  // key: deptName
  // values: deptId

  const schoolsMap = new Map()
  data?.result.map((e) => {
    if (schoolsMap.has(e.school)) {
      if (!schoolsMap.get(e.school).includes(e.department_name)) {
        schoolsMap.get(e.school).push(e.department_name)
      }
    } else {
      schoolsMap.set(e.school, new Array())
    }

    // schoolsMap.has(e.school)
    //   ? schoolsMap.get(e.school).add(e.department_name)
    //   : schoolsMap.set(e.school, new Set())
  })

  //data?.result.map((e) => schoolsMap.get(e.school).push(e.department_name))

  const deptsMap = new Map()
  data?.result.map((course) =>
    deptsMap.set(course.department_name, course.department)
  )

  // const deptsArr = Array.from(deptsMap.keys())
  const schoolsArr = Array.from(schoolsMap.keys())
  return (
    <PageLayout>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row className="g-2">
            {schoolsArr.map((school) => (
              <div>
                <h1 style={{ textAlign: 'center' }}>{school}</h1>
                <Row xs={'auto'} md={'auto'} className="g-2">
                  {schoolsMap.get(school).map((dept) => (
                    <Col>
                      <Card
                        style={{ width: '18rem' }}
                        onClick={() =>
                          router.push(
                            `../depts/${
                              (deptsMap.get(dept),
                              encodeURIComponent(deptsMap.get(dept)))
                            }`
                          )
                        }
                      >
                        <Card.Body>
                          <Card.Title>{dept}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Row>
        )}
      </Container>
    </PageLayout>
  )
}

export default DeptPage

{
  /* {deptsArr.map((dept) => (
  <Col key={deptsMap.get(dept)}>
    <Card
      onClick={() =>
        router.push(
          `../depts/${
            (deptsMap.get(dept),
            encodeURIComponent(deptsMap.get(dept)))
          }`
        )
      }
    >
      <Card.Title>{dept}</Card.Title>
    </Card>
  </Col>
))} */
}

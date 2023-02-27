// SORT ALL DEPTS BY SCHOOL

import { DEPTS } from '@/backend/queries'
import Dept from '@/components/Dept'
import Loading from '@/components/Loading'
import TermSelect from '@/components/TermSelect'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'
import PageLayout from '../../components/PageLayout'
// import './index.scss'

const textWhite = 'rgb(189,193,197)'

const DeptPage = () => {
  const { data, loading } = useQuery(DEPTS)

  const router = useRouter()

  const schoolsMap = new Map()
  data?.result.map((e) => {
    if (schoolsMap.has(e.school)) {
      if (!schoolsMap.get(e.school).includes(e.department_name)) {
        schoolsMap.get(e.school).push(e.department_name)
      }
    } else {
      schoolsMap.set(e.school, new Array())
    }
  })

  const deptsMap = new Map()
  data?.result.map((course) =>
    deptsMap.set(course.department_name, course.department)
  )

  // const deptsArr = Array.from(deptsMap.keys())
  const schoolsArr = Array.from(schoolsMap.keys())
  return (
    <PageLayout>
      <Container>
        <TermSelect />
        {loading ? (
          <Loading />
        ) : (
          <>
            {schoolsArr.map((school) => (
              <div>
                <h1
                  style={{
                    textAlign: 'center',
                    color: textWhite,
                    paddingTop: '10px',
                  }}
                >
                  {school}
                </h1>
                <hr
                  style={{ marginTop: '0', border: `1px solid ${textWhite}` }}
                />
                <Row
                  xs={'auto'}
                  md={'auto'}
                  className="g-2"
                  style={{
                    marginRight: '0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingBottom: '45px',
                  }}
                >
                  {schoolsMap.get(school).map((dept) => (
                    <Dept dept={dept} deptsMap={deptsMap} router={router} />
                  ))}
                </Row>
              </div>
            ))}
          </>
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

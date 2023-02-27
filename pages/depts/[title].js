// INDIVIDUAL DEPARTMENT PAGE - ALL COURSES IN DEPT

import { SCHEDULE } from '@/backend/queries'
import Course from '@/components/Course'
import Loading from '@/components/Loading'
import TermSelect from '@/components/TermSelect'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import { Container, Accordion, useAccordionButton } from 'react-bootstrap'

import PageLayout from '../../components/PageLayout'

function CustomToggle({ children, eventKey }) {
  return (
    <button
      type="button"
      style={{
        border: '0px',
        backgroundColor: 'rgba(52, 52, 52, 0)',
        textAlign: 'left',
        color: 'rgb(189,193,197)',
        width: '100%',
      }}
      onClick={useAccordionButton(eventKey)}
      flush
    >
      {children}
    </button>
  )
}

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
    courseTitles.add(course.course?.title)
    courseMap.set(
      course.course?.title,
      course.course?.department + ' ' + course.course?.number
    )
  })
  const textWhite = 'rgb(189,193,197)'
  const courseArry = Array.from(courseTitles)
  return (
    <PageLayout>
      <Container>
        <div className="courses">
          <TermSelect />
          <h1>{title}</h1>
          <hr />
          {loading ? (
            <Loading />
          ) : (
            <Accordion defaultActiveKey="0" alwaysOpen>
              {courseArry.map((c) => (
                <Course
                  c={c}
                  CustomToggle={CustomToggle}
                  courseMap={courseMap}
                  data={data}
                />
              ))}
            </Accordion>
          )}
        </div>
      </Container>
    </PageLayout>
  )
}

export default DeptPage

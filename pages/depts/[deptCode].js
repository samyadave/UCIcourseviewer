// INDIVIDUAL DEPARTMENT PAGE - ALL COURSES IN DEPT

import { GET_DEPT, SCHEDULE } from '@/backend/queries'
import Course from '@/components/Course'
import Loading from '@/components/Loading'
import TermSelect from '@/components/TermSelect'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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
    >
      {children}
    </button>
  )
}
const DeptPage = () => {
  const router = useRouter()

  const { deptCode } = router.query

  const { data: deptData } = useQuery(GET_DEPT, {
    variables: { code: deptCode },
  })

  const [term, setTerm] = useState({ year: 2023, quarter: 'Winter' })
  const { loading, data, error } = useQuery(SCHEDULE, {
    variables: {
      year: parseInt(term?.year),
      quarter: term?.quarter,
      department: deptCode,
    },
    context: { clientName: 'peterportalAPI' },
    errorPolicy: 'all',
  })

  const courseTitles = new Set()
  const courseMap = new Map()
  data?.result?.map((course) => {
    courseTitles.add(course.course?.title)
    courseMap.set(
      course.course?.title,
      course.course?.department + ' ' + course.course?.number
    )
  })

  const courseArry = Array.from(courseTitles)

  useEffect(() => {
    setTerm(JSON.parse(window.localStorage.getItem('term')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('term', JSON.stringify(term))
  }, [term])

  return (
    <PageLayout>
      <Container>
        <div className="courses">
          <TermSelect term={term} setTerm={setTerm} />
          <h1>{deptData?.result.name}</h1>
          <hr />
          {loading ? (
            <Loading />
          ) : (
            <>
              {!data?.result || courseArry.length == 0 ? (
                <h2>{`No "${deptData?.result.name}" courses found for ${term.quarter} of ${term.year}`}</h2>
              ) : (
                <Accordion defaultActiveKey={['']} alwaysOpen>
                  {courseArry.map((c) => (
                    <Course
                      c={c}
                      key={c}
                      CustomToggle={CustomToggle}
                      courseMap={courseMap}
                      data={data}
                      courses={data?.result.filter(
                        ({ course }) => course?.title === c
                      )}
                    />
                  ))}
                </Accordion>
              )}
            </>
          )}
        </div>
      </Container>
    </PageLayout>
  )
}

export default DeptPage

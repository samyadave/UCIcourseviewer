// INDIVIDUAL DEPARTMENT PAGE - ALL COURSES IN DEPT

import { SCHEDULE } from '@/backend/queries'
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
      flush
    >
      {children}
    </button>
  )
}

const DeptPage = () => {
  const router = useRouter()
  const { title } = router.query

  const [term, setTerm] = useState({ year: 2023, quarter: 'Winter' })
  const { loading, data, error } = useQuery(SCHEDULE, {
    variables: {
      year: parseInt(term.year),
      quarter: term.quarter,
      department: title,
    },
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
          <h1>{title}</h1>
          <hr />
          {loading ? (
            <Loading />
          ) : (
            <>
              {!data.result || courseArry.length == 0 ? (
                <h1>{`No ${title} courses found for ${term.quarter} of ${term.year}`}</h1>
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
            </>
          )}
        </div>
      </Container>
    </PageLayout>
  )
}

export default DeptPage

{
  /* {result == null || length(courseArry) ? () :( */
}

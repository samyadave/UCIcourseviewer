///////
// HOME PAGE
import { useRouter } from 'next/router'
import {
  Col,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { React, useEffect, useState } from 'react'

import PageLayout from '../components/PageLayout'
import styles from './home.module.scss'
import { useLazyQuery } from '@apollo/client'
import Loading from '@/components/Loading'
import { SEARCH_QUERY } from '@/backend/queries'

const Home = () => {
  const router = useRouter()
  const [currSearch, setSearch] = useState('')

  // search is function to call query
  const [search, { data, loading }] = useLazyQuery(SEARCH_QUERY, {
    variables: { text: `%${currSearch}%` },
  })

  return (
    <PageLayout>
      <Container>
        <div className={styles.home_page}>
          <Row>
            <Col>
              <h1>UCI CourseViewer </h1>
              <h2>Find Your UCI Courses With Ease</h2>
              <Row>
                <input
                  type="text"
                  placeholder=" (In-Progress) Search by Departments 🔎"
                  value={currSearch}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    search(currSearch)
                  }}
                />

                {loading ? (
                  <ListGroupItem>
                    <Loading />
                  </ListGroupItem>
                ) : (
                  data && (
                    <ListGroup>
                      {data.Dept.map((e) => (
                        <ListGroupItem
                          onClick={() => router.push(`depts/${e.code}`)}
                        >
                          {e.name}
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  )
                )}
              </Row>

              <Row>
                <p>OR</p>
              </Row>

              <Row>
                <button onClick={() => router.push('departments')}>
                  Continue
                  <img
                    src={'arrow.svg'}
                    align="right"
                    width="35px"
                    height="40px"
                  />
                </button>
              </Row>
            </Col>
            <Col>
              <img src="logo1.png" className={styles.logo} />
            </Col>
          </Row>
        </div>
      </Container>
    </PageLayout>
  )
}

export default Home

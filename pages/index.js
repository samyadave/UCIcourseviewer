///////
// HOME PAGE
import { useRouter } from 'next/router'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { React, useState } from 'react'

import PageLayout from '../components/PageLayout'
import TermSelect from '@/components/TermSelect'
import styles from './home.module.scss'

const Home = () => {
  const router = useRouter()

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
                />
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

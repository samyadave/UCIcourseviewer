///////
// HOME PAGE
import { useRouter } from 'next/router'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { React, useState } from 'react'

import PageLayout from '../components/PageLayout'
import TermSelect from '@/components/TermSelect'

const Home = () => {
  const router = useRouter()

  return (
    <PageLayout>
      <Container>
        <div className="home_page">
          <TermSelect />
          <h1 className="home-heading">UCI CourseViewer </h1>
          <h2 className="home-subheading">Find Your UCI Courses With Ease</h2>

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
              <img src={'arrow.svg'} align="right" width="35px" height="40px" />
            </button>
          </Row>
          <img src="logo1.png" className="logo" />
        </div>
      </Container>
    </PageLayout>
  )
}

export default Home

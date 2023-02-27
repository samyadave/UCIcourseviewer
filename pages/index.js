// HOME PAGE
import { useRouter } from 'next/router'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import PageLayout from '../components/PageLayout'

const Home = () => {
  const router = useRouter()

  return (
    <PageLayout>
      <Container style={{ height: '100vh' }}>
        <Row></Row>

        <Row>
          <Form.Group className="page-body" style={{ marginTop: 150 }}>
            <Form.Control type="email" placeholder="Search by Department" />
          </Form.Group>
        </Row>

        <Row>
          <Button variant="light" size="medium">
            {' '}
            OR{' '}
          </Button>
        </Row>

        <Row>
          <Button
            variant="primary"
            size="medium"
            onClick={() => router.push('departments')}
          >
            {' '}
            Continue{' '}
          </Button>
        </Row>
      </Container>
    </PageLayout>
  )
}

export default Home

///////
// HOME PAGE
import { useRouter } from 'next/router'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { React, useState } from "react"

import PageLayout from '../components/PageLayout'
var Standing_Peter = "https://i.pinimg.com/originals/bb/f5/d4/bbf5d44d05a97e9f135cbe28ebb438e2.jpg"
var Peter ="https://brand.uci.edu/master-branding/marks/_img/BCeater-right-768x416.png"
//var magnifying_glass = "http://clipart-library.com/images/dT9rb9eyc.png"
var continue_icon = "https://www.svgrepo.com/show/3271/arrow-pointing-to-right-in-a-circle.svg"

const Home = () => {
  const router = useRouter()

  return (
    <PageLayout>

    <Container style={{width: 1100, height: 620}}>
      <Row> <text style={{font:"Helvetica", fontStyle: "Bold", fontSize:"65px", color:"white", marginTop:"40px"}}> UCI CourseViewer </text> </Row>           
      <Row> <text style={{font:"Helvetica", fontSize:"25px", color:"white", marginBottom:"70px"}}> Find Your Courses with Ease </text> </Row>
   
      <Row> <input style={{textAlign: "left", height:"50px", width:"465px"}} type="text" placeholder= " Search by departments 🔎"/> </Row>

      <Row> <text style={{font:"Helvetica", fontSize:"25px", color:"white", marginTop:"20px", marginBottom:"20px"}}> OR </text> </Row>

      <Row> <Button onClick={() => router.push('departments')} style={{height: "50px", width: "300px", textAlign: "left", fontSize:"25px"}}>
          Continue
          <img src={continue_icon} align="right" width="35px" height="40px"/>
        </Button>
      </Row>
      
      <Image src={Peter} width="384px" height="208px" style={{position: 'absolute', top: 280, right:80}} />  
    
    </Container>    
  </PageLayout>

  )
}

export default Home
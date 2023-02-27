import { Col, Form } from 'react-bootstrap'
import TERM from '@/globals'
import { useEffect, useState } from 'react'

const TermSelect = () => {
  const [currQ, setCurrQ] = useState(TERM.quarter)
  const [currY, setCurrY] = useState(TERM)

  useEffect(() => {
    // window.location.reload(false)
  })

  console.log(currY)
  console.log(TERM)

  return (
    <div className="termSelect">
      <Col xs={9} />
      <Col className="selector">
        <Form.Select
          aria-label="Year"
          value={TERM.year}
          onChange={(e) => {
            setCurrY(e.target.value)
            TERM.year = e.target.value
          }}
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
        </Form.Select>
      </Col>
      <Col className="selector">
        <Form.Select aria-label="Quarter" value={1}>
          <option value="1">{TERM.quarter}</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
    </div>
  )
}

export default TermSelect

import { Col, Form, Row } from 'react-bootstrap'
import TERM from '@/globals'

const TermSelect = () => {
  return (
    <div className="termSelect">
      <Col xs={7} />
      <Col className="selector">
        <Form.Select aria-label="Year" value={1}>
          <option>Open this select menu</option>
          <option value="1">{TERM.year}</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
      <Col className="selector">
        <Form.Select aria-label="Quarter" value={1}>
          <option>Open this select menu</option>
          <option value="1">{TERM.quarter}</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
    </div>
  )
}

export default TermSelect

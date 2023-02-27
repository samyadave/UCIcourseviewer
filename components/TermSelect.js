import { Col, Form } from 'react-bootstrap'
import TERM from '@/globals'

const TermSelect = () => {
  return (
    <div className="termSelect">
      <Col xs={9} />
      <Col className="selector">
        <Form.Select aria-label="Year" value={1}>
          <option value="1">{TERM.year}</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
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

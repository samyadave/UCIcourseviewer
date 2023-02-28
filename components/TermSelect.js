import { Col, Form } from 'react-bootstrap'

const TermSelect = ({ term, setTerm }) => {
  const quarters = ['Fall', 'Winter', 'Spring', 'Summer']

  return (
    <div className="termSelect">
      <Col xs={9} />
      <Col className="selector">
        <Form.Select
          aria-label="Year"
          value={term.year}
          onChange={(e) => {
            setTerm({ quarter: term.quarter, year: e.target.value })
          }}
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
        </Form.Select>
      </Col>
      <Col className="selector">
        <Form.Select
          aria-label="Quarter"
          value={term.quarter}
          onChange={(e) => {
            setTerm({ quarter: e.target.value, year: term.year })
          }}
        >
          {quarters.map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </Form.Select>
      </Col>
    </div>
  )
}

export default TermSelect

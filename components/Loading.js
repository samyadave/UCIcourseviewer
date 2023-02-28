import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <>
      <div className="loading">
        <Spinner animation="border" variant="light" />
      </div>
    </>
  )
}

export default Loading

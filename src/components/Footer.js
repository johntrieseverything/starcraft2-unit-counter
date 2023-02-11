import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid>
      <Row className='footer align-items-center'>
        <Row className='mt-3' style={{ height: '20vh' }}>
          <Col sm={{ offset: 3, span: 6 }}>
            <p>All the content and pictures on this webapp were taken from
              'Osiris SC2 Guide', 'Carbot Animations', 'Liquidpedia',
              u/Autodidact420's unit counter chart from reddit, and SC2 client itself.
              If there are any copyright problems, please let me know and I will take it down immediately.  </p>
            <p>Need to contact me?</p>
            <button><a href='mailto: johntrieseverything@gmail.com'>Click Here!</a></button>
          </Col>
        </Row>
        <Row className='mt-5 align-items-center'>
          <Col>
            <p>© 2023 Johntrieseverything</p>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Footer
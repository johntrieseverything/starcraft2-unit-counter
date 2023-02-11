import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TopBar from '../TopBar';
import UnitCounters from '../UnitCounters';
import UnitDisplay from '../UnitDisplay';
import UnitListDisplay from '../UnitListDisplay';

function Home() {
  return (
    <Container fluid>
      <TopBar />
      <Row style={{ height: '10vh' }}></Row>
      <Row>
        <Col>
          <h1>This si a test</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
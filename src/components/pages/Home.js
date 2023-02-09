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
      <UnitListDisplay />

      {/* <Row>
        <Col>
          <UnitCounters />
        </Col>
        <Col>
          <UnitCounters />
        </Col>
      </Row> */}
    </Container>
  )
}

export default Home
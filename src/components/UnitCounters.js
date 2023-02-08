import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap'

function UnitCounters() {
  return (
    <Tab.Container defaultActiveKey="first" >
      <Container fluid className='unitListDisplayBackground'>
        <Row className='mt-5'>
          <h1>Units List</h1>
        </Row>
        <Row>
          <Nav fill variant='tabs' defaultActiveKey="/home">
            <Nav.Item >
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="first">Protoss</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="second">Zerg</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="third">Terran</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first" style={{ textAlign: 'center' }}>
              <Col>
                <p>protoss</p>
              </Col>
              <Col>
                <p>protoss</p>
              </Col>
              <Col>
                <p>protoss</p>
              </Col>
            </Tab.Pane>
            <Tab.Pane eventKey="second">

            </Tab.Pane>
            <Tab.Pane eventKey="third">

            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Container>
    </Tab.Container >
  )
}

export default UnitCounters
import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';
import Probe from './protossUnits/Probe';
import Stalker from './protossUnits/Stalker';
import Zealot from './protossUnits/Zealot';
import UnitDisplay from './UnitDisplay';

function UnitListDisplay() {
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
              <Row>
                <Col>
                  <Probe />
                </Col>
                <Col>
                  <Zealot />
                </Col>
                <Col>
                  <Stalker />
                </Col>
                <p><hr /></p>
              </Row>
              <Row className='align-items-center mt-3'>
                <Col>
                  <Probe />
                </Col>
                <Col>
                  <Probe />
                </Col>
                <Col>
                  <Probe />
                </Col>
              </Row>
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

export default UnitListDisplay
{/* <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            justify
            fill          >
            <Tab eventKey="Terran" title="Terran">
              <p>Test</p>
            </Tab>
            <Tab eventKey="Zerg" title="Zerg">
              <p>Test</p>
            </Tab>
            <Tab eventKey="Protoss" title="Protoss">
              <p style={{ fontFamily: 'Starcraft' }}>Test</p>
            </Tab>
          </Tabs> */}

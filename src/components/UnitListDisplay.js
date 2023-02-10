import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';

import UnitDisplay from './UnitDisplay';
import Abilities from './Abilities';
import Upgrades from './Upgrades';

import ProtossUnits from './protossUnits/ProtossUnits';
import ZergUnits from './zergUnits/ZergUnits';
import TerranUnits from './terranUnits/TerranUnits';


function UnitListDisplay() {
  return (
    <Tab.Container defaultActiveKey="Protoss" >
      <Container fluid className='unitListDisplayBackground'>
        <Row className='mt-5'>
          <h1>Units List</h1>
        </Row>
        <Row>
          <Nav fill variant='tabs' defaultActiveKey="/home">
            <Nav.Item >
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="Protoss">Protoss</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="Zerg">Zerg</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="Terran">Terran</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="Protoss" style={{ textAlign: 'center' }}>
              {/* Display the Protoss Units */}
              <ProtossUnits />
            </Tab.Pane>
            <Tab.Pane eventKey="Zerg" style={{ textAlign: 'center' }}>
              {/* Display the Zerg Units */}
              <ZergUnits />
            </Tab.Pane>

            <Tab.Pane eventKey="Terran" style={{ textAlign: 'center' }}>
              {/* First 3 Terran units */}
              <TerranUnits />
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

import React from 'react';
import { Container, Nav, Row, Tab } from 'react-bootstrap';

import ProtossUnits from './protossUnits/ProtossUnits';
import TerranUnits from './terranUnits/TerranUnits';
import ZergUnits from './zergUnits/ZergUnits';


function UnitListDisplay() {
  return (
    <Tab.Container defaultActiveKey="Protoss" >
      <Container fluid className='unitListDisplayBackground'>\
        <Row style={{ height: '10vh' }}></Row>
        <Row className='mt-5'>
          <h1>Units List</h1>
          <p>This is a page where you can view all playable units and see their stats</p>
        </Row>
        <Row>
          <Nav fill variant='tabs' defaultActiveKey="/home">
            <Nav.Item >
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="Protoss">
                <img
                  src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icon.png"}
                  alt='Protoss Icon'
                  style={{ width: '50px', height: '50px' }}
                /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="Zerg">
                <img
                  src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icon.png"}
                  alt='Zerg Icon'
                  style={{ width: '65px', height: '50px' }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                eventKey="Terran">
                <img
                  src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icon.png"}
                  alt='Terran Icon'
                  style={{ width: '50px', height: '50px' }}
                />
              </Nav.Link>
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

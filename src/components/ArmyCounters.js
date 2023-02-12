import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProtossArmyComps from './ProtossArmyComps'
import ZergArmyComps from './ZergArmyComps'

import RoachCounter from './zergCounters/RoachCounter'
import SwarmHostCounter from './zergCounters/SwarmHostCounter'

import TerranArmyComps from './TerranArmyComps'
import BattlecruiserCounter from './terranCounters/BattlecruiserCounter'

import BioCounter from './terranArmyCounters/BioCounter'
import BioTankCounter from './terranArmyCounters/BioTankCounter'
import MechCounter from './terranArmyCounters/MechCounter'
import SkyTerranCounter from './terranArmyCounters/SkyTerranCounter'

import LBUCounter from './zergArmyCounters/LBUCounter'
import MLBCounter from './zergArmyCounters/MLBCounter'
import SkyZergCounter from './zergArmyCounters/SkyZergCounter'

import GatewayCounter from './protossArmyCounters/GatewayCounter'
import RobowayCounter from './protossArmyCounters/RobowayCounter'
import SkyTossCounter from './protossArmyCounters/SkyTossCounter'

function ArmyCounters(props) {
  return (
    <Tab.Container defaultActiveKey="Protoss" >
      <Container fluid className='unitListDisplayBackground'>
        <Row style={{ height: '10vh' }}></Row>
        <Row className='align-items-center'>
          <h1>Army Counters</h1>
          <p>Here you can view some common army team comps and each races appropriate counters. Here is how to use this guide:</p>
          <ul>
            <li><p>Choose the enemies race</p></li>
            <li><p>Choose an army comp</p></li>
            <li><p>Choose your race</p></li>
            <li><p>It will then show the enemy units and a army comps that can counter it.</p></li>
            <li><p>Note that it is near impossible to account for perfect micro and proper use of each unit so some of these
              counters may be incorrect. It is also impossible to account for EVERY army comp. Some players come up with then
              craziest strategies. The goal of this is to just list some common team comps and some ways to counter them.</p></li>
          </ul>
        </Row>
        <Row className='mt-5'>
          <h1>Enemy Race</h1>
        </Row>
        <Row>
          {/* Race Selection */}
          <Nav fill variant='tabs' defaultActiveKey="/home">
            <Col>
              <Nav.Item >
                <Nav.Link
                  style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                  eventKey="Protoss">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icon.png"}
                    alt='Protoss Icon'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item style={{ marginLeft: '3px', marginRight: '3px' }}>
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
            </Col>
            <Col>
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
            </Col>
          </Nav>

          <Tab.Content>
            {/* Protoss Section  */}
            <Tab.Pane eventKey="Protoss" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="Gateway" >
                <Container fluid>
                  <Row>
                    <Nav fill variant='tabs' defaultActiveKey="/home">
                      <ProtossArmyComps />
                    </Nav>
                    {/* Protoss Unit Display */}
                    <Tab.Content>
                      <Tab.Pane eventKey="Gateway" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-5'>
                          <Col>
                            <h1>Heavy Gateway</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Zealot.png"} alt='Zealot' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Stalker.png"} alt='Stalker' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Sentry.png"} alt='Sentry' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Archon.png"} alt='Archon' style={{ width: '50px', height: '50px' }} />
                            <GatewayCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Roboway" style={{ textAlign: 'center' }}>
                        <Row className='align-items- mt-5'>
                          <Col>
                            <h1>Robo+Gateway</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Zealot.png"} alt='Zealot' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Stalker.png"} alt='Stalker' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Colossus.png"} alt='Colossus' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Archon.png"} alt='Archon' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Immortal.png"} alt='Immortal' style={{ width: '50px', height: '50px' }} />
                            <RobowayCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Skytoss" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-5'>
                          <Col>
                            <h1>Skytoss</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Mothership.png"} alt='Mothership' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Carrier.png"} alt='Carrier' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Void Ray.png"} alt='Void Ray' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Archon.png"} alt='Archon' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/High Templar.png"} alt='High Templar' style={{ width: '50px', height: '50px' }} />
                            <SkyTossCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Container>
              </Tab.Container >
            </Tab.Pane>

            {/* Zerg Section  */}
            <Tab.Pane eventKey="Zerg" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="Roach" >
                <Container fluid>
                  <Row>
                    <Nav fill variant='tabs' defaultActiveKey="/home">
                      <ZergArmyComps />
                    </Nav>
                    {/* Zerg Unit Display */}
                    <Tab.Content>
                      <Tab.Pane eventKey="Roach" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Mass Roach Ravager</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Roach.png"} alt='Roach' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Ravager.png"} alt='Ravager' style={{ width: '50px', height: '50px' }} />
                            <RoachCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Roach Hydra" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Roach Hydra</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Roach.png"} alt='Roach' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Hydralisk.png"} alt='Hydralisk' style={{ width: '50px', height: '50px' }} />
                            <RoachCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Swarm Host" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Roach Swarm Host</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Roach.png"} alt='Roach' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Swarm Host.png"} alt='Swarm Host' style={{ width: '50px', height: '50px' }} />
                            <SwarmHostCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="MLB" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Muta Ling Bane</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Mutalisk.png"} alt='Mutalisk' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Zergling.png"} alt='Zergling' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Baneling.png"} alt='Baneling' style={{ width: '50px', height: '50px' }} />
                            <MLBCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="LBU" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Ling Bane Ultra</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Ultralisk.png"} alt='Ultralisk' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Zergling.png"} alt='Zergling' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Baneling.png"} alt='Baneling' style={{ width: '50px', height: '50px' }} />
                            <LBUCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Skyzerg" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Sky Zerg</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Corruptor.png"} alt='Corruptor' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Brood Lord.png"} alt='Brood Lord' style={{ width: '50px', height: '50px' }} />
                            <SkyZergCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Container>
              </Tab.Container >
            </Tab.Pane>

            {/* Terran Section */}
            <Tab.Pane eventKey="Terran" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="Bio" >
                <Container fluid>
                  <Row>
                    <Nav fill variant='tabs' defaultActiveKey="/home">
                      <TerranArmyComps />
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="Bio" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Terran Bio</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marine.png"} alt='Marine' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marauder.png"} alt='Marauder' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Medivac.png"} alt='Medivac' style={{ width: '50px', height: '50px' }} />
                            <BioCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Bio Tank" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Terran Bio + Tank</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marine.png"} alt='Marine' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marauder.png"} alt='Marauder' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Siege Tank.png"} alt='Siege Tank' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Medivac.png"} alt='Medivac' style={{ width: '50px', height: '50px' }} />
                            <BioTankCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Mech" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Terran Mech</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Hellion.png"} alt='Hellion' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Hellbat.png"} alt='Hellbat' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Siege Tank.png"} alt='Siege Tank' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Widow Mine.png"} alt='Widow Mine' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Thor.png"} alt='Thor' style={{ width: '50px', height: '50px' }} />
                            <MechCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Skyterran" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Sky Terran</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Raven.png"} alt='Raven' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Viking.png"} alt='Viking' style={{ width: '50px', height: '50px' }} />
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Battlecruiser.png"} alt='Battlecruiser' style={{ width: '50px', height: '50px' }} />
                            <SkyTerranCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Battlecruiser" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center mt-3'>
                          <Col>
                            <h1>Mass Battlecruiser</h1>
                            <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Battlecruiser.png"} alt='Battlecruiser' style={{ width: '50px', height: '50px' }} />
                            <BattlecruiserCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Container>
              </Tab.Container >
            </Tab.Pane>

          </Tab.Content>

        </Row>
      </Container>
    </Tab.Container >
  )
}

export default ArmyCounters
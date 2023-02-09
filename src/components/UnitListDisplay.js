import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';

import UnitDisplay from './UnitDisplay';
import Abilities from './Abilities';
import Upgrades from './Upgrades';

import Probe from './protossUnits/Probe';
import Zealot from './protossUnits/Zealot';
import Stalker from './protossUnits/Stalker';
import Sentry from './protossUnits/Sentry';
import Adept from './protossUnits/Adept';
import HighTemplar from './protossUnits/HighTemplar';
import DarkTemplar from './protossUnits/DarkTemplar';
import Immortal from './protossUnits/Immortal';
import Colossus from './protossUnits/Colossus';
import Disruptor from './protossUnits/Disruptor';
import Archon from './protossUnits/Archon';
import Observer from './protossUnits/Observer';
import WarpPrism from './protossUnits/WarpPrism';
import Phoenix from './protossUnits/Phoenix';
import VoidRay from './protossUnits/VoidRay';
import Oracle from './protossUnits/Oracle';
import Carrier from './protossUnits/Carrier';
import Tempest from './protossUnits/Tempest';
import Mothership from './protossUnits/Mothership';

import Drone from './zergUnits/Drone';
import Queen from './zergUnits/Queen';
import Zergling from './zergUnits/Zergling';
import Baneling from './zergUnits/Baneling';
import Roach from './zergUnits/Roach';
import Ravager from './zergUnits/Ravager';
import Hydralisk from './zergUnits/Hydralisk';
import Lurker from './zergUnits/Lurker';
import Infestor from './zergUnits/Infestor';
import SwarmHost from './zergUnits/SwarmHost';
import Ultralisk from './zergUnits/Ultralisk';
import Overlord from './zergUnits/Overlord';
import Overseer from './zergUnits/Overseer';
import Mutalisk from './zergUnits/Mutalisk';
import Corruptor from './zergUnits/Corruptor';
import BroodLord from './zergUnits/BroodLord';
import Viper from './zergUnits/Viper';

import SCV from './terranUnits/SCV';
import Marine from './terranUnits/Marine';
import Marauder from './terranUnits/Marauder';
import Reaper from './terranUnits/Reaper';
import Ghost from './terranUnits/Ghost';
import Hellion from './terranUnits/Hellion';
import Hellbat from './terranUnits/Hellbat';
import SiegeTank from './terranUnits/SiegeTank';
import Cyclone from './terranUnits/Cyclone';
import WidowMine from './terranUnits/WidowMine';
import Thor from './terranUnits/Thor';
import Viking from './terranUnits/Viking';
import Medivac from './terranUnits/Medivac';
import Liberator from './terranUnits/Liberator';
import Raven from './terranUnits/Raven';
import Banshee from './terranUnits/Banshee';
import Battlecruiser from './terranUnits/Battlecruiser';


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
              {/* First 3 Protoss units */}
              <Row>
                <Col>
                  <Probe />
                </Col>
                <Col>
                  <Zealot />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Stalker />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Second 3 units */}
              <Row>
                <Col>
                  <Sentry />
                </Col>
                <Col>
                  <Adept />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <HighTemplar />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Third set */}
              <Row>
                <Col>
                  <DarkTemplar />
                </Col>
                <Col>
                  <Immortal />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Colossus />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Fourth set */}
              <Row>
                <Col>
                  <Disruptor />
                </Col>
                <Col>
                  <Archon />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Observer />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Fifth set */}
              <Row>
                <Col>
                  <WarpPrism />
                </Col>
                <Col>
                  <Phoenix />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <VoidRay />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Sixth set */}
              <Row>
                <Col>
                  <Oracle />
                </Col>
                <Col>
                  <Carrier />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Tempest />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Mothership */}
              <Row>
                <Col>
                  <Mothership />
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
                <p><hr /></p>
              </Row>

            </Tab.Pane>
            <Tab.Pane eventKey="Zerg" style={{ textAlign: 'center' }}>
              {/* First 3 Zerg units */}
              <Row>
                <Col>
                  <Drone />
                </Col>
                <Col>
                  <Zergling />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Queen />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Second 3 units */}
              <Row>
                <Col>
                  <Baneling />
                </Col>
                <Col>
                  <Roach />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Ravager />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Third set */}
              <Row>
                <Col>
                  <Hydralisk />
                </Col>
                <Col>
                  <Lurker />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Infestor />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Fourth set */}
              <Row>
                <Col>
                  <SwarmHost />
                </Col>
                <Col>
                  <Ultralisk />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Overlord />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Fifth set */}
              <Row>
                <Col>
                  <Overseer />
                </Col>
                <Col>
                  <Mutalisk />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Corruptor />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Sixth set */}
              <Row>
                <Col>
                  <BroodLord />
                </Col>
                <Col>
                  <Viper />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                </Col>
                <p><hr /></p>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="Terran" style={{ textAlign: 'center' }}> 
              {/* First 3 Terran units */}
              <Row>
                <Col>
                  <SCV />
                </Col>
                <Col>
                  <Marine />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Marauder />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Second 3 units */}
              <Row>
                <Col>
                  <Reaper />
                </Col>
                <Col>
                  <Ghost />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Hellion />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Third set */}
              <Row>
                <Col>
                  <Hellbat />
                </Col>
                <Col>
                  <SiegeTank />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Cyclone />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Fourth set */}
              <Row>
                <Col>
                  <WidowMine />
                </Col>
                <Col>
                  <Thor />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Viking />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Fifth set */}
              <Row>
                <Col>
                  <Medivac />
                </Col>
                <Col>
                  <Liberator />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Raven />
                </Col>
                <p><hr /></p>
              </Row>
              {/* Sixth set */}
              <Row>
                <Col>
                  <Banshee />
                </Col>
                <Col>
                  <Battlecruiser />
                  <Row>
                    <h4>Upgrades</h4>
                    <Col>
                      <Upgrades
                        name='Charge'
                        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
                        alttag=''
                        id='Charge'
                        Range='4'
                        Cooldown='7'
                        Duration='2.5'
                        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
                        minerals='200'
                        gas='200'
                        research='200'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                </Col>
                <p><hr /></p>
              </Row>
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

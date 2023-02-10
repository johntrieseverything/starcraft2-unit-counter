import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap'
import ProtossIcons from './ProtossIcons'
import ZergIcons from './ZergIcons'
import TerranIcons from './TerranIcons'

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

import ProbeCounter from './protossCounters/ProbeCounter'
import ZealotCounter from './protossCounters/ZealotCounter'
import StalkerCounter from './protossCounters/StalkerCounter'
import SentryCounter from './protossCounters/SentryCounter'
import AdeptCounter from './protossCounters/AdeptCounter'
import HighTemplarCounter from './protossCounters/HighTemplarCounter'
import DarkTemplarCounter from './protossCounters/DarkTemplarCounter'
import ImmortalCounter from './protossCounters/ImmortalCounter'
import ColossusCounter from './protossCounters/ColossusCounter'
import ArchonCounter from './protossCounters/ArchonCounter'
import DisruptorCounter from './protossCounters/DisruptorCounter'
import PhoenixCounter from './protossCounters/PhoenixCounter'
import VoidRayCounter from './protossCounters/VoidRayCounter'
import OracleCounter from './protossCounters/OracleCounter'
import CarrierCounter from './protossCounters/CarrierCounter'
import TempestCounter from './protossCounters/TempestCounter'
import MothershipCounter from './protossCounters/MothershipCounter'

function UnitCounters(props) {
  return (
    <Tab.Container defaultActiveKey="Protoss" >
      <Container fluid className='unitListDisplayBackground'>
        <Row className='mt-5'>
          <h1>{props.title}</h1>
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
          <Row>
            <h3>{props.unit}</h3>
          </Row>

          {/* Protoss section */}
          <Tab.Content>
            <Tab.Pane eventKey="Protoss" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="Probe" >
                <Container fluid>
                  <Row>
                    <Nav fill variant='tabs' defaultActiveKey="/home">
                      <ProtossIcons />
                    </Nav>
                    {/* Protoss Unit Display */}
                    <Tab.Content>
                      <Tab.Pane eventKey="Probe" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Probe />
                          </Col>
                          <ProbeCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Zealot" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Zealot />
                          </Col>
                          <ZealotCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Stalker" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Stalker />
                          </Col>
                          <StalkerCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Sentry" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Sentry />
                          </Col>
                          <SentryCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Adept" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Adept />
                          </Col>
                          <AdeptCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="High Templar" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <HighTemplar />
                          </Col>
                          <HighTemplarCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Dark Templar" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <DarkTemplar />
                          </Col>
                          <DarkTemplarCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Immortal" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Immortal />
                          </Col>
                          <ImmortalCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Colossus" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Colossus />
                          </Col>
                          <ColossusCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Disruptor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Disruptor />
                          </Col>
                          <DisruptorCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Archon" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Archon />
                          </Col>
                          <ArchonCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Observer" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Observer />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Warp Prism" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <WarpPrism />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Phoenix" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Phoenix />
                          </Col>
                          <PhoenixCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Void Ray" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <VoidRay />
                          </Col>
                          <VoidRayCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Oracle" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Oracle />
                          </Col>
                          <OracleCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Carrier" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Carrier />
                          </Col>
                          <CarrierCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Tempest" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Tempest />
                          </Col>
                          <TempestCounter />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Mothership" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Mothership />
                          </Col>
                          <MothershipCounter />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Container>
              </Tab.Container >
            </Tab.Pane>

            {/* Zerg Section  */}
            <Tab.Pane eventKey="Zerg" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="Drone" >
                <Container fluid>
                  <Row>
                    <Nav fill variant='tabs' defaultActiveKey="/home">
                      <ZergIcons />
                    </Nav>
                    {/* Zerg Unit Display */}
                    <Tab.Content>
                      <Tab.Pane eventKey="Drone" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Drone />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Queen" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Queen />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Zergling" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Zergling />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Baneling" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Baneling />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Roach" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Roach />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Ravager" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Ravager />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Hydralisk" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Hydralisk />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Lurker" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Lurker />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Infestor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Infestor />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Swarm Host" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <SwarmHost />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Ultralisk" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Ultralisk />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Overlord" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Overlord />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Overseer" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Overseer />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Phoenix" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Phoenix />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Mutalisk" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Mutalisk />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Corruptor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Corruptor />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Brood Lord" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <BroodLord />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Viper" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Viper />
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
              <Tab.Container defaultActiveKey="SCV" >
                <Container fluid>
                  <Row>
                    <Nav fill variant='tabs' defaultActiveKey="/home">
                      <TerranIcons />
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="SCV" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <SCV />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Marine" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Marine />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Marauder" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Marauder />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Reaper" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Reaper />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Ghost" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Ghost />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Hellion" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Hellion />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Hellbat" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Hellbat />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Siege Tank" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <SiegeTank />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Cyclone" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Cyclone />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Widow Mine" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <WidowMine />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Thor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Thor />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Viking" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Viking />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Medivac" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Medivac />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Liberator" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Liberator />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Raven" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Raven />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Banshee" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Banshee />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Battlecruiser" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Battlecruiser />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Viper" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Viper />
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

export default UnitCounters
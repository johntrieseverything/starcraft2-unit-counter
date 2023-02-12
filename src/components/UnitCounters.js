import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProtossIcons from './ProtossIcons'
import TerranIcons from './TerranIcons'
import ZergIcons from './ZergIcons'

import Adept from './protossUnits/Adept'
import Archon from './protossUnits/Archon'
import Carrier from './protossUnits/Carrier'
import Colossus from './protossUnits/Colossus'
import DarkTemplar from './protossUnits/DarkTemplar'
import Disruptor from './protossUnits/Disruptor'
import HighTemplar from './protossUnits/HighTemplar'
import Immortal from './protossUnits/Immortal'
import Mothership from './protossUnits/Mothership'
import Observer from './protossUnits/Observer'
import Oracle from './protossUnits/Oracle'
import Phoenix from './protossUnits/Phoenix'
import Probe from './protossUnits/Probe'
import Sentry from './protossUnits/Sentry'
import Stalker from './protossUnits/Stalker'
import Tempest from './protossUnits/Tempest'
import VoidRay from './protossUnits/VoidRay'
import WarpPrism from './protossUnits/WarpPrism'
import Zealot from './protossUnits/Zealot'

import Baneling from './zergUnits/Baneling'
import BroodLord from './zergUnits/BroodLord'
import Corruptor from './zergUnits/Corruptor'
import Drone from './zergUnits/Drone'
import Hydralisk from './zergUnits/Hydralisk'
import Infestor from './zergUnits/Infestor'
import Lurker from './zergUnits/Lurker'
import Mutalisk from './zergUnits/Mutalisk'
import Overlord from './zergUnits/Overlord'
import Overseer from './zergUnits/Overseer'
import Queen from './zergUnits/Queen'
import Ravager from './zergUnits/Ravager'
import Roach from './zergUnits/Roach'
import SwarmHost from './zergUnits/SwarmHost'
import Ultralisk from './zergUnits/Ultralisk'
import Viper from './zergUnits/Viper'
import Zergling from './zergUnits/Zergling'

import Banshee from './terranUnits/Banshee'
import Battlecruiser from './terranUnits/Battlecruiser'
import Cyclone from './terranUnits/Cyclone'
import Ghost from './terranUnits/Ghost'
import Hellbat from './terranUnits/Hellbat'
import Hellion from './terranUnits/Hellion'
import Liberator from './terranUnits/Liberator'
import Marauder from './terranUnits/Marauder'
import Marine from './terranUnits/Marine'
import Medivac from './terranUnits/Medivac'
import Raven from './terranUnits/Raven'
import Reaper from './terranUnits/Reaper'
import SCV from './terranUnits/SCV'
import SiegeTank from './terranUnits/SiegeTank'
import Thor from './terranUnits/Thor'
import Viking from './terranUnits/Viking'
import WidowMine from './terranUnits/WidowMine'

import AdeptCounter from './protossCounters/AdeptCounter'
import ArchonCounter from './protossCounters/ArchonCounter'
import CarrierCounter from './protossCounters/CarrierCounter'
import ColossusCounter from './protossCounters/ColossusCounter'
import DarkTemplarCounter from './protossCounters/DarkTemplarCounter'
import DisruptorCounter from './protossCounters/DisruptorCounter'
import HighTemplarCounter from './protossCounters/HighTemplarCounter'
import ImmortalCounter from './protossCounters/ImmortalCounter'
import MothershipCounter from './protossCounters/MothershipCounter'
import OracleCounter from './protossCounters/OracleCounter'
import PhoenixCounter from './protossCounters/PhoenixCounter'
import ProbeCounter from './protossCounters/ProbeCounter'
import SentryCounter from './protossCounters/SentryCounter'
import StalkerCounter from './protossCounters/StalkerCounter'
import TempestCounter from './protossCounters/TempestCounter'
import VoidRayCounter from './protossCounters/VoidRayCounter'
import ZealotCounter from './protossCounters/ZealotCounter'

import BanelingCounter from './zergCounters/BanelingCounter'
import BroodLordCounter from './zergCounters/BroodLordCounter'
import CorruptorCounter from './zergCounters/CorruptorCounter'
import HydraliskCounter from './zergCounters/HydraliskCounter'
import InfestorCounter from './zergCounters/InfestorCounter'
import LurkerCounter from './zergCounters/LurkerCounter'
import MutaliskCounter from './zergCounters/MutaliskCounter'
import QueenCounter from './zergCounters/QueenCounter'
import RavagerCounter from './zergCounters/RavagerCounter'
import RoachCounter from './zergCounters/RoachCounter'
import SwarmHostCounter from './zergCounters/SwarmHostCounter'
import UltraliskCounter from './zergCounters/UltraliskCounter'
import ViperCounter from './zergCounters/ViperCounter'
import ZerglingCounter from './zergCounters/ZerglingCounter'

import BansheeCounter from './terranCounters/BansheeCounter'
import BattlecruiserCounter from './terranCounters/BattlecruiserCounter'
import CycloneCounter from './terranCounters/CycloneCounter'
import GhostCounter from './terranCounters/GhostCounter'
import HellbatCounter from './terranCounters/HellbatCounter'
import HellionCounter from './terranCounters/HellionCounter'
import LiberatorCounter from './terranCounters/LiberatorCounter'
import MarauderCounter from './terranCounters/MarauderCounter'
import MarineCounter from './terranCounters/MarineCounter'
import RavenCounter from './terranCounters/RavenCounter'
import ReaperCounter from './terranCounters/ReaperCounter'
import SiegeTankCounter from './terranCounters/SiegeTankCounter'
import ThorCounter from './terranCounters/ThorCounter'
import VikingCounter from './terranCounters/VikingCounter'
import WidowMineCounter from './terranCounters/WidowMineCounter'

function UnitCounters(props) {
  return (
    <Tab.Container defaultActiveKey="Protoss" >
      <Container fluid className='unitListDisplayBackground'>
        <Row style={{ height: '10vh' }}></Row>
        <Row className='align-items-center'>
          <h1>Unit Counters</h1>
          <p>Here you can view each units counters. Here is how to use this guide:</p>
          <ul>
            <li><p>Choose the enemies race</p></li>
            <li><p>Choose the unit you wish to counter</p></li>
            <li><p>Choose your race</p></li>
            <li><p>It will then show the enemy units stats and its common counters.</p></li>
            <li><p>Each counter will be tagged with  (soft) if it isn't a direct counter, but more of a soft counter.</p></li>
            <li><p>Note that it is near impossible to account for perfect micro and proper use of each unit so some of these
              counters may be incorrect. I would like to add small paragraphs to each counter like the Protoss' Zealot
              counters but it would take too long for me to write each one. The ones that do have paragraphs explaining each
              counter were taken from Osiris' SC2 guide. Check out the guide <a href='https://osirissc2guide.com/'
                target="_blank" rel="noopener noreferrer">HERE.</a></p></li>
          </ul>
        </Row>
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
                          <Col>
                            <ProbeCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Zealot" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Zealot />
                          </Col>
                          <Col>
                            <ZealotCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Stalker" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Stalker />
                          </Col>
                          <Col>
                            <StalkerCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Sentry" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Sentry />
                          </Col>
                          <Col>
                            <SentryCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Adept" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Adept />
                          </Col>
                          <Col>
                            <AdeptCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="High Templar" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <HighTemplar />
                          </Col>
                          <Col>
                            <HighTemplarCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Dark Templar" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <DarkTemplar />
                          </Col>
                          <Col>
                            <DarkTemplarCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Immortal" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Immortal />
                          </Col>
                          <Col>
                            <ImmortalCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Colossus" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Colossus />
                          </Col>
                          <Col>
                            <ColossusCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Disruptor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Disruptor />
                          </Col>
                          <Col>
                            <DisruptorCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Archon" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Archon />
                          </Col>
                          <Col>
                            <ArchonCounter />
                          </Col>
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
                          <Col>
                            <PhoenixCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Void Ray" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <VoidRay />
                          </Col>
                          <Col>
                            <VoidRayCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Oracle" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Oracle />
                          </Col>
                          <Col>
                            <OracleCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Carrier" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Carrier />
                          </Col>
                          <Col>
                            <CarrierCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Tempest" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Tempest />
                          </Col>
                          <Col>
                            <TempestCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Mothership" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Mothership />
                          </Col>
                          <Col>
                            <MothershipCounter />
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
                          <Col>
                            <QueenCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Zergling" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Zergling />
                          </Col>
                          <Col>
                            <ZerglingCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Baneling" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Baneling />
                          </Col>
                          <Col>
                            <BanelingCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Roach" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Roach />
                          </Col>
                          <Col>
                            <RoachCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Ravager" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Ravager />
                          </Col>
                          <Col>
                            <RavagerCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Hydralisk" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Hydralisk />
                          </Col>
                          <Col>
                            <HydraliskCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Lurker" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Lurker />
                          </Col>
                          <Col>
                            <LurkerCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Infestor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Infestor />
                          </Col>
                          <Col>
                            <InfestorCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Swarm Host" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <SwarmHost />
                          </Col>
                          <Col>
                            <SwarmHostCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Ultralisk" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Ultralisk />
                          </Col>
                          <Col>
                            <UltraliskCounter />
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
                      <Tab.Pane eventKey="Mutalisk" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Mutalisk />
                          </Col>
                          <Col>
                            <MutaliskCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Corruptor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Corruptor />
                          </Col>
                          <Col>
                            <CorruptorCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Brood Lord" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <BroodLord />
                          </Col>
                          <Col>
                            <BroodLordCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Viper" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Viper />
                          </Col>
                          <Col>
                            <ViperCounter />
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
                          <Col>
                            <MarineCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Marauder" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Marauder />
                          </Col>
                          <Col>
                            <MarauderCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Reaper" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Reaper />
                          </Col>
                          <Col>
                            <ReaperCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Ghost" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Ghost />
                          </Col>
                          <Col>
                            <GhostCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Hellion" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Hellion />
                          </Col>
                          <Col>
                            <HellionCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Hellbat" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Hellbat />
                          </Col>
                          <Col>
                            <HellbatCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Siege Tank" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <SiegeTank />
                          </Col>
                          <Col>
                            <SiegeTankCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Cyclone" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Cyclone />
                          </Col>
                          <Col>
                            <CycloneCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Widow Mine" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <WidowMine />
                          </Col>
                          <Col>
                            <WidowMineCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Thor" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Thor />
                          </Col>
                          <Col>
                            <ThorCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Viking" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Viking />
                          </Col>
                          <Col>
                            <VikingCounter />
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
                          <Col>
                            <LiberatorCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Raven" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Raven />
                          </Col>
                          <Col>
                            <RavenCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Banshee" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Banshee />
                          </Col>
                          <Col>
                            <BansheeCounter />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Battlecruiser" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Col>
                            <Battlecruiser />
                          </Col>
                          <Col>
                            <BattlecruiserCounter />
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
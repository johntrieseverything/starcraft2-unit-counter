import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';

import UnitDisplay from '../UnitDisplay';
import Abilities from '../Abilities';
import Upgrades from '../Upgrades';

import Drone from './Drone';
import Queen from './Queen';
import Zergling from './Zergling';
import Baneling from './Baneling';
import Roach from './Roach';
import Ravager from './Ravager';
import Hydralisk from './Hydralisk';
import Lurker from './Lurker';
import Infestor from './Infestor';
import SwarmHost from './SwarmHost';
import Ultralisk from './Ultralisk';
import Overlord from './Overlord';
import Overseer from './Overseer';
import Mutalisk from './Mutalisk';
import Corruptor from './Corruptor';
import BroodLord from './BroodLord';
import Viper from './Viper';

function ZergUnits() {
  return (
    <Container>
      {/* First 3 Zerg units */}
      <Row>
        <Col>
          <Drone />
        </Col>
        <Col>
          <Zergling />
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
        </Col>
        <Col>
        </Col>
        <p><hr /></p>
      </Row>
    </Container>
  )
}

export default ZergUnits
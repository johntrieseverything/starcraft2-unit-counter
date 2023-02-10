import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';

import UnitDisplay from '../UnitDisplay';
import Abilities from '../Abilities';
import Upgrades from '../Upgrades';

import SCV from './SCV';
import Marine from './Marine';
import Marauder from './Marauder';
import Reaper from './Reaper';
import Ghost from './Ghost';
import Hellion from './Hellion';
import Hellbat from './Hellbat';
import SiegeTank from './SiegeTank';
import Cyclone from './Cyclone';
import WidowMine from './WidowMine';
import Thor from './Thor';
import Viking from './Viking';
import Medivac from './Medivac';
import Liberator from './Liberator';
import Raven from './Raven';
import Banshee from './Banshee';
import Battlecruiser from './Battlecruiser';

function TerranUnits() {
  return (
    <Container>
      <Row>
        <Col>
          <SCV />
        </Col>
        <Col>
          <Marine />
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
        </Col>
        <Col>
        </Col>
        <p><hr /></p>
      </Row>
    </Container>
  )
}

export default TerranUnits
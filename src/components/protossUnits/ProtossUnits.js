import React from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';

import UnitDisplay from '../UnitDisplay';
import Abilities from '../Abilities';
import Upgrades from '../Upgrades';

import Probe from './Probe';
import Zealot from './Zealot';
import Stalker from './Stalker';
import Sentry from './Sentry';
import Adept from './Adept';
import HighTemplar from './HighTemplar';
import DarkTemplar from './DarkTemplar';
import Immortal from './Immortal';
import Colossus from './Colossus';
import Disruptor from './Disruptor';
import Archon from './Archon';
import Observer from './Observer';
import WarpPrism from './WarpPrism';
import Phoenix from './Phoenix';
import VoidRay from './VoidRay';
import Oracle from './Oracle';
import Carrier from './Carrier';
import Tempest from './Tempest';
import Mothership from './Mothership';

function ProtossUnits() {
  return (
    <Container>
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
      {/* Second 3 units */}
      <Row>
        <Col>
          <Sentry />
        </Col>
        <Col>
          <Adept />
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
    </Container>
  )
}

export default ProtossUnits
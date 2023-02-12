import React from 'react';
import { Container } from 'react-bootstrap';
import ArmyCounters from '../ArmyCounters';
import Footer from '../Footer';
import TopBar from '../TopBar';
import TopButton from '../TopButton';
import UnitCounters from '../UnitCounters';

function ArmyCounterPage() {
  return (
    <Container fluid>
      <TopBar />
      <TopButton />
      <ArmyCounters />
      <Footer />
    </Container>
  )
}

export default ArmyCounterPage
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import TopBar from '../TopBar';
import TopButton from '../TopButton';
import UnitCounters from '../UnitCounters';

function UnitCountersPage() {
  return (
    <Container fluid>
      <TopBar />
      <TopButton />
      <UnitCounters />
      <Footer />
    </Container>
  )
}

export default UnitCountersPage
import React from 'react';
import { Container } from 'react-bootstrap';
import TopBar from '../TopBar';
import UnitCounters from '../UnitCounters';

function UnitCountersPage() {
  return (
    <Container fluid>
      <TopBar />
      <UnitCounters
        title='Enemy race'
        unit='Enemy Unit'
      />
    </Container>
  )
}

export default UnitCountersPage
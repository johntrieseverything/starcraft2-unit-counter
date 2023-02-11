import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import TopBar from '../TopBar';
import TopButton from '../TopButton';
import UnitListDisplay from '../UnitListDisplay';

function Home() {
  return (
    <Container fluid>
      <TopBar />
      <TopButton />
      <UnitListDisplay />
      <Footer />
    </Container>
  )
}

export default Home
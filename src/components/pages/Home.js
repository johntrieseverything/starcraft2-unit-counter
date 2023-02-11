import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer';
import TopBar from '../TopBar';
import TopButton from '../TopButton';

function Home() {
  return (
    <Container fluid>
      <TopBar />
      <TopButton />
      <Row style={{ height: '10vh' }}></Row>
      <Row className='unitListDisplayBackground'>
        <h1>Starcraft 2 Unit Counters Cheatsheet</h1>
        <Col sm={{ offset: 3, span: 6 }}>
          <p>Welcome to my site! I am a D3 Zerg player with the goal of reaching Masters.. unfortunately, I find myself choosing the
            wrong army compositions and unaware of the proper unit counters. That is why I decided to make this webapp as a way to get some
            practice using react.js and utilize the site as an interactive cheatsheet for unit counters! <br />I am obviously NOT a professional
            player and what is on here is not an exact science. If any of the information is incorrect, please feel free to let me know!
          </p>
          <p>I hope you find this fun and helpful! Let us all become better players together!</p>
          <img
            src={process.env.PUBLIC_URL + "/assets/high-templar-starcraft.gif"}
            alt='mwhahaha'
            style={{
              width: '25vw',
              display: 'block',
              marginLeft: "auto",
              marginRight: 'auto',
              marginBottom: '5vh',
            }}
          />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  )
}

export default Home
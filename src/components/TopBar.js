import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';

function TopBar() {
  return (
    <Container fluid>
      {/* #222831' */}
      <Row className='shadow-lg align-items-center mt-4 '>
        <Row className='shadow-lg align-items-center topbarBorder mt-5'>
          <Col>
            <Navbar.Brand href="/">
              <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" className=" logo d-inline-block align-top rounded" />
            </Navbar.Brand>
          </Col>
          <Col className='mt-1 pt-2 align-items-center'>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
              <li className='scrollLink'><a href='/'>Home</a></li>
              <li className='scrollLink'><a href='/UnitsList'>Units List</a></li>
              <li className='scrollLink'><a href='/UnitCountersPage'>Unit Counters</a></li>
            </ul>
          </Col>
        </Row>
      </Row >
    </Container>
  )
}

export default TopBar
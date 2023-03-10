import React from 'react';
import { Col, Container, Navbar, Row, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <Container fluid>
      {/* #222831' */}
      <Row className='shadow-lg align-items-center mt-4 '>
        <Row className='shadow-lg align-items-center topbarBorder mt-5'>
          <Col>
            <Navbar.Brand href="/starcraft2-unit-counter">
              <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" className=" logo d-inline-block align-top rounded" />
            </Navbar.Brand>
          </Col>
          <Col className='mt-1 pt-2 align-items-center'>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
              <li><Nav.Link className='navlink' as={Link} to="/">Home</Nav.Link></li>
              <li><Nav.Link className='navlink' as={Link} to="/UnitsList">Units List</Nav.Link></li>
              <li><Nav.Link className='navlink' as={Link} to="/UnitCountersPage">Unit Counters</Nav.Link></li>
              <li><Nav.Link className='navlink' as={Link} to="/ArmyCounterPage">Army Counters</Nav.Link></li>
              {/* <li className='scrollLink'><a href='/'>Home</a></li>
              <li className='scrollLink'><a href='/UnitsList'>Units List</a></li>
              <li className='scrollLink'><a href='/UnitCountersPage'>Unit Counters</a></li>
              <li className='scrollLink'><a href='/ArmyCounterPage'>Army Counters</a></li> */}
            </ul>
          </Col>
        </Row>
      </Row >
    </Container>
  )
}

export default TopBar
import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';

function TopBar() {
  return (
    <Container fluid >
      {/* #222831' */}
      <Row >
        <img src={process.env.PUBLIC_URL + "/assets/thinborder.png"} alt='topborder' className='topbarBorder' />
        <Row className='shadow-lg p-1 align-items-center' style={{ width: '100%', position: 'fixed' }}>
          <Col>
            <Navbar.Brand href="/">
              <img src={process.env.PUBLIC_URL + "/assets/logo.png"}
                alt="logo" width="30" height="30"
                className="d-inline-block align-top rounded"
                style={{ marginLeft: '5vw', backgroundColor: '#000000' }} />
            </Navbar.Brand>
          </Col>
          <Col className='mt-1 pt-2'>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
              <li className='scrollLink'><Link activeClass="active" to="IntroSection" smooth={false} duration={1000} offset={-100}>About Me</Link></li>
              <li className='scrollLink'><Link activeClass="active" to="ExperienceSection" smooth={false} duration={1000} offset={-100}>Experience</Link></li>
              <li className='scrollLink'><Link activeClass="active" to="ProjectsSection" smooth={false} duration={1000} offset={-100}>Projects</Link></li>
              <li className='scrollLink'><Link activeClass="active" to="ContactSection" smooth={false} duration={1000} offset={-100}>Contact Me</Link></li>
            </ul>
          </Col>
        </Row>
      </Row >
    </Container>
  )
}

export default TopBar
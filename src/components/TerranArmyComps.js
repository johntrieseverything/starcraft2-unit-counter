import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

function TerranArmyComps() {
  return (
    <Container>
      <Row className='mt-3'>
        <h1>Terran Army Comps</h1>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Bio">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marine.png"} alt='Marine' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marauder.png"} alt='Marauder' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Medivac.png"} alt='Medivac' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Bio Tank">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marine.png"} alt='Marine' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marauder.png"} alt='Marauder' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Siege Tank.png"} alt='Siege Tank' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Medivac.png"} alt='Medivac' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Mech">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Hellion.png"} alt='Hellion' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Hellbat.png"} alt='Hellbat' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Siege Tank.png"} alt='Siege Tank' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Widow Mine.png"} alt='Widow Mine' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Thor.png"} alt='Thor' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="SkyTerran">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Raven.png"} alt='Raven' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Viking.png"} alt='Viking' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Battlecruiser.png"} alt='Battlecruiser' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Battlecruiser">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Battlecruiser.png"} alt='Battlecruiser' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default TerranArmyComps
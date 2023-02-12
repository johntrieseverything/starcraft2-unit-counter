import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

function ZergArmyComps() {
  return (
    <Container>
      <Row className='mt-3'>
        <h1>Zerg Army Comps</h1>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Roach">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Roach.png"} alt='Roach' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Ravager.png"} alt='Ravager' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Roach Hydra">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Roach.png"} alt='Roach' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Hydralisk.png"} alt='Hydralisk' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Swarm Host">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Roach.png"} alt='Roach' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Swarm Host.png"} alt='Swarm Host' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="MLB">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Mutalisk.png"} alt='Mutalisk' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Zergling.png"} alt='Zergling' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Baneling.png"} alt='Baneling' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="LBU">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Ultralisk.png"} alt='Ultralisk' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Zergling.png"} alt='Zergling' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Baneling.png"} alt='Baneling' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Skyzerg">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Corruptor.png"} alt='Corruptor' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Brood Lord.png"} alt='Brood Lord' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Row>
    </Container>
  )
}

export default ZergArmyComps
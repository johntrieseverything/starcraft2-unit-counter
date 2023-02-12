import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

function ProtossArmyComps() {
  return (
    <Container>
      <Row className='mt-3'>
        <h1>Protoss Army Comps</h1>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Gateway">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Zealot.png"} alt='Zealot' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Stalker.png"} alt='Stalker' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Sentry.png"} alt='Sentry' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Archon.png"} alt='Archon' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Roboway">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Zealot.png"} alt='Zealot' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Stalker.png"} alt='Stalker' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Colossus.png"} alt='Colossus' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Archon.png"} alt='Archon' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Immortal.png"} alt='Immortal' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item >
            <Nav.Link
              style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh', marginTop: '1vh' }}
              eventKey="Skytoss">
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Mothership.png"} alt='Mothership' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Carrier.png"} alt='Carrier' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Void Ray.png"} alt='Void Ray' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Archon.png"} alt='Archon' style={{ width: '50px', height: '50px' }} />
              <img src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/High Templar.png"} alt='High Templar' style={{ width: '50px', height: '50px' }} />
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Row>
    </Container>
  )
}

export default ProtossArmyComps
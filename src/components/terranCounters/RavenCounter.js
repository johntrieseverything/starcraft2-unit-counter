import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

function RavenCounter(props) {
  return (
    <Tab.Container defaultActiveKey="Protoss" >
      <Container fluid>
        <Row className='mt-5'>
          <h1>Choose Your Race</h1>
        </Row>
        <Row>
          {/* Race Selection */}
          <Nav fill variant='tabs' defaultActiveKey="/home">
            <Col>
              <Nav.Item >
                <Nav.Link
                  style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                  eventKey="Protoss">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icon.png"}
                    alt='Protoss Icon'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item style={{ marginLeft: '3px', marginRight: '3px' }}>
                <Nav.Link
                  style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                  eventKey="Zerg">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icon.png"}
                    alt='Zerg Icon'
                    style={{ width: '65px', height: '50px' }}
                  />
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item>
                <Nav.Link
                  style={{ backgroundColor: '#393e46', color: '#ADD8E6', marginBottom: '1vh' }}
                  eventKey="Terran">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icon.png"}
                    alt='Terran Icon'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Nav>
          <Row className='mt-3'>
            <h3>Raven Counters</h3>
          </Row>

          {/* Protoss section */}
          <Tab.Content>
            <Tab.Pane eventKey="Protoss" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="Probe" >
                <Container fluid>
                  <Row>
                    {/* Protoss Unit Display */}
                    <Tab.Content>
                      <Tab.Pane eventKey="Probe" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Row className='mt-3 mb-3'>
                            <Col>
                              <h3>Stalker</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Stalker.png"} alt='Stalker' />
                            </Col>
                            <Col>
                              <h3>High Templar</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/High Templar.png"} alt='High Templar' />
                            </Col>
                            <Col>
                              <h3>Void Ray</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Void Ray.png"} alt='Void Ray (soft)' />
                            </Col>
                          </Row>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Container>
              </Tab.Container >
            </Tab.Pane>

            {/* Zerg Section  */}
            <Tab.Pane eventKey="Zerg" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="Drone" >
                <Container fluid>
                  <Row>
                    {/* Zerg Unit Display */}
                    <Tab.Content>
                      <Tab.Pane eventKey="Drone" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Row className='mt-3 mb-3'>
                            <Col>
                              <h3>Corruptor</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Corruptor.png"} alt='Corruptor' />
                            </Col>
                            <Col>
                              <h3>Mutalisk</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Mutalisk.png"} alt='Mutalisk' />
                            </Col>
                            <Col>
                              <h3>Viper</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Viper.png"} alt='Viper' />
                            </Col>
                          </Row>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Container>
              </Tab.Container >
            </Tab.Pane>

            {/* Terran Section */}
            <Tab.Pane eventKey="Terran" style={{ textAlign: 'center' }}>
              <Tab.Container defaultActiveKey="SCV" >
                <Container fluid>
                  <Row>
                    <Tab.Content>
                      <Tab.Pane eventKey="SCV" style={{ textAlign: 'center' }}>
                        <Row className='align-items-center'>
                          <Row className='mt-3 mb-3'>
                            <Col>
                              <h3>Cyclone</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Cyclone.png"} alt='Cyclone' />
                            </Col>
                            <Col>
                              <h3>Viking</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Viking.png"} alt='Viking' />
                            </Col>
                            <Col>
                              <h3>Thor</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Thor.png"} alt='Thor' />
                            </Col>
                          </Row>
                          <Row className='mt-3 mb-3'>
                            <Col>
                              <h3>Ghost (soft)</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Ghost.png"} alt='Ghost' />
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                          </Row>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Container>
              </Tab.Container >
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Container>
    </Tab.Container >
  )
}

export default RavenCounter
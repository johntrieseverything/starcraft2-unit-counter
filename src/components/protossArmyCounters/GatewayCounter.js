import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

function GatewayCounter(props) {
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
            <h3>Mass Gateway Counters</h3>
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
                              <h3>Void Ray</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Void Ray.png"} alt='Void Ray' />
                            </Col>
                            <Col>
                              <h3>Stalker</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Stalker.png"} alt='Stalker' />
                            </Col>
                            <Col>
                              <h3>Disruptor</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Disruptor.png"} alt='Disruptor' />
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
                              <h3>Zergling</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Zergling.png"} alt='Zergling' />
                            </Col>
                            <Col>
                              <h3>Baneling</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Baneling.png"} alt='Baneling' />
                            </Col>
                            <Col>
                              <h3>Infestor</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Infestor.png"} alt='Infestorv' />
                            </Col>
                          </Row>
                          <Row className='mt-3 mb-3'>
                            <Col>
                              <h3>Lurker</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Lurker.png"} alt='Lurker' />
                            </Col>
                            <Col>
                              <h3>Ultralisk</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Ultralisk.png"} alt='Ultralisk' />
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
                              <h3>Marine</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marine.png"} alt='Marine' />
                            </Col>
                            <Col>
                              <h3>Marauder</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marauder.png"} alt='Marauder' />
                            </Col>
                            <Col>
                              <h3>Siege Tank</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Siege Tank.png"} alt='Siege Tank' />
                            </Col>
                          </Row>
                          <Row className='mt-3 mb-3'>
                            <Col>
                              <h3>Widow Mine</h3>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Widow Mine.png"} alt='Widow Mine' />
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
    </Tab.Container >)
}

export default GatewayCounter
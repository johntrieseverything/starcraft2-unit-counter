import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProtossIcons from '../ProtossIcons'
import TerranIcons from '../TerranIcons'
import ZergIcons from '../ZergIcons'

function ProbeCounter(props) {
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
            <h3>Zealot Counters</h3>
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
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Stalker.png"} alt='Stalker' />
                              <p>Stalker (early game): Before charge or before any other units come out, a well-microed Stalker is able to easily kite a Zealot without taking damage. Mastering this micro is essential to success in PvP.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Oracle.png"} alt='Oracle' />
                              <p>Oracle (early game): While the Oracle is not used as a primary attacking force, it is good to know that the Oracle can quickly burn down Zealots (and Sentries) in the early game. If you can delay the Protoss opponent with early Gateway pressure and use this advantage to sneak out an early Oracle, it can be game over for the opponent.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Colossus.png"} alt='Colossus' />
                              <p>Colossus: The Colossus is the primary means for Protoss players to counter mass Zealots. Players will need to protect their Colossus with ground forces of their own, as Colossi with no tanking units are very vulnerable.</p>
                            </Col>
                          </Row>
                          <Row className='mb-3'>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Archon.png"} alt='Archon' />
                              <p>Archon: Archons are a straight-forward Zealot counter. Zealots are considered biological so they take bonus damage against the Archon. The Archon's splash damage also increases its effectiveness against the Zealot. Be careful not to overproduce Archons since they are such large units that they might not all be able to get in range simultaneously.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Protoss Icons/Sentry.png"} alt='Sentry' />
                              <p>Sentry: The Sentry does not counter the Zealot directly, but its Force Field ability can be used to protect vulnerable ranged units from the Zealot. Zealot armies can also be split in half with Force Field, making them easier for other Protoss units to handle.</p>
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
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Roach.png"} alt='Roach' />
                              <p>Roach: Roaches are good versus Zealots because of the +1 armor and high HP total. The native +1 armor reduces Zealot damage by 2 since the Zealot has 2 attacks with each swing. Kite with the Roaches for best results.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Zergling.png"} alt='Zergling' />
                              <p>Zerglings: When upgrades are equal, 4 Zerglings takes down 1 Zealot. When the Protoss player's weapon upgrades reach one point higher than the Zerg's ground carapace, Zerglings start to lose very quickly against Zealots. Keep that in mind.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Hydralisk.png"} alt='Hydralisk' />
                              <p>Roach & Hydralisk: Hydralisks deal a ton of DPS, but get chewed up by Zealots. Roaches in front of the Hydralisks can help soak up damage while the Hydralisks dish out the DPS.</p>
                            </Col>
                          </Row>
                          <Row className='mb-3'>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Ultralisk.png"} alt='Ultralisk' />
                              <p>Ultralisk: A hard Zealot counter. A few Ultralisks can take down a dozen Zealots with no problem. The native armor of the Ultralisk significantly reduces Zealot damage.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Brood Lord.png"} alt='Brood Lord' />
                              <p>Brood Lords: Like any ground unit that cannot hit air units, the Zealot is countered handily by the Brood Lord.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Zerg Icons/Swarm Host.png"} alt='Swarm Host' />
                              <p>Swarm Host: Zealots are not fast enough to meaningfully catch up to Swarm Hosts, allowing Swarm Hosts to use several waves of Locusts before the Zealots ever get in range. Since Locusts do well against Zealots, no Zealots ever get in range.</p>
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
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Hellbat.png"} alt='Hellbat' />
                              <p>Hellbat: Hellbats absolutely shred Zealots, especially once the Zealot count increases. The splash damage from the Hellbats adds up as more and more Zealots enter the battle. If you are using mostly bio, you can still mix in some Hellbats to deal with Zealots. Make sure to get Infernal Pre-Igniter.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Marine.png"} alt='Marine' />
                              <p>MMM: While normally Marines and Marauders will lose to Zealots, with Medivac support and good shoot-and-scoot micro, bio ground units can actually counter Zealots.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Ghost.png"} alt='Ghost' />
                              <p>Ghost: Ghosts deal bonus damage to light units, and with EMP, it only takes a handful of Ghost shots to take down a Zealot. While Ghosts cannot tank Zealot damage, it is surprising how quickly Zealots are burned down by Ghosts which have Marauders in front of them to soak up damage.</p>
                            </Col>
                          </Row>
                          <Row className='mb-3'>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Banshee.png"} alt='Banshee' />
                              <p>Banshee: Banshees are fast enough and do meaningful enough DPS that ignoring the Banshee while trying to do damage with the Zealot does not work out very well. The Battlecruiser is too slow to chase down Zealots and can be ignored by a Protoss player with good micro.</p>
                            </Col>
                            <Col>
                              <img style={{ width: '8vw' }} src={process.env.PUBLIC_URL + "/assets/Icons/Terran Icons/Thor.png"} alt='Thor' />
                              <p>Thor: The Thor dominates the Zealot on a supply for supply basis, but Thors are also a lot more expensive than Zealots.</p>
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

export default ProbeCounter
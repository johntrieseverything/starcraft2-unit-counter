import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid>
      <Row className='footer align-items-center'>
        <Row className='mt-3'>
          <Col sm={{ offset: 3, span: 6 }}>
            <p>All the content and pictures on this webapp were taken from
              'Osiris SC2 Guide', 'Carbot Animations', 'Liquidpedia',
              u/Autodidact420's unit counter chart from reddit, and SC2 client itself.
              If there are any copyright problems, please let me know and I will take it down immediately.  </p>
            <p>Attribution pages here:</p>
            <a href='https://osirissc2guide.com/' target="_blank" rel="noopener noreferrer"> Osiris SC2 Guide</a><br />
            <a href='https://www.youtube.com/channel/UC1uug_uZrVmylfPVBLBvitQ' target="_blank" rel="noopener noreferrer"> Carbot Animations</a><br />
            <a href='https://liquipedia.net/starcraft2/' target="_blank" rel="noopener noreferrer"> Starcraft 2 Liquidpedia</a><br />
            <a href='https://www.reddit.com/r/starcraft/comments/bcvr7u/chart_i_made_to_help_newbs_figure_out_unit/'
              target="_blank" rel="noopener noreferrer"> u/Autodidact420's Unit Counter Chart</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Need to contact me?</p>
            <button><a href='mailto: johntrieseverything@gmail.com'>Click Here!</a></button>
          </Col>
        </Row>
        <Row className='mt-5 align-items-center'>
          <Col>
            <p>© 2023 Johntrieseverything</p>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Footer
import React, { useState } from 'react';
import { Image, Modal, Container, Row, Col } from 'react-bootstrap';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Upgrades = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className='mt-1'>
        <Col >
          <ReactTooltip anchorId={props.id} style={{ width: '30vw' }} />
          <h4>{props.name}</h4>
          <img
            src={props.image}
            alt={props.alttag}
            id={props.id}
            data-tooltip-content={props.Description}
            onClick={handleShow}
          />
          <p>
            Range: {props.Range}<br />
            Cooldown: {props.Cooldown}<br />
            Duration: {props.Duration}<br />
            Cost: <img src={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Minerals.png"} alt='minerals' />
            {props.minerals} <img src={props.raceGas} alt='Gas' />
            {props.gas} <img src={props.raceBuildtime} alt='Buildtime' />
            {props.buildtime}<br /><hr />
          </p>
        </Col>
      </Row>
    </Container >
  );
}

export default Upgrades;

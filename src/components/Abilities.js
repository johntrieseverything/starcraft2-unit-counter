import React, { useState } from 'react';
import { Image, Modal, Container, Row, Col } from 'react-bootstrap';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Abilities = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className='mt-3'>
        <Col >
          <ReactTooltip anchorId="my-element" style={{width:'30vw'}}/>
          <h4>{props.name}</h4>
          <img
            src={props.image}
            alt={props.alttag}
            id='my-element'
            data-tooltip-content={props.Description}
            onClick={handleShow}
          />
          <p>
            Range: {props.Range}<br />
            Cooldown: {props.Cooldown}<br />
            Duration: {props.Duration}<br />
          </p>
        </Col>
      </Row>
    </Container >
  );
}

export default Abilities;

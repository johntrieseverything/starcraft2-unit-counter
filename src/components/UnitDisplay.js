import React, { useState } from 'react';
import { Image, Modal, Container, Row, Col } from 'react-bootstrap';

const UnitDisplay = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className='mt-3'>
        <Col>
          <h1>{props.name}</h1>
          <Image
            style={{ width: '10vw', borderRadius: '20%' }}
            className='extraImg'
            src={props.image}
            alt={props.alttag}
            onClick={handleShow} />
          <p>
            Type: {props.type}<br />
            Description: {props.description}<br />
            Built from: {props.from}<br />
            Cost: <img src={process.env.PUBLIC_URL + "/assets/Minerals.png"} alt='minerals' />
            {props.minerals} <img src={process.env.PUBLIC_URL + "/assets/Gas.png"} alt='gas' />
            {props.gas} <img src={process.env.PUBLIC_URL + "/assets/supplyProtoss.png"} alt='supply' />
            {props.supply}<br /><hr />

            Attack: {props.attack}<br />
            Targets: {props.targets}<br />
            Damage: {props.damage}<br />
            DPS: {props.dps}<br />
            Cooldown: {props.cooldown}<br />
            Range: {props.range}<br /><hr />

            Stats: <img src={process.env.PUBLIC_URL + "/assets/Health.png"} alt='Health' />
            {props.shield} <img src={process.env.PUBLIC_URL + "/assets/Shield.png"} alt='Shield' />
            {props.health} <img src={process.env.PUBLIC_URL + "/assets/Armor.png"} alt='Armor' />
            {props.armor}<br />            
            Move Speed: {props.speed}<br />

          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default UnitDisplay;

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
          <img
            style={{ borderRadius: '20%', height: '20vh' }}
            src={props.image}
            alt={props.alttag}
            onClick={handleShow} />
          <p>
            Type: {props.type}<br />
            Description: {props.description}<br />
            Built from: {props.from}<br />
            Cost: <img src={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Minerals.png"} alt='minerals' />
            {props.minerals} <img src={props.raceGas} alt='gas' />
            {props.gas} <img src={props.raceSupply} alt='supply' />
            {props.supply} <img src={props.raceBuildtime} alt='buildtime' />
            {props.buildtime}<br /><hr />
          </p>
          <p>
            Attack: {props.attack}<br />
            Targets: {props.targets}<br />
            Damage: {props.damage}<br />
            DPS: {props.dps}<br />
            Cooldown: {props.cooldown}<br />
            Range: {props.Range}<br /><hr />
          </p>
          <p>
            Stats: <img src={process.env.PUBLIC_URL + "/assets/Shield.png"} alt='Shield' />
            {props.shield} <img src={process.env.PUBLIC_URL + "/assets/Health.png"} alt='Health' />
            {props.health} <img src={process.env.PUBLIC_URL + "/assets/Armor.png"} alt='Armor' />
            {props.armor}<br />
            Move Speed: {props.speed}<br /><hr />
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default UnitDisplay;

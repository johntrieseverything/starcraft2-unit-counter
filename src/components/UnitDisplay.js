import React, { useState } from 'react';
import { Image, Modal, Container, Row, Col } from 'react-bootstrap';

const UnitDisplay = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className='mt-3'>
        <Col >
          <h1>{props.name}</h1>
          <img
            style={{ width: '10vw', height: '20vh', borderRadius: '20%' }}
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
            Range: {props.Range}<br /><hr />

            Stats: <img src={process.env.PUBLIC_URL + "/assets/Shield.png"} alt='Shield' />
            {props.shield} <img src={process.env.PUBLIC_URL + "/assets/Health.png"} alt='Health' />
            {props.health} <img src={process.env.PUBLIC_URL + "/assets/Armor.png"} alt='Armor' />
            {props.armor}<br />
            Move Speed: {props.speed}<br />

            <Row>
              <h1>Upgrades</h1>
              <Col>
                <img
                  style={{ width: '40px', height: '40px', borderRadius: '20%' }}
                  src={props.upgradeIcon1}
                  alt={props.upgradeIcon1alt}
                /> Description: {props.upgrade1Description}
              </Col>
              <Col>
                <img
                  style={{ width: '40px', height: '40px', borderRadius: '20%' }}
                  src={props.upgradeIcon2}
                  alt={props.upgradeIcon2alt}
                /> Description: {props.upgrade2Description}
              </Col>
              <Col>
                <img
                  style={{ width: '40px', height: '40px', borderRadius: '20%' }}
                  src={props.upgradeIcon3}
                  alt={props.upgradeIcon3alt}
                /> Description: {props.upgrade3Description}
              </Col>
            </Row>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default UnitDisplay;

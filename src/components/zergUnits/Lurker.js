import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Lurker() {
  return (
    <UnitDisplay
      name='Lurker'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Lurker.jpg"}
      alttag='Lurker jpg'
      type='Ground Unit'
      description='Burrowed attacker.'

      from='Hydralisk'
      minerals='50'
      gas='100'
      supply='3'
      buildtime='18'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Spines'
      targets='Ground'
      damage='20 (+2) / +10 (+1) vs Armored'
      dps='14.0 (+1.4) / +7.0 (+0.7) vs Armored'
      cooldown='1.43'
      Range='8(+2)'

      shield='--'
      health='200'
      armor='1(+1)'
      speed='4.13 (+0.413) / Creep: 5.37 (+0.537)'
    />
  )
}

export default Lurker
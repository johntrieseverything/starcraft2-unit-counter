import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Ravager() {
  return (
    <UnitDisplay
      name='Ravager'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Ravager.jpg"}
      alttag='Ravager jpg'
      type='Ground Unit'
      description='Ranged artillery. Can use Corrosive Bile.'

      from='Roach'
      minerals='25'
      gas='75'
      supply='3'
      buildtime='12'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Plasma Discharge'
      targets='Ground'
      damage='16 (+2)'
      dps='14.04 (+1.75)'
      cooldown='1.14'
      Range='6'

      shield='--'
      health='120'
      armor='1(+1)'
      speed='3.85 / Creep: 5'
    />
  )
}

export default Ravager
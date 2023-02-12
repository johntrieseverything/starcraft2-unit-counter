import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Cyclone() {
  return (
    <UnitDisplay
      name='Cyclone'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Cyclone.jpg"}
      alttag='Cyclone jpg'
      type='Ground Unit'
      description='Mobile assault vehicle. Can use Lock On to quickly fire while moving.'

      from='Factory'
      minerals='150'
      gas='100'
      supply='3'
      buildtime='32'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Typhoon Missile Pod'
      targets='Ground / Air'
      damage='18 (+2)'
      dps='25.2 (+2.8)'
      cooldown='0.71'
      Range='5'

      shield='x'
      health='120'
      armor='1(+1)'
      speed='4.73'
    />
  )
}

export default Cyclone
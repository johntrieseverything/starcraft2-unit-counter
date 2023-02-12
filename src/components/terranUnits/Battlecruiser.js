import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Battlecruiser() {
  return (
    <UnitDisplay
      name='Battlecruiser'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Battlecruiser.jpg"}
      alttag='Battlecruiser jpg'
      type='Air Unit'
      description='Powerful warship. Can be upgraded with the Yamato Cannon and Tactical Jump ability.'

      from='Starport'
      minerals='400'
      gas='300'
      supply='6'
      buildtime='64'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='ATS Laser Battery / Laser Battery'
      targets='Ground / Air'
      damage='8 (+1) / 5 (+1)'
      dps='49.8 (+6.2) / 31.1 (+6.2)'
      cooldown='0.16'
      Range='6'

      shield='x'
      health='550'
      armor='3(+1)'
      speed='2.62'
    />
  )
}

export default Battlecruiser
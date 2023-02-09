import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Colossus() {
  return (
    <UnitDisplay
      name='Colossus'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Colossus.jpg"}
      alttag='Colossus jpg'
      type='Ground Unit'
      description='Battle strider with a powerful area attack. Can step up or down cliffs. Can be targeted by anti-air weapons.'

      from='Robotics Facility'
      minerals='300'
      gas='200'
      supply='6'
      buildtime='54'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Thermal Lance'
      targets='Ground '
      damage='10 (+1) (x2) +5 (+1) vs Light (Splash)'
      dps='18.7 (+1.87) +9.3 (+1.87) vs Light'
      cooldown='1.25'
      Range='7 (+2)'

      shield='150'
      health='200'
      armor='1(+1)'
      speed='3.15'
    />
  )
}

export default Colossus
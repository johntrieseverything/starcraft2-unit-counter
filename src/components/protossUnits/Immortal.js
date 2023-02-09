import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Immortal() {
  return (
    <UnitDisplay
      name='Immortal'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Immortal.jpg"}
      alttag='Immortal jpg'
      type='Ground Unit'
      description='Assault strider. Can use Barrier to absorb damage.'

      from='Robotics Facility'
      minerals='275'
      gas='100'
      supply='4'
      buildtime='39'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Phase Disruptors'
      targets='Ground '
      damage='20(+2), +30 (+3) vs Armored'
      dps='19.2 (+1.92), +28.9 (+2.9) vs Armored'
      cooldown='1.04'
      Range='6'

      shield='100'
      health='200'
      armor='1(+1)'
      speed='3.15'
    />
  )
}

export default Immortal
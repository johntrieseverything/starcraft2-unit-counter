import React from 'react'
import UnitDisplay from '../UnitDisplay'

function VoidRay() {
  return (
    <UnitDisplay
      name='Void Ray'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/VoidRay.jpg"}
      alttag='Void Ray jpg'
      type='Large Air Unit'
      description='Surgical strike craft.'

      from='Stargate'
      minerals='250'
      gas='150'
      supply='4'
      buildtime='43'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Prismatic Beam'
      targets='Ground / Air'
      damage='6 (+1), +4 vs Armored'
      dps='16.8 (+2.8), +11.2 vs Armored'
      cooldown='0.36'
      Range='6'

      shield='100'
      health='150'
      armor='0(+1)'
      speed='3.85(+0.798), 2.888 with Prismatic Alignment'
    />
  )
}

export default VoidRay
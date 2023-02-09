import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Roach() {
  return (
    <UnitDisplay
      name='Roach'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Roach.jpg"}
      alttag='Roach jpg'
      type='Ground Unit'
      description='Assault unit. Regenerates health quickly when burrowed.'

      from='Roach Warren'
      minerals='75'
      gas='25'
      supply='2'
      buildtime='19'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Volatile Burst'
      targets='Ground'
      damage='16 (+2)'
      dps='11.2 (+1.4)'
      cooldown='1.43'
      Range='4'

      shield='--'
      health='145'
      armor='1(+1)'
      speed='.15 (+1.05) / Creep: 4.09 (+1.36)'
    />
  )
}

export default Roach
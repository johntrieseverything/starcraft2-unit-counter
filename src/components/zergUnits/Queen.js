import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Queen() {
  return (
    <UnitDisplay
      name='Queen'
      image={process.env.PUBLIC_URL + "/assets/Zerg Units/Queen.jpg"}
      alttag='Queen jpg'
      type='Ground Unit'
      description='Defensive unit. Can Spawn Creep Tumors, Spawn Larva, and use the Transfusion ability. Moves much faster on creep.'

      from='Hatchery'
      minerals='150'
      gas='0'
      supply='2'
      buildtime='36'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Talons'
      targets='Ground'
      damage='4 (+1) (x2)'
      dps='11.2 (+2.8)'
      cooldown='0.71'
      Range='5'

      shield='--'
      health='175'
      armor='1(+1)'
      speed='1.31 / Creep: 3.5'
    />
  )
}

export default Queen
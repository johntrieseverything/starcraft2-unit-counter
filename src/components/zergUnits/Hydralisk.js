import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Hydralisk() {
  return (
    <UnitDisplay
      name='Hydralisk'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Hydralisk.jpg"}
      alttag='Hydralisk jpg'
      type='Ground Unit'
      description='Ranged attacker.'

      from='Hydralisk Den'
      minerals='100'
      gas='50'
      supply='2'
      buildtime='24'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Needle Spines'
      targets='Ground / Air'
      damage='12 (+1)'
      dps='20.4 (+1.7)'
      cooldown='0.59'
      Range='5(+1)'

      shield='--'
      health='90'
      armor='0(+1)'
      speed='3.15(+0.98) / Creep: 4.09 (+1.214)'
    />
  )
}

export default Hydralisk
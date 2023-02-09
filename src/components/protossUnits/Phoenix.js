import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Phoenix() {
  return (
    <UnitDisplay
      name='Phoenix'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Phoenix.jpg"}
      alttag='Phoenix jpg'
      type='Air Unit'
      description='Can use Graviton beam.'

      from='Stargate'
      minerals='150'
      gas='100'
      supply='2'
      buildtime='25'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Ion Cannons'
      targets='Air'
      damage='5 (+1) (x2), +5 vs Light'
      dps='12.7 (+2.5), +12.7 vs Light'
      cooldown='0.79'
      Range='5(+2)'

      shield='60'
      health='120'
      armor='0(+1)'
      speed='5.95'
    />
  )
}

export default Phoenix
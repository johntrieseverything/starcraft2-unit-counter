import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Overlord() {
  return (
    <UnitDisplay
      name='Overlord'
      image={process.env.PUBLIC_URL + "/assets/Zerg Units/Overlord.jpg"}
      alttag='Overlord jpg'
      type='Air Unit'
      description='Provides 8 supply, which raises the maximum number of units available. Can morph into Overseer and a "Dropperlord" with Ventral Sacs.'

      from='Hatchery'
      minerals='100'
      gas='0'
      supply='0'
      buildtime='18'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='n/a'
      targets='n/a'
      damage='n/a'
      dps='n/a'
      cooldown='n/a'
      Range='n/a'
      
      shield='--'
      health='200'
      armor='0(+1)'
      speed='0.902 (+1.728)'
    />
  )
}

export default Overlord
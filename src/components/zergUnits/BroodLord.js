import React from 'react'
import UnitDisplay from '../UnitDisplay'

function BroodLord() {
  return (
    <UnitDisplay
      name='Brood Lord'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/BroodLord.jpg"}
      alttag='Brood Lord jpg'
      type='Air Unit'
      description='Flying heavy-assault unit. Shoots Broodlings at its target. A Broodling is a small creature that can attack ground units.'

      from='Corruptor'
      minerals='150'
      gas='150'
      supply='2'
      buildtime='24'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Broodling Strike'
      targets='Ground'
      damage='20 (+2) (x2)'
      dps='22.4 (+2.2)'
      cooldown='1.79'
      Range='10'

      shield='--'
      health='225'
      armor='1(+1)'
      speed='2.24'
    />
  )
}

export default BroodLord
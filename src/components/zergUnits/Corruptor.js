import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Corruptor() {
  return (
    <UnitDisplay
      name='Corruptor'
      image={process.env.PUBLIC_URL + "/assets/Zerg Units/Corruptor.jpg"}
      alttag='Corruptor jpg'
      type='Medium Air Unit'
      description='Anti-air flyer. Can use Caustic Spray. Can morph into Brood Lord.'

      from='Spire'
      minerals='150'
      gas='100'
      supply='2'
      buildtime='29'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Broodling Strike'
      targets='Air'
      damage='14 (+1)'
      dps='10.29 (+0.74)'
      cooldown='1.36'
      Range='6'

      shield='--'
      health='200'
      armor='2(+1)'
      speed='4.725'
    />
  )
}

export default Corruptor
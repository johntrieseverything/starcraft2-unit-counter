import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Infestor() {
  return (
    <UnitDisplay
      name='Infestor'
      image={process.env.PUBLIC_URL + "/assets/Zerg Units/Infestor.jpg"}
      alttag='Infestor jpg'
      type='Ground Unit'
      description='Infestation specialist. Can move while burrowed. Can use Fungal Growth, Neural Parasite, and Microbial Shroud abilities.'

      from='Infestation Pit'
      minerals='100'
      gas='150'
      supply='2'
      buildtime='36'
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
      health='90'
      armor='0(+1)'
      speed='3.15 / Creep: 3.78'
    />
  )
}

export default Infestor
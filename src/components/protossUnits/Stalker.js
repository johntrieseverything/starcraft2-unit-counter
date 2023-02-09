import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Stalker() {
  return (
    <UnitDisplay
      name='Stalker'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Stalker.jpg"}
      alttag='Stalker jpg'
      type='Small Ground Unit'
      description='Ranged support strider'

      from='Gateway'
      minerals='125'
      gas='50'
      supply='2'
      buildtime='30'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Particle Disruptors'
      targets='Ground / Air'
      damage='13 (+1)'
      dps='9.7 (+0.75), +5 (+1) vs Armored'
      cooldown='1.34'
      Range='6'

      shield='80'
      health='80'
      armor='1(+1)'
      speed='4.13'
    />
  )
}

export default Stalker
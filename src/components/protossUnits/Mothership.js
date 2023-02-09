import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Mothership() {
  return (
    <UnitDisplay
      name='Mothership'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Mothership.jpg"}
      alttag='Mothership jpg'
      type='Large Air Unit'
      description='Ultimate Protoss Vessel. Can use Mass Recall and Time Warp. Cloaks nearby units and structures.'

      from='Nexus'
      minerals='400'
      gas='400'
      supply='8'
      buildtime='114'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Purifier Beam'
      targets='Ground / Air'
      damage='6 (+1) x6'
      dps='22.8 (+3.78)'
      cooldown='1.58'
      Range='7'

      shield='350'
      health='350'
      armor='2(+1)'
      speed='2.62'
    />
  )
}

export default Mothership
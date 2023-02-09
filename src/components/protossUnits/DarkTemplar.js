import React from 'react'
import UnitDisplay from '../UnitDisplay'

function DarkTemplar() {
  return (
    <UnitDisplay
      name='Dark Templar'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/DarkTemplar.jpg"}
      alttag='Dark Templar jpg'
      type='Ground Unit'
      description='Deadly warrior-assassin. Cloak renders the unit invisible to enemies without detection. Can transform into an Archon'

      from='Gateway'
      minerals='125'
      gas='125'
      supply='2'
      buildtime='39'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Warp Blades'
      targets='Ground '
      damage='45 (+5)'
      dps='37.2 (+4.13)'
      cooldown='1.21'
      Range='0.1'

      shield='80'
      health='80'
      armor='1(+1)'
      speed='3.94'
    />
  )
}

export default DarkTemplar
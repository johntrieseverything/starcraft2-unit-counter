import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Observer() {
  return (
    <UnitDisplay
      name='Observer'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Observer.jpg"}
      alttag='Observer jpg'
      type='Air Unit'
      description='Flying spy. Cloak renders the unit invisible to enemies without detection.'

      from='Stargate'
      minerals='25'
      gas='75'
      supply='1'
      buildtime='21'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='n/a'
      targets='n/a'
      damage='n/a'
      dps='n/a'
      cooldown='n/a'
      Range='n/a'
      
      shield='20'
      health='40'
      armor='0(+1)'
      speed='2.82(+1.41)'
    />
  )
}

export default Observer
import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Overlord() {
  return (
    <UnitDisplay
      name='Overlord'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Overlord.jpg"}
      alttag='Overlord jpg'
      type='Air Unit'
      description='Advanced aerial observer. Maintains the unit cap set by the Overlord. Can use Spawn Changeling and Contaminate.'

      from='Overlord'
      minerals='50'
      gas='50'
      supply='0'
      buildtime='12'
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
      armor='1(+1)'
      speed='2.62 (+2.1)'
    />
  )
}

export default Overlord
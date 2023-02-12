import React from 'react'
import UnitDisplay from '../UnitDisplay'

function WidowMine() {
  return (
    <UnitDisplay
      name='Widow Mine'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/WidowMine.jpg"}
      alttag='Widow Mine jpg'
      type='Ground Unit'
      description='Has no auto attack and must be Burrowed into the ground to use its "Activate Mine" ability to deal Splash damage to ground or air units.'

      from='Factory'
      minerals='75'
      gas='25'
      supply='2'
      buildtime='21'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Sentinel Missiles'
      targets='Ground / Air'
      damage='125 (+40 Splash)'
      dps='+35 (+25 Splash) vs Shields'
      cooldown='29'
      Range='5'

      shield='x'
      health='90'
      armor='0(+1)'
      speed='3.94'
    />
  )
}

export default WidowMine
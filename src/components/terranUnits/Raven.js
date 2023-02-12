import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Raven() {
  return (
    <UnitDisplay
      name='Raven'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Raven.jpg"}
      alttag='Raven jpg'
      type='Air Unit'
      description='Aerial support unit. Can use Auto Turret, Interference Matrix and Anti-Armor Missile abilities.'

      from='Starport'
      minerals='100'
      gas='150'
      supply='2'
      buildtime='34'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='n/a'
      targets='n/a'
      damage='n/a'
      dps='n/a'
      cooldown='n/a'
      Range='n/a'
      
      shield='x'
      health='140'
      armor='1(+1)'
      speed='4.13'
    />
  )
}

export default Raven
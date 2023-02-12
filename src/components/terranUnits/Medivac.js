import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Medivac() {
  return (
    <UnitDisplay
      name='Medivac'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Medivac.jpg"}
      alttag='Medivac jpg'
      type='Air Unit'
      description='Terran air transport ship. Can also heal biological units.'

      from='Starport'
      minerals='100'
      gas='100'
      supply='2'
      buildtime='30'
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
      health='150'
      armor='1(+1)'
      speed='3.5(+0.63), 5.94 with boost'
    />
  )
}

export default Medivac
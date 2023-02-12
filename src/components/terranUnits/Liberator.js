import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Liberator() {
  return (
    <UnitDisplay
      name='Liberator'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Liberator.jpg"}
      alttag='Liberator jpg'
      type='Air Unit'
      description='Artillery Ship.'

      from='Starport'
      minerals='150'
      gas='125'
      supply='3'
      buildtime='43'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Lexington Rockets / Concord Cannon'
      targets='Air / Ground'
      damage='5 (+1) (x2) (Splash) / 75 (+5)'
      dps='7.75 (+1.55) / 65.8 (+4.39)'
      cooldown='1.29 / 1.14'
      Range='5 / 10(+3)'

      shield='--'
      health='180'
      armor='0(+1)'
      speed='4.72'
    />
  )
}

export default Liberator
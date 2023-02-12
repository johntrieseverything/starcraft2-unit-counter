import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Liberator() {
  return (
    <UnitDisplay
      name='Liberator'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Liberator.jpg"}
      alttag='Liberator jpg'
      type='Air Unit'
      description='Tactical strike aircraft.'

      from='Starport'
      minerals='150'
      gas='100'
      supply='3'
      buildtime='43'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Backlash Rockets'
      targets='Ground'
      damage='12 (+1) (x2)'
      dps='27 (+2.25)'
      cooldown='0.89'
      Range='6'

      shield='x'
      health='140'
      armor='0(+1)'
      speed='3.85 (+1.4)'
    />
  )
}

export default Liberator
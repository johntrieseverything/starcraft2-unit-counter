import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Sentry() {
  return (
    <UnitDisplay
      name='Sentry'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Sentry.jpg"}
      alttag='Sentry jpg'
      type='Ground Unit'
      description='Energy Manipulator unit. Can use the Force Field, Guardian Shield and Hallucination.'

      from='Gateway'
      minerals='50'
      gas='100'
      supply='2'
      buildtime='23'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Disruption Beam'
      targets='Ground / Air'
      damage='6 (+1)'
      dps='8.4(+1.4)'
      cooldown='0.71'
      Range='5'

      shield='40'
      health='40'
      armor='1(+1)'
      speed='3.5'
    />
  )
}

export default Sentry
import React from 'react'
import UnitDisplay from '../UnitDisplay'

function HighTemplar() {
  return (
    <UnitDisplay
      name='High Templar'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/HighTemplar.jpg"}
      alttag='High Templar jpg'
      type='Ground Unit'
      description='Potent psionic master. Can use Feedback and Psionic Storm. Can transform into an Archon.'

      from='Gateway'
      minerals='50'
      gas='150'
      supply='2'
      buildtime='39'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Psi Blast'
      targets='Ground '
      damage='4(+1)'
      dps='3.2 (+0.8)'
      cooldown='1.25'
      Range='6'

      shield='40'
      health='40'
      armor='0(+1)'
      speed='2.82'
    />
  )
}

export default HighTemplar
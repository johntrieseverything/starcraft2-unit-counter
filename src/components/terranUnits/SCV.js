import React from 'react'
import UnitDisplay from '../UnitDisplay'

function SCV() {
  return (
    <UnitDisplay
      name='SCV'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/scv.gif"}
      alttag='SCV gif'
      type='Ground Unit'
      description='Basic worker unit. Can gather resources, build Terran structures, and repair.'

      from='Command Center'
      minerals='50'
      gas='0'
      supply='1'
      buildtime='12'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Fusion Cutter'
      targets='Ground'
      damage='5'
      dps='4.67'
      cooldown='1.07'
      Range='0.1'

      shield='--'
      health='45'
      armor='0(+1)'
      speed='3.94'
    />
  )
}

export default SCV
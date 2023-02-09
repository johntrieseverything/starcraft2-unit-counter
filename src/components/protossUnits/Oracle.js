import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Oracle() {
  return (
    <UnitDisplay
      name='Oracle'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Oracle.jpg"}
      alttag='Oracle jpg'
      type='Air Unit'
      description='Flying caster. Can use Stasis Ward, Envision and Activate Pulsar Beam abilities.'

      from='Stargate'
      minerals='150'
      gas='150'
      supply='3'
      buildtime='37'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Pulsar Beam'
      targets='Ground'
      damage='15, +7 vs Light'
      dps='24.4, +11.5 vs Light'
      cooldown='0.61'
      Range='4'

      shield='60'
      health='100'
      armor='0(+1)'
      speed='5.6'
    />
  )
}

export default Oracle
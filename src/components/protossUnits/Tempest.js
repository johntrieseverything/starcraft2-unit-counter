import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Tempest() {
  return (
    <UnitDisplay
      name='Tempest'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Tempest.jpg"}
      alttag='Tempest jpg'
      type='Air Unit'
      description='Long ranged aerial bombardment unit.'

      from='Stargate'
      minerals='2500'
      gas='175'
      supply='5'
      buildtime='43'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Resonance Coil/Kinetic Overload'
      targets='Ground / Air'
      damage='40 (+4) / 30 (+3), +22 (+2) vs Massive'
      dps='16.97 (+1.697) / 12.73 (+1.273), +9.32 (+0.847) vs Massive'
      cooldown='2.36'
      Range='10/14'

      shield='100'
      health='500'
      armor='2(+1)'
      speed='3.15'
    />
  )
}

export default Tempest
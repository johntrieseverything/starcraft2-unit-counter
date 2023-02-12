import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Marine() {
  return (
    <UnitDisplay
      name='Marine'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/marine.gif"}
      alttag='Marine gif'
      type='Ground Unit'
      description='General-purpose infantry.'

      from='Barracks'
      minerals='50'
      gas='0'
      supply='1'
      buildtime='18'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='C-14 Gauss Rifle'
      targets='Ground / Air'
      damage='6(+1)'
      dps='9.8 (+1.6), 14.7 (+2.4) (Stimpack)'
      cooldown='0.61'
      Range='5'

      shield='--'
      health='45(+10)'
      armor='0(+1)'
      speed='3.15 (+1.57)'
    />
  )
}

export default Marine
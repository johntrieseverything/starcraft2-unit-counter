import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Ghost() {
  return (
    <UnitDisplay
      name='Ghost'
      image={process.env.PUBLIC_URL + "/assets/terran Units/Ghost.jpg"}
      alttag='Ghost jpg'
      type='Ground Unit'
      description='Sniper. Can use Steady Targeting, EMP Round and be upgraded to use Cloak. Can call down Tactical Nukes built at the Ghost Academy.'

      from='Barracks'
      minerals='150'
      gas='125'
      supply='2'
      buildtime='29'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='C-10 Canister Rifle'
      targets='Ground / Air'
      damage='9.3 (+0.93),+10 (+1) vs Light'
      dps='9.3 (+0.93), 9.3 (+0.93) vs Light'
      cooldown='3.94'
      Range='6'

      shield='x'
      health='100'
      armor='0(+1)'
      speed='3.94'
    />
  )
}

export default Ghost
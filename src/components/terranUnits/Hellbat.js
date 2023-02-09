import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Hellbat() {
  return (
    <UnitDisplay
      name='Hellbat'
      image={process.env.PUBLIC_URL + "/assets/terran Units/Hellbat.jpg"}
      alttag='Hellbat jpg'
      type='Ground Unit'
      description='Fast scout. Has a flame attack that damages all enemy units in its line of fire.'

      from='Factory'
      minerals='100'
      gas='0'
      supply='2'
      buildtime='21'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Napalm Spray'
      targets='Ground'
      damage='18 (+2), +0 (+1) vs Light, +12 (+1) vs Light (Infernal Pre-Igniter)'
      dps='12.6 (+1.4), +0 (+0.7) vs Light, +8.4 (+0.7) vs Light (Infernal Pre-Igniter)'
      cooldown='1.43'
      Range='2'

      shield='x'
      health='135'
      armor='0(+1)'
      speed='3.15'
    />
  )
}

export default Hellbat
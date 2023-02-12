import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Thor() {
  return (
    <UnitDisplay
      name='Thor'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Thor.jpg"}
      alttag='Thor jpg'
      type='Ground Unit'
      description='Heavy Assault Mech.'

      from='Factory'
      minerals='300'
      gas='200'
      supply='6'
      buildtime='43'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Thors Hammer / Javelin Missile Launchers/ 250mm Punisher Cannons'
      targets='Ground / Air / Air'
      damage='30 (+3) (x2) / 6 (+1) (x4) (Splash), +6 (+1) vs Light / 25 (+3), +10 (+1) vs Massive'
      dps='65.9 (+6.59) / 11.2 (+1.87), +11.2 (+1.87) vs Light / 27.5 (+3.3), +11.0 (+1.1) vs Massive'
      cooldown='0.91 / 2.14 / 0.91'
      Range='7 / 10 / 11'

      shield='--'
      health='400'
      armor='1(+1)'
      speed='2.62'
    />
  )
}

export default Thor
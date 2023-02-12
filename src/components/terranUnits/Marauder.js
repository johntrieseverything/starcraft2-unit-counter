import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Marauder() {
  return (
    <UnitDisplay
      name='Marauder'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Marauder.jpg"}
      alttag='Marauder jpg'
      type='Ground Unit'
      description='Heavy Assault infantry.'

      from='Barracks'
      minerals='100'
      gas='25'
      supply='2'
      buildtime='21'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Punisher Grenades'
      targets='Ground'
      damage='10 (+1), +10 (+1) vs Armored'
      dps='9.3 (+0.93), 14.7 (+2.4) (Stimpack), +9.3 (+0.93) vs Armored +14.1 (+1.4) (Stimpack)'
      cooldown='1.07 (-0.36)'
      Range='6'

      shield='x'
      health='125'
      armor='1(+1)'
      speed='3.15 (+1.57)'
    />
  )
}

export default Marauder
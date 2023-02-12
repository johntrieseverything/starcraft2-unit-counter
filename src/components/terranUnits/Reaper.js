import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Reaper() {
  return (
    <UnitDisplay
      name='Reaper'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Reaper.jpg"}
      alttag='Reaper jpg'
      type='Ground Unit'
      description='Raider. Capable of jumping up and down cliffs. Heals when out of combat.'

      from='Barracks'
      minerals='50'
      gas='50'
      supply='1'
      buildtime='32'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='P-45 Gauss Pistol'
      targets='Ground'
      damage='4 (+1) (x2)'
      dps='10.1 (+2.5)'
      cooldown='0.79'
      Range='5'

      shield='x'
      health='60'
      armor='0(+1)'
      speed='5.25'
    />
  )
}

export default Reaper
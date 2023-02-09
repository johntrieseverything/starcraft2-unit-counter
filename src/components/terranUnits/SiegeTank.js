import React from 'react'
import UnitDisplay from '../UnitDisplay'

function SiegeTank() {
  return (
    <UnitDisplay
      name='Siege Tank'
      image={process.env.PUBLIC_URL + "/assets/terran Units/SiegeTank.jpg"}
      alttag='Siege Tank jpg'
      type='Ground Unit'
      description='Heavy Tank. Can switch into Siege Mode to provide long-range artillery support.'

      from='Factory'
      minerals='150'
      gas='125'
      supply='3'
      buildtime='32'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Tank Mode, 90mm Cannons / Siege Mode, Crucio Shock Cannon'
      targets='Ground'
      damage='15 (+2), +10 (+1) vs Armored / 40 (+4), +30 (+1) vs Armored'
      dps='20.27 (+2.7), +13.51 (+1.35) vs Armored / 18.69 (+1.87) +14.02 (+0.47) vs Armored'
      cooldown='0.74 / 2.14'
      Range='7 / 13'

      shield='x'
      health='175'
      armor='1(+1)'
      speed='3.15'
    />
  )
}

export default SiegeTank
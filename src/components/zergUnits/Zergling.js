import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Zergling() {
  return (
    <UnitDisplay
      name='Zergling'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/zergling.gif"}
      alttag='Zergling gif'
      type='Ground Unit'
      description='Fast melee creature. Can morph into a Baneling.'

      from='Spawning Pool'
      minerals='50'
      gas='0'
      supply='0.5'
      buildtime='17'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Claws'
      targets='Ground'
      damage='5 (+1)'
      dps='10 (+2), 14.3 (+2.86) (Adrenal Glands)'
      cooldown='0.497 (-0.143)'
      Range='0.1'

      shield='--'
      health='35'
      armor='1(+1)'
      speed='4.13 (+2.45) / Creep: 5.37 (+3.18)'
    />
  )
}

export default Zergling
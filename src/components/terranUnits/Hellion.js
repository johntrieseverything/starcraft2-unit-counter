import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Hellion() {
  return (
    <UnitDisplay
      name='Hellion'
      image={process.env.PUBLIC_URL + "/assets/Terran Units/Hellion.jpg"}
      alttag='Hellion jpg'
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

      attack='Infernal Flamethrower'
      targets='Ground'
      damage='8 (+1), +6 (+1) vs Light, +11 (+1) vs Light (Infernal Pre-Igniter)'
      dps='4.48 (+0.56), +3.4 (+0.56) vs Light, +6.16 (+0.56) vs Light (Infernal Pre-Igniter)'
      cooldown='1.79'
      Range='5'

      shield='--'
      health='90'
      armor='0(+1)'
      speed='5.95'
    />
  )
}

export default Hellion
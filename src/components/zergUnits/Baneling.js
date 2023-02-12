import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Baneling() {
  return (
    <UnitDisplay
      name='Baneling'
      image={process.env.PUBLIC_URL + "/assets/Zerg Units/Baneling.jpg"}
      alttag='Baneling jpg'
      type='Ground Unit'
      description='Kamikaze unit. Does damage over a small area.'

      from='Zergling'
      minerals='25'
      gas='25'
      supply='0.5'
      buildtime='14'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Volatile Burst'
      targets='Ground'
      damage='16 (+2) (Splash), +19 (+2) vs Light'
      dps=''
      cooldown='(none)'
      Range='0.25 (melee), 2.20 (AoE)'

      shield='--'
      health='30 (+5)'
      armor='0(+1)'
      speed='3.5 (+0.63) / Creep: 4.55 (+0.82)'
    />
  )
}

export default Baneling
import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Viper() {
  return (
    <UnitDisplay
      name='Viper'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Viper.jpg"}
      alttag='Viper jpg'
      type='Air Unit'
      description='The Viper is a Zerg flying support caster that requires a Hive.'

      from='Hive'
      minerals='100'
      gas='200'
      supply='3'
      buildtime='29'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='n/a'
      targets='n/a'
      damage='n/a'
      dps='n/a'
      cooldown='n/a'
      Range='n/a'
      
      shield='--'
      health='150'
      armor='1(+1)'
      speed='4.13'
    />
  )
}

export default Viper
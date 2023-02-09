import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Drone() {
  return (
    <UnitDisplay
      name='Drone'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Drone.gif"}
      alttag='Drone gif'
      type='Ground Unit'
      description='Basic worker unit. Can harvest minerals and Vespene Gas. Can mutate into structures.'

      from='Hatchery'
      minerals='50'
      gas='0'
      supply='1'
      buildtime='12'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Claws'
      targets='Ground'
      damage='5'
      dps='4.67'
      cooldown='1.07'
      Range='0.1'

      shield='--'
      health='45'
      armor='0(+1)'
      speed='3.94'
    />
  )
}

export default Drone
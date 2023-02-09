import React from 'react'
import UnitDisplay from '../UnitDisplay'

function WarpPrism() {
  return (
    <UnitDisplay
      name='Warp Prism'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/WarpPrism.jpg"}
      alttag='Warp Prism jpg'
      type='Air Unit'
      description='Flying transport. Can load and unload units. Can also deploy to create a Psionic Matrix.'

      from='Robotics Facility'
      minerals='250'
      gas='0'
      supply='2'
      buildtime='36'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='n/a'
      targets='n/a'
      damage='n/a'
      dps='n/a'
      cooldown='n/a'
      Range='n/a'

      shield='100'
      health='80'
      armor='0(+1)'
      speed='4.13(+1.23)'
    />
  )
}

export default WarpPrism
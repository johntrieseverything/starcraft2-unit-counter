import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Disruptor() {
  return (
    <UnitDisplay
      name='Disruptor'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Disruptor.jpg"}
      alttag='Disruptor jpg'
      type='Ground Unit'
      description='The disruptor is a light-mechanical unit.'

      from='Robotics Facility'
      minerals='150'
      gas='150'
      supply='3'
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
      health='100'
      armor='1(+1)'
      speed='3.15'
    />
  )
}

export default Disruptor
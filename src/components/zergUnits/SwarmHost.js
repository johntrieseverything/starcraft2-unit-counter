import React from 'react'
import UnitDisplay from '../UnitDisplay'

function SwarmHost() {
  return (
    <UnitDisplay
      name='Swarm Host'
      image={process.env.PUBLIC_URL + "/assets/Zerg Units/SwarmHost.jpg"}
      alttag='Swarm Host jpg'
      type='Ground Unit'
      description='Siege unit that attacks by spawning Locust minions.'

      from='Infestation Pit'
      minerals='100'
      gas='75'
      supply='3'
      buildtime='29'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Acid Spit (Locust)'
      targets='Ground'
      damage='10 (+1)'
      dps='23.25 (+2.33)'
      cooldown='0.43'
      Range='3'

      shield='--'
      health='160'
      armor='1(+1)'
      speed='3.15 / Creep: 4.09'
    />
  )
}

export default SwarmHost
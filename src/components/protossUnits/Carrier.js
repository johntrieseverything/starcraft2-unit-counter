import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Carrier() {
  return (
    <UnitDisplay
      name='Carrier'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Carrier.jpg"}
      alttag='Carrier jpg'
      type='Large Air Unit'
      description='Capital Ship. Can build and launch Interceptors to make attacks.'

      from='Stargate'
      minerals='350'
      gas='250'
      supply='6'
      buildtime='64'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      attack='Interceptors'
      targets='Ground / Air'
      damage='5 (+1) (x2) (x8 Interceptors)'
      dps='37.4 (+7.5) (w/ 8 Interceptors)'
      cooldown='2.14 (Interceptor attack cooldown) 0.27 (Interceptor launch)'
      Range='12'

      shield='150'
      health='300'
      armor='2(+1)'
      speed='2.62'
    />
  )
}

export default Carrier
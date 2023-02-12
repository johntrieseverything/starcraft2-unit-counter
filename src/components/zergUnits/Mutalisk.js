import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Mutalisk() {
  return (
    <UnitDisplay
      name='Mutalisk'
      image={process.env.PUBLIC_URL + "/assets/Zerg Units/Mutalisk.jpg"}
      alttag='Mutalisk jpg'
      type='Air Unit'
      description='Air unit that bounces its shot to strike multiple targets.'

      from='Spire'
      minerals='100'
      gas='100'
      supply='2'
      buildtime='24'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Spines'
      targets='Ground / Air'
      damage='9 (+1.000) (1st bounce), 3 (+0.333) (2nd bounce), 1 (+0.111) (3rd bounce)'
      dps='8.26 (+0.92) (1st bounce), 2.75 (+0.31) (2nd bounce), 0.92 (+0.10) (3rd bounce)'
      cooldown='1.09'
      Range='3'

      shield='--'
      health='120'
      armor='0(+1)'
      speed='5.6'
    />
  )
}

export default Mutalisk
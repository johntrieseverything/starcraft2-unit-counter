import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Ultralisk() {
  return (
    <UnitDisplay
      name='Ultralisk'
      image={process.env.PUBLIC_URL + "/assets/zerg Units/Ultralisk.jpg"}
      alttag='Ultralisk jpg'
      type='Ground Unit'
      description='Heavy assault beast /w PBAoE damage attack.'

      from='Ultralisk Cavern'
      minerals='300'
      gas='200'
      supply='6'
      buildtime='39'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-zerg.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-zerg.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_zerg.gif"}

      attack='Kaiser Blades'
      targets='Ground'
      damage='35 (+3) (Splash 33%)'
      dps='57.38 (+4.9)'
      cooldown='0.61'
      Range='1'

      shield='--'
      health='500'
      armor='2(+1)(+2)'
      speed='4.13 (+0.82) / Creep: 5.37'
    />
  )
}

export default Ultralisk
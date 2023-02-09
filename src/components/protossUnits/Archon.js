import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Archon() {
  return (
    <UnitDisplay
      name='Archon'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Archon.jpg"}
      alttag='Archon jpg'
      type='Ground Unit'
      description='Powerful psionic attacker.'

      from='Gateway'
      minerals='varies'
      gas='varies'
      supply='4'
      buildtime='8.57'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}
s
      attack='Glaive Cannon'
      targets='Ground / Air'
      damage='25 (+3) (Splash) +10 (+1) vs Biological'
      dps='20 (+2.4) +8 (+0.8) vs Biological'
      cooldown='1.25'
      Range='3'

      shield='350'
      health='10'
      armor='0(+1)'
      speed='3.94'
    />
  )
}

export default Archon
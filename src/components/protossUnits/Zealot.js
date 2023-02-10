import React from 'react'
import UnitDisplay from '../UnitDisplay'
import Upgrades from '../Upgrades'

function Zealot() {
  return (
    <div>
      <UnitDisplay
        name='Zealot'
        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Zealot.gif"}
        alttag='Zealot gif'
        type='Small Ground Unit'
        description='Powerful melee warrior'
        from='Gateway'
        minerals='100'
        gas='0'
        supply='2'
        buildtime='27'
        raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
        raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
        raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}
        attack='Psi Blades'
        targets='Ground'
        damage='8 (+1) (x2)'
        dps='18.6 (+2.33)'
        cooldown='0.86'
        Range='0.1'
        shield='50'
        health='100'
        armor='1(+1)'
        speed='3.15, 4.725 with upgrade, (+5.67 during Charge)'
      />
      {/* <Upgrades
        name='Charge'
        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Charge.png"}
        alttag=''
        id='Charge'
        Range='4'
        Cooldown='7'
        Duration='2.5'
        Description='Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.'
        minerals='200'
        gas='200'
        buildtime='200'
        raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
        raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}

      /> */}
    </div>

  )
}

export default Zealot
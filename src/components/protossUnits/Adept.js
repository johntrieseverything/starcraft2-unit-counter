import React from 'react'
import UnitDisplay from '../UnitDisplay'
import Upgrades from '../Upgrades'
import Abilities from '../Abilities'

function Adept() {
  return (
    <div>
      <UnitDisplay
        name='Adept'
        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Adept.jpg"}
        alttag='Adept jpg'
        type='Ground Unit'
        description='Ranged specialist. Can use Psionic Transfer.'
        from='Gateway'
        minerals='100'
        gas='25'
        supply='2'
        buildtime='30 (20)'
        raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
        raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-protoss.gif"}
        raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}
        attack='Glaive Cannon'
        targets='Ground'
        damage='10 (+1)'
        dps='6.2 (+0.62), +12 (+1) vs Light'
        cooldown='1.61 (-0.5)'
        Range='4'
        shield='70'
        health='70'
        armor='1(+1)'
        speed='3.5'
      />
      {/* <Upgrades
        name='Resonating Glaives'
        image={process.env.PUBLIC_URL + "/assets/Protoss Units/Protoss Upgrades/Resonating_Glaives.png"}
        alttag=''
        id='Resonating Glaives'
        Range='n/a'
        Cooldown='n/a'
        Duration='2.5'
        Description='Researched from: Twilight Council. Increases the attack speed of the Adept by 45%.'
        minerals='200'
        gas='200'
        buildtime='200'
        raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-protoss.png"}
        raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_protoss.gif"}
      /> */}
    </div>
  )
}

export default Adept
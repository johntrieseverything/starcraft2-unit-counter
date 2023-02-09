import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Zealot() {
  return (
    <UnitDisplay
      name='Zealot'
      image={process.env.PUBLIC_URL + "/assets/Protoss Units/Zealot.gif"}
      alttag='Zealot gif'
      type='Small Ground Unit'
      description='Powerful melee warrior.'

      from='Gateway'
      minerals='100'
      gas='0'
      supply='2'

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

      upgradeIcon1={process.env.PUBLIC_URL + "/assets/Protoss Units/Zealot.gif"}
      upgradeIcon2=''
      upgradeIcon3=''
      upgradeIcon1alt='Charge'
      upgradeIcon2alt=''
      upgradeIcon3alt=''
      upgrade1Description='test'
      upgrade2Description='test'
      upgrade3Description='test'
    />
  )
}

export default Zealot
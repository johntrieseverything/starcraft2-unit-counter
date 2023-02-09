import React from 'react'
import UnitDisplay from '../UnitDisplay'

function Viking() {
  return (
    <UnitDisplay
      name='Viking'
      image={process.env.PUBLIC_URL + "/assets/terran Units/Viking.jpg"}
      alttag='Viking jpg'
      type='Air Unit'
      description='Durable support flyer. Loaded with strong anti-capital air missiles. Can switch into Assault Mode to attack ground units.'

      from='Starport'
      minerals='150'
      gas='75'
      supply='2'
      buildtime='30'
      raceGas={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Vespene-terran.gif"}
      raceSupply={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Supply-terran.gif"}
      raceBuildtime={process.env.PUBLIC_URL + "/assets/Icons/Race Specific/Buildtime_terran.gif"}

      attack='Gatling Cannon / Lanzer Torpedoes'
      targets='Ground / Air '
      damage='12 (+1), +8 (+1) vs Mechanical / 10 (+1) (x2), +4 vs Armored'
      dps='16.9 (+1.41), +11.3 (+1.41) vs Mechanical / 14 (+1.4), +5.59 vs Armored'
      cooldown='0.71 / 1.43'
      Range='6 / 9'

      shield='x'
      health='135'
      armor='0(+1)'
      speed='3.15 / 3.85'
    />
  )
}

export default Viking
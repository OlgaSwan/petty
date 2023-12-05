import React from 'react'

import Pet from '@component/app/(game-scope)/game/components/pet'
import ConditionsList from '@component/app/(game-scope)/game/components/conditions-list'
import InteractionsList from '@component/app/(game-scope)/game/components/interactions-list'

export default function Game() {
  return (
    <div>Game <Pet/> <ConditionsList/> <InteractionsList diet='Carnivore'/></div>
  )
}



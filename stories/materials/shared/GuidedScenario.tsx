import { useState } from 'react'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import { CharacterDialogue } from './CharacterPortraits.styles'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { GuidedScenarioProps } from './GuidedScenario.types'

/** Lesson data adapter. Scene, facts, choices, bubbles and assistance all remain library components. */
export function GuidedScenario({
  cases,
  selectionLabel,
  factLayout = 'inline',
}: GuidedScenarioProps) {
  const [index, setIndex] = useState(0)
  const [level, setLevel] = useState<'cue' | 'hint' | 'full'>('cue')
  const current = cases[index]
  if (!current) return null
  return (
    <RolePlayExercise
      presentation="instructions"
      density="compact"
      situation=""
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      image={current.image}
      tracker={
        <CharacterDialogue
          density="compact"
          guidance={{ level, onChange: setLevel }}
          lines={current.lines}
        />
      }
    >
      <Common.Row role="group" aria-label={selectionLabel}>
        {cases.map((item, i) => (
          <ChoiceCard
            key={item.id}
            variant="lesson"
            aria-pressed={index === i}
            onClick={() => {
              setIndex(i)
              setLevel('cue')
            }}
          >
            {item.label}
          </ChoiceCard>
        ))}
      </Common.Row>
      <KeyValueList
        tone="material"
        density="compact"
        layout={factLayout}
        items={current.facts}
      />
    </RolePlayExercise>
  )
}

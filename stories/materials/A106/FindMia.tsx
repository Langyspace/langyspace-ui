import { useState } from 'react'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { MaterialQuestions } from '../shared/MaterialQuestions'
import room from './assets/scene-find-mia81.webp'
const pets = [
  { id: 'Mia', label: 'Mia', xPercent: 17, yPercent: 78, prompt: null },
  { id: 'Thor', label: 'Thor', xPercent: 91, yPercent: 70, prompt: null },
]
export function FindMia() {
  const [pet, select] = useState('Mia')
  return (
    <RolePlayExercise
      presentation="instructions"
      situation=""
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      tracker={
        <MaterialQuestions
          key={pet}
          items={[
            {
              id: 'place',
              question: `Where is ${pet}?`,
              cue: 'Describe the place you can see',
              hint: pet === 'Mia' ? 'She’s … the bed' : 'He’s … the sofa',
            },
          ]}
        />
      }
    >
      <SceneExplorer
        presentation="labels"
        labelVisibility="always"
        imageSizing="presentation"
        imageUrl={room}
        imageAlt="Mia is under the bed on the left; Thor sits on the floor next to the sofa on the right"
        hotspots={pets}
        selectedId={pet}
        visitedIds={[pet]}
        onSelect={select}
      />
    </RolePlayExercise>
  )
}

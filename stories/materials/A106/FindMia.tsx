import { useState } from 'react'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { PromptExercise } from '../shared/LessonExercises'
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
        <PromptExercise
          key={pet}
          items={[
            {
              id: 'place',
              prompt: `Where is ${pet}?`,
              hint: 'Look at the pet and the furniture around it',
              answer:
                pet === 'Mia' ? 'She’s under the bed' : 'He’s next to the sofa',
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

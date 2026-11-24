import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { MaterialQuestions } from '../shared/MaterialQuestions'
import { produce, scene } from './A105.data'

export function MarketCase({ request = false }: { request?: boolean }) {
  const items = produce.filter((item) =>
    ['banana', 'apple', 'mango', 'orange'].includes(item.id),
  )
  return (
    <RolePlayExercise
      presentation="instructions"
      situation=""
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      tracker={
        <MaterialQuestions
          items={[
            {
              id: request ? 'request' : 'order',
              question: request
                ? 'What would you like for Kim?'
                : 'Hello! What would you like?',
              cue: request
                ? 'Use Kim’s message and ask the price'
                : 'Choose two fruits and ask the price',
              hint: 'Can I have … and …, please? How much is that?',
            },
          ]}
        />
      }
    >
      <VocabularyGrid
        columns={2}
        density="regular"
        imageVariant="isolated"
        imageFit="contain"
        surface="plain"
        interaction="static"
        items={items.map((item) => ({
          ...item,
          imageUrl: scene(item.id),
          imageAlt: item.translation,
          badge: `$${item.price} each`,
        }))}
        revealedIds={[]}
      />
    </RolePlayExercise>
  )
}

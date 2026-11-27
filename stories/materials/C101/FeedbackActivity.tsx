import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { MaterialQuestions } from '../shared/MaterialQuestions'
export function FeedbackActivity() {
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
              id: 'observe',
              question: 'How would you open the conversation?',
              cue: 'Describe one specific observation without assigning blame',
              hint: 'When …, I found … difficult to follow',
            },
            {
              id: 'clarify',
              question: 'How would you invite Raj’s perspective?',
              cue: 'Ask what shaped the presentation and listen to the reply',
              hint: 'How did you see …? Was there anything that made … difficult?',
            },
            {
              id: 'agree',
              question: 'What next step would you agree together?',
              cue: 'Respond to Raj’s explanation and propose a practical action',
              hint: 'Given what you’ve said, could we …? Would that help?',
            },
          ]}
        />
      }
    >
      <Common.Surface>
        <Common.Heading>The situation</Common.Heading>
        <KeyValueList
          tone="material"
          density="compact"
          layout="stacked"
          items={[
            {
              id: 'observed',
              label: 'Laura observed',
              value:
                'Second part hard to follow; deadline question unanswered.',
            },
            {
              id: 'context',
              label: 'Context',
              value: 'Thirty minutes; Raj’s first major client.',
            },
            {
              id: 'goal',
              label: 'Your goal',
              value: 'Clarify key points and prepare answers together.',
            },
          ]}
        />
      </Common.Surface>
    </RolePlayExercise>
  )
}

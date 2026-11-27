import { useId, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { CharacterDialogue } from './CharacterPortraits.styles'
import { LessonHint } from './LessonHint'
import * as Common from './Lesson.styles'
import * as S from './GuidedConversation.styles'
import type {
  GuidedConversationLabels,
  GuidedConversationMode,
  GuidedConversationProps,
} from './GuidedConversation.types'

const defaultLabels: GuidedConversationLabels = {
  switcher: 'Conversation stages',
  model: 'Model',
  rehearse: 'Rehearse',
  independent: 'Without the script',
  previous: 'Previous turn',
  next: 'Next turn',
  turn: 'Turn',
  of: 'of',
  learner: 'You',
  support: 'Phrase support',
  hideSupport: 'Hide support',
}

export function GuidedConversation({
  children,
  turns,
  rehearsalInstruction,
  independentInstruction,
  labels: authoredLabels,
  defaultMode = 'model',
  onModeChange,
}: GuidedConversationProps) {
  const labels = { ...defaultLabels, ...authoredLabels }
  const [mode, setMode] = useState<GuidedConversationMode>(defaultMode)
  const [index, setIndex] = useState(0)
  const panelId = useId()
  const turn = turns[Math.min(index, turns.length - 1)]!
  const modes: readonly GuidedConversationMode[] = [
    'model',
    'rehearse',
    'independent',
  ]
  return (
    <S.Root data-guided-conversation={mode}>
      <S.Modes role="group" aria-label={labels.switcher}>
        {modes.map((value, i) => (
          <Button
            key={value}
            variant={mode === value ? 'brand' : 'secondary'}
            size="sm"
            aria-pressed={mode === value}
            aria-controls={panelId}
            onClick={() => {
              if (mode === value) return
              setMode(value)
              onModeChange?.(value)
            }}
          >
            {i + 1}. {labels[value]}
          </Button>
        ))}
      </S.Modes>
      <div id={panelId}>
        {mode === 'model' ? (
          children
        ) : mode === 'rehearse' ? (
          <Common.Stack>
            <S.Cue>{rehearsalInstruction}</S.Cue>
            <CharacterDialogue
              density="regular"
              lines={[
                {
                  id: `${turn.id}-partner`,
                  speaker: turn.partner,
                  avatarUrl: turn.avatarUrl,
                  side: 'start',
                  content: turn.partnerLine,
                },
                {
                  id: `${turn.id}-learner`,
                  speaker: labels.learner,
                  participant: 'learner',
                  side: 'end',
                  content: <S.Cue>{turn.cue}</S.Cue>,
                },
              ]}
            />
            <LessonHint
              key={turn.id}
              label={labels.support}
              hideLabel={labels.hideSupport}
              context={turn.cue}
            >
              {turn.support.map((phrase) => (
                <p key={phrase}>{phrase}</p>
              ))}
            </LessonHint>
            <S.Navigation>
              <Button
                variant="secondary"
                size="sm"
                disabled={index === 0}
                onClick={() => setIndex((value) => Math.max(0, value - 1))}
              >
                {labels.previous}
              </Button>
              <Common.Counter role="status">
                {labels.turn} {index + 1} {labels.of} {turns.length}
              </Common.Counter>
              <Button
                variant="secondary"
                size="sm"
                disabled={index === turns.length - 1}
                onClick={() =>
                  setIndex((value) => Math.min(turns.length - 1, value + 1))
                }
              >
                {labels.next}
              </Button>
            </S.Navigation>
          </Common.Stack>
        ) : (
          <S.Task>
            <S.Cue>{independentInstruction}</S.Cue>
          </S.Task>
        )}
      </div>
    </S.Root>
  )
}

import { PromptExercise } from '../shared/LessonExercises'
import { useState } from 'react'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { content, ana, kim, toggle, paintingScene } from './B101.data'
import type { SpeechSectionProps } from './B101.types'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
export function DialogueSection({
  part,
  speech,
}: SpeechSectionProps & { part: number }) {
  const [translated, setTranslated] = useState<string[]>([])
  const rows =
    part === 0 ? content.dialogue.slice(0, 6) : content.dialogue.slice(6)
  return (
    <LearningDialogue
      density="compact"
      lines={rows.map((line) => ({
        id: line.id,
        speaker: line.who === 'kim' ? 'Kim' : 'Ana',
        avatarUrl: line.who === 'kim' ? kim : ana,
        side: line.who === 'kim' ? 'start' : 'end',
        content: line.text,
        translation: line.g,
        audioLabel: `Listen: ${line.text}`,
      }))}
      translatedIds={translated}
      playingId={speech.playingId}
      onTranslate={(id) => setTranslated((old) => toggle(old, id))}
      onPlay={(id) => {
        const line = rows.find((l) => l.id === id)
        if (line) speech.speak([{ id, text: line.text, speaker: line.who }])
      }}
    />
  )
}
export function ComprehensionSection({ part }: { part?: number }) {
  return (
    <PromptExercise
      items={content.comprehension
        .filter(
          (_, index) =>
            part === undefined || (part === 0 ? index < 2 : index >= 2),
        )
        .map((item, index) => ({
          id: String(index),
          prompt: item.q,
          answer: item.a,
        }))}
    />
  )
}
export function GrammarSection() {
  return (
    <RolePlayExercise
      presentation="instructions"
      density="compact"
      situation=""
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      image={{
        src: paintingScene,
        alt: 'Ana and Kim in the blue living room, with Ana holding a paint roller.',
      }}
      tracker={
        <Common.Stack>
          <GrammarTable
            title="Activity and result"
            captionVisibility="screen-reader"
            columns={{
              subject: 'What do you want to say?',
              verb: 'Form',
              example: 'Ana’s update',
            }}
            rows={[
              {
                id: 'activity',
                subject: 'What have you been doing?',
                verb: 'have / has been + -ing',
                example: 'I’ve been painting all week.',
              },
              {
                id: 'result',
                subject: 'How many rooms have you painted?',
                verb: 'have / has + past participle',
                example: 'I’ve painted two rooms.',
              },
            ]}
            explanation={
              <Common.Stack>
                <Common.Hint>
                  The continuous tells us about the activity. It can still be
                  happening or may have just stopped.
                </Common.Hint>
                <Common.Hint>
                  The simple form tells us the result: two rooms are finished.
                </Common.Hint>
                <Common.Hint>
                  How long? For a period: for two weeks. Since a starting point:
                  since Monday.
                </Common.Hint>
              </Common.Stack>
            }
          />
        </Common.Stack>
      }
    >
      <Common.Hint>
        Ana has spent the week painting. The living room and kitchen are
        finished; the bedroom is next.
      </Common.Hint>
    </RolePlayExercise>
  )
}

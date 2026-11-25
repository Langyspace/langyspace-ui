import { PromptExercise } from '../shared/LessonExercises'
import { ana, kim } from '../shared/characterPortraits'
import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { MaterialLearningDialogue as LearningDialogue } from '../shared/MaterialLearningDialogue'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { content, text, toggle } from './Frontend.data'
import type { AudioProps, IndexedAudioProps } from './Frontend.types'
import * as S from './Frontend.styles'
export function Dialogue({ index, media }: IndexedAudioProps) {
  const [translated, setTranslated] = useState<string[]>([])
  return (
    <LearningDialogue
      density="compact"
      lines={content.dialogue.slice(index * 5, index * 5 + 5).map((line) => ({
        id: line.id,
        speaker: line.who === 'ana' ? 'Ana' : 'Kim',
        avatarUrl: line.who === 'ana' ? ana : kim,
        side: line.who === 'ana' ? 'end' : 'start',
        content: text(line.id),
        translation: line.g,
        audioLabel: `Listen: ${text(line.id)}`,
      }))}
      translatedIds={translated}
      onTranslate={(id) => setTranslated((old) => toggle(old, id))}
      playingId={media.playingId}
      onPlay={(id) => media.play([id])}
    />
  )
}
export function Comprehension({ part }: { part?: number }) {
  return (
    <PromptExercise
      density={part === undefined ? 'compact' : 'regular'}
      items={content.dialogueQuestions
        .filter((item) => part === undefined || item.part === part)
        .map((item) => ({
          id: item.id,
          prompt: item.q,
          answer: item.a,
          hint: item.hint,
        }))}
    />
  )
}
export function Grammar({ media }: AudioProps) {
  const [revealed, setRevealed] = useState<string[]>([]),
    [support, setSupport] = useState(false),
    all = content.grammar.every((row) => revealed.includes(row[4]!))
  return (
    <S.GrammarColumns>
      <S.Stack>
        <S.Explanation>
          <h3>Now or a finished past time?</h3>
          <p>
            <b>I’ve fixed it.</b> Focus on the result now. <b>Yet</b> marks
            unfinished work: I haven’t deployed it yet.
          </p>
          <p>
            Use <b>for</b> or <b>since</b> for something that continues now.
            With a finished past time, use the past simple:{' '}
            <b>I fixed it yesterday.</b>
          </p>
        </S.Explanation>
        {all ? (
          <S.Explanation>
            <h3>Duration or a finished time?</h3>
            <p>
              <b>I’ve worked with React for two years.</b> The work continues
              now. <b>I fixed it yesterday.</b> The finished past time is given.
            </p>
          </S.Explanation>
        ) : null}
      </S.Stack>
      <S.Stack>
        <GrammarTable
          title="Present perfect"
          columns={{ subject: 'Focus', verb: 'Form', example: 'Example' }}
          hiddenAnswers
          revealedIds={revealed}
          rows={content.grammar.map(
            ([subject, verb, example, translation, id]) => ({
              id: id!,
              subject,
              verb,
              example,
              translation,
              audioLabel: `Listen: ${example}`,
            }),
          )}
          onReveal={(id) => {
            setRevealed((old) => [...old, id])
            media.play([id])
          }}
          onPlay={(id) => media.play([id])}
          revealLabel="Show the form and example"
        />
        {all ? (
          <S.Now>
            <b>Now you</b>
            <p>
              Say two things you’ve done this week and one you haven’t done yet.
              Then say how long you’ve worked with (or studied) something.
            </p>
            <Button
              size="sm"
              variant="secondary"
              aria-expanded={support}
              onClick={() => setSupport(!support)}
            >
              {support ? 'Hide support' : 'Show support'}
            </Button>
            {support ? (
              <S.Hint>
                I’ve … · I haven’t … yet. · I’ve worked with … for … years.
              </S.Hint>
            ) : null}
          </S.Now>
        ) : null}
      </S.Stack>
    </S.GrammarColumns>
  )
}

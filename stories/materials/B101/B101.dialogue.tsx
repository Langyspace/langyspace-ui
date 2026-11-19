import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { content, ana, kim, toggle } from './B101.data'
import type { SpeechSectionProps } from './B101.types'
import * as S from './B101.styles'
export function DialogueSection({
  part,
  speech,
}: SpeechSectionProps & { part: number }) {
  const [translated, setTranslated] = useState<string[]>([])
  const rows =
    part === 0 ? content.dialogue.slice(0, 6) : content.dialogue.slice(6)
  return (
    <LearningDialogue
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
export function ComprehensionSection() {
  const [ids, setIds] = useState<string[]>([])
  return (
    <S.Stack>
      {content.comprehension.map((row, i) => (
        <RevealCard
          key={row.q}
          marker={i + 1}
          answer={row.a}
          revealed={ids.includes(row.q)}
          onClick={() => setIds((old) => toggle(old, row.q))}
        >
          {row.q}
        </RevealCard>
      ))}
      <S.Now>
        <b>Now you</b>
        <p>
          Have you ever started a new hobby? What have you been doing recently?
        </p>
      </S.Now>
    </S.Stack>
  )
}
export function GrammarSection() {
  const [ids, setIds] = useState<string[]>([]),
    [starters, setStarters] = useState(false)
  const all = content.grammar.every((row) => ids.includes(row[4] ?? ''))
  return (
    <S.GrammarColumns>
      <S.Stack>
        <S.Explanation>
          <h3>Activity or result?</h3>
          <p>
            <b>I’ve been painting all week.</b>
            <br />
            Focus: the activity and the time spent.
          </p>
          <p>
            <b>I’ve painted two rooms.</b>
            <br />
            Focus: the completed result or quantity.
          </p>
        </S.Explanation>
        <S.Explanation>
          <h3>Build the continuous form</h3>
          <p>
            I / you / we / they <b>have been + -ing</b>
            <br />
            He / she / it <b>has been + -ing</b>
          </p>
          <p>
            <b>I haven’t been sleeping well.</b>
            <br />
            <b>Has she been working late?</b> — Yes, she has.
          </p>
        </S.Explanation>
        <details>
          <summary>Duration and verb choice</summary>
          <S.Explanation>
            <p>
              <b>for</b> + a period: for two weeks.
              <br />
              <b>since</b> + a starting point: since Monday.
            </p>
            <p>
              An activity can still be happening or have just stopped: “You’re
              wet. Have you been swimming?”
            </p>
            <p>
              Use the simple form with state verbs:{' '}
              <b>I’ve known her for years.</b>
            </p>
          </S.Explanation>
        </details>
      </S.Stack>
      <S.Stack>
        <GrammarTable
          title="Doing or done?"
          columns={{
            subject: 'Focus',
            verb: 'Form',
            example: 'Example',
          }}
          rows={content.grammar.map(
            ([subject, verb, example, translation, id]) => ({
              id: id ?? '',
              subject,
              verb,
              example,
              translation,
            }),
          )}
          hiddenAnswers
          revealedIds={ids}
          revealLabel="Show words and example"
          onReveal={(id) => setIds((old) => [...old, id])}
        />
        {all ? (
          <S.Now>
            <b>Now you</b>
            <p>
              One thing you’ve been doing lately, and how long. Then one thing
              you’ve finished this week.
            </p>
            <Button
              variant="secondary"
              size="sm"
              aria-expanded={starters}
              onClick={() => setStarters(!starters)}
            >
              {starters ? 'Hide starters' : 'Show starters'}
            </Button>
            {starters ? (
              <S.Hint>
                I’ve been …ing for … · I’ve finished … · I’ve …ed …
              </S.Hint>
            ) : null}
          </S.Now>
        ) : null}
      </S.Stack>
    </S.GrammarColumns>
  )
}

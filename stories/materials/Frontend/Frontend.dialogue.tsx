import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { content, image, text, toggle } from './Frontend.data'
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
        avatarUrl: image(`bust_${line.who}`),
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
export function Comprehension() {
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <S.Questions>
      {content.dialogueQuestions.map((q, i) => (
        <S.Question key={q.q}>
          <S.Number>{i + 1}</S.Number>
          <div>
            {q.q}
            {revealed.includes(q.q) ? <S.Hint>{q.a}</S.Hint> : null}
          </div>
          <Button
            size="sm"
            variant="secondary"
            aria-expanded={revealed.includes(q.q)}
            onClick={() => setRevealed((old) => toggle(old, q.q))}
          >
            {revealed.includes(q.q) ? 'Hide' : 'Answer'}
          </Button>
        </S.Question>
      ))}
    </S.Questions>
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
          <h3>Agora ou com data</h3>
          <p>
            <b>I’ve + particípio</b> diz o que está feito e vale agora, sem
            dizer quando: I’ve fixed it. Com <b>yet</b>, o que ainda não: I
            haven’t deployed it yet. Com <b>for</b> (há) e <b>since</b> (desde),
            uma coisa que começou e continua até hoje. Quando você diz quando
            (yesterday, last year, in 2023), use o passado:{' '}
            <b>I fixed it yesterday.</b>
          </p>
        </S.Explanation>
        {all ? (
          <S.Explanation>
            <h3>Dois cuidados</h3>
            <p>
              “Trabalho com React há dois anos” é{' '}
              <b>I’ve worked with React for two years</b> (e não I work with
              React since two years). E, com data, sem I’ve:{' '}
              <b>I fixed it yesterday</b> (e não I’ve fixed it yesterday).
            </p>
          </S.Explanation>
        ) : null}
      </S.Stack>
      <S.Stack>
        <GrammarTable
          title="Present perfect"
          columns={{ subject: 'Para quê', verb: 'Forma', example: 'Exemplo' }}
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
          revealLabel="Mostrar a forma e o exemplo"
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

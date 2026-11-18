import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { AnswerDisclosure } from '../shared/AnswerDisclosure'
import * as S from '../shared/Lesson.styles'
import type { SpeechProps } from '../shared/Lesson.types'
import { toggleId } from '../shared/lessonState'
import ana from '../A101/assets/bust_ana.webp'
import kim from '../A101/assets/bust_kim.webp'
import data from './A102.content.json'
import { VocabularyArtwork } from './A102.styles'
import type { ChoiceProps, ModelProps, PromptProps } from './A102.types'

const urls = import.meta.glob<string>('./assets/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})
const files: Readonly<Record<string, string>> = data.images

function image(key: string, alt = '') {
  const src = urls['./assets/' + files[key]]
  if (!src) throw new Error('Imagem ausente: ' + key)
  return { src, alt }
}

export function Prompts({ items }: PromptProps) {
  return (
    <S.Questions>
      {items.map(({ q, a }, index) => (
        <S.Question key={q}>
          <S.Number>{index + 1}</S.Number>
          <S.Stack>
            <strong>{q}</strong>
            {a ? <AnswerDisclosure question={q} answer={a} /> : null}
          </S.Stack>
        </S.Question>
      ))}
    </S.Questions>
  )
}

export function NameChoice({ item, speech }: ChoiceProps) {
  const [tried, setTried] = useState<number[]>([])
  const complete = tried.includes(item.a)
  const last = tried.at(-1)
  return (
    <ExercisePanel
      title={item.t}
      media={
        item.im ? <S.WarmImage {...image(item.im, item.alt)} /> : undefined
      }
    >
      {item.o.map((option, index) => (
        <QuizOption
          key={option}
          letter={String.fromCharCode(65 + index)}
          density="compact"
          disabled={complete}
          state={
            tried.includes(index)
              ? index === item.a
                ? 'correct'
                : 'wrong'
              : 'default'
          }
          onClick={() => {
            setTried((previous) => [...previous, index])
            if (index === item.a && item.id)
              speech.speak([{ id: item.id, text: option }])
          }}
        >
          {option}
        </QuizOption>
      ))}
      <AnswerDisclosure question={item.t} answer={item.o[item.a]} />
      {last !== undefined ? (
        <S.Hint role="status">
          {complete
            ? (item.now ?? 'Correto!')
            : (item.why?.[last] ?? 'Tente novamente.')}
        </S.Hint>
      ) : null}
    </ExercisePanel>
  )
}

export function NameModel({ question, models, cue, alt }: ModelProps) {
  return (
    <ExercisePanel
      title={question}
      media={cue ? <S.WarmImage {...image(cue, alt)} /> : undefined}
    >
      {models.map((text) => (
        <p key={text}>{text.replace(/\{[^}]+\}/g, '____')}</p>
      ))}
      <AnswerDisclosure
        question={question}
        answer={models.map((text) => (
          <p key={text}>{text.replace(/[{}]/g, '')}</p>
        ))}
      />
    </ExercisePanel>
  )
}

const bank: Readonly<Record<string, { o: string[]; a: string }>> = data.bank
const gaps: Readonly<Record<string, string>> = data.gaps
const audio = data.lines.map((line) => ({
  id: line.id,
  text: line.text,
  speaker: line.who,
}))
const gapIds = Object.keys(bank)
const portraits: Readonly<Record<string, string>> = { ana, kim }

export function NameDialogue({
  speech,
  practice = false,
}: SpeechProps & { practice?: boolean }) {
  const [translated, setTranslated] = useState<string[]>([])
  const [solved, setSolved] = useState<string[]>([])
  const [incorrect, setIncorrect] = useState('')
  const all = translated.length === audio.length
  const current = gapIds.find((key) => !solved.includes(key))
  const playing = audio.some(({ id }) => id === speech.playingId)
  return (
    <S.Stack>
      <S.Row>
        {!practice ? (
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              playing ? speech.togglePause() : speech.speak(audio)
            }
          >
            {playing
              ? speech.paused
                ? 'Resume'
                : 'Pause'
              : 'Listen to the dialogue'}
          </Button>
        ) : (
          <S.Hint role="status">
            {solved.length}/{gapIds.length}
          </S.Hint>
        )}
        <Button
          variant="secondary"
          size="sm"
          aria-expanded={all}
          onClick={() => setTranslated(all ? [] : audio.map(({ id }) => id))}
        >
          {all ? 'Ocultar tradução' : 'Ver em português'}
        </Button>
      </S.Row>
      <LearningDialogue
        density="compact"
        lines={data.lines.map((line) => {
          const template = practice ? (gaps[line.id] ?? line.text) : line.text
          const gap = /\{(\d+)\}/.exec(template)?.[1]
          const answer = gap ? bank[gap] : undefined
          const hidden = gap && !solved.includes(gap)
          return {
            id: line.id,
            speaker: line.who === 'ana' ? 'Ana' : 'Kim',
            side: line.who === 'ana' ? 'start' : 'end',
            avatarUrl: portraits[line.who],
            translation: line.g,
            audioLabel: hidden ? undefined : 'Ouvir: ' + line.text,
            content: (
              <S.Stack>
                {template.replace(/\{(\d+)\}/g, (_, key: string) =>
                  solved.includes(key) ? (bank[key]?.a ?? '____') : '____',
                )}
                {gap && gap === current && answer ? (
                  <>
                    <S.Row role="group" aria-label="Opções da lacuna">
                      {answer.o.map((option) => (
                        <Button
                          key={option}
                          variant={
                            incorrect === option ? 'danger' : 'secondary'
                          }
                          size="sm"
                          onClick={() => {
                            if (option === answer.a) {
                              setSolved((old) => [...old, gap])
                              setIncorrect('')
                            } else setIncorrect(option)
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </S.Row>
                    {incorrect ? (
                      <S.Hint role="status">Tente novamente.</S.Hint>
                    ) : null}
                  </>
                ) : null}
                {hidden && answer && (
                  <AnswerDisclosure
                    question={'Lacuna ' + gap}
                    answer={answer.a}
                  />
                )}
              </S.Stack>
            ),
          }
        })}
        translatedIds={translated}
        onTranslate={(id) => setTranslated((old) => toggleId(old, id))}
        playingId={speech.playingId}
        onPlay={(id) => {
          const line = audio.find((entry) => entry.id === id)
          if (line) speech.speak([line])
        }}
      />
      {speech.error ? (
        <S.AudioError role="status">{speech.error}</S.AudioError>
      ) : null}
    </S.Stack>
  )
}

export function NameRolePlay() {
  const [support, setSupport] = useState(false)
  const [completed, setCompleted] = useState<string[]>([])
  const role = data.role
  return (
    <RolePlayExercise
      presentation="tracker"
      density="compact"
      situation={role.txt}
      image={image(role.img, role.alt)}
      support={role.sup}
      steps={role.ck.map((label, i) => ({ id: String(i), label }))}
      supportVisible={support}
      onSupportToggle={() => setSupport(!support)}
      completedIds={completed}
      onStepToggle={(id) => setCompleted((old) => toggleId(old, id))}
      labels={{
        show: 'Mostrar apoio',
        hide: 'Esconder apoio',
        steps: 'Passo a passo · a professora marca',
      }}
    />
  )
}

export function TalkSupport({
  words,
}: {
  words: readonly { ic: string; en: string; pt: string }[]
}) {
  return (
    <S.Row>
      {words.map(({ ic, en, pt }) => (
        <S.Surface key={en}>
          <VocabularyArtwork {...image(ic)} />
          <strong>{en}</strong>
          <S.Hint>{pt}</S.Hint>
        </S.Surface>
      ))}
    </S.Row>
  )
}

export function NameVocabulary({
  speech,
  numbers = false,
}: SpeechProps & { numbers?: boolean }) {
  const sound = (id: string, text: string) => speech.speak([{ id, text }])
  if (numbers) {
    return (
      <S.Stack>
        <S.Row>
          {data.numbers.map((name, index) => (
            <Button
              key={name}
              size="sm"
              variant="secondary"
              onClick={() => sound('N' + index, name)}
            >
              {index} · {name}
            </Button>
          ))}
        </S.Row>
        <S.Surface>
          <VocabularyArtwork {...image('x_telephone')} />
          <Button
            variant="secondary"
            size="sm"
            onClick={() => sound('PH1', data.phoneReading)}
          >
            Ouvir: {data.numberAudio}
          </Button>
          {data.numberNotes.slice(1).map((text) => (
            <p key={text}>{text}</p>
          ))}
        </S.Surface>
      </S.Stack>
    )
  }

  return (
    <S.Stack>
      {data.alphabet.map(({ s, l, hot }) => (
        <S.Surface key={s}>
          <strong>{s}</strong>
          <S.Row>
            {[...l].map((letter) => (
              <Button
                key={letter}
                variant={hot?.includes(letter) ? 'brand' : 'secondary'}
                size="sm"
                aria-label={'Ouvir: ' + letter}
                onClick={() => sound('letter-' + letter, letter)}
              >
                {letter}
              </Button>
            ))}
          </S.Row>
        </S.Surface>
      ))}
      <S.Hint>{data.pronunciationNote.at(-1)}</S.Hint>
    </S.Stack>
  )
}

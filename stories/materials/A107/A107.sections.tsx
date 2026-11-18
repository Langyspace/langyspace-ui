import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { TextInput } from '../../../src/components/Form/TextInput'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { AnswerDisclosure } from '../shared/AnswerDisclosure'
import { CorrectionPractice } from '../shared/LessonPractice'
import { toggleId } from '../shared/lessonState'
import type { SpeechProps } from '../shared/Lesson.types'
import type { SpeechLine } from '../shared/useLessonSpeech.types'
import content from './A107.content.json'
import officer from './assets/bust_officer.svg'
import passport from './assets/ap_passport.svg'
import gate from './assets/ap_gate.svg'
import ana from '../UXLab/assets/bust_ana.png'
import kim from '../UXLab/assets/bust_kim.png'
import * as S from '../shared/Lesson.styles'
import * as Styled from './A107.styles'

function tile(text: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="white" rx="12"/><text x="60" y="83" text-anchor="middle" font-weight="700" font-size="63" font-family="Arial, Segoe UI Emoji, sans-serif" fill="#0b0b0c">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
const pictures: Record<string, { src: string; alt: string }> = {
  ap_passport: {
    src: passport,
    alt: 'Documento azul com um globo dourado na capa',
  },
  ap_gate: { src: gate, alt: 'Entrada numerada 14 no aeroporto' },
  ap_taxi: { src: tile('🚕'), alt: 'Carro amarelo com luz no teto' },
  ap_bus: { src: tile('🚌'), alt: 'Veículo comprido com várias janelas' },
  ap_plane: { src: tile('✈️'), alt: 'Veículo com asas' },
  ap_suitcase: { src: tile('🧳'), alt: 'Bagagem com rodas e alça' },
}
const vocabulary = content.vocabulary.map(({ id, word, translation }) => ({
  id,
  word,
  translation,
  imageUrl: pictures[id]?.src ?? '',
  imageAlt: pictures[id]?.alt ?? '',
}))
const numbers = content.numbers.map(({ value: number, word }) => ({
  id: String(number),
  word: String(word),
  translation: '',
  imageUrl: tile(String(number)),
  imageAlt: String(number),
}))

export function Vocabulary({
  speech,
  isNumbers = false,
}: SpeechProps & { isNumbers?: boolean }) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [hint, setHint] = useState(false)
  const items = isNumbers ? numbers : vocabulary
  const speak = (id: string) => {
    const word = items.find((item) => item.id === id)?.word
    if (word) speech.speak([{ id, text: word }])
  }
  return (
    <S.Stack>
      <S.QuestionTitle>
        {isNumbers ? 'What’s the number?' : 'What’s this?'}
      </S.QuestionTitle>
      <VocabularyGrid
        items={items}
        density="compact"
        revealedIds={revealed}
        showInitial={hint}
        revealOnHover={false}
        revealVariant="tooltip"
        onReveal={(id) => setRevealed((old) => toggleId(old, id))}
        onPlay={speak}
      />
      <S.Row>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={hint}
          onClick={() => setHint(!hint)}
        >
          Dica: primeira letra
        </Button>
      </S.Row>
      {isNumbers ? (
        <S.Surface>
          <p>Os números do meio juntam a dezena e a unidade.</p>
          <S.Row>
            {[
              [32, 'thirty-two'],
              [45, 'forty-five'],
            ].map(([value, word]) => (
              <Button
                key={value}
                variant="secondary"
                size="sm"
                onClick={() =>
                  speech.speak([{ id: 'N.' + value, text: String(word) }])
                }
              >
                {value} = {word}
              </Button>
            ))}
          </S.Row>
          <p>
            <strong>Fourteen</strong> (14) e <strong>forty</strong> (40) começam
            igual. A diferença está na força, que a próxima página treina.
          </p>
        </S.Surface>
      ) : null}
    </S.Stack>
  )
}

export function AirportWarmUp({
  index,
  speech,
}: SpeechProps & { index: number }) {
  const item = content.warmUps[index]!
  const [showOptions, setShowOptions] = useState(index === 0)
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(item.a)
  const last = attempts.at(-1)
  const feedback: Readonly<Record<string, string | undefined>> = item.why
  const image = pictures[item.im]!
  return (
    <ExercisePanel
      title={item.q}
      media={<Styled.Cue src={image.src} alt={image.alt} />}
    >
      {showOptions ? (
        item.o.map((label, i) => (
          <QuizOption
            key={label}
            density="compact"
            letter={String.fromCharCode(65 + i)}
            state={
              attempts.includes(i)
                ? i === item.a
                  ? 'correct'
                  : 'wrong'
                : 'default'
            }
            aria-pressed={attempts.includes(i)}
            disabled={done}
            onClick={() => {
              setAttempts((old) => [...old, i])
              if (i === item.a)
                speech.speak([{ id: item.id, text: label, speaker: 'ana' }])
            }}
          >
            {label}
          </QuizOption>
        ))
      ) : (
        <S.Row>
          <Button variant="secondary" onClick={() => setShowOptions(true)}>
            Show options
          </Button>
        </S.Row>
      )}
      <AnswerDisclosure question={item.q} answer={item.o[item.a]} />
      {done ? (
        <S.Hint role="status">{item.now}</S.Hint>
      ) : last !== undefined ? (
        <S.Hint role="status">{feedback[last]}</S.Hint>
      ) : null}
    </ExercisePanel>
  )
}

export function AirportDialogue({
  part,
  speech,
}: SpeechProps & { part: number }) {
  const [translations, setTranslations] = useState<string[]>([])
  const lines =
    part === 0 ? content.dialogue.slice(0, 6) : content.dialogue.slice(6)
  const ids = lines.map((line) => line.id)
  const all = ids.every((id) => translations.includes(id))
  return (
    <S.Stack>
      <S.Row>
        <Button
          variant="secondary"
          size="sm"
          aria-expanded={all}
          onClick={() => setTranslations(all ? [] : ids)}
        >
          {all ? 'Ocultar tradução' : 'Ver em português'}
        </Button>
      </S.Row>
      <LearningDialogue
        density="compact"
        lines={lines.map((line) => ({
          id: line.id,
          speaker: line.who === 'officer' ? 'Officer' : 'Ana',
          avatarUrl: line.who === 'officer' ? officer : ana,
          side: line.who === 'officer' ? 'start' : 'end',
          content: line.en,
          translation: line.g,
          audioLabel: `Ouvir: ${line.en}`,
        }))}
        translatedIds={translations}
        playingId={speech.playingId}
        onTranslate={(id) => setTranslations((old) => toggleId(old, id))}
        onPlay={(id) => {
          const line = lines.find((item) => item.id === id)
          if (line) speech.speak([{ id, text: line.en, speaker: line.who }])
        }}
      />
    </S.Stack>
  )
}

export function QuestionWords({ speech }: SpeechProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [support, setSupport] = useState(false)
  return (
    <S.Stack>
      <S.Surface>
        <strong>Ouça a primeira palavra</strong>
        <p>
          Na imigração, você não precisa entender a pergunta inteira. Ouça a
          primeira palavra: ela diz o tipo de resposta.
        </p>
      </S.Surface>
      <S.Hint>
        Abra cada linha e responda como a Ana: férias · 14 dias · Park Hotel. Na
        feira: a manga, R$ 3.
      </S.Hint>
      <S.Questions>
        {content.questionWords.map(({ context, word, example, pt, id }, i) => {
          const open = revealed.includes(id)
          return (
            <S.Question key={id}>
              <S.Number>{i + 1}</S.Number>
              <S.Stack>
                <strong>{context}</strong>
                <S.Row>
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-expanded={open}
                    aria-label={`${open ? 'Hide answer' : 'Answer'}: ${context}`}
                    onClick={() => {
                      setRevealed((old) => toggleId(old, id))
                      if (!open)
                        speech.speak([
                          { id, text: example, speaker: 'officer' },
                        ])
                    }}
                  >
                    {open ? 'Hide answer' : 'Answer'}
                  </Button>
                </S.Row>
                {open ? (
                  <S.Stack>
                    <span>
                      {word} · <span lang="pt-BR">{pt}</span>
                    </span>
                    <Button
                      size="sm"
                      variant="text"
                      onClick={() =>
                        speech.speak([
                          { id, text: example, speaker: 'officer' },
                        ])
                      }
                    >
                      {example}
                    </Button>
                  </S.Stack>
                ) : null}
              </S.Stack>
            </S.Question>
          )
        })}
      </S.Questions>
      {revealed.length === content.questionWords.length ? (
        <S.Surface>
          <strong>Respostas curtas</strong>
          <p>
            Responda só o que perguntaram: Fourteen days. · At the Park Hotel. ·
            Vacation. Não precisa de frase inteira.
          </p>
          <strong>Agora você</strong>
          <p>Where are you from? · How long is your vacation?</p>
          <S.Hint>Se você não tem férias, invente.</S.Hint>
          <S.Row>
            <Button
              variant="secondary"
              size="sm"
              aria-expanded={support}
              onClick={() => setSupport(!support)}
            >
              Começos de frase
            </Button>
          </S.Row>
          {support ? <p>I’m from … · … days.</p> : null}
        </S.Surface>
      ) : null}
    </S.Stack>
  )
}

const teacher: Readonly<Record<string, string>> = content.teacherLines
const conversation: Readonly<Record<string, string>> = Object.fromEntries(
  content.dialogue
    .map((l) => [l.id, l.en])
    .concat([['Q.long', 'How long are you staying?']]),
)
export function YourTrip({
  speech,
  part,
  swapped,
  done,
  onSwap,
  onMark,
}: SpeechProps & {
  part: number
  swapped: boolean
  done: readonly string[]
  onSwap: () => void
  onMark: (id: string) => void
}) {
  const turns = swapped ? content.officerTurns : content.travellerTurns
  const partTurns = part === 0 ? turns.slice(0, 6) : turns.slice(6)
  const prefix = swapped ? 'officer-' : 'traveller-'
  return (
    <S.Stack>
      <S.Row>
        <strong>
          {swapped
            ? 'Você: agente · Professora: Ana'
            : 'Você: viajante · Professora: agente'}
        </strong>
        <Button
          variant="secondary"
          size="sm"
          aria-pressed={swapped}
          onClick={onSwap}
        >
          {swapped ? 'Swap back' : 'Swap roles'}
        </Button>
        <span role="status">
          {done.filter((id) => id.startsWith(prefix)).length} de{' '}
          {turns.filter((turn) => turn.you).length}
        </span>
      </S.Row>
      {partTurns.map((turn, i) => {
        const id = prefix + (part * 6 + i)
        if (turn.you)
          return (
            <S.Surface key={id}>
              <Button
                variant="secondary"
                aria-pressed={done.includes(id)}
                onClick={() => onMark(id)}
              >
                {turn.you}
              </Button>
            </S.Surface>
          )
        const text = teacher[turn.id!] ?? conversation[turn.id!]
        return text ? (
          <S.Surface key={id}>
            <Button
              variant="text"
              aria-label={`Ouvir: ${text}`}
              onClick={() => speech.speak([{ id, text, speaker: turn.who }])}
            >
              {text}
            </Button>
          </S.Surface>
        ) : null
      })}
    </S.Stack>
  )
}

export function AirportListening({ speech }: SpeechProps) {
  const [slow, setSlow] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [again, setAgain] = useState(false)
  const [transcript, setTranscript] = useState(false)
  const [hint, setHint] = useState(false)
  const [sent, setSent] = useState(false)
  const complete = content.listening.every((q, i) => answers[i] === q.a)
  const play = () => {
    if (speech.playingId === 'W.1') speech.togglePause()
    else
      speech.speak([
        {
          id: 'W.1',
          text: content.message,
          speaker: 'kim',
          rate: slow ? 0.75 : 1,
        },
      ])
  }
  return (
    <Styled.ListeningLayout>
      <Styled.Phone aria-label="Conversa com Kim">
        <S.Row>
          <Avatar size="sm" imageUrl={kim} initials="K" />
          <strong>Kim</strong>
          <S.Hint>online</S.Hint>
        </S.Row>
        <S.Surface>
          <strong>Hi! 👋</strong>
          <Button variant="brand" onClick={play}>
            {speech.playingId === 'W.1' && !speech.paused
              ? 'Pause'
              : speech.paused
                ? 'Resume'
                : 'Play Kim’s message'}
          </Button>
          <S.Row>
            <Button
              variant="secondary"
              size="sm"
              aria-label={`Velocidade ${slow ? '0.75' : '1'} vezes`}
              onClick={() => setSlow(!slow)}
            >
              {slow ? '0.75×' : '1×'}
            </Button>
          </S.Row>
          {transcript ? (
            <>
              <p>{content.message}</p>
              <S.Hint>by = de · Don’t be late! = Não se atrase!</S.Hint>
            </>
          ) : null}
        </S.Surface>
        <Button
          variant="secondary"
          disabled={sent}
          onClick={() => setSent(true)}
        >
          {sent ? 'Resposta enviada' : 'Enviar resposta'}
        </Button>
      </Styled.Phone>
      <S.Stack>
        <S.QuestionTitle>A Kim disse isso?</S.QuestionTitle>
        <S.Questions>
          {content.listening.map((q, i) => (
            <S.Question key={q.q}>
              <S.Number>{i + 1}</S.Number>
              <S.Stack>
                <strong>{q.q}</strong>
                <S.Row>
                  {q.o.map((choice, j) => (
                    <Button
                      key={choice}
                      size="sm"
                      variant={answers[i] === j ? 'brand' : 'secondary'}
                      aria-pressed={answers[i] === j}
                      onClick={() => setAnswers((old) => ({ ...old, [i]: j }))}
                    >
                      {choice}
                    </Button>
                  ))}
                </S.Row>
                {answers[i] !== undefined ? (
                  <S.Hint role="status">
                    {answers[i] === q.a ? q.say : 'Tente novamente.'}
                  </S.Hint>
                ) : null}
                <AnswerDisclosure question={q.q} answer={q.say} />
              </S.Stack>
            </S.Question>
          ))}
        </S.Questions>
        {complete ? (
          <S.Row>
            <Button
              variant="secondary"
              onClick={() => {
                setAgain(true)
                speech.speak([
                  {
                    id: 'W.1',
                    text: content.message,
                    speaker: 'kim',
                    rate: slow ? 0.75 : 1,
                  },
                ])
              }}
            >
              Listen again and check
            </Button>
            {again && !transcript ? (
              <Button variant="secondary" onClick={() => setTranscript(true)}>
                Show transcription
              </Button>
            ) : null}
          </S.Row>
        ) : null}
        {transcript ? (
          <S.Surface>
            <strong>
              Responda à Kim: diga que chegou e a que horas vocês se veem.
            </strong>
            <S.Row>
              <Button
                size="sm"
                variant="secondary"
                aria-expanded={hint}
                onClick={() => setHint(!hint)}
              >
                Dica
              </Button>
            </S.Row>
            {hint ? <p>Hi, Kim! I’m in New York! · See you at seven!</p> : null}
          </S.Surface>
        ) : null}
      </S.Stack>
    </Styled.ListeningLayout>
  )
}

export function AirportReview({ speech }: SpeechProps) {
  return (
    <CorrectionPractice
      speech={speech}
      revealAnswers
      items={content.corrections}
      ownInstruction="A professora diz uma frase sua de hoje."
    />
  )
}

export function ArrivalNotes() {
  const [values, setValues] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(
        window.localStorage.getItem('langy-a107-arrival') ?? '{}',
      ) as Record<string, string>
    } catch {
      return {}
    }
  })
  const [finished, setFinished] = useState<string[]>([])
  const [hint, setHint] = useState(false)
  const next = content.roleplaySteps.findIndex(
    (step) => !finished.includes(step),
  )
  const save = (data: Record<string, string>) => {
    setValues(data)
    try {
      window.localStorage.setItem('langy-a107-arrival', JSON.stringify(data))
    } catch {
      /* Keep the notes in memory. */
    }
  }
  return (
    <S.Stack>
      <S.Surface>
        <S.Row>
          <Styled.Booth src={tile('🛂')} alt="Cabine da imigração" />
          <p>
            Você está na fila da imigração. Invente uma viagem nova: outros dias
            e outro hotel.
          </p>
        </S.Row>
        <S.Row>
          <S.QuestionTitle>Arrival notes</S.QuestionTitle>
          <Button variant="secondary" size="sm" onClick={() => save({})}>
            Clear
          </Button>
        </S.Row>
        <Styled.ArrivalColumns>
          {['Você', 'Professora'].map((person) => (
            <Styled.ArrivalFields key={person}>
              <legend>{person}</legend>
              {content.arrivalFields.map(({ key, label }) => {
                const id = person + '-' + key
                return (
                  <Styled.ArrivalLabel key={id}>
                    {label}
                    <TextInput
                      aria-label={label + ', ' + person}
                      value={values[id] ?? ''}
                      onChange={(e) =>
                        save({ ...values, [id]: e.target.value })
                      }
                    />
                  </Styled.ArrivalLabel>
                )
              })}
            </Styled.ArrivalFields>
          ))}
        </Styled.ArrivalColumns>
      </S.Surface>
      <S.Questions>
        {content.roleplaySteps.map((step, i) => (
          <S.Question key={step}>
            <S.Number>{i + 1}</S.Number>
            <Button
              variant="secondary"
              aria-pressed={finished.includes(step)}
              onClick={() => setFinished((old) => toggleId(old, step))}
            >
              {step}
            </Button>
          </S.Question>
        ))}
      </S.Questions>
      {next >= 0 ? (
        <S.Row>
          <Button
            variant="secondary"
            size="sm"
            aria-expanded={hint}
            onClick={() => setHint(!hint)}
          >
            Dica · Passo {next + 1}
          </Button>
        </S.Row>
      ) : null}
      {hint && next >= 0 ? (
        <S.Hint>{content.roleplaySupport[next]?.join(' · ')}</S.Hint>
      ) : null}
    </S.Stack>
  )
}

export function PlayDialogue({ part, speech }: SpeechProps & { part: number }) {
  const lines =
    part === 0 ? content.dialogue.slice(0, 6) : content.dialogue.slice(6)
  const playing = lines.some((line) => line.id === speech.playingId)
  const voiceLines: SpeechLine[] = lines.map((line) => ({
    id: line.id,
    text: line.en,
    speaker: line.who,
  }))
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() =>
        playing ? speech.togglePause() : speech.speak(voiceLines)
      }
    >
      {playing
        ? speech.paused
          ? 'Resume'
          : 'Pause'
        : 'Listen to the dialogue'}
    </Button>
  )
}

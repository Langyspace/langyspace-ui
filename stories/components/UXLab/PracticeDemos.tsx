import { useState, useEffect } from 'react'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { GapFillExercise } from '../../../src/components/InteractiveMaterial/GapFillExercise'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { FluencyTimer } from '../../../src/components/InteractiveMaterial/FluencyTimer'
import { OralReview } from '../../../src/components/InteractiveMaterial/OralReview'
import { OralReviewResult } from '../../../src/components/InteractiveMaterial/OralReviewResult'
import { VideoExercise } from '../../../src/components/InteractiveMaterial/VideoExercise'
import { AudioSequenceControls } from '../../../src/components/InteractiveMaterial/AudioSequenceControls'
import { ShadowingReader } from '../../../src/components/Shadowing/ShadowingReader'
import { ShadowingActivePhrase } from '../../../src/components/Shadowing/ShadowingActivePhrase'
import { ShadowingContextPhrase } from '../../../src/components/Shadowing/ShadowingContextPhrase'
import { ShadowingWord } from '../../../src/components/Shadowing/ShadowingWord'
import { ShadowingControlDock } from '../../../src/components/Shadowing/ShadowingControlDock'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import * as Styled from './UXLab.stories.styles'
import data from '../../materials/UXLab/lab-data.json'
import scene from '../../materials/UXLab/assets/scene-room-native.png'
import photos from '../../materials/UXLab/assets/scene_photos.webp'
import sheep from '../../materials/UXLab/assets/sheep.png'
import ship from '../../materials/UXLab/assets/ship.png'
import pen from '../../materials/UXLab/assets/pen.png'
import pan from '../../materials/UXLab/assets/pan.png'
import cap from '../../materials/UXLab/assets/cap.png'
import cup from '../../materials/UXLab/assets/cup.png'
import ana from '../../materials/UXLab/assets/bust_ana.png'
import kim from '../../materials/UXLab/assets/bust_kim.png'
import { useLabSpeech } from './useLabSpeech'
import { useSceneAudio } from '../../materials/shared/useSceneAudio'
import bagLabel from '../../materials/UXLab/assets/bag-label.mp3'
import keysLabel from '../../materials/UXLab/assets/keys-label.mp3'
import phoneLabel from '../../materials/UXLab/assets/phone-label.mp3'
import glassesLabel from '../../materials/UXLab/assets/glasses-label.mp3'
import bookLabel from '../../materials/UXLab/assets/book-label.mp3'
import umbrellaLabel from '../../materials/UXLab/assets/umbrella-label.mp3'
import type { LabDemoProps, SceneDemoProps } from './UXLab.demo.types'
const toggle = (old: readonly string[], id: string) =>
  old.includes(id) ? old.filter((v) => v !== id) : [...old, id]
export function GrammarDemo({ hidden = false }: { hidden?: boolean }) {
  const [ids, setIds] = useState<string[]>([])
  const speech = useLabSpeech()
  return (
    <Common.Stack>
      <Common.Tag>Grammar</Common.Tag>
      <Common.Heading>This is, these are, a / an</Common.Heading>
      <Styled.GrammarExplanation>
        <div>
          <Common.Tag>This ou these?</Common.Tag>
          <p>
            <strong>This is</strong> para uma pessoa. <strong>These are</strong>{' '}
            para duas ou mais.
          </p>
        </div>
        <div>
          <Common.Tag>A ou an?</Common.Tag>
          <p>
            Use <strong>an</strong> antes de som de vogal: an engineer, an
            office worker. Use <strong>a</strong> antes de consoante: a teacher,
            a nurse.
          </p>
        </div>
        <div>
          <Common.Tag>No plural</Common.Tag>
          <p>
            Sem a / an: They’re <strong>teachers</strong>. We’re{' '}
            <strong>students</strong>.
          </p>
        </div>
      </Styled.GrammarExplanation>
      <GrammarTable
        title="Affirmative"
        columns={{ subject: 'Quem', example: 'Exemplo' }}
        rows={data.engine.TB.map(([subject, example, id]) => {
          const text = example ?? ''
          const lead =
            text.match(/^(This is|These are|He’s|She’s|They’re)/)?.[0] ?? ''
          return {
            id: id ?? subject ?? '',
            subject,
            example: (
              <>
                <strong>{lead}</strong>
                {text.slice(lead.length)}
              </>
            ),
            audioLabel: `Ouvir: ${text}`,
          }
        })}
        hiddenAnswers={hidden}
        revealedIds={ids}
        onReveal={(id) => setIds((old) => toggle(old, id))}
        onPlay={(id) =>
          speech.play(data.engine.TB.find((row) => row[2] === id)?.[1] ?? '')
        }
      />
    </Common.Stack>
  )
}
export function GrammarFormsDemo() {
  return (
    <Common.Stack>
      <GrammarTable
        title="Negative"
        tone="negative"
        columns={{ subject: 'Quem', verb: 'Verbo', example: 'Exemplo' }}
        rows={[
          {
            id: 'i',
            subject: 'I',
            verb: 'am not',
            example: (
              <>
                I <strong>am not</strong> a teacher.
              </>
            ),
          },
          {
            id: 'she',
            subject: 'She',
            verb: 'isn’t',
            example: (
              <>
                She <strong>isn’t</strong> from Korea.
              </>
            ),
          },
        ]}
      />
      <GrammarTable
        title="Questions"
        tone="question"
        columns={{ subject: 'Verbo + quem', example: 'Exemplo' }}
        rows={[
          {
            id: 'are',
            subject: 'Are you…?',
            example: (
              <>
                <strong>Are you</strong> a teacher?
              </>
            ),
          },
          {
            id: 'is',
            subject: 'Is she…?',
            example: (
              <>
                <strong>Is she</strong> from Korea?
              </>
            ),
          },
        ]}
      />
    </Common.Stack>
  )
}
const gaps = [
  {
    id: 'intro',
    before: 'Hi, ',
    after: ' Kim.',
    answer: 'I’m',
    options: ['I’m', 'He’s', 'They’re'],
  },
  {
    id: 'origin',
    before: 'I’m ',
    after: ' Korea.',
    answer: 'from',
    options: ['on', 'from', 'at'],
  },
  {
    id: 'greeting',
    before: 'Nice to ',
    after: ' you.',
    answer: 'meet',
    options: ['meeting', 'meets', 'meet'],
  },
]
export function GapsDemo() {
  const [values, setValues] = useState<Record<string, string>>({}),
    [visible, setVisible] = useState(false),
    [wrong, setWrong] = useState(''),
    [status, setStatus] = useState('')
  const active = gaps.find((g) => !values[g.id])
  return (
    <GapFillExercise
      items={gaps.map((g) => ({ ...g, answer: values[g.id], speaker: 'Kim' }))}
      activeId={active?.id}
      optionsVisible={visible}
      onOptionsToggle={() => setVisible(!visible)}
      choices={(active?.options ?? []).map((choice) => ({
        id: choice,
        label: choice,
        state: wrong === choice ? 'wrong' : 'default',
      }))}
      onSelect={(id, choice) => {
        if (choice !== active?.answer) {
          setWrong(choice)
          setStatus('Tente de novo.')
          return
        }
        setValues((old) => ({ ...old, [id]: choice }))
        setVisible(false)
        setWrong('')
        setStatus(
          gaps.every((g) => g.id === id || values[g.id])
            ? 'Complete!'
            : 'Correto!',
        )
      }}
      status={status}
    />
  )
}
export function RolePlayDemo() {
  const [ids, setIds] = useState<string[]>([]),
    [support, setSupport] = useState(false)
  const d = data.engine.RP
  return (
    <RolePlayExercise
      situation={d.txt}
      image={{ src: photos, alt: d.alt }}
      roles={['You · your photos', 'Teacher · questions']}
      support={d.sup}
      supportVisible={support}
      onSupportToggle={() => setSupport(!support)}
      steps={d.ck.map((label, i) => ({ id: String(i), label }))}
      completedIds={ids}
      onStepToggle={(id) => setIds((old) => toggle(old, id))}
    />
  )
}
const sceneLabelClips: Readonly<Record<string, string>> = {
  bag: bagLabel,
  keys: keysLabel,
  phone: phoneLabel,
  glasses: glassesLabel,
  book: bookLabel,
  umbrella: umbrellaLabel,
}
// Natural coordinates for the approved 1536×1024 PNG; historic HS data belongs
// to a different image. Bounds conservatively protect each complete object.
const sceneTargets = [
  { point: [25.6, 54.8], bounds: [304, 464, 176, 184] },
  { point: [51, 78.7], bounds: [708, 752, 136, 104] },
  { point: [45.8, 47.1], bounds: [640, 432, 128, 104] },
  { point: [56.6, 47.4], bounds: [800, 456, 144, 72] },
  { point: [81.2, 57.9], bounds: [1152, 544, 192, 96] },
  { point: [17.3, 76.4], bounds: [104, 680, 288, 192] },
] as const
export function SceneDemo({ level = 'a1', practice = false }: SceneDemoProps) {
  const { play, stop, playingId, error } = useSceneAudio(true, sceneLabelClips)
  useEffect(() => stop, [level, stop])
  const [selected, setSelected] = useState<string>(),
    [visited, setVisited] = useState<string[]>([]),
    [answer, setAnswer] = useState(false)
  return (
    <>
      <SceneExplorer
        imageUrl={scene}
        imageAlt="Sala com cadeira, mesa, sofá e objetos para explorar"
        hotspots={data.HS.map((h, i) => {
          const target = sceneTargets[i]
          return {
            id: String(i),
            xPercent: target?.point[0] ?? h.x,
            yPercent: target?.point[1] ?? h.y,
            targetBounds: target
              ? {
                  xPercent: (target.bounds[0] / 1536) * 100,
                  yPercent: (target.bounds[1] / 1024) * 100,
                  widthPercent: (target.bounds[2] / 1536) * 100,
                  heightPercent: (target.bounds[3] / 1024) * 100,
                }
              : undefined,
            label: h.w,
            prompt: practice ? (level === 'a1' ? h.a1 : h.c2) : null,
            answer: practice ? (level === 'a1' ? h.a1a : h.c2a) : undefined,
          }
        })}
        selectedId={selected}
        visitedIds={visited}
        onPlayHotspot={(id) => {
          play(data.HS[Number(id)]?.w ?? '')
        }}
        playingId={
          selected && playingId === data.HS[Number(selected)]?.w
            ? selected
            : undefined
        }
        onSelect={(id) => {
          stop()
          setSelected(id)
          setVisited((old) => (old.includes(id) ? old : [...old, id]))
          setAnswer(false)
        }}
        answerVisible={practice && answer}
        onAnswerToggle={practice ? () => setAnswer(!answer) : undefined}
      />
      {selected && error ? (
        <Common.Hint role="status">{error}</Common.Hint>
      ) : null}
    </>
  )
}
const pairAssets = [
  [ship, sheep],
  [pen, pan],
  [cap, cup],
]
export function PairsDemo() {
  const [index, setIndex] = useState(0),
    [mode, setMode] = useState<'listen' | 'speak'>('listen'),
    [target, setTarget] = useState<number>(),
    [selected, setSelected] = useState<string>(),
    [feedback, setFeedback] = useState<'correct' | 'incorrect'>(),
    [hint, setHint] = useState(''),
    [score, setScore] = useState<('correct' | 'incorrect')[]>([])
  const speech = useLabSpeech()
  const d = data.MP[index] ?? data.MP[0]!
  const options = d.slice(0, 2) as string[][]
  return (
    <MinimalPairExercise
      mode={mode}
      onModeChange={(value) => {
        setMode(value)
        setHint('')
        setSelected(undefined)
        setTarget(undefined)
      }}
      choices={options.map((item, i) => ({
        id: String(i),
        word: item[1],
        phonetic: item[2],
        imageUrl: pairAssets[index]?.[i],
      }))}
      onListen={() => {
        const next = Math.random() < 0.5 ? 0 : 1
        setTarget(next)
        setSelected(undefined)
        setFeedback(undefined)
        setHint('')
        speech.play(options[next]?.[1] ?? '', 0.8)
      }}
      selectedId={selected}
      feedback={feedback}
      hint={hint || speech.status}
      score={score.map((result, i) => ({ id: String(i), result }))}
      onSelect={(id) => {
        if (mode === 'listen' && target === undefined) {
          setHint('Toque em Listen primeiro.')
          return
        }
        setSelected(id)
        if (mode === 'speak') {
          setFeedback(undefined)
          setHint(
            `A professora ouviu “${options[Number(id)]?.[1]}”. Era essa que você quis dizer?`,
          )
          return
        }
        const result = Number(id) === target ? 'correct' : 'incorrect'
        setFeedback(result)
        setScore((old) => [...old, result])
        setHint(result === 'incorrect' ? String(d[2]) : 'Correto!')
        setTarget(undefined)
      }}
      onNext={() => {
        setIndex((index + 1) % data.MP.length)
        setTarget(undefined)
        setSelected(undefined)
        setFeedback(undefined)
        setHint('')
      }}
    />
  )
}
export function OralDemo() {
  const [ratings, setRatings] = useState<Record<string, number>>({}),
    [revealed, setRevealed] = useState<string[]>([])
  const part = data.OR.parts[0]!
  return (
    <OralReview
      questions={part.q.map(([prompt, example], i) => ({
        id: `q${i + 1}`,
        level: ['Easy', 'Medium', 'Challenge'][i] ?? '',
        prompt,
        example,
      }))}
      ratings={ratings}
      onRate={(id, value) => setRatings((old) => ({ ...old, [id]: value }))}
      revealedIds={revealed}
      onReveal={(id) => setRevealed((old) => toggle(old, id))}
    />
  )
}
export function OralResultDemo() {
  const [fields, setFields] = useState({
      studentName: '',
      teacherName: '',
      date: '',
      notes: '',
    }),
    [status, setStatus] = useState('')
  return (
    <OralReviewResult
      result={
        data.OR.bands?.[1] ??
        'Pode seguir, revisando as partes com menos estrelas'
      }
      parts={data.OR.parts.map((p, i) => ({
        id: String(i),
        label: p.t,
        score: 6,
        maximum: p.q.length * 3,
      }))}
      completedQuestions={15}
      totalQuestions={15}
      studentName={fields.studentName}
      teacherName={fields.teacherName}
      date={fields.date}
      notes={fields.notes}
      onFieldChange={(key, value) =>
        setFields((old) => ({ ...old, [key]: value }))
      }
      onExport={() =>
        setStatus(
          'O PDF final é fornecido pelo portal. Esta é a prévia dos dados de resultado.',
        )
      }
      onClear={() => {
        setFields({ studentName: '', teacherName: '', date: '', notes: '' })
        setStatus('Notas limpas.')
      }}
      status={status}
    />
  )
}
export function VideoDemo({
  presentation = 'staged',
}: { presentation?: 'staged' | 'inline' } = {}) {
  const [page, setPage] = useState<'watch' | 'discuss'>('watch'),
    [time, setTime] = useState(0)
  const caption = [...data.V.cap]
    .reverse()
    .find((row) => Number(row[0]) <= time)?.[1]
  return (
    <VideoExercise
      presentation={presentation}
      title="Why is Kim late?"
      page={page}
      onPageChange={setPage}
      beforeWatch={
        <Common.Surface>Before you watch: why is Kim late?</Common.Surface>
      }
      chapters={data.V.chap.map(([seconds, label], i) => ({
        id: String(i),
        seconds: Number(seconds),
        label: String(label),
      }))}
      activeChapterId={String(
        Math.max(
          0,
          data.V.chap.filter((row) => Number(row[0]) <= time).length - 1,
        ),
      )}
      onSeek={setTime}
      media={
        <Styled.Media>
          <Common.Row>
            <img src={ana} alt="Ana" />
            <img src={kim} alt="Kim" />
          </Common.Row>
          <span>{caption}</span>
          <Common.Row>
            <Common.Action
              type="button"
              variant="secondary"
              onClick={() => setTime(Math.min(data.V.dur, time + 5))}
            >
              +5s
            </Common.Action>
            <span>
              {time} / {data.V.dur}s
            </span>
          </Common.Row>
        </Styled.Media>
      }
    >
      <Common.Surface>
        <Common.Heading>What happened?</Common.Heading>
        <p>Why is Kim late? What’s the plan?</p>
        <Common.Action
          type="button"
          variant="secondary"
          onClick={() => {
            setPage('watch')
            setTime(12)
          }}
        >
          Rever: The problem
        </Common.Action>
      </Common.Surface>
    </VideoExercise>
  )
}
export function FluencyDemo({ level = 'a1' }: LabDemoProps) {
  const d = data.FT[level]
  const [clock, setClock] = useState({
    round: 0,
    left: d.times[0] ?? 0,
    running: false,
  })
  useEffect(() => {
    if (!clock.running) return
    const timer = window.setInterval(
      () =>
        setClock((value) => {
          const left = value.left - 1
          if (left <= 0) {
            const round = value.round + 1
            return { round, left: d.times[round] ?? 0, running: false }
          }
          return { ...value, left }
        }),
      1000,
    )
    return () => window.clearInterval(timer)
  }, [clock.running, d.times])
  return (
    <FluencyTimer
      title={d.topic}
      description={d.sub}
      rounds={d.times.map((seconds, i) => ({
        id: String(i),
        seconds,
        audience: 'aud' in d ? d.aud[i] : undefined,
      }))}
      roundIndex={clock.round}
      remainingSeconds={clock.left}
      running={clock.running}
      support={clock.round === 0 ? d.sup : []}
      onToggle={() =>
        setClock((value) => ({ ...value, running: !value.running }))
      }
      onReset={() =>
        setClock({ round: 0, left: d.times[0] ?? 0, running: false })
      }
    />
  )
}
export function ShadowingDemo({ level = 'a1' }: LabDemoProps) {
  const d = data.SH[level]
  const [index, setIndex] = useState(-1),
    [word, setWord] = useState(0),
    [speed, setSpeed] = useState(0.9)
  const speech = useLabSpeech()
  const line = d.lines[Math.max(0, index)] ?? ''
  const words = line.split(' ')
  const listen = (next: number) => {
    const text = d.lines[next]
    if (!text) return
    setIndex(next)
    setWord(0)
    const tokens = text.split(' '),
      positions: number[] = []
    let offset = 0
    tokens.forEach((token) => {
      positions.push(offset)
      offset += token.length + 1
    })
    speech.play(
      text,
      speed,
      (position) =>
        setWord(
          Math.max(
            0,
            positions.findLastIndex((value) => value <= position),
          ),
        ),
      () => setWord(tokens.length),
    )
  }
  return (
    <Common.Stack>
      <ShadowingReader>
        {index > 0 ? (
          <ShadowingContextPhrase>{d.lines[index - 1]}</ShadowingContextPhrase>
        ) : null}
        <ShadowingActivePhrase>
          {words.map((value, i) => (
            <ShadowingWord
              key={`${i}-${value}`}
              state={i === word ? 'current' : i < word ? 'spoken' : 'pending'}
            >
              {value}{' '}
            </ShadowingWord>
          ))}
        </ShadowingActivePhrase>
        {index + 1 < d.lines.length ? (
          <ShadowingContextPhrase>
            {d.lines[Math.max(0, index) + 1]}
          </ShadowingContextPhrase>
        ) : null}
      </ShadowingReader>
      <AudioSequenceControls
        index={index}
        count={d.lines.length}
        onNext={() => listen(index + 1)}
        onPrevious={() => listen(index - 1)}
        onReplay={() => listen(index)}
        status={speech.status}
      />
      <ShadowingControlDock>
        <Common.Row>
          {[0.75, 0.9, 1].map((value) => (
            <Common.Action
              key={value}
              type="button"
              variant={speed === value ? 'primary' : 'secondary'}
              aria-pressed={speed === value}
              onClick={() => setSpeed(value)}
            >
              {value}x
            </Common.Action>
          ))}
        </Common.Row>
      </ShadowingControlDock>
      {index === d.lines.length - 1 ? (
        <Common.Surface>
          {d.end}
          <Common.Action
            type="button"
            variant="secondary"
            onClick={() => speech.play(d.lines.join(' '), speed)}
          >
            Ouvir a original
          </Common.Action>
        </Common.Surface>
      ) : null}
    </Common.Stack>
  )
}

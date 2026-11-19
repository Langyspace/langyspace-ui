import { useId, useRef, useState } from 'react'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { Button } from '../../../src/components/Button/Button'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { ConnectionSignal } from '../../../src/components/InteractiveMaterial/ConnectionSignal'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import { useVoiceMessageAudio } from '../../../src/components/VoiceMessage/useVoiceMessageAudio'
import { SourceQuestions } from '../shared/LessonPractice'
import { toggleId } from '../shared/lessonState'
import { content, kim, vocabulary } from './A201.data'
import type { ActiveSectionProps } from './A201.types'
import voice from './assets/L.9.mp3'
import * as S from '../shared/Lesson.styles'
import * as A from './A201.styles'
export function PersonalSection() {
  const [support, setSupport] = useState(false)
  return (
    <S.Stack>
      <SourceQuestions
        items={content.personal.questions.map((question) => ({ question }))}
      />
      <Button
        variant="secondary"
        size="sm"
        aria-expanded={support}
        onClick={() => setSupport(!support)}
      >
        {support ? 'Hide support' : 'Show support'}
      </Button>
      {support ? (
        <S.Support>
          {content.personal.optionalSupport.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </S.Support>
      ) : null}
    </S.Stack>
  )
}
const time = (seconds: number) =>
  `0:${String(Math.floor(seconds)).padStart(2, '0')}`
export function ListeningSection({ active }: ActiveSectionProps) {
  const media = useVoiceMessageAudio(active)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [support, setSupport] = useState(false)
  const [listened, setListened] = useState(false)
  const [transcript, setTranscript] = useState(false)
  const play = useRef<HTMLButtonElement>(null)
  const transcriptId = useId()
  const busy = media.status === 'playing' || media.status === 'loading'
  return (
    <S.Stack>
      <A.Player>
        <A.Contact>
          <Avatar imageUrl={kim} initials="K" size="lg" />
          <b>Kim</b>
        </A.Contact>
        <audio
          ref={media.audioRef}
          src={voice}
          preload="auto"
          {...media.events}
          onEnded={() => {
            media.events.onEnded()
            setListened(true)
          }}
        />
        <S.Row>
          <Button
            ref={play}
            variant="primary"
            disabled={!active}
            onClick={() => {
              void media.toggle()
            }}
          >
            {busy
              ? 'Pause'
              : media.status === 'ended'
                ? 'Listen again'
                : media.status === 'paused'
                  ? 'Resume'
                  : 'Play Kim’s message'}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            disabled={!active}
            aria-label={`Playback speed: ${media.speed}x`}
            onClick={media.changeSpeed}
          >
            {media.speed}x
          </Button>
          <S.Hint aria-live="off">
            {time(media.elapsed)} / {time(media.duration || 15.18585)}
          </S.Hint>
        </S.Row>
        <progress
          aria-label="Audio progress"
          max={media.duration || 15.18585}
          value={media.elapsed}
        />
        {media.status === 'error' ? (
          <QuizFeedback tone="wrong">
            Audio unavailable.{' '}
            <Button
              variant="text"
              onClick={() => {
                void media.toggle()
                play.current?.focus()
              }}
            >
              Try again
            </Button>
          </QuizFeedback>
        ) : null}
        {listened ? (
          <Button
            variant="secondary"
            size="sm"
            aria-expanded={transcript}
            aria-controls={transcriptId}
            onClick={() => setTranscript(!transcript)}
          >
            {transcript ? 'Hide transcription' : 'Show transcription'}
          </Button>
        ) : null}
        {transcript ? (
          <A.Transcript id={transcriptId}>
            <p>{content.listening.transcript}</p>
            <S.Hint>
              Never mind = deixa pra lá · maybe = talvez · travel = viajar ·
              soon = logo
            </S.Hint>
          </A.Transcript>
        ) : null}
      </A.Player>
      {content.listening.questions.map((q, i) => (
        <A.Question key={q.q}>
          <legend>{q.q}</legend>
          <S.Row>
            {['Yes', 'No'].map((choice) => (
              <Button
                key={choice}
                variant="secondary"
                size="sm"
                aria-pressed={answers[i] === choice}
                onClick={() => setAnswers((old) => ({ ...old, [i]: choice }))}
              >
                {choice}
              </Button>
            ))}
          </S.Row>
          {answers[i] ? (
            <QuizFeedback tone={answers[i] === q.yesNo ? 'correct' : 'wrong'}>
              {answers[i] === q.yesNo ? q.fullAnswer : 'Try again.'}
            </QuizFeedback>
          ) : null}
        </A.Question>
      ))}
      <A.Info>
        <b>{content.listening.replyPrompt}</b>
        <Button
          variant="secondary"
          size="sm"
          aria-expanded={support}
          onClick={() => setSupport(!support)}
        >
          {support ? 'Hide support' : 'Show support'}
        </Button>
        {support ? (
          <S.Support>
            {content.listening.optionalSupport.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </S.Support>
        ) : null}
      </A.Info>
    </S.Stack>
  )
}
export function RolePlaySection() {
  const [poor, setPoor] = useState(false)
  const [swapped, setSwapped] = useState(false)
  const [steps, setSteps] = useState<string[]>([])
  const [support, setSupport] = useState(false)
  const [cue, setCue] = useState<number>()
  const cards = vocabulary.flat()
  const current = cue === undefined ? undefined : cards[cue]
  return (
    <RolePlayExercise
      presentation="tracker"
      situation={content.roleplay.situation}
      steps={content.roleplay.steps.map((label, i) => ({
        id: String(i),
        label,
      }))}
      completedIds={steps}
      onStepToggle={(id) => setSteps((old) => toggleId(old, id))}
      support={content.roleplay.optionalSupport}
      supportVisible={support}
      onSupportToggle={() => setSupport(!support)}
      labels={{
        show: 'Show support',
        hide: 'Hide support',
        steps: 'Conversation checklist',
        progress: '',
        joiner: 'of',
      }}
      tracker={
        <S.Stack>
          <A.Contact>
            <Avatar imageUrl={kim} initials="K" size="lg" />
            <b>
              {swapped ? 'You: Kim · Teacher: Ana' : 'You: Ana · Teacher: Kim'}
            </b>
          </A.Contact>
          <S.Row>
            <Button
              variant="secondary"
              size="sm"
              aria-pressed={swapped}
              onClick={() => setSwapped(!swapped)}
            >
              Swap roles
            </Button>
            <Button
              variant="secondary"
              size="sm"
              aria-pressed={poor}
              onClick={() => setPoor(!poor)}
            >
              {poor ? 'Signal OK' : 'Bad signal'}
            </Button>
          </S.Row>
          {poor ? (
            <S.Row>
              <ConnectionSignal />
              <b>Sorry? Can you say that again?</b>
            </S.Row>
          ) : null}
        </S.Stack>
      }
    >
      <S.Stack>
        <S.Row>
          <Button
            variant="secondary"
            size="sm"
            aria-expanded={cue !== undefined}
            onClick={() => setCue(cue === undefined ? 0 : undefined)}
          >
            {cue === undefined ? 'Show action cues' : 'Hide action cues'}
          </Button>
          {cue !== undefined ? (
            <>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCue((cue + 3) % 4)}
              >
                Previous action
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCue((cue + 1) % 4)}
              >
                Next action
              </Button>
            </>
          ) : null}
        </S.Row>
        {current ? (
          <A.CueImage src={current.imageUrl} alt={current.imageAlt} />
        ) : null}
      </S.Stack>
    </RolePlayExercise>
  )
}

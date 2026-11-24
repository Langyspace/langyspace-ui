import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { PracticePair } from '../../../src/components/Practice/PracticePair'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { PictureStrip } from '../../../src/components/Exercise/PictureStrip'
import { QuizQuestion } from '../../../src/components/Quiz/QuizQuestion'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { ShadowingActivePhrase } from '../../../src/components/Shadowing/ShadowingActivePhrase'
import { SlideAudioAction } from '../../../src/components/Slide/SlideAudioAction'
import { Button } from '../../../src/components/Button/Button'
import { ActionLink } from '../../../src/components/ActionLink/ActionLink'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import type { PreparedPractice } from '../Practice/Practice.types'
import { useMaterialPracticeOrigin } from './MaterialPracticeContext'
import * as C from '../../../src/components/InteractiveMaterial/Material.shared.styles'

function PreparedView({
  prepared,
  active,
}: {
  prepared: PreparedPractice
  active: boolean
}) {
  const { data, recordings, images } = prepared
  const speech = useRecordedAudio(recordings)
  const { stop: stopRecording } = speech
  const correctionTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )
  const clearCorrection = useCallback(() => {
    if (correctionTimer.current !== undefined)
      clearTimeout(correctionTimer.current)
    correctionTimer.current = undefined
  }, [])
  const stop = useCallback(() => {
    clearCorrection()
    stopRecording()
  }, [clearCorrection, stopRecording])
  useEffect(() => clearCorrection, [clearCorrection])
  const origin = useMaterialPracticeOrigin()
  const [firstIndex, setFirstIndex] = useState(0)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [revealed, reveal] = useState(false)
  const [translation, translate] = useState(false)
  const [answers, answer] = useState<Record<string, string>>({})
  useEffect(() => {
    if (!active) stop()
  }, [active, stop])
  const audio = (id: string | undefined, context: string) => {
    const recording = recordings.find((clip) => clip.id === id)
    if (!recording) return null
    const current = speech.playingId === id
    return (
      <SlideAudioAction
        context={context}
        status={
          speech.error
            ? 'error'
            : current
              ? speech.paused
                ? 'paused'
                : 'playing'
              : 'idle'
        }
        onClick={() => {
          clearCorrection()
          current ? speech.togglePause() : speech.speak([recording])
        }}
      />
    )
  }
  const quizNarration = (id: string) => {
    const recording = recordings.find((clip) => clip.id === id)
    if (!recording) return undefined
    return (
      <IconButton
        aria-label="Ouvir o enunciado"
        variant="brand"
        size="sm"
        data-audio-playing={
          (speech.playingId === id && !speech.paused) || undefined
        }
        onClick={() => {
          clearCorrection()
          speech.speak([recording])
        }}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 9v6h4l5 4V5L8 9H4zm12-2v10a7 7 0 0 0 0-10z" />
        </svg>
      </IconButton>
    )
  }
  const destination = (
    id: string,
    kind: 'flashcards' | 'quiz' | 'shadowing',
  ) => {
    if (!origin) return null
    const environment = /(?:\.staging\.|-staging\.)/.test(
      new URL(origin).hostname,
    )
      ? 'staging'
      : 'production'
    if (!data.publishedEnvironments.includes(environment)) return null
    const search = new URLSearchParams({
      tab: kind,
      [kind === 'flashcards' ? 'deck' : 'activity']: id,
    })
    return (
      <ActionLink
        href={new URL('/licoes?' + search, origin).href}
        target="_blank"
        rel="noreferrer"
        size="sm"
        variant="brand"
      >
        Open practice
      </ActionLink>
    )
  }
  const first = data.first
  const card = first.kind === 'flashcards' ? first.cards[firstIndex] : undefined
  const cardImage = card?.imageSrc ? images[card.imageSrc] : undefined
  const question = first.kind === 'quiz' ? first.questions[0] : undefined
  const selected = question ? answers[question.id] : undefined
  const phrase = data.shadowing.phrases[phraseIndex]
  if (!phrase) return null
  const speaker = data.shadowing.speakers.find(
    (person) => person.id === phrase.speakerId,
  )
  return (
    <C.Stack>
      <PracticePair
        onActiveIdChange={stop}
        items={[
          {
            id: first.id,
            label: first.kind === 'flashcards' ? 'Flashcards' : 'Quiz',
            content: (
              <C.Stack>
                <ExercisePanel
                  variant="warmup"
                  counter={
                    first.kind === 'quiz'
                      ? `Example · 1/${first.questions.length}`
                      : `${firstIndex + 1}/${first.cards.length}`
                  }
                  navigation={
                    first.kind === 'flashcards'
                      ? {
                          index: firstIndex,
                          count: first.cards.length,
                          onChange: (index) => {
                            stop()
                            setFirstIndex(index)
                            reveal(false)
                          },
                        }
                      : undefined
                  }
                >
                  {card ? (
                    <>
                      {!revealed && cardImage ? (
                        <PictureStrip
                          density="compact"
                          items={[
                            {
                              id: card.id,
                              src: cardImage,
                              alt: card.word,
                              caption: card.word,
                              region: card.imageRegion,
                            },
                          ]}
                        />
                      ) : (
                        <C.Heading>
                          {card.visualLabel} · {card.word}
                        </C.Heading>
                      )}
                      {revealed ? (
                        <>
                          <C.Paragraph>{card.translation}</C.Paragraph>
                          <C.Paragraph>{card.example}</C.Paragraph>
                          <C.Hint>{card.exampleTranslation}</C.Hint>
                        </>
                      ) : null}
                      <C.Row $justify="center">
                        {audio(
                          revealed ? card.backAudioId : card.audioId,
                          card.word,
                        )}
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => {
                            stop()
                            reveal(!revealed)
                          }}
                        >
                          {revealed ? 'Hide meaning' : 'Show meaning'}
                        </Button>
                      </C.Row>
                    </>
                  ) : question ? (
                    <>
                      <QuizQuestion
                        context={question.context}
                        action={quizNarration(question.id + '.prompt')}
                        density="compact"
                        tone="material"
                      >
                        {question.prompt}
                      </QuizQuestion>
                      {(question.previewOptions ?? question.options).map(
                        (option, index) => (
                          <QuizOption
                            key={option.id}
                            letter={String.fromCharCode(65 + index)}
                            density="compact"
                            state={
                              !selected
                                ? 'default'
                                : selected === option.id
                                  ? option.id === question.correctOptionId
                                    ? 'correct'
                                    : 'wrong'
                                  : 'dim'
                            }
                            feedbackOutcome={
                              option.id === question.correctOptionId
                                ? 'correct'
                                : 'wrong'
                            }
                            disabled={Boolean(selected)}
                            onClick={() => {
                              stop()
                              answer((old) => ({
                                ...old,
                                [question.id]: option.id,
                              }))
                              const correction = recordings.find(
                                (clip) =>
                                  clip.id === question.id + '.completion',
                              )
                              if (correction)
                                correctionTimer.current = setTimeout(
                                  () => speech.speak([correction]),
                                  650,
                                )
                            }}
                          >
                            {option.text}
                          </QuizOption>
                        ),
                      )}
                      {selected ? (
                        <C.Hint role="status">
                          {selected === question.correctOptionId
                            ? question.feedback.correct.message
                            : question.feedback.wrong.message}
                        </C.Hint>
                      ) : null}
                    </>
                  ) : null}
                </ExercisePanel>
                {destination(first.id, first.kind)}
              </C.Stack>
            ),
          },
          {
            id: data.shadowing.id,
            label: 'Shadowing',
            content: (
              <C.Stack>
                <ExercisePanel
                  variant="warmup"
                  counter={`${phraseIndex + 1}/${data.shadowing.phrases.length}`}
                  navigation={{
                    index: phraseIndex,
                    count: data.shadowing.phrases.length,
                    onChange: (index) => {
                      stop()
                      setPhraseIndex(index)
                      translate(false)
                    },
                  }}
                >
                  <ShadowingActivePhrase
                    density="compact"
                    tone="material"
                    speaker={
                      speaker
                        ? {
                            name: speaker.name,
                            imageUrl: images[speaker.avatarUrl],
                            accentLabel: speaker.accentLabel,
                          }
                        : undefined
                    }
                  >
                    {phrase.displayText}
                  </ShadowingActivePhrase>
                  {translation ? <C.Hint>{phrase.translation}</C.Hint> : null}
                  <C.Row $justify="center">
                    {audio(phrase.id, speaker?.name ?? 'Listen and repeat')}
                    <Button
                      size="sm"
                      variant="text"
                      onClick={() => translate(!translation)}
                    >
                      {translation ? 'Hide translation' : 'Translation'}
                    </Button>
                  </C.Row>
                  <C.Hint>Listen, then repeat aloud</C.Hint>
                </ExercisePanel>
                {destination(data.shadowing.id, 'shadowing')}
              </C.Stack>
            ),
          },
        ]}
      />
      {speech.error ? <C.Hint role="alert">{speech.error}</C.Hint> : null}
    </C.Stack>
  )
}

const loaders = import.meta.glob<{ default: PreparedPractice }>(
  '../Practice/lessons/*.module.ts',
)
const views = Object.fromEntries(
  Object.entries(loaders).map(([path, load]) => [
    path.split('/').at(-1)!.replace('.module.ts', ''),
    lazy(async () => {
      const { default: prepared } = await load()
      return {
        default: ({ active }: { active: boolean }) => (
          <PreparedView prepared={prepared} active={active} />
        ),
      }
    }),
  ]),
)
export const hasLessonPractice = (key: string) => Boolean(views[key])
export function LessonPractice({
  materialKey,
  active,
}: {
  materialKey: string
  active: boolean
}) {
  const View = views[materialKey]
  return View ? (
    <Suspense fallback={<C.Hint role="status">Loading your practice…</C.Hint>}>
      <View active={active} />
    </Suspense>
  ) : null
}

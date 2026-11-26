import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Fragment } from 'react'
import { DeviceGallery } from '../../../src/components/Device/DeviceGallery'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { FlashcardSession } from '../../../src/components/Flashcard/FlashcardSession'
import { ShadowingSession } from '../../../src/components/Shadowing/ShadowingSession'
import { ShadowingWord } from '../../../src/components/Shadowing/ShadowingWord'
import { QuizSession } from '../../../src/components/Quiz/QuizSession'
import { PracticeResultPanel } from '../../../src/components/PracticeResultPanel/PracticeResultPanel'
import { Button } from '../../../src/components/Button/Button'
import { QuizBlank } from '../../../src/components/Quiz/QuizBlank'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { HomeworkCopyAction } from './HomeworkCopyAction'
import { homeworkMessage } from './homeworkMessage'
import { HomeworkVoiceNote } from './HomeworkVoiceNote'
import { usePracticePlayback } from './usePracticePlayback'
import { useMaterialPracticeOrigin } from './MaterialPracticeContext'
import type { PreparedPractice } from '../Practice/Practice.types'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import * as S from './LessonHomeworkGallery.styles'

const gapText = (text: string) =>
  text.split('___').map((part, index, all) => (
    <Fragment key={index}>
      {part}
      {index < all.length - 1 && <QuizBlank aria-label="Lacuna" />}
    </Fragment>
  ))

function PreparedHomework({
  prepared,
  active,
}: {
  prepared: PreparedPractice
  active: boolean
}) {
  const { data, recordings, images } = prepared
  const audio = usePracticePlayback(active, recordings)
  const origin = useMaterialPracticeOrigin()
  const [firstIndex, setFirst] = useState(0)
  const [flipped, flip] = useState(false)
  const [phraseIndex, setPhrase] = useState(0)
  const [translation, translate] = useState(false)
  const [speed, setSpeed] = useState('1x')
  const [repetitions, repeat] = useState(0)
  const [answers, answer] = useState<Record<string, string>>({})
  const correction = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )
  const stop = useCallback(() => {
    if (correction.current !== undefined) clearTimeout(correction.current)
    correction.current = undefined
    audio.stop()
  }, [audio.stop])
  useEffect(() => {
    if (!active) stop()
    return stop
  }, [active, stop])
  const play = (id: string | undefined) => {
    const clip = recordings.find((item) => item.id === id)
    if (!clip) return
    if (audio.playingId === id) {
      audio.togglePause()
      return
    }
    stop()
    audio.play(clip.id, clip.text)
  }
  const action = (id: string, label: string) => {
    if (!recordings.some((clip) => clip.id === id)) return undefined
    return (
      <IconButton
        variant="brand"
        size="sm"
        aria-label={label}
        aria-pressed={audio.playingId === id && !audio.paused}
        onClick={() => play(id)}
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
  const first = data.first,
    card = first.kind === 'flashcards' ? first.cards[firstIndex] : undefined
  const firstTitle = first.title ?? data.title
  const question =
      first.kind === 'quiz' ? first.questions[firstIndex] : undefined,
    selected = question ? answers[question.id] : undefined
  const phrase = data.shadowing.phrases[phraseIndex]!
  const speaker = data.shadowing.speakers.find(
    (person) => person.id === phrase.speakerId,
  )
  const resetFirst = () => {
    stop()
    setFirst(0)
    flip(false)
    answer({})
  }
  const advanceFirst = () => {
    stop()
    flip(false)
    if (first.kind === 'flashcards') {
      setFirst((firstIndex + 1) % first.cards.length)
    } else {
      setFirst(firstIndex + 1)
    }
  }
  const shadowPlaying = audio.playingId === phrase.id && !audio.paused
  const playShadow = () => {
    if (audio.playingId === phrase.id) {
      audio.togglePause()
      return
    }
    const clip = recordings.find((item) => item.id === phrase.id)
    if (!clip) return
    stop()
    audio.play(clip.id, clip.text, speed === '0.75x' ? 0.75 : 1, () => {
      if (repetitions >= 2) {
        repeat(0)
        setPhrase((phraseIndex + 1) % data.shadowing.phrases.length)
      } else repeat(repetitions + 1)
    })
  }
  const firstView =
    first.kind === 'flashcards' && card ? (
      <FlashcardSession
        aria-label={'Flashcards: ' + firstTitle}
        backAction={{ label: 'Recomeçar os flashcards', onClick: resetFirst }}
        progress={{
          label: `Progresso ${firstIndex + 1} de ${first.cards.length}`,
          current: firstIndex + 1,
          total: first.cards.length,
          revealed: flipped,
        }}
        card={{
          id: card.id,
          word: card.word,
          translation: card.translation,
          example: card.example,
          backExample: card.exampleTranslation,
          image:
            card.imageSrc && images[card.imageSrc]
              ? { src: images[card.imageSrc]!, region: card.imageRegion }
              : undefined,
        }}
        flipped={flipped}
        onFlip={() => flip(!flipped)}
        audio={{
          label: 'Ouvir pronúncia',
          playing:
            audio.playingId === (flipped ? card.backAudioId : card.audioId) &&
            !audio.paused,
          onFrontPlay: () => play(card.audioId),
          onBackPlay: () => play(card.backAudioId),
        }}
        labels={{
          flip: 'Virar card',
          flipHint: 'toque pra virar',
          rateQuestion: 'Você lembrava?',
        }}
        ratings={(['again', 'hard', 'good', 'easy'] as const).map(
          (grade, i) => ({
            grade,
            label: ['Errei', 'Difícil', 'Bom', 'Fácil'][i]!,
            interval: '',
          }),
        )}
        onRate={advanceFirst}
      >
        {audio.error && <S.Error role="alert">{audio.error}</S.Error>}
      </FlashcardSession>
    ) : first.kind === 'quiz' && question ? (
      <QuizSession
        aria-label={'Quiz: ' + data.title}
        header={{
          name: data.title,
          counter: `${firstIndex + 1}/${first.questions.length}`,
          progress:
            (firstIndex + (selected ? 1 : 0.5)) / first.questions.length,
          backLabel: 'Recomeçar o quiz',
          onBack: resetFirst,
        }}
        question={{
          level: data.code.split('.')[0]!,
          counter: `Questão ${firstIndex + 1} de ${first.questions.length}`,
          detail: 'Gramática · 6 min',
          prompt: gapText(question.prompt),
          context: question.context ? gapText(question.context) : undefined,
          narrationAction: action(question.id + '.prompt', 'Ouvir o enunciado'),
          options: question.options.map((option) => ({
            id: option.id,
            label: option.text,
            disabled: !!selected,
            state: !selected
              ? 'default'
              : selected === option.id
                ? option.id === question.correctOptionId
                  ? 'correct'
                  : 'wrong'
                : 'dim',
            feedbackOutcome:
              option.id === question.correctOptionId ? 'correct' : 'wrong',
          })),
          onSelect: (id) => {
            if (selected) return
            stop()
            answer((old) => ({ ...old, [question.id]: id }))
            const clip = recordings.find(
              (item) => item.id === question.id + '.completion',
            )
            if (clip)
              correction.current = setTimeout(
                () => audio.play(clip.id, clip.text),
                650,
              )
          },
          feedback: selected
            ? {
                tone:
                  selected === question.correctOptionId ? 'correct' : 'wrong',
                content: (
                  <>
                    {selected === question.correctOptionId
                      ? question.feedback.correct.title +
                        ' ' +
                        question.feedback.correct.message
                      : question.feedback.wrong.title +
                        ' ' +
                        question.feedback.wrong.message}
                    {action(
                      question.id + '.completion',
                      'Ouvir a frase correta',
                    )}
                  </>
                ),
              }
            : undefined,
          nextAction: selected
            ? {
                label:
                  firstIndex + 1 === first.questions.length
                    ? 'Ver resumo'
                    : 'Próxima',
                onClick: advanceFirst,
              }
            : undefined,
          hint: <p className="hint">Escolha a melhor resposta</p>,
        }}
      >
        {audio.error && <S.Error role="alert">{audio.error}</S.Error>}
      </QuizSession>
    ) : first.kind === 'quiz' ? (
      <QuizSession
        aria-label={'Quiz: ' + data.title}
        header={{
          name: data.title,
          counter: `${Object.values(answers).length}/${first.questions.length}`,
          progress: 1,
          backLabel: 'Recomeçar o quiz',
          onBack: resetFirst,
        }}
      >
        <PracticeResultPanel
          heading="Resultado"
          description={`Você acertou ${first.questions.filter((q) => answers[q.id] === q.correctOptionId).length} de ${first.questions.length} questões`}
          actions={
            <Button variant="brand" size="sm" onClick={resetFirst}>
              Refazer
            </Button>
          }
        />
      </QuizSession>
    ) : null
  const voice = data.voice
  return (
    <Common.Stack>
      <DeviceGallery
        selectionLabel="Choose your homework"
        onActiveIdChange={stop}
        items={[
          {
            id: 'first',
            label:
              '1 · ' + (first.kind === 'flashcards' ? 'Flashcards' : 'Quiz'),
            content: (
              <S.Item>
                <MobileFrame
                  screenMode="application"
                  aria-label={
                    (first.kind === 'flashcards' ? 'Flashcards' : 'Quiz') +
                    ' — ' +
                    firstTitle
                  }
                >
                  {firstView}
                </MobileFrame>
              </S.Item>
            ),
          },
          {
            id: 'shadowing',
            label: '2 · Shadowing',
            content: (
              <S.Item>
                <MobileFrame
                  screenMode="application"
                  aria-label={'Shadowing — ' + data.title}
                >
                  <ShadowingSession
                    aria-label={'Shadowing: ' + data.title}
                    backAction={{
                      label: 'Recomeçar o shadowing',
                      onClick: () => {
                        stop()
                        setPhrase(0)
                        repeat(0)
                      },
                    }}
                    name={data.title}
                    counter={`Frase ${phraseIndex + 1}/${data.shadowing.phrases.length}`}
                    progress={
                      (phraseIndex + repetitions / 3) /
                      data.shadowing.phrases.length
                    }
                    phraseKey={phrase.id}
                    previous={
                      data.shadowing.phrases[phraseIndex - 1]?.displayText
                    }
                    next={data.shadowing.phrases[phraseIndex + 1]?.displayText}
                    speaker={
                      speaker
                        ? {
                            name: speaker.name,
                            imageUrl: images[speaker.avatarUrl],
                            accentLabel: speaker.accentLabel,
                          }
                        : undefined
                    }
                    phrase={phrase.displayText.split(' ').map((word, i) => (
                      <span key={i}>
                        <ShadowingWord>{word}</ShadowingWord>{' '}
                      </span>
                    ))}
                    translation={translation ? phrase.translation : undefined}
                    repetitions={{
                      total: 3,
                      value: repetitions,
                      label: `${repetitions}/3 escutas`,
                    }}
                    controls={{
                      playing: shadowPlaying,
                      playLabel: shadowPlaying ? 'Pausar frase' : 'Tocar frase',
                      onPlay: playShadow,
                      speed,
                      speedOptions: ['0.75x', '1x'],
                      onSpeedChange: (value) => {
                        stop()
                        setSpeed(value)
                      },
                      translationVisible: translation,
                      onTranslationToggle: () => translate(!translation),
                    }}
                  >
                    {audio.error && (
                      <S.Error role="alert">{audio.error}</S.Error>
                    )}
                  </ShadowingSession>
                </MobileFrame>
              </S.Item>
            ),
          },
          {
            id: 'voice',
            label: '3 · Voice note',
            content: <HomeworkVoiceNote {...voice} />,
          },
        ]}
      />
      <HomeworkCopyAction
        message={homeworkMessage(data, origin)}
        active={active}
      />
    </Common.Stack>
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
          <PreparedHomework prepared={prepared} active={active} />
        ),
      }
    }),
  ]),
)
export const hasLessonHomework = (key: string) => !!views[key]
export function LessonHomeworkGallery({
  materialKey,
  active,
}: {
  materialKey: string
  active: boolean
}) {
  const View = views[materialKey]
  return View ? (
    <Suspense
      fallback={<Common.Hint role="status">Loading your practice…</Common.Hint>}
    >
      <View active={active} />
    </Suspense>
  ) : null
}

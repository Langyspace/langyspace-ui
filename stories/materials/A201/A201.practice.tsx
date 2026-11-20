import { VocabularyControls } from '../shared/VocabularyControls'
import { useState } from 'react'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { CharacterDialogue } from '../shared/CharacterPortraits.styles'
import { PromptExercise } from '../shared/LessonExercises'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import {
  content,
  vocabulary,
  hasVocabularyImages,
  parkImage,
  parkHotspots,
  toggleId,
  prompts,
  portraits,
} from './A201.data'
import * as S from './A201.styles'
import type { SpeechProps, WarmupProps } from './A201.types'

export function VocabularySection({ speech }: SpeechProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [hint, setHint] = useState(false)
  if (!hasVocabularyImages)
    return (
      <Common.Hint role="status">
        The illustrations are being prepared.
      </Common.Hint>
    )
  return (
    <Common.Stack>
      <VocabularyGrid
        items={vocabulary}
        imageVariant="scene"
        imageFit="contain"
        density="regular"
        columns={3}
        revealVariant="tooltip"
        revealOnHover={false}
        revealedIds={revealed}
        showAll={all}
        showInitial={hint}
        onReveal={(id) => setRevealed((ids) => toggleId(ids, id))}
        onPlay={
          content.vocabulary.every(speech.has)
            ? (id) => {
                const item = content.vocabulary.find((item) => item.id === id)
                if (item) speech.speak([item])
              }
            : undefined
        }
      />
      <VocabularyControls
        showInitial={hint}
        showAll={all}
        onToggleInitial={() => setHint(!hint)}
        onToggleAll={() => setAll(!all)}
      />
    </Common.Stack>
  )
}

export function TimeExpressions({ speech }: SpeechProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const toggle = (id: string) => setRevealed((ids) => toggleId(ids, id))
  const reveal = (id: string) => {
    toggle(id)
    const item = content.timeExpressions.find(
      (expression) => expression.id === id,
    )
    if (item && speech.has({ id: item.id, text: item.en }))
      speech.speak([{ id: item.id, text: item.en }])
  }
  return (
    <GrammarTable
      title="Time expressions"
      captionVisibility="screen-reader"
      columns={{ subject: 'Português', example: 'English' }}
      hiddenAnswers
      revealedIds={revealed}
      onReveal={reveal}
      revealLabel="Reveal expression"
      rows={content.timeExpressions.map((item) => ({
        id: item.id,
        subject: item.pt,
        example: (
          <Common.Row>
            <S.TimeWord
              variant="text"
              aria-expanded
              aria-label={`Hide expression: ${item.en}`}
              onClick={() => toggle(item.id)}
            >
              {item.en}
            </S.TimeWord>
            <IconButton
              variant="neutral"
              size="md"
              aria-label={`Listen: ${item.en}`}
              aria-busy={speech.playingId === item.id || undefined}
              disabled={!speech.has({ id: item.id, text: item.en })}
              onClick={() => speech.speak([{ id: item.id, text: item.en }])}
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 5 6 9H3v6h3l5 4zM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" />
              </svg>
            </IconButton>
          </Common.Row>
        ),
      }))}
    />
  )
}

export function WarmupSection({ index }: WarmupProps) {
  const item = content.warmups[index]!
  const image = vocabulary[index]!
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(item.correctIndex)
  return (
    <ExercisePanel
      variant="warmup"
      counter={`${index + 1}/6`}
      media={
        image.imageUrl ? (
          <S.WarmImage src={image.imageUrl} alt={image.imageAlt} />
        ) : (
          <Common.Hint role="status">
            The illustration is being prepared.
          </Common.Hint>
        )
      }
    >
      {item.options.map((option, choice) => (
        <QuizOption
          key={option}
          density="compact"
          letter={String.fromCharCode(65 + choice)}
          state={
            attempts.includes(choice)
              ? choice === item.correctIndex
                ? 'correct'
                : 'wrong'
              : 'default'
          }
          aria-pressed={attempts.includes(choice)}
          disabled={done}
          onClick={() =>
            setAttempts((old) =>
              old.includes(choice) ? old : [...old, choice],
            )
          }
        >
          {option}
        </QuizOption>
      ))}
    </ExercisePanel>
  )
}

export function GrammarSection() {
  return (
    <Common.Stack>
      <S.GrammarColumns>
        <GrammarTable
          title="Present Continuous — Now"
          columns={{ subject: 'Action', example: 'Example' }}
          explanation={
            <Common.Stack>
              <Common.Hint>
                Actions happening now or temporary situations.
              </Common.Hint>
              <S.Structure>
                Subject + <S.Emphasis>am/is/are + verb-ing</S.Emphasis>
              </S.Structure>
            </Common.Stack>
          }
          rows={[
            {
              id: 'now-work',
              subject: 'Now',
              example: (
                <>
                  I'm working <S.Emphasis>right now</S.Emphasis>.
                </>
              ),
            },
            {
              id: 'now-cook',
              subject: 'Now',
              example: (
                <>
                  She's <S.Emphasis>cooking</S.Emphasis> dinner.
                </>
              ),
            },
            {
              id: 'now-watch',
              subject: 'Now',
              example: (
                <>
                  They're <S.Emphasis>watching</S.Emphasis> TV.
                </>
              ),
            },
          ]}
        />
        <GrammarTable
          title="Simple Present — Usually"
          columns={{ subject: 'Routine', example: 'Example' }}
          explanation={
            <Common.Stack>
              <Common.Hint>Habits and routines.</Common.Hint>
              <S.Structure>
                Subject + <S.Emphasis>verb</S.Emphasis> (s/es when necessary)
              </S.Structure>
            </Common.Stack>
          }
          rows={[
            {
              id: 'usual-work',
              subject: 'Usually',
              example: (
                <>
                  I work <S.Emphasis>every day</S.Emphasis>.
                </>
              ),
            },
            {
              id: 'usual-cook',
              subject: 'Usually',
              example: (
                <>
                  She cooks <S.Emphasis>every evening</S.Emphasis>.
                </>
              ),
            },
            {
              id: 'usual-watch',
              subject: 'Usually',
              example: (
                <>
                  They watch TV <S.Emphasis>on weekends</S.Emphasis>.
                </>
              ),
            },
          ]}
        />
      </S.GrammarColumns>
      <Common.Hint>
        Temporary situations can use the Present Continuous with{' '}
        <S.Emphasis>these days</S.Emphasis> and{' '}
        <S.Emphasis>this week</S.Emphasis>.
      </Common.Hint>
    </Common.Stack>
  )
}

export function PictureTalk({ speech }: SpeechProps) {
  const [visited, setVisited] = useState<string[]>([])
  return (
    <S.ParkLayout>
      <S.ParkReference>
        {parkImage && parkHotspots.length === 6 ? (
          <SceneExplorer
            imageUrl={parkImage}
            imageAlt="Anna reads a book, Ben runs, Emma walks her dog, Lucas rides a bike, Sophie eats a sandwich, and Daniel takes pictures in a park."
            hotspots={parkHotspots}
            presentation="labels"
            labelVisibility="always"
            visitedIds={visited}
            onSelect={(id) =>
              setVisited((ids) => (ids.includes(id) ? ids : [...ids, id]))
            }
            playingId={speech.playingId}
            onPlayHotspot={
              content.park.every(speech.has)
                ? (id) => {
                    const item = content.park.find((item) => item.id === id)
                    if (item) speech.speak([item])
                  }
                : undefined
            }
            labels={{ initial: 'Choose a name to listen.', play: 'Listen' }}
          />
        ) : (
          <Common.Hint role="status">
            The park illustration and name labels are being prepared.
          </Common.Hint>
        )}
      </S.ParkReference>
      <PromptExercise
        items={content.park.map((person) => ({
          id: person.id,
          prompt: person.question,
          answer: person.text,
        }))}
      />
    </S.ParkLayout>
  )
}

export function MimeSection() {
  return (
    <Common.Stack>
      {content.mimeInstructions.map((text) => (
        <Common.Hint key={text}>{text}</Common.Hint>
      ))}
      <Common.Heading>Example</Common.Heading>
      <CharacterDialogue
        density="compact"
        lines={content.mimeExample.map((line, index) => ({
          id: `mime.example.${index}`,
          speaker: line.speaker,
          avatarUrl: portraits[line.speaker],
          content: line.text,
          side: index % 2 ? 'end' : 'start',
        }))}
      />
    </Common.Stack>
  )
}

export function ConversationSection({ index }: WarmupProps) {
  return (
    <PromptExercise
      items={content.conversation
        .slice(index * 5, index * 5 + 5)
        .map((prompt, offset) => ({
          id: `conversation.${index * 5 + offset + 1}`,
          prompt,
        }))}
    />
  )
}

export function HomeworkSection() {
  return (
    <Common.Stack>
      <Common.Hint>{content.homework.description}</Common.Hint>
      <PromptExercise
        items={prompts(
          content.homework.instructions.map((prompt) => ({ prompt })),
          'homework',
        )}
      />
      <Common.Surface>
        <Common.Tag>Example</Common.Tag>
        {content.homework.example}
      </Common.Surface>
    </Common.Stack>
  )
}

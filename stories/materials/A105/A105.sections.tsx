import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { MaterialLearningDialogue as LearningDialogue } from '../shared/MaterialLearningDialogue'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { PromptExercise } from '../shared/LessonExercises'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import {
  produce,
  scene,
  portraits,
  dialogue,
  gaps,
  message,
  prompts,
  homework,
} from './A105.data'
import { recordingUrl } from './A105.audio'
import type { A105Speech } from './A105.types'

const phoneTheme = withVoiceMessageLayout({
  contentWidth: '47.5rem',
  phoneWidth: 'clamp(11.875rem, calc((100dvh - 13.75rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(23.75rem, calc(100dvh - 13.75rem), 33.75rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})
export function ProduceVocabulary({
  fruit,
  speech,
}: {
  fruit: boolean
  speech: A105Speech
}) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [showAll, setAll] = useState(false)
  const [showInitial, setInitial] = useState(false)
  const items = fruit ? produce.slice(0, 6) : produce.slice(6)
  return (
    <VocabularyGrid
      items={items.map((item) => ({
        ...item,
        imageUrl: scene(item.id),
        imageAlt: item.translation,
      }))}
      revealedIds={revealed}
      revealOnHover={false}
      imageVariant="isolated"
      imageFit="contain"
      surface="plain"
      density="regular"
      revealVariant="tooltip"
      showAll={showAll}
      showInitial={showInitial}
      controls={{
        showAll,
        showInitial,
        onToggleAll: () => setAll(!showAll),
        onToggleInitial: () => setInitial(!showInitial),
      }}
      onReveal={(id) =>
        setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
      }
      onPlay={(id) => {
        const item = items.find((item) => item.id === id)
        if (item) speech.speak([{ id: `vocab.${id}`, text: item.word }])
      }}
    />
  )
}
export function MarketDialogue({
  speech,
  fillGaps = false,
}: {
  speech: A105Speech
  fillGaps?: boolean
}) {
  const [translated, setTranslated] = useState<string[]>([])
  const [revealed, setRevealed] = useState<string[]>([])
  const lines = fillGaps ? gaps : dialogue
  return (
    <LearningDialogue
      density="compact"
      lines={lines.map((line) => ({
        id: line.id,
        speaker: line.speaker,
        avatarUrl: portraits[line.speaker],
        side: line.speaker === 'Kim' ? 'start' : 'end',
        content: line.text,
        translation: line.translation,
        parts: 'parts' in line ? line.parts : undefined,
        audioLabel: `Listen to ${line.speaker}`,
      }))}
      translatedIds={translated}
      onTranslate={(id) =>
        setTranslated((ids) =>
          ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id],
        )
      }
      playingId={speech.playingId}
      onPlay={(id) => {
        const line = lines.find((line) => line.id === id)
        if (line) speech.speak([line])
      }}
      revealedGapIds={revealed}
      onRevealGap={(id, lineId) => {
        setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        const line = lines.find((line) => line.id === lineId)
        if (line) speech.speak([line])
      }}
    />
  )
}
export function LikeGrammar() {
  return (
    <Common.Stack>
      <GrammarTable
        title="Food preferences"
        captionVisibility="screen-reader"
        columns={{ subject: 'Who', verb: 'Form', example: 'Example' }}
        rows={[
          {
            id: 'i',
            subject: 'I / You / We / They',
            verb: 'like / don’t like',
            example: 'I like apples. I don’t like onions.',
          },
          {
            id: 'she',
            subject: 'He / She',
            verb: 'likes / doesn’t like',
            example: 'Kim likes bananas. She doesn’t like oranges.',
          },
          {
            id: 'ask',
            subject: 'Do you …?',
            verb: 'Yes, I do. / No, I don’t.',
            example: 'Do you like mangoes?',
          },
          {
            id: 'ask-she',
            subject: 'Does she …?',
            verb: 'Yes, she does. / No, she doesn’t.',
            example: 'Does Kim like carrots?',
          },
        ]}
      />
      <Common.Hint>
        Talk about food in general: I like apples. I love corn.
      </Common.Hint>
    </Common.Stack>
  )
}
export function Listening({ active }: { active: boolean }) {
  return (
    <ThemeProvider theme={phoneTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Kim', avatarUrl: portraits.Kim, status: 'online' }}
        greeting={{ text: 'Hi! The market is great!', timestamp: '09:40' }}
        audio={{
          id: 'L.1',
          src: recordingUrl('L.1', message),
          transcript: message,
          timestamp: '21:11',
        }}
        active={active}
        questions={[]}
        onAnswer={() => undefined}
        transcriptReveal="third-listen"
        labels={{
          play: 'Listen to Kim',
          pause: 'Pause',
          loading: 'Loading audio',
          replay: 'Listen again',
          speed: 'Speed',
          transcript: 'Transcript',
          transcriptHidden: 'The transcript appears on the third listen.',
          audioUnavailable: 'Audio is not available.',
          audioError: 'The audio could not play.',
          retry: 'Try again',
          questions: 'Questions about Kim',
          conversation: 'Conversation',
        }}
        footer={<PromptExercise items={prompts.listening} />}
      />
    </ThemeProvider>
  )
}
export function KimsList() {
  const [support, setSupport] = useState<'cue' | 'hint' | 'full'>('cue')
  const items = produce.filter((item) =>
    ['banana', 'apple', 'mango', 'orange'].includes(item.id),
  )
  const mangoPrice = produce.find((item) => item.id === 'mango')!.price
  const total = mangoPrice + produce.find((item) => item.id === 'banana')!.price
  const turns = [
    {
      speaker: 'Ana',
      cue: 'Ask about a fruit.',
      hint: 'Do you … apples?',
      text: 'Do you like apples?',
    },
    {
      speaker: 'Kim',
      cue: 'Say no. Choose a fruit.',
      hint: 'No. I like …',
      text: 'No. I like mangoes.',
    },
    {
      speaker: 'Ana',
      cue: 'Give the price.',
      hint: 'A mango is … dollars.',
      text: `A mango is ${mangoPrice} dollars.`,
    },
    {
      speaker: 'Kim',
      cue: 'Choose two fruits.',
      hint: 'A mango and …, please.',
      text: 'A mango and a banana, please.',
    },
    {
      speaker: 'Ana',
      cue: 'Give the total.',
      hint: 'That’s … dollars.',
      text: `That’s ${total} dollars.`,
    },
    {
      speaker: 'Kim',
      cue: 'Say thank you.',
      hint: 'Thank …!',
      text: 'Thank you!',
    },
  ] as const
  return (
    <Common.Columns>
      <VocabularyGrid
        columns={2}
        density="regular"
        imageVariant="isolated"
        imageFit="contain"
        surface="plain"
        interaction="static"
        items={items.map((item) => ({
          ...item,
          imageUrl: scene(item.id),
          imageAlt: item.translation,
          badge: `$${item.price}`,
        }))}
        revealedIds={[]}
        onReveal={() => undefined}
      />
      <LearningDialogue
        density="compact"
        guidance={{ level: support, onChange: setSupport }}
        lines={turns.map((turn, index) => ({
          id: `market.turn.${index + 1}`,
          speaker: turn.speaker,
          avatarUrl: portraits[turn.speaker],
          side: turn.speaker === 'Ana' ? 'start' : 'end',
          cue: turn.cue,
          hint: turn.hint,
          content: turn.text,
        }))}
      />
    </Common.Columns>
  )
}

export function Homework() {
  return (
    <Common.Stack>
      {homework.map((task) => (
        <Common.Surface key={task.title}>
          <Common.Heading>{task.title}</Common.Heading>
          <p>{task.description}</p>
        </Common.Surface>
      ))}
    </Common.Stack>
  )
}

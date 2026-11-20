import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { PromptExercise } from '../shared/LessonExercises'
import { HomeworkActivity } from '../shared/LessonActivities'
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
  homeworkMessage,
} from './A105.data'
import { recordingUrl } from './A105.audio'
import type { A105Speech } from './A105.types'

const phoneTheme = withVoiceMessageLayout({
  contentWidth: '47.5rem',
  phoneWidth: 'clamp(15rem, calc((100dvh - 15.625rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(30rem, calc(100dvh - 15.625rem), 33.75rem)',
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
      imageVariant={fruit ? 'isolated' : 'scene'}
      imageFit="contain"
      surface={fruit ? 'plain' : 'card'}
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
  const items = produce.filter((item) =>
    ['banana', 'apple', 'mango', 'orange'].includes(item.id),
  )
  return (
    <RolePlayExercise
      presentation="instructions"
      density="compact"
      situation="You are at the market with Kim. Help her choose two fruits."
      roles={['You: Ana', 'Teacher: Kim']}
      steps={[
        { id: 'choose', label: 'Ask Kim what she likes. Choose two fruits.' },
        {
          id: 'price',
          label: 'Kim asks the price. Tell her how much each fruit is.',
        },
        { id: 'swap', label: 'Swap roles. Buy fruit for yourself.' },
      ]}
      completedIds={[]}
      onStepToggle={() => undefined}
      support={['Do you like …?', 'How much is it?', 'It’s … reais.']}
    >
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
          badge: `R$ ${item.price}`,
        }))}
        revealedIds={[]}
        onReveal={() => undefined}
      />
    </RolePlayExercise>
  )
}
export function Homework({
  studentPortalOrigin,
}: {
  studentPortalOrigin?: string
}) {
  return (
    <HomeworkActivity
      items={homework}
      message={homeworkMessage}
      studentPortalOrigin={studentPortalOrigin}
    />
  )
}

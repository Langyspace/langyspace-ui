import exerciseHeadings from '../shared/exerciseHeadings.json'
import { voiceMessageTranscriptLabels } from '../shared/voiceMessageLabels'
import { ThemeProvider } from 'styled-components'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import * as Shell from '../shared/Lesson.styles'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { useLessonPage } from '../shared/useLessonPage'
import { PromptExercise } from '../shared/LessonExercises'
import { RoutineHomework } from './RoutineHomework'
import { FreeConversationPage } from '../shared/FreeConversationPage'
import { MaterialVideoPage } from '../shared/MaterialVideoPage'
import { characterPortrait } from '../shared/characterPortraits'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import { RoutineDialogue } from './RoutineDialogue'
import { RoutineScene } from './RoutineScene'
import { RoutinePersonal } from './RoutinePersonal'
import { routineRecordings } from './InfluencerRoutine.recordings'
import source from './InfluencerRoutine.content.json'
import video from './InfluencerRoutine.video.json'
import cover from './assets/catalog-cover40.webp'
import type { InfluencerRoutineLessonProps } from './InfluencerRoutine.types'

export const routinePageIds = [
  'cover',
  'morning-scene',
  'morning-dialogue',
  'morning-personal',
  'ready-scene',
  'ready-dialogue',
  'ready-personal',
  'grammar',
  'gym-scene',
  'gym-dialogue',
  'gym-personal',
  'night-scene',
  'night-dialogue',
  'night-personal',
  'bedtime-message',
  'reply',
  's_video131',
  'free-conversation',
  'homework',
] as const

export function InfluencerRoutineLesson({
  initialPageId,
}: InfluencerRoutineLessonProps) {
  const [pageId, setPageId] = useLessonPage(
    initialPageId,
    source.materialKey,
    routinePageIds,
  )
  const notes = useLessonNotesPopup('langy-notes:' + source.materialKey, pageId)
  const message = routineRecordings.find(
    (clip) => clip.id === 'L.1' && clip.text === source.listening.text,
  )!
  const activityPages = source.blocks.flatMap((block) => [
    {
      id: block.key + '-scene',
      label: block.sceneTitle,
      content: (
        <SlidePage
          eyebrow="Vocabulary"
          title={block.sceneTitle}
          instruction={block.sceneSubtitle}
          width={{ mediaAspectRatio: 16 / 9 }}
        >
          <RoutineScene
            block={block}
            active={pageId === block.key + '-scene'}
          />
        </SlidePage>
      ),
    },
    {
      id: block.key + '-dialogue',
      label: block.dialogueTitle,
      content: (
        <RoutineDialogue
          block={block}
          active={pageId === block.key + '-dialogue'}
        />
      ),
    },
    {
      id: block.key + '-personal',
      label: block.personal.title,
      content: (
        <SlidePage
          columns={1}
          density="compact"
          eyebrow="Your routine"
          title={block.personal.title}
          instruction={block.personal.instruction}
        >
          <RoutinePersonal prompts={block.personal.prompts} />
        </SlidePage>
      ),
    },
  ])
  const pages = [
    {
      id: 'cover',
      label: source.title,
      content: (
        <SlidePage
          eyebrow="A2 / B1 · Extra lesson"
          title={source.title}
          instruction={source.instruction}
          cover={{ src: cover, alt: 'Ana recording routine content at home' }}
          coverPlacement="after-heading"
          width={{ mediaAspectRatio: 16 / 9 }}
        />
      ),
    },
    ...activityPages.slice(0, 6),
    {
      id: 'grammar',
      label: source.grammar.title,
      content: (
        <SlidePage
          columns={2}
          eyebrow="Simple Present"
          title={source.grammar.title}
          instruction={source.grammar.instruction}
        >
          <Common.Stack>
            <GrammarTable
              title="Talking about habits"
              captionVisibility="screen-reader"
              columns={{
                subject: 'Purpose',
                verb: 'I / you',
                example: 'He / she',
              }}
              rows={source.grammar.rows}
            />
            <Common.Hint>{source.grammar.note}</Common.Hint>
          </Common.Stack>
        </SlidePage>
      ),
    },
    ...activityPages.slice(6),
    {
      id: 'bedtime-message',
      label: source.listening.title,
      content: (
        <SlidePage
          columns={2}
          eyebrow="Listening"
          title={source.listening.title}
          instruction={source.listening.instruction}
        >
          <ThemeProvider theme={lessonVoiceMessageTheme}>
            <VoiceMessageExercise
              layout="balanced"
              contact={{
                name: 'Kim',
                avatarUrl: characterPortrait('Kim'),
                status: 'online',
              }}
              greeting={{ text: source.listening.greeting, timestamp: '22:14' }}
              audio={{
                id: 'L.1',
                src: message.src,
                transcript: source.listening.text,
                timestamp: '22:15',
              }}
              active={pageId === 'bedtime-message'}
              questions={[]}
              onAnswer={() => undefined}
              transcriptReveal="third-listen"
              labels={{
                play: 'Listen to Kim',
                pause: 'Pause',
                loading: 'Loading audio',
                replay: 'Replay',
                speed: 'Speed',
                transcript: 'Transcript',
                ...voiceMessageTranscriptLabels,
                transcriptHidden: 'The transcript appears on the third listen',
                audioUnavailable: 'Audio unavailable',
                audioError: 'Audio could not play',
                retry: 'Try again',
                conversation: 'Conversation',
                questions: 'Questions about Kim',
              }}
              footer={<PromptExercise items={source.listening.questions} />}
            />
          </ThemeProvider>
        </SlidePage>
      ),
    },
    {
      id: 'reply',
      label: source.reply.title,
      content: (
        <SlidePage
          columns={1}
          density="compact"
          eyebrow="Speaking"
          title={source.reply.title}
          instruction={source.reply.instruction}
        >
          <RoutinePersonal prompts={source.reply.prompts} fictionalContact />
        </SlidePage>
      ),
    },
    {
      id: 's_video131',
      label: video.title,
      content: (
        <MaterialVideoPage content={video} active={pageId === 's_video131'} />
      ),
    },
    {
      id: 'free-conversation',
      label: exerciseHeadings.freeConversation,
      content: (
        <FreeConversationPage
          instruction={source.freeConversationInstruction}
        />
      ),
    },
    {
      id: 'homework',
      label: source.homework.title,
      content: (
        <SlidePage
          columns={3}
          density="compact"
          eyebrow="After class"
          title={source.homework.title}
          instruction={source.homework.instruction}
        >
          <RoutineHomework active={pageId === 'homework'} />
        </SlidePage>
      ),
    },
  ]
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label={`A2 / B1 · ${source.title}`}
        pageId={pageId}
        onPageChange={setPageId}
        pages={pages}
        overlay={
          <LessonNotes
            storageKey={'langy-notes:' + source.materialKey}
            open={notes.isOpen}
            popupWindow={notes.popup}
            preview={notes.preview}
            error={notes.error}
            onClose={notes.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => {
              notes.trigger(element)
            }}
            open={notes.isOpen}
            onClick={notes.open}
          />
        }
      />
    </Shell.Stage>
  )
}

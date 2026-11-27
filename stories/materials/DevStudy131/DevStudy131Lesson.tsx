import { voiceMessageTranscriptLabels } from '../shared/voiceMessageLabels'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { FreeConversationPage } from '../shared/FreeConversationPage'
import { LessonHomeworkGallery } from '../shared/LessonHomeworkGallery'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { useLessonPage } from '../shared/useLessonPage'
import { PromptExercise } from '../shared/LessonExercises'
import { MaterialVideoPage } from '../shared/MaterialVideoPage'
import { characterPortrait } from '../shared/characterPortraits'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import * as Shell from '../shared/Lesson.styles'
import {
  DevStudyDialogue,
  DevStudyOralPractice,
  DevStudyReference,
  DevStudyVocabulary,
} from './DevStudy131Exercises'
import { devStudyRecordings } from './DevStudy131.recordings'
import source from './DevStudy131.content.json'
import video from './DevStudy131.video.json'
import cover from './assets/cover131.webp'
import type {
  DevStudy131LessonProps,
  DevStudyReferenceProps,
} from './DevStudy131.types'

export const devStudyPageIds = [
  'cover',
  'vocabulary',
  'study-week',
  'guided',
  'your-learning',
  'small-project',
  'describe-problem',
  'mentor-check-in',
  'portfolio',
  'listening',
  'reply',
  'video',
  'free-conversation',
  'homework',
] as const

export function DevStudy131Lesson({ initialPageId }: DevStudy131LessonProps) {
  const [pageId, setPageId] = useLessonPage(
    initialPageId,
    source.materialKey,
    devStudyPageIds,
  )
  const speech = useRecordedAudio(devStudyRecordings)
  const notes = useLessonNotesPopup('langy-notes:' + source.materialKey)
  useEffect(() => speech.stop, [speech.stop])
  const oralPage = (id: string) => {
    const activity = source.oralPages.find((page) => page.id === id)!
    return {
      id,
      label: activity.title,
      content: (
        <SlidePage
          eyebrow="Your turn"
          title={activity.title}
          instruction={activity.instruction}
          density="compact"
          columns={activity.reference ? undefined : 1}
          questions={
            activity.reference ? (
              <DevStudyOralPractice turns={activity.turns} />
            ) : undefined
          }
          questionsTitle={null}
        >
          {activity.reference ? (
            <DevStudyReference
              kind={activity.reference as DevStudyReferenceProps['kind']}
            />
          ) : (
            <DevStudyOralPractice turns={activity.turns} />
          )}
        </SlidePage>
      ),
    }
  }
  const voiceNotes = source.listening.notes.map((note) => ({
    id: note.id,
    transcript: note.text,
    timestamp: note.timestamp,
    src: devStudyRecordings.find(
      (clip) => clip.id === note.id && clip.text === note.text,
    )?.src,
  }))
  const pages = [
    {
      id: 'cover',
      label: source.title,
      content: (
        <SlidePage
          eyebrow="A2 / B1 · Developer English · 01"
          title={source.title}
          instruction={source.instruction}
          cover={{
            src: cover,
            alt: 'Ana studies a small development project with support from Kim',
          }}
          coverPlacement="after-heading"
          width={{ mediaAspectRatio: 16 / 9 }}
        />
      ),
    },
    {
      id: 'vocabulary',
      label: 'Your learning toolkit',
      content: (
        <SlidePage
          eyebrow="Vocabulary"
          title="Your learning toolkit"
          instruction="Look at each learning situation. Say what you see, then reveal the word and hear an example"
          width={{ vocabularyColumns: 3 }}
        >
          <DevStudyVocabulary speech={speech} />
        </SlidePage>
      ),
    },
    oralPage('study-week'),
    {
      id: 'guided',
      label: 'Talk about your learning',
      content: (
        <SlidePage
          eyebrow="Guided conversation"
          title="Talk about your learning"
          instruction="Listen to Ana and Kim. Find out what Ana is building and how she plans to practice"
          density="compact"
          titleAudio={{
            context: 'Ana and Kim discuss a practice project',
            status: speech.playingId?.startsWith('D.')
              ? speech.paused
                ? 'paused'
                : 'playing'
              : 'idle',
            onClick: () =>
              speech.playingId?.startsWith('D.')
                ? speech.togglePause()
                : speech.speak(source.dialogue),
          }}
          questions={
            <PromptExercise
              density="compact"
              items={source.dialogueQuestions}
            />
          }
        >
          <DevStudyDialogue speech={speech} />
        </SlidePage>
      ),
    },
    oralPage('your-learning'),
    oralPage('small-project'),
    oralPage('describe-problem'),
    oralPage('mentor-check-in'),
    oralPage('portfolio'),
    {
      id: 'listening',
      label: source.listening.title,
      content: (
        <SlidePage
          eyebrow="Listening"
          title={source.listening.title}
          instruction={source.listening.instruction}
          density="compact"
          columns={2}
        >
          <ThemeProvider theme={lessonVoiceMessageTheme}>
            <VoiceMessageExercise
              layout="balanced"
              contact={{
                name: source.listening.contact.name,
                avatarUrl: characterPortrait(source.listening.contact.name),
                status: 'online',
              }}
              greeting={{ text: source.listening.greeting, timestamp: '18:00' }}
              audio={voiceNotes[0]!}
              additionalAudios={voiceNotes.slice(1)}
              active={pageId === 'listening'}
              questions={[]}
              onAnswer={() => undefined}
              transcriptReveal="third-listen"
              footer={
                <PromptExercise
                  density="compact"
                  items={source.listening.questions}
                />
              }
              labels={{
                play: 'Listen to Kim',
                pause: 'Pause',
                replay: 'Replay',
                loading: 'Loading audio',
                transcript: 'Transcript',
                ...voiceMessageTranscriptLabels,
                transcriptHidden: 'The transcript appears on the third listen',
                conversation: 'Your study session',
                questions: 'Questions about Kim’s notes',
              }}
            />
          </ThemeProvider>
        </SlidePage>
      ),
    },
    oralPage('reply'),
    {
      id: 'video',
      label: video.title,
      content: (
        <MaterialVideoPage content={video} active={pageId === 'video'} />
      ),
    },
    {
      id: 'free-conversation',
      label: 'Free conversation',
      content: (
        <FreeConversationPage
          instruction={source.freeConversationInstruction}
        />
      ),
    },
    {
      id: 'homework',
      label: 'Class complete — keep building',
      content: (
        <SlidePage
          eyebrow="After class"
          title="Class complete — keep building"
          instruction="Review twenty useful terms, practice six phrases and send your teacher a short update about your project"
          columns={3}
          density="compact"
        >
          <LessonHomeworkGallery
            materialKey={source.materialKey}
            active={pageId === 'homework'}
          />
        </SlidePage>
      ),
    },
  ]
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label={`${source.code} · ${source.title}`}
        pageId={pageId}
        onPageChange={(next) => {
          speech.stop()
          setPageId(next)
        }}
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
            ref={notes.trigger}
            open={notes.isOpen}
            onClick={notes.open}
          />
        }
      />
    </Shell.Stage>
  )
}

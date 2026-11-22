import { useEffect, useMemo, useState } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import { MaterialTheme } from './MaterialTheme'
import { LessonShell } from './LessonShell'
import { PromptExercise } from './LessonExercises'
import { TrialNextSteps } from './LessonBookends'
import { FreeConversationPage } from './FreeConversationPage'
import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
} from './lessonOpeningPolicy'
import { characterPortrait } from './characterPortraits'
import type {
  TrialPreviewLessonProps,
  TrialPreviewConversationProps,
} from './TrialPreviewLesson.types'

function Conversation({
  active,
  dialogue,
  recordings,
}: TrialPreviewConversationProps) {
  const dialogueLines = dialogue.lines.map((line) => ({
    id: line.id,
    text: line.en,
  }))
  const dialogueRecordings = useMemo(
    () =>
      recordings.filter((clip) =>
        dialogue.lines.some(
          (line) => line.id === clip.id && line.en === clip.text,
        ),
      ),
    [recordings, dialogue.lines],
  )
  const speech = useRecordedAudio(dialogueRecordings)
  const [translated, setTranslated] = useState<string[]>([])
  useEffect(() => {
    if (!active) speech.stop()
  }, [active, speech.stop])
  const playing = dialogue.lines.some((line) => line.id === speech.playingId)
  return (
    <SlidePage
      density="compact"
      eyebrow="Guided conversation"
      title={dialogue.title}
      instruction={dialogue.subtitle}
      titleAudio={{
        context: dialogue.title,
        status: playing ? (speech.paused ? 'paused' : 'playing') : 'idle',
        disabled: !active || !dialogueLines.every(speech.has),
        onClick: () =>
          playing ? speech.togglePause() : speech.speak(dialogueLines),
      }}
      questions={<PromptExercise items={dialogue.questions} />}
    >
      <LearningDialogue
        density="compact"
        lines={dialogue.lines.map((line) => ({
          id: line.id,
          speaker: line.who,
          avatarUrl: characterPortrait(line.who),
          side: line.who === 'Kim' ? 'start' : 'end',
          content: line.en,
          translation: line.pt,
          audioLabel: `Listen to ${line.who}`,
        }))}
        translatedIds={translated}
        onTranslate={(id) =>
          setTranslated((ids) => (ids.includes(id) ? [] : [id]))
        }
        playingId={speech.playingId}
        onPlay={(id) => {
          const line = dialogueLines.find((item) => item.id === id)
          if (line) speech.speak([line])
        }}
      />
      {speech.error ? <p role="status">{speech.error}</p> : null}
    </SlidePage>
  )
}

/** Lesson data/slots only; all visual contracts belong to the canonical UI components. */
export function TrialPreviewLesson({
  initialPageId,
  materialKey,
  storageKey,
  title,
  level,
  vocabulary,
  dialogue,
  recordings,
  freeConversationInstruction,
}: TrialPreviewLessonProps) {
  return (
    <MaterialTheme>
      <LessonShell
        initialPageId={initialPageId}
        materialKey={storageKey ?? materialKey}
        label={`${level} Trial · ${title}`}
        pageIds={withLessonOpeningPageIds(materialKey, [
          's2',
          's3',
          'free-conversation',
          'next-steps',
        ])}
        pages={(_, activeId) =>
          withLessonOpeningPages(materialKey, [
            {
              id: 's2',
              label: vocabulary.title,
              content: (
                <SlidePage
                  columns={vocabulary.columns}
                  width={vocabulary.width}
                  title={vocabulary.title}
                  instruction={vocabulary.instruction}
                  eyebrow="Vocabulary"
                >
                  {vocabulary.render(activeId === 's2')}
                </SlidePage>
              ),
            },
            {
              id: 's3',
              label: dialogue.title,
              content: (
                <Conversation
                  active={activeId === 's3'}
                  dialogue={dialogue}
                  recordings={recordings}
                />
              ),
            },
            {
              id: 'free-conversation',
              label: 'Free conversation',
              content: (
                <FreeConversationPage
                  instruction={freeConversationInstruction}
                />
              ),
            },
            {
              id: 'next-steps',
              label: 'Next steps',
              content: <TrialNextSteps materialKey={materialKey} />,
            },
          ])
        }
      />
    </MaterialTheme>
  )
}

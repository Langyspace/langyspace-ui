import { useEffect, useMemo, useState } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { MaterialLearningDialogue } from '../shared/MaterialLearningDialogue'
import { characterPortrait } from '../shared/characterPortraits'
import { PromptExercise } from '../shared/LessonExercises'
import { routineRecordings } from './InfluencerRoutine.recordings'
import type { RoutineDialogueProps } from './InfluencerRoutine.types'

export function RoutineDialogue({ block, active }: RoutineDialogueProps) {
  // A hidden dialogue must not open decoders for the entire lesson (including the bedtime clip).
  const recordings = useMemo(
    () =>
      routineRecordings.filter((clip) =>
        block.dialogue.some(
          (line) => line.id === clip.id && line.text === clip.text,
        ),
      ),
    [block],
  )
  const speech = useRecordedAudio(active ? recordings : [])
  const [translated, translate] = useState<string[]>([])
  useEffect(() => {
    if (!active) speech.stop()
  }, [active, speech.stop])
  const playing = block.dialogue.some((line) => line.id === speech.playingId)
  return (
    <SlidePage
      density="compact"
      eyebrow="Guided conversation"
      title={block.dialogueTitle}
      instruction={block.dialogueSubtitle}
      questions={<PromptExercise items={block.questions} />}
      titleAudio={{
        context: block.dialogueTitle,
        status: playing ? (speech.paused ? 'paused' : 'playing') : 'idle',
        disabled: !active || !block.dialogue.every(speech.has),
        onClick: () =>
          playing ? speech.togglePause() : speech.speak(block.dialogue),
      }}
    >
      <MaterialLearningDialogue
        density="compact"
        translatedIds={translated}
        onTranslate={(id) =>
          translate((ids) =>
            ids.includes(id)
              ? ids.filter((value) => value !== id)
              : [...ids, id],
          )
        }
        playingId={speech.playingId}
        onPlay={(id) => {
          const line = block.dialogue.find((value) => value.id === id)
          if (line) speech.speak([line])
        }}
        lines={block.dialogue.map((line) => ({
          ...line,
          content: line.text,
          avatarUrl: characterPortrait(line.speaker),
          side: line.speaker === 'Kim' ? 'start' : 'end',
          audioLabel: `Listen to ${line.speaker}`,
        }))}
      />
      {speech.error ? (
        <Common.Hint role="status">{speech.error}</Common.Hint>
      ) : null}
    </SlidePage>
  )
}

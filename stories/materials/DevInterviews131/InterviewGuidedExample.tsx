import guidedInstructions from '../shared/guidedConversationInstructions.json'
import exerciseHeadings from '../shared/exerciseHeadings.json'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { QuestionList } from '../../../src/components/Exercise/QuestionList'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { MaterialLearningDialogue } from '../shared/MaterialLearningDialogue'
import { characterPortrait } from '../shared/characterPortraits'
import { usePracticePlayback } from '../shared/usePracticePlayback'
import { interviewRecordings } from './DevInterviews131.recordings'
import source from './DevInterviews131.content.json'
import practice from './DevInterviews131.practice.json'

export function InterviewGuidedExample({ active }: { active: boolean }) {
  const audio = usePracticePlayback(active, interviewRecordings)
  const play = (index: number, sequence = false) => {
    const line = source.dialogue[index]
    if (line)
      audio.play(
        line.id,
        line.text,
        1,
        sequence ? () => play(index + 1, true) : undefined,
      )
  }
  return (
    <SlidePage
      eyebrow="Guided conversation"
      title={exerciseHeadings.dialogue}
      instruction={guidedInstructions.anaKim.questions}
      density="compact"
      titleAudio={{
        context: 'Kim and Ana’s interview',
        status: audio.error
          ? 'error'
          : audio.paused
            ? 'paused'
            : audio.playingId
              ? 'playing'
              : 'idle',
        disabled: !active,
        onClick: () => (audio.playingId ? audio.togglePause() : play(0, true)),
      }}
      questions={
        <QuestionList density="compact" items={practice.dialogueQuestions} />
      }
    >
      <MaterialLearningDialogue
        density="compact"
        playingId={audio.paused ? undefined : audio.playingId}
        onPlay={(id) =>
          play(source.dialogue.findIndex((line) => line.id === id))
        }
        lines={source.dialogue.map((line, index) => ({
          id: line.id,
          speaker: line.speaker,
          avatarUrl: characterPortrait(line.speaker),
          side: index % 2 ? ('end' as const) : ('start' as const),
          content:
            practice.dialogueDisplay[
              line.id as keyof typeof practice.dialogueDisplay
            ],
        }))}
      />
      {audio.error ? (
        <Common.Hint role="alert">{audio.error}</Common.Hint>
      ) : null}
    </SlidePage>
  )
}

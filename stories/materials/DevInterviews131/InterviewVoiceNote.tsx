import { voiceMessageTranscriptLabels } from '../shared/voiceMessageLabels'
import { ThemeProvider } from 'styled-components'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { QuestionList } from '../../../src/components/Exercise/QuestionList'
import { characterPortrait } from '../shared/characterPortraits'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import { interviewRecordings } from './DevInterviews131.recordings'
import source from './DevInterviews131.content.json'
import practice from './DevInterviews131.practice.json'

export function InterviewVoiceNote({
  active,
  index,
}: {
  active: boolean
  index: 0 | 1
}) {
  const note = source.notes[index]!
  const clip = interviewRecordings.find((item) => item.id === note.id)
  return (
    <ThemeProvider theme={lessonVoiceMessageTheme}>
      <VoiceMessageExercise
        active={active}
        layout="balanced"
        contact={{
          name: 'Kim',
          avatarUrl: characterPortrait('Kim'),
          status: 'online',
        }}
        greeting={
          index === 0
            ? { text: source.whatsappMessage, timestamp: '09:15' }
            : undefined
        }
        audio={{
          id: note.id,
          src: clip?.src,
          transcript: note.text,
          timestamp: index === 0 ? '09:16' : '09:17',
        }}
        transcriptReveal="third-listen"
        questions={[]}
        onAnswer={() => {}}
        footer={
          <QuestionList
            density="compact"
            items={practice.noteQuestions[index]!}
          />
        }
        labels={{
          play: 'Play voice note',
          pause: 'Pause voice note',
          replay: 'Replay voice note',
          loading: 'Loading audio',
          speed: 'Speed',
          transcript: 'Transcript',
          ...voiceMessageTranscriptLabels,
          transcriptHidden: 'Transcript after three complete listens',
          audioUnavailable: 'This recording is not available',
          audioError: 'Audio could not play. Please retry',
          retry: 'Retry audio',
          correct: 'Correct',
          incorrect: 'Try again',
          questions: 'Questions',
          conversation: 'Conversation with Kim',
        }}
      />
    </ThemeProvider>
  )
}

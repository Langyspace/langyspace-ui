import { ThemeProvider } from 'styled-components'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { PromptExercise } from '../shared/LessonExercises'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import { ana } from '../shared/characterPortraits'
import { listeningParts } from './TrialA1Listening.data'
export { listeningParts } from './TrialA1Listening.data'

export const listeningInstruction = 'Listen to Ana. Then answer the questions'

export function TrialA1Listening({
  active,
  part = 0,
}: {
  active: boolean
  part?: 0 | 1
}) {
  const message = listeningParts[part]
  return (
    <ThemeProvider theme={lessonVoiceMessageTheme}>
      <VoiceMessageExercise
        contact={{ name: 'Ana', avatarUrl: ana, status: 'online' }}
        greeting={message.greeting}
        audio={{
          id: message.id,
          src: message.recording,
          transcript: message.transcript,
          duration: message.durationSeconds,
          timestamp: message.timestamp,
        }}
        active={active}
        questions={[]}
        onAnswer={() => undefined}
        transcriptReveal="third-listen"
        labels={{
          play: 'Listen to Ana',
          pause: 'Pause',
          loading: 'Loading audio',
          replay: 'Listen again',
          speed: 'Speed',
          transcript: 'Transcript',
          transcriptHidden: 'The transcript appears on the third listen',
          audioUnavailable: 'Audio is not available',
          audioError: 'The audio could not play',
          retry: 'Try again',
          questions: 'Questions about Ana',
          conversation: 'Conversation',
        }}
        footer={<PromptExercise items={message.questions} />}
      />
    </ThemeProvider>
  )
}

import { ThemeProvider } from 'styled-components'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { PromptExercise } from '../shared/LessonExercises'
import type { QuestionListItem } from '../../../src/components/Exercise/QuestionList.types'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { theme } from '../../../src/foundations/theme/theme'
import { ana } from '../shared/characterPortraits'
import { listeningParts } from './TrialA1Listening.data'
export { listeningParts } from './TrialA1Listening.data'

export const listeningTitle = 'A message from Ana'
export const listeningInstruction =
  'Listen to both messages. Then answer the questions'
const listeningLayout = withVoiceMessageLayout({
  contentWidth: theme.slides.standardWidth,
  phoneWidth: 'clamp(12rem, calc((100dvh - 13rem) / 2), 18rem)',
  phoneHeight: 'clamp(24rem, calc(100dvh - 13rem), 36rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})
const audio = (message: (typeof listeningParts)[number]) => ({
  id: message.id,
  src: message.recording,
  transcript: message.transcript,
  duration: message.durationSeconds,
  timestamp: message.timestamp,
})
export function TrialA1Listening({ active }: { active: boolean }) {
  return (
    <ThemeProvider theme={listeningLayout}>
      <VoiceMessageExercise
        contact={{ name: 'Ana', avatarUrl: ana, status: 'online' }}
        greeting={listeningParts[0].greeting}
        audio={audio(listeningParts[0])}
        additionalAudios={[audio(listeningParts[1])]}

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
        footer={
          <PromptExercise
            density="compact"
            items={listeningParts.flatMap<QuestionListItem>(
              (message) => message.questions,
            )}
            answerMinLines={1}
          />
        }
      />
    </ThemeProvider>
  )
}

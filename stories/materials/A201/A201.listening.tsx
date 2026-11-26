import { voiceMessageTranscriptLabels } from '../shared/voiceMessageLabels'
import { ThemeProvider } from 'styled-components'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { PromptExercise } from '../shared/LessonExercises'
import { content, portraits, prompts } from './A201.data'
import recording from './listening-audio-provenance.json'
import * as S from './A201.styles'
import type { ListeningProps } from './A201.types'

const assets = import.meta.glob('./assets/audio/a201.listening.anna.01.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const phoneTheme = withVoiceMessageLayout({
  contentWidth: '47.5rem',
  phoneWidth: 'clamp(15rem, calc((100dvh - 15.625rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(30rem, calc(100dvh - 15.625rem), 33.75rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})

export function ListeningSection({ active }: ListeningProps) {
  return (
    <ThemeProvider theme={phoneTheme}>
      <S.Listening
        contact={{ name: 'Anna', avatarUrl: portraits.Anna, status: 'online' }}
        greeting={{ text: 'Hey! How’s your day?', timestamp: '09:40' }}
        audio={{
          id: content.listening.id,
          src: assets['./' + recording.file],
          transcript: content.listening.transcript,
          duration: recording.durationSeconds ?? undefined,
          timestamp: '09:41',
        }}
        active={active}
        questions={[]}
        onAnswer={() => undefined}
        transcriptReveal="third-listen"
        labels={{
          play: 'Listen to Anna',
          pause: 'Pause',
          loading: 'Loading audio',
          replay: 'Listen again',
          speed: 'Speed',
          transcript: 'Transcript',
          ...voiceMessageTranscriptLabels,
          transcriptHidden: 'The transcript appears on the third listen.',
          audioUnavailable: 'Audio is not available yet.',
          audioError: 'The audio could not play.',
          retry: 'Try again',
          correct: 'Correct',
          incorrect: 'Incorrect',
          questions: 'Questions about Anna',
          conversation: 'Conversation',
        }}
        footer={
          <PromptExercise
            items={prompts(content.listening.questions, 'listening.anna')}
          />
        }
      />
    </ThemeProvider>
  )
}

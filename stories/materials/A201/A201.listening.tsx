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

export function ListeningSection({ active }: ListeningProps) {
  return (
    <S.Listening
      contact={{ name: 'Anna', avatarUrl: portraits.Anna, status: 'online' }}
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
      transcriptReveal="manual-after-replay"
      replayActionLabel="Listen again"
      labels={{
        play: 'Listen to Anna',
        pause: 'Pause',
        loading: 'Loading audio',
        replay: 'Listen again',
        speed: 'Speed',
        transcript: 'Transcript',
        showTranscript: 'Show transcript',
        hideTranscript: 'Hide transcript',
        transcriptHidden: 'Listen again to unlock the transcript.',
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
  )
}

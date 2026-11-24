import { useState } from 'react'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { PromptExercise } from './LessonExercises'
import type { ListeningActivityProps } from './LessonActivities.types'

/** Compatibility data adapter. Recorded audio is required; the canonical phone owns playback/transcript. */
export function ListeningActivity({
  contact = 'Kim',
  avatarUrl,
  audioSrc,
  message,
  questions,
  replyPrompt,
  support,
  greeting = 'Hi!',
  timestamp = '21:11',
}: ListeningActivityProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  return (
    <VoiceMessageExercise
      contact={{ name: contact, avatarUrl, status: 'online' }}
      greeting={{ text: greeting, timestamp }}
      audio={{ id: message, src: audioSrc, transcript: message, timestamp }}
      transcriptReveal="third-listen"
      questions={questions.map((item) => ({
        id: item.id,
        prompt: item.text,
        value: answers[item.id],
        choices: ['Yes', 'No'].map((choice) => ({
          id: choice,
          label: choice,
          feedback:
            answers[item.id] === choice
              ? choice === item.correct
                ? 'correct'
                : 'incorrect'
              : undefined,
        })),
      }))}
      onAnswer={(id, choice) => setAnswers((old) => ({ ...old, [id]: choice }))}
      labels={{
        play: 'Listen',
        pause: 'Pause',
        transcriptHidden: 'The transcript appears on the third listen.',
        questions: 'Questions',
        conversation: 'Conversation',
      }}
      footer={
        <PromptExercise
          numbered={false}
          items={[
            { id: 'reply', prompt: replyPrompt, answer: support.join(' · ') },
          ]}
        />
      }
    />
  )
}

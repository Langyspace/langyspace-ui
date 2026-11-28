import { useState } from 'react'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import { MaterialLearningDialogue } from '../shared/MaterialLearningDialogue'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import practice from './DevInterviews131.practice.json'

export function InterviewOralPractice({
  group,
}: {
  group: 'experience' | 'clarify' | 'transfer'
}) {
  const turns = practice[group]
  const [step, setStep] = useState(0)
  const teacher = useMaterialTeacher()
  return (
    <MaterialLearningDialogue
      density="compact"
      presentation="paired"
      footerAction={
        <VocabularyControls
          interaction="progressive"
          density="compact"
          showInitial={step > 0}
          onToggleInitial={() =>
            setStep((value) => (value + 1) % (turns.length * 2 + 1))
          }
          labels={{
            hint:
              step === turns.length * 2
                ? 'Hide speaking support'
                : step % 2
                  ? 'Show example answer'
                  : 'Show speaking hint',
          }}
        />
      }
      lines={turns.flatMap((turn, index) => {
        const level = Math.min(2, Math.max(0, step - index * 2))
        const teacherLine = {
          id: turn.id + '.teacher',
          speaker: teacher.name,
          avatarUrl: teacher.avatarUrl,
          side: 'start' as const,
          content: 'reply' in turn ? turn.reply : turn.question,
        }
        const learnerLine = {
          id: turn.id + '.learner',
          speaker: 'You',
          participant: 'learner' as const,
          side: 'end' as const,
          content:
            level === 2 ? turn.example : level === 1 ? turn.hint : turn.cue,
        }
        return 'reply' in turn
          ? [learnerLine, teacherLine]
          : [teacherLine, learnerLine]
      })}
    />
  )
}

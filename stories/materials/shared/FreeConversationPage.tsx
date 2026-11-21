import { useState } from 'react'
import { MeetingFrame } from '../../../src/components/Device/MeetingFrame'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { useMaterialTeacher } from './MaterialTeacherContext'
import { useMaterialLearner } from './MaterialLearnerContext'

export const freeConversationPageId = 'free-conversation'
export const freeConversationTitle = 'Free conversation'
export const freeConversationInstruction =
  'Talk freely with your teacher in English. Choose any topic you both want to talk about'

export function FreeConversationPage() {
  const teacher = useMaterialTeacher()
  const learner = useMaterialLearner()
  const [failedLearnerPhoto, setFailedLearnerPhoto] = useState<string>()
  const teacherName =
    teacher.name === 'Your teacher'
      ? teacher.name
      : teacher.name.trim().split(/\s+/u)[0] || 'Your teacher'
  const hasLearnerPhoto = learner && learner.avatarUrl !== failedLearnerPhoto
  return (
    <SlidePage
      width={{ mediaAspectRatio: 16 / 9 }}
      eyebrow="Speaking"
      title={freeConversationTitle}
      instruction={freeConversationInstruction}
    >
      <MeetingFrame
        aria-label="Your conversation with your teacher"
        main={{ name: teacherName, imageUrl: teacher.avatarUrl }}
        inset={{
          name: hasLearnerPhoto ? learner.firstName : 'You',
          imageUrl: hasLearnerPhoto ? learner.avatarUrl : undefined,
        }}
        onParticipantImageError={(position, url) => {
          if (position === 'inset') setFailedLearnerPhoto(url)
        }}
      />
    </SlidePage>
  )
}

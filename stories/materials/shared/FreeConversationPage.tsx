import { MeetingFrame } from '../../../src/components/Device/MeetingFrame'
import type { FreeConversationPageProps } from './FreeConversationPage.types'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import teacherScene from './assets/free-conversation-teacher63.webp'
import learnerScene from './assets/free-conversation-learner63.webp'

export const freeConversationPageId = 'free-conversation'
export const freeConversationTitle = 'Free conversation'
export const freeConversationInstruction =
  'Talk freely with your teacher in English. Choose any topic you both want to talk about'

export function FreeConversationPage({
  instruction = freeConversationInstruction,
}: FreeConversationPageProps) {
  return (
    <SlidePage
      width={{ mediaAspectRatio: 16 / 9 }}
      eyebrow="Speaking"
      title={freeConversationTitle}
      instruction={instruction}
    >
      <MeetingFrame
        aria-label="Your conversation with your teacher"
        layout="spotlight"
        insetPresentation="video"
        main={{
          name: 'Teacher',
          imageUrl: teacherScene,
          imageAlt:
            'An illustrated teacher smiling and speaking during a relaxed conversation',
        }}
        inset={{
          name: 'Student',
          imageUrl: learnerScene,
          imageAlt:
            'An illustrated student smiling and responding during the conversation',
        }}
      />
    </SlidePage>
  )
}

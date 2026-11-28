import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { DialogueTitle } from '../shared/DialogueTitle'
import { RecordedDialoguePlaybackControl } from '../shared/RecordedDialoguePlayback'
import { conversationRecordings } from '../shared/conversationRecordings'
import { useRecordedConversationAudio } from '../shared/useRecordedConversationAudio'
import { content } from './TrialA1.data'
import { ListenTalkSection } from './TrialA1.sections'

/** The title control and the visible model share one recorded transport. */
export function TrialA1DialoguePage({ active }: { active: boolean }) {
  const audio = useRecordedConversationAudio(
    active,
    conversationRecordings['TrialA1:s3'],
  )
  return (
    <SlidePage
      columns={1}
      eyebrow="Guided conversation"
      density="compact"
      title={
        <DialogueTitle
          title={content.p3.title}
          action={
            <RecordedDialoguePlaybackControl
              conversationId="TrialA1:s3"
              active={active}
              playback={audio}
            />
          }
        />
      }
      instruction={content.p3.ins}
    >
      <ListenTalkSection
        playingId={audio.status === 'playing' ? audio.currentId : undefined}
      />
    </SlidePage>
  )
}

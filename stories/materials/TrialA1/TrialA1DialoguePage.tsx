import { useState } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { DialogueTitle } from '../shared/DialogueTitle'
import { RecordedDialoguePlaybackControl } from '../shared/RecordedDialoguePlayback'
import { conversationRecordings } from '../shared/conversationRecordings'
import { useRecordedConversationAudio } from '../shared/useRecordedConversationAudio'
import { content } from './TrialA1.data'
import { ComprehensionSection, ListenTalkSection } from './TrialA1.sections'

/** The title control and the visible model share one recorded transport. */
export function TrialA1DialoguePage({ active }: { active: boolean }) {
  const [modelActive, setModelActive] = useState(true)
  const audio = useRecordedConversationAudio(
    active && modelActive,
    conversationRecordings['TrialA1:s3'],
  )
  return (
    <SlidePage
      width="expanded"
      eyebrow="Dialogue"
      density="compact"
      questions={modelActive ? <ComprehensionSection /> : undefined}
      title={
        <DialogueTitle
          title={content.p3.title}
          action={
            <RecordedDialoguePlaybackControl
              conversationId="TrialA1:s3"
              active={active && modelActive}
              playback={audio}
            />
          }
        />
      }
      instruction="Listen, then read with your teacher."
    >
      <ListenTalkSection
        playingId={audio.status === 'playing' ? audio.currentId : undefined}
        onModeChange={(mode) => setModelActive(mode === 'model')}
      />
    </SlidePage>
  )
}

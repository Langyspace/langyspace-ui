import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonHomeworkGallery } from './LessonHomeworkGallery'

export function LessonHomeworkClosing({
  materialKey,
  active,
}: {
  materialKey: string
  active: boolean
}) {
  return (
    <SlidePage
      columns={3}
      density="compact"
      eyebrow="After class"
      title="Class complete — your homework"
      instruction="Complete the two activities, then send Teacher a voice note about today’s topic"
    >
      <LessonHomeworkGallery materialKey={materialKey} active={active} />
    </SlidePage>
  )
}

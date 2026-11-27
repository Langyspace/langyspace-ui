import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { VideoExercise } from '../../../src/components/InteractiveMaterial/VideoExercise'
import { PromptExercise } from './LessonExercises'
import type { MaterialVideoPageProps } from './MaterialVideoPage.types'

/** Product composition only; the library owns layout, player and question interactions. */
export function MaterialVideoPage({ content, active }: MaterialVideoPageProps) {
  return (
    <SlidePage
      density="compact"
      eyebrow="Watch and talk"
      title={content.title}
      instruction={content.instruction}
      questions={<PromptExercise density="compact" items={content.items} />}
    >
      <VideoExercise
        title={null}
        presentation="inline"
        playbackControls="replay-only"
        labels={{ replay: 'Recomeçar' }}
        youtube={content.video}
        active={active}
      />
    </SlidePage>
  )
}

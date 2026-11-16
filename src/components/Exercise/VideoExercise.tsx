import { EMPTY_LIST } from './Material.constants'
import { useId } from 'react'
import * as Common from '../Exercise/Material.shared.styles'
import * as Styled from './VideoExercise.styles'
import type { VideoExerciseProps } from './VideoExercise.types'
export function VideoExercise({
  title,
  media,
  page,
  onPageChange,
  chapters = EMPTY_LIST,
  activeChapterId,
  onSeek,
  beforeWatch,
  children,
  labels,
  ...props
}: VideoExerciseProps) {
  const id = useId()
  const text = {
    watch: '1 · Watch',
    discuss: '2 · Talk about it',
    chapters: 'Capítulos',
    ...labels,
  }
  return (
    <Styled.Root as="section" {...props}>
      <Common.Heading>{title}</Common.Heading>
      <Common.Row role="group" aria-label="Páginas do vídeo">
        <Common.Action
          type="button"
          variant={page === 'watch' ? 'primary' : 'secondary'}
          aria-pressed={page === 'watch'}
          aria-controls={id}
          onClick={() => {
            onPageChange('watch')
          }}
        >
          {text.watch}
        </Common.Action>
        <Common.Action
          type="button"
          variant={page === 'discuss' ? 'primary' : 'secondary'}
          aria-pressed={page === 'discuss'}
          aria-controls={id}
          onClick={() => {
            onPageChange('discuss')
          }}
        >
          {text.discuss}
        </Common.Action>
      </Common.Row>
      <Common.Stack id={id}>
        {page === 'watch' ? (
          <>
            {beforeWatch}
            <Styled.Media>{media}</Styled.Media>
            {chapters.length ? (
              <Common.Stack role="group" aria-label={text.chapters}>
                {chapters.map((chapter, i) => (
                  <Common.Action
                    key={chapter.id}
                    type="button"
                    variant="secondary"
                    aria-current={
                      activeChapterId === chapter.id ? 'step' : undefined
                    }
                    disabled={!onSeek}
                    onClick={() => onSeek?.(chapter.seconds)}
                  >
                    {i + 1}. {chapter.label} ·{' '}
                    {Math.floor(chapter.seconds / 60)}:
                    {String(chapter.seconds % 60).padStart(2, '0')}
                  </Common.Action>
                ))}
              </Common.Stack>
            ) : null}
          </>
        ) : (
          children
        )}
      </Common.Stack>
    </Styled.Root>
  )
}

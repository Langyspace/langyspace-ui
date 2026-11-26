import { EMPTY_LIST } from './Material.constants'
import { useId, useState } from 'react'
import { VideoExerciseYouTube } from './VideoExerciseYouTube'
import * as Common from './Material.shared.styles'
import * as Styled from './VideoExercise.styles'
import type { VideoExerciseProps } from './VideoExercise.types'
export function VideoExercise({
  title,
  media,
  youtube,
  active = true,
  playbackControls = 'replay-and-loop',
  preload = false,
  presentation = 'staged',
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
  const [localPage, setLocalPage] = useState<'watch' | 'discuss'>('watch')
  const currentPage = page ?? localPage
  const changePage = onPageChange ?? setLocalPage
  const text = {
    watch: '1 · Watch',
    discuss: '2 · Talk about it',
    chapters: 'Capítulos',
    replay: 'Replay excerpt',
    loop: 'Loop excerpt',
    loading: 'Loading video…',
    unavailable: 'The video could not load. Open the source to watch it there',
    openSource: 'Open on YouTube',
    ...labels,
  }
  const video = youtube ? (
    <VideoExerciseYouTube
      clip={youtube}
      playbackControls={playbackControls}
      preload={preload}
      active={active && (presentation === 'inline' || currentPage === 'watch')}
      labels={text}
    />
  ) : (
    <Styled.Media>{media}</Styled.Media>
  )
  if (presentation === 'inline')
    return (
      <Styled.Root as="section" {...props}>
        {title ? <Common.Heading>{title}</Common.Heading> : null}
        {beforeWatch}
        {video}
        {children}
      </Styled.Root>
    )
  return (
    <Styled.Root as="section" {...props}>
      <Common.Heading>{title}</Common.Heading>
      <Common.Row role="group" aria-label="Páginas do vídeo">
        <Common.Action
          type="button"
          variant={currentPage === 'watch' ? 'primary' : 'secondary'}
          aria-pressed={currentPage === 'watch'}
          aria-controls={id}
          onClick={() => {
            changePage('watch')
          }}
        >
          {text.watch}
        </Common.Action>
        <Common.Action
          type="button"
          variant={currentPage === 'discuss' ? 'primary' : 'secondary'}
          aria-pressed={currentPage === 'discuss'}
          aria-controls={id}
          onClick={() => {
            changePage('discuss')
          }}
        >
          {text.discuss}
        </Common.Action>
      </Common.Row>
      <Common.Stack id={id}>
        {currentPage === 'watch' ? (
          <>
            {beforeWatch}
            {video}
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

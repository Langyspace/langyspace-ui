import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { VideoExercise } from '../../../src/components/InteractiveMaterial/VideoExercise'
import { loadYouTubeApi } from '../../../src/internal/loadYouTubeApi'
import type {
  YouTubeApi,
  YouTubePlayer,
} from '../../../src/internal/youtubeApi.types'
import { ReviewedLesson } from '../../../stories/materials/shared/ReviewedLesson'
import type { ReviewedPage } from '../../../stories/materials/shared/ReviewedLesson.types'
import source from '../../../stories/materials/A101/A101.review.json'

vi.mock('../../../src/internal/loadYouTubeApi', () => ({
  loadYouTubeApi: vi.fn(),
}))
const clip = {
  videoId: 'HooNbcbgi9U',
  startSeconds: 59,
  endSeconds: 93,
  title: 'Meeting new people — British Council',
  credit: 'British Council',
}
let player: YouTubePlayer
let options: ConstructorParameters<YouTubeApi['Player']>[1]
let construct: ReturnType<typeof vi.fn>
beforeEach(() => {
  player = {
    cueVideoById: vi.fn(),
    loadVideoById: vi.fn(),
    pauseVideo: vi.fn(),
    destroy: vi.fn(),
  }
  construct = vi.fn(function (_element, config) {
    options = config
    return player
  })
  vi.mocked(loadYouTubeApi).mockResolvedValue({
    Player: construct,
  } as unknown as YouTubeApi)
  Object.defineProperty(Element.prototype, 'scrollTo', {
    configurable: true,
    value: vi.fn(),
  })
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: true })),
  )
})
afterEach(() => {
  vi.unstubAllGlobals()
  vi.clearAllMocks()
})
async function ready() {
  await waitFor(() => expect(construct).toHaveBeenCalled())
  act(() => options.events.onReady({ target: player }))
}

it('cues without autoplay; replay and optional loop always reapply both excerpt bounds', async () => {
  render(<VideoExercise title={null} presentation="inline" youtube={clip} />)
  await ready()
  expect(options.playerVars.autoplay).toBe(0)
  expect(player.cueVideoById).toHaveBeenCalledWith({
    videoId: clip.videoId,
    startSeconds: 59,
    endSeconds: 93,
  })
  expect(player.loadVideoById).not.toHaveBeenCalled()
  expect(screen.queryByRole('link', { name: 'British Council' })).toBeNull()
  const frame = screen.getByTitle(clip.title)
  expect(frame).toHaveAttribute(
    'referrerpolicy',
    'strict-origin-when-cross-origin',
  )
  expect(frame.getAttribute('src')).toContain('enablejsapi=1')
  expect(screen.queryByRole('button', { name: '1 · Watch' })).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: 'Replay excerpt' }))
  expect(player.loadVideoById).toHaveBeenLastCalledWith({
    videoId: clip.videoId,
    startSeconds: 59,
    endSeconds: 93,
  })
  fireEvent.click(screen.getByRole('button', { name: 'Loop excerpt' }))
  expect(screen.getByRole('button', { name: 'Loop excerpt' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  act(() => options.events.onStateChange({ data: 0, target: player }))
  expect(player.loadVideoById).toHaveBeenCalledTimes(2)
  fireEvent.click(screen.getByRole('button', { name: 'Loop excerpt' }))
  act(() => options.events.onStateChange({ data: 0, target: player }))
  expect(player.loadVideoById).toHaveBeenCalledTimes(2)
})

it('does not load an inactive source and stops/releases the player when leaving the page', async () => {
  const props = { title: null, presentation: 'inline' as const, youtube: clip }
  const { rerender } = render(<VideoExercise {...props} active={false} />)
  expect(loadYouTubeApi).not.toHaveBeenCalled()
  rerender(<VideoExercise {...props} active />)
  await ready()
  rerender(<VideoExercise {...props} active={false} />)
  expect(player.pauseVideo).toHaveBeenCalledOnce()
  expect(player.destroy).toHaveBeenCalledOnce()
  expect(screen.queryByTitle(clip.title)).toBeNull()
  expect(screen.getByRole('button', { name: 'Replay excerpt' })).toBeDisabled()
})

it('re-arms the same paused excerpt on completion so native replay cannot reset to the full video', async () => {
  render(<VideoExercise title={null} presentation="inline" youtube={clip} />)
  await ready()
  act(() => options.events.onStateChange({ data: 0, target: player }))
  expect(player.cueVideoById).toHaveBeenCalledTimes(2)
  expect(player.cueVideoById).toHaveBeenLastCalledWith({
    videoId: clip.videoId,
    startSeconds: 59,
    endSeconds: 93,
  })
  expect(player.loadVideoById).not.toHaveBeenCalled()
  // The provider's cue state is not another completion or an autoplay request.
  act(() => options.events.onStateChange({ data: 5, target: player }))
  expect(player.cueVideoById).toHaveBeenCalledTimes(2)
  fireEvent.click(screen.getByRole('button', { name: 'Replay excerpt' }))
  expect(player.loadVideoById).toHaveBeenCalledWith({
    videoId: clip.videoId,
    startSeconds: 59,
    endSeconds: 93,
  })
})

it('keeps an accessible original-source link and explicit error if embedding fails', async () => {
  render(<VideoExercise title={null} presentation="inline" youtube={clip} />)
  await ready()
  fireEvent.click(screen.getByRole('button', { name: 'Loop excerpt' }))
  act(() => options.events.onError({ data: 153 }))
  expect(screen.getByRole('button', { name: 'Loop excerpt' })).toHaveAttribute(
    'aria-pressed',
    'false',
  )
  act(() => options.events.onStateChange({ data: 0, target: player }))
  expect(player.loadVideoById).not.toHaveBeenCalled()
  expect(player.cueVideoById).toHaveBeenCalledTimes(1)
  expect(screen.getByRole('alert')).toHaveTextContent(
    'The video could not load',
  )
  expect(screen.getByRole('link', { name: 'British Council' })).toHaveAttribute(
    'href',
    'https://www.youtube.com/watch?v=HooNbcbgi9U&t=59s',
  )
  expect(screen.getByRole('button', { name: 'Replay excerpt' })).toBeDisabled()
})

it('ignores late API resolution after the owning page unmounts', async () => {
  let resolve!: (api: YouTubeApi) => void
  vi.mocked(loadYouTubeApi).mockReturnValueOnce(
    new Promise((r) => {
      resolve = r
    }),
  )
  const { unmount } = render(
    <VideoExercise title={null} presentation="inline" youtube={clip} />,
  )
  unmount()
  await act(async () => resolve({ Player: construct } as unknown as YouTubeApi))
  expect(construct).not.toHaveBeenCalled()
})

it('adopts the standard Questions column with four authored items, progressive hints and the authored bounded excerpt', () => {
  const page = source.pages.find(
    (p) => p.id === 's_video_intro',
  ) as ReviewedPage
  const { container } = render(
    <ReviewedLesson
      code="A1.01"
      title={source.title}
      pages={[page]}
      recordings={[]}
      initialPageId={page.id}
    />,
  )
  const slide = within(
    container.querySelector('[data-slide-id="s_video_intro"]') as HTMLElement,
  )
  expect(slide.getByRole('heading', { name: /Questions/i })).toBeVisible()
  const list = container.querySelector('[data-question-list]')!
  expect(
    within(list as HTMLElement).getAllByRole('button', { expanded: false }),
  ).toHaveLength(4)
  expect(slide.getAllByRole('button', { name: 'Show next hint' })).toHaveLength(
    1,
  )
  fireEvent.click(slide.getByRole('button', { name: 'Show next hint' }))
  expect(
    slide.getByText('Listen for “I’m…” after Vanya asks about Paul'),
  ).toBeVisible()
  fireEvent.click(slide.getByRole('button', { name: 'What’s the man’s name?' }))
  expect(slide.getByText('His name is Emir')).toBeVisible()
  expect(page.kind === 'video' && page.video).toMatchObject({
    videoId: clip.videoId,
    startSeconds: 59,
    endSeconds: 93,
  })
})

it('preserves the existing staged media flow', () => {
  const change = vi.fn()
  render(
    <VideoExercise
      title="Watch together"
      media={<div>Prepared media</div>}
      page="watch"
      onPageChange={change}
    >
      Discussion
    </VideoExercise>,
  )
  expect(screen.getByText('Prepared media')).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: '2 · Talk about it' }))
  expect(change).toHaveBeenCalledWith('discuss')
})

it('prepares the next page without autoplay and retains the ready bounded player on entry', async () => {
  const props = { title: null, presentation: 'inline' as const, youtube: clip }
  const { rerender } = render(
    <VideoExercise {...props} active={false} preload />,
  )
  await ready()
  expect(player.loadVideoById).not.toHaveBeenCalled()
  expect(screen.getByRole('button', { name: 'Replay excerpt' })).toBeDisabled()
  rerender(<VideoExercise {...props} active preload={false} />)
  expect(construct).toHaveBeenCalledTimes(1)
  expect(player.destroy).not.toHaveBeenCalled()
  expect(screen.getByRole('button', { name: 'Replay excerpt' })).toBeEnabled()
  rerender(<VideoExercise {...props} active={false} preload={false} />)
  expect(player.destroy).toHaveBeenCalledOnce()
})

import { useEffect, useRef, useState } from 'react'
import { IconButton } from '../IconButton/IconButton'
import { loadYouTubeApi } from '../../internal/loadYouTubeApi'
import type { YouTubePlayer } from '../../internal/youtubeApi.types'
import type { VideoExerciseYouTubeProps } from './VideoExerciseYouTube.types'
import * as Common from './Material.shared.styles'
import * as Styled from './VideoExercise.styles'

/** Private provider adapter: VideoExercise remains the reusable public exercise/frame. */
export function VideoExerciseYouTube({
  clip,
  active,
  labels,
}: VideoExerciseYouTubeProps) {
  const host = useRef<HTMLDivElement>(null)
  const player = useRef<YouTubePlayer | null>(null)
  const loop = useRef(false)
  const [looping, setLooping] = useState(false)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const { videoId, startSeconds, endSeconds, title, credit } = clip
  const source = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}&t=${Math.floor(startSeconds)}s`
  const valid =
    /^[a-zA-Z0-9_-]{11}$/.test(videoId) &&
    Number.isFinite(startSeconds) &&
    Number.isFinite(endSeconds) &&
    startSeconds >= 0 &&
    endSeconds > startSeconds
  const bounds = { videoId, startSeconds, endSeconds }
  useEffect(() => {
    if (!active || !valid || !host.current) return
    const root = host.current
    let disposed = false
    let failed = false
    let instance: YouTubePlayer | undefined
    setStatus('loading')
    void loadYouTubeApi()
      .then((api) => {
        if (disposed) return
        // The provider owns this inner node. React owns only the styled outer host.
        const mount = document.createElement('iframe')
        const params = new URLSearchParams({
          enablejsapi: '1',
          origin: window.location.origin,
          start: String(startSeconds),
          end: String(endSeconds),
          autoplay: '0',
          controls: '1',
          playsinline: '1',
          rel: '0',
          cc_lang_pref: 'en',
        })
        mount.title = title
        mount.referrerPolicy = 'strict-origin-when-cross-origin'
        mount.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
        mount.allow =
          'autoplay; encrypted-media; picture-in-picture; fullscreen'
        mount.allowFullscreen = true
        mount.src = `https://www.youtube.com/embed/${videoId}?${params}`
        root.appendChild(mount)
        instance = new api.Player(mount, {
          videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            origin: window.location.origin,
            autoplay: 0,
            controls: 1,
            playsinline: 1,
            rel: 0,
            start: startSeconds,
            end: endSeconds,
            cc_lang_pref: 'en',
          },
          events: {
            onReady: ({ target }) => {
              if (disposed) return
              player.current = target
              target.cueVideoById({ videoId, startSeconds, endSeconds })
              const iframe = root.querySelector('iframe')
              if (iframe) {
                iframe.title = title
                iframe.referrerPolicy = 'strict-origin-when-cross-origin'
              }
              setStatus('ready')
            },
            onStateChange: ({ data, target }) => {
              if (disposed || failed || data !== 0) return
              const excerpt = { videoId, startSeconds, endSeconds }
              if (loop.current) target.loadVideoById(excerpt)
              // Native YouTube replay otherwise starts the full video at 0:00.
              // Re-cue the bounded excerpt while paused, ready for its native play.
              else target.cueVideoById(excerpt)
            },
            onError: () => {
              if (!disposed) {
                failed = true
                loop.current = false
                setLooping(false)
                setStatus('error')
              }
            },
          },
        })
      })
      .catch(() => {
        if (!disposed) setStatus('error')
      })
    return () => {
      disposed = true
      loop.current = false
      player.current = null
      try {
        instance?.pauseVideo?.()
      } catch {
        /* Provider may already be detached. */
      }
      try {
        instance?.destroy?.()
      } catch {
        /* The host still needs to be cleared. */
      }
      root.replaceChildren()
    }
  }, [active, valid, videoId, startSeconds, endSeconds, title])
  useEffect(() => {
    if (!active) setLooping(false)
  }, [active])
  return (
    <Common.Stack>
      <Styled.PlayerHost ref={host} aria-label={title} />
      {!valid || status === 'error' ? (
        <Common.Hint role="alert">{labels.unavailable}</Common.Hint>
      ) : active && status === 'loading' ? (
        <Common.Hint role="status">{labels.loading}</Common.Hint>
      ) : null}
      <Styled.PlayerFooter>
        <Styled.Source href={source} target="_blank" rel="noreferrer noopener">
          {credit ?? labels.openSource}
        </Styled.Source>
        <Common.Row>
          <IconButton
            variant="neutral"
            size="sm"
            aria-label={labels.replay}
            title={labels.replay}
            disabled={!active || !valid || status !== 'ready'}
            onClick={() => player.current?.loadVideoById(bounds)}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 5a7 7 0 1 1-6.6 9.3l1.9-.6A5 5 0 1 0 12 7H7.8l2.6 2.6L9 11 4 6l5-5 1.4 1.4L7.8 5H12Z" />
            </svg>
          </IconButton>
          <IconButton
            variant="neutral"
            size="sm"
            aria-label={labels.loop}
            title={labels.loop}
            aria-pressed={looping}
            disabled={!active || !valid || status !== 'ready'}
            onClick={() => {
              const next = !looping
              loop.current = next
              setLooping(next)
            }}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="m17 1 5 5-5 5V7H6a2 2 0 0 0-2 2v2H2V9a4 4 0 0 1 4-4h11V1ZM7 23l-5-5 5-5v4h11a2 2 0 0 0 2-2v-2h2v2a4 4 0 0 1-4 4H7v4Z" />
            </svg>
          </IconButton>
        </Common.Row>
      </Styled.PlayerFooter>
    </Common.Stack>
  )
}

import type { YouTubeApi } from './youtubeApi.types'

type YouTubeWindow = Window & {
  YT?: YouTubeApi
  onYouTubeIframeAPIReady?: () => void
}
let pending: Promise<YouTubeApi> | undefined

/** Shared official API loader. It neither downloads video nor changes another player's callbacks. */
export function loadYouTubeApi(): Promise<YouTubeApi> {
  const scope = window as YouTubeWindow
  if (scope.YT?.Player) return Promise.resolve(scope.YT)
  if (pending) return pending
  pending = new Promise<YouTubeApi>((resolve, reject) => {
    const previous = scope.onYouTubeIframeAPIReady
    const script = document.createElement('script')
    let settled = false
    const finish = (api?: YouTubeApi) => {
      if (settled) return
      settled = true
      window.clearTimeout(timeout)
      scope.onYouTubeIframeAPIReady = previous
      if (api?.Player) resolve(api)
      else {
        pending = undefined
        script.remove()
        reject(new Error('youtube_api_unavailable'))
      }
    }
    const timeout = window.setTimeout(() => finish(), 15000)
    scope.onYouTubeIframeAPIReady = () => {
      try {
        previous?.()
      } finally {
        finish(scope.YT)
      }
    }
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    script.addEventListener('error', () => finish(), { once: true })
    document.head.appendChild(script)
  })
  return pending
}

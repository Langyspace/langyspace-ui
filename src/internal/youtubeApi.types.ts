export interface YouTubeCue {
  videoId: string
  startSeconds: number
  endSeconds: number
}
export interface YouTubePlayer {
  cueVideoById: (clip: YouTubeCue) => void
  loadVideoById: (clip: YouTubeCue) => void
  pauseVideo: () => void
  destroy: () => void
}
export interface YouTubeApi {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string
      width: string
      height: string
      playerVars: Record<string, string | number>
      events: {
        onReady: (event: { target: YouTubePlayer }) => void
        onStateChange: (event: { data: number; target: YouTubePlayer }) => void
        onError: (event: { data: number }) => void
      }
    },
  ) => YouTubePlayer
}

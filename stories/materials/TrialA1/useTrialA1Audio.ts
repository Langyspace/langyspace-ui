import { useSceneAudio } from '../shared/useSceneAudio'
import music from './assets/music-label.mp3'
import ball from './assets/soccer-ball-label.mp3'
import book from './assets/book-label.mp3'
import dog from './assets/dog-label.mp3'

const clips: Readonly<Record<string, string>> = {
  '0': music,
  '1': ball,
  '2': book,
  '3': dog,
}
export function useTrialA1Audio(active: boolean) {
  return useSceneAudio(active, clips)
}

import { useSceneAudio } from '../shared/useSceneAudio'
import music from './assets/music-label.mp3'
import ball from './assets/soccer-ball-label.mp3'
import book from './assets/book-label.mp3'
import dog from './assets/dog-label.mp3'
import headphones from './assets/headphones-label.mp3'
import bench from './assets/bench-label.mp3'
import sneakers from './assets/sneakers-label.mp3'

const clips: Readonly<Record<string, string>> = {
  '0': music,
  '1': ball,
  '2': book,
  '3': dog,
  '4': headphones,
  '5': bench,
  '6': sneakers,
}
export function useTrialA1Audio(active: boolean) {
  return useSceneAudio(active, clips)
}

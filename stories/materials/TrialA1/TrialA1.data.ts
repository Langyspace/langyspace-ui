import content from './TrialA1.content.json'
import { sceneImage } from '../shared/sceneAssets'
import music from '../B101/assets/scene-guitar.webp'
import soccer from '../B101/assets/scene-soccer.webp'
import name from '../A101/assets/scene-france-chloe.webp'
import origin from '../A101/assets/scene-spain-lucia.webp'
import mood from '../A101/assets/scene-happy-mia.webp'
export { content }
export const order = [
  's1',
  's2',
  's3',
  's41',
  's42',
  's43',
  's5',
  's6',
] as const
export const greetingImages = [name, origin, mood]
export const pictures = {
  music,
  soccer,
  movies: sceneImage('movies'),
  dog: sceneImage('dog'),
  cat: sceneImage('cat'),
  pizza: sceneImage('pizza'),
  salad: sceneImage('salad'),
  beach: sceneImage('beach'),
  english: sceneImage('studying'),
}
export const preferenceImages = [
  [pictures.movies, pictures.music],
  [pictures.dog, pictures.cat],
  [pictures.pizza, pictures.salad],
]
export const talkImages = [
  pictures.music,
  pictures.movies,
  pictures.beach,
  pictures.soccer,
  pictures.pizza,
  pictures.dog,
  pictures.music,
  pictures.movies,
  pictures.english,
]
export const points = [
  [13, 61],
  [38, 80],
  [77, 52],
  [59, 84],
  [86, 88],
  [37, 45],
]

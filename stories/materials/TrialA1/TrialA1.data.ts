import content from './TrialA1.content.json'
import park from './assets/park.webp'
import music from './assets/music.webp'
import movies from './assets/movies.webp'
import dog from './assets/dog.webp'
import cat from './assets/cat.webp'
import pizza from './assets/pizza.webp'
import salad from './assets/salad.webp'
export { content }
export const order = [
  's1',
  's2',
  's3',
  's3-rehearse',
  's3-independent',
  's41',
  's42',
  's43',
  's5',
  's6',
] as const
export const pictures = { park, music, movies, dog, cat, pizza, salad }
export const preferenceImages = [
  [movies, music],
  [dog, cat],
  [pizza, salad],
]

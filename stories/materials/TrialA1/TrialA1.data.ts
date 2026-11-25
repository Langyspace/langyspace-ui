import content from './TrialA1.content.json'
import park from './assets/park.webp'
import music from './assets/music.webp'
import movies from './assets/movies.webp'
import dog from './assets/dog.webp'
import cat from './assets/cat.webp'
import pizza from './assets/pizza.webp'
import salad from './assets/salad.webp'
export { content }
/** Intrinsic asset geometry, checked from park.webp (1200×900), not a page spacing override. */
export const parkScene = { src: park, width: 1200, height: 900 } as const
export const order = [
  's1',
  's2',
  's3',
  's3-rehearse',
  's3-independent',
  's4',
  's5',
  's_video_comedy',
  'next-steps',
] as const
export const pictures = {
  park: parkScene.src,
  music,
  movies,
  dog,
  cat,
  pizza,
  salad,
}
export const likeItems = content.p4.items.map((item) => {
  const imageUrl = pictures[item.image as keyof typeof pictures]
  if (!imageUrl) throw new Error(`Missing likes board picture: ${item.image}`)
  return { ...item, imageUrl }
})

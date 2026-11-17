import content from './A201.content.json'
import { sceneImage } from '../shared/sceneAssets'
import ana from '../UXLab/assets/bust_ana.png'
import kim from '../UXLab/assets/bust_kim.png'
export { content, ana, kim }
export const order = [
  's1',
  's2',
  's31',
  's32',
  's33',
  's4',
  's51',
  's52',
  's6',
  's62',
  's61',
  's7',
  's8',
  's9',
  's10',
  's11',
  's12',
] as const
const images: Record<string, string> = {
  v_laptop: 'laptop',
  v_meet: 'meeting',
  v_river: 'river',
  v_bridge: 'bridge',
  v_vcall: 'video-call',
  v_sig: 'bad-signal',
  a_walk: 'walking',
  a_coffee: 'coffee',
  a_cook: 'cooking',
  a_work: 'working',
  a_eat: 'eating',
  a_study: 'studying',
  wu_laptop: 'working',
}
export const image = (key: string) => sceneImage(images[key] ?? key)
export const vocabulary = content.vocabulary.map((v) => ({
  id: v.id,
  word: v.en,
  translation: v.pt,
  initialHint: v.hint,
  imageUrl: image(v.ic),
  imageAlt: v.pt,
}))
export const actions = content.actions.map((v) => ({
  id: v.id,
  word: v.en,
  translation: v.pt,
  initialHint: v.hint,
  imageUrl: image(v.ic),
  imageAlt: v.pt,
}))
export const dialogue = content.dialogue.map((l) => ({
  id: l.id,
  text: l.text,
  speaker: l.who,
}))
export const board = [
  { key: 'cafe', label: 'the café' },
  { key: 'park', label: 'the park' },
  { key: 'bridge', label: 'the bridge' },
  { key: 'gym', label: 'the gym' },
  { key: 'supermarket', label: 'the supermarket' },
  { key: 'river', label: 'the river' },
  ...content.actions.map((a) => ({ key: a.ic, label: a.en })),
]

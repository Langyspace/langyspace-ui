import content from './Frontend.content.json'
import provenance from './media-provenance.json'
const assets = import.meta.glob<string>('./assets/*.{svg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const clips = import.meta.glob<string>('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
})
export { content, provenance }
export const order = content.order.map((id) => `s${id}`)
export const image = (key: string) =>
  assets[
    `./${provenance.images[key as keyof typeof provenance.images]?.file}`
  ] ?? ''
export const audio = (id: string) => clips[`./assets/audio/${id}.mp3`] ?? ''
export const text = (id: string) =>
  content.text[id as keyof typeof content.text] ?? ''
export const vocabulary = content.vocabulary.map((v) => ({
  id: v.id,
  word: v.en,
  translation: v.pt,
  initialHint: v.hint,
  imageUrl: image(v.ic),
  imageAlt: v.pt,
}))
export const toggle = (ids: readonly string[], id: string) =>
  ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id]
export const review = [
  [
    'What do you do? Do you work with frontend, or do you want to?',
    'No tech job yet? Say: I’m learning frontend. I want to work with it.',
  ],
  ['What’s a website or an app you love? Why? And one you don’t like?'],
  ['What have you been working on, or studying, lately?'],
  ['Now ask your teacher: Which app do you use every day? Is it easy to use?'],
]
export const yourWork = [
  [
    'What do you work with every day?',
    'an editor, a browser, JavaScript, React … · No tech job yet? Talk about your course, or invent.',
  ],
  [
    'Do you test your pages on mobile? And with a screen reader?',
    'a screen reader = leitor de tela · accessible = acessível',
  ],
  [
    'What was the last bug you had? What happened?',
    'It didn’t show on … · It broke on … · When I clicked …, nothing happened.',
  ],
  [
    'Does your team do code reviews? Do you like them?',
    'a code review = quando um colega lê e comenta o seu código',
  ],
  [
    'Now ask your teacher: Which app do you use every day? Is there anything you don’t like in it?',
  ],
]
export const firstTurns = [
  { speaker: 'Ana', id: 'Y8.1', text: text('Y8.1') },
  {
    speaker: 'You',
    cue: 'say what page or app you’re working on',
    text: 'I’m working on … · I’m building …',
  },
  { speaker: 'Ana', id: 'Y8.3', text: text('Y8.3') },
  {
    speaker: 'You',
    cue: 'explain a bug: what doesn’t work, and where',
    text: 'The … doesn’t show on mobile. · When I click …, nothing happens.',
  },
  { speaker: 'Ana', id: 'Y8.5', text: text('Y8.5') },
  {
    speaker: 'You',
    cue: 'say what you’ve done, and what you haven’t done yet',
    text: 'I’ve tested it on … · I haven’t fixed it yet.',
  },
  { speaker: 'Teacher: Ana', text: 'Hmm. What if we …?' },
  {
    speaker: 'You',
    cue: 'answer, and ask for help',
    text: 'Good idea, but … · Could you …?',
  },
]
export const swappedTurns = [
  {
    speaker: 'You',
    cue: 'ask what she’s working on',
    text: 'What are you working on today?',
  },
  {
    speaker: 'Teacher: Kim',
    text: 'I’m working on the shop page. The launch is on Friday.',
  },
  { speaker: 'You', cue: 'ask about problems', text: 'Any problems?' },
  {
    speaker: 'Teacher: Kim',
    text: 'Yes. The menu doesn’t open on mobile. When I click it, nothing happens.',
  },
  { speaker: 'You', cue: 'ask what she’s done', text: 'What have you done?' },
  {
    speaker: 'Teacher: Kim',
    text: 'I’ve tested it on two phones, but I haven’t fixed it yet.',
  },
  { speaker: 'You', cue: 'suggest an idea', text: 'What if we …?' },
  {
    speaker: 'Teacher: Kim',
    text: 'Good idea! Could you send me the new design today?',
  },
]

// Independent practice: no activity-specific Student destination is claimed.
export const homework = content.homework

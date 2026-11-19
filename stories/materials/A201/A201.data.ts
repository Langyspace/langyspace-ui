import { formatVocabularyHint } from '../../../src/components/Exercise/VocabularyGrid.utils'
import content from './A201.content.json'
import working from './assets/a201-copy-working.webp'
import walking from './assets/a201-copy-walking.webp'
import coffee from './assets/a201-copy-drinking-coffee.webp'
import studying from './assets/a201-copy-studying.webp'
import kim from './assets/kim-profile-refined.webp'
export { content, kim }
export const order = content.sections.map((section) => section.id)
export const images: Record<string, string> = {
  'a201-copy-working': working,
  'a201-copy-walking': walking,
  'a201-copy-drinking-coffee': coffee,
  'a201-copy-studying': studying,
}
export const ana = working
export const vocabulary = [content.vocabulary1, content.vocabulary2].map(
  (group) =>
    group.cards.map((card) => ({
      id: card.asset,
      word: card.reveal,
      translation: card.pt,
      initialHint: formatVocabularyHint(card.reveal, ['I’m']),
      imageUrl: images[card.asset] ?? '',
      imageAlt: card.pt,
    })),
)

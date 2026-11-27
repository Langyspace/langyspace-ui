import ana from './assets/roleplay-ana110.webp'
import jiwoo from './assets/roleplay-jiwoo110.webp'
import hiro from './assets/roleplay-hiro110.webp'
import lukas from './assets/roleplay-lukas110.webp'
import chloe from './assets/roleplay-chloe110.webp'
import jake from './assets/roleplay-jake110.webp'
import br from './assets/flag-br.svg'
import kr from './assets/flag-kr.svg'
import jp from './assets/flag-jp.svg'
import de from './assets/flag-de.svg'
import fr from './assets/flag-fr.svg'
import us from './assets/flag-us.svg'

export const countryFeelingPeople = [
  {
    id: 'ana',
    src: ana,
    alt: 'Ana holding her stomach, looking hungry',
    caption: 'Ana',
    imageBadge: { src: br, alt: 'Brazil' },
  },
  {
    id: 'jiwoo',
    src: jiwoo,
    alt: 'Jiwoo smiling happily',
    caption: 'Jiwoo',
    imageBadge: { src: kr, alt: 'South Korea' },
  },
  {
    id: 'hiro',
    src: hiro,
    alt: 'Hiro shivering and rubbing his arms',
    caption: 'Hiro',
    imageBadge: { src: jp, alt: 'Japan' },
  },
  {
    id: 'lukas',
    src: lukas,
    alt: 'Lukas yawning with sleepy eyes',
    caption: 'Lukas',
    imageBadge: { src: de, alt: 'Germany' },
  },
  {
    id: 'chloe',
    src: chloe,
    alt: 'Chloé looking sad',
    caption: 'Chloé',
    imageBadge: { src: fr, alt: 'France' },
  },
  {
    id: 'jake',
    src: jake,
    alt: 'Jake looking angry with his hands on his hips',
    caption: 'Jake',
    imageBadge: { src: us, alt: 'The United States' },
  },
] as const

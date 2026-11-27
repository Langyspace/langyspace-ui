import evelyn from '../Practice/assets/characters/evelyn-carter.webp'
import cian from '../Practice/assets/characters/cian-walsh.webp'
import noah from '../Practice/assets/characters/noah-ellis.webp'
import arjun from '../Practice/assets/characters/arjun-mehta.webp'
import zanele from '../Practice/assets/characters/zanele-dlamini.webp'
import theo from '../Practice/assets/characters/theo-jacobs.webp'
import anna from './assets/anna-profile81.webp'
import ben from './assets/ben-profile81.webp'
import ana from './assets/ana-profile-soft-v2.webp'
import kim from './assets/kim-profile-approved.webp'
import leo from './assets/leo-profile-soft-v2.webp'
import raj from './assets/raj-profile-v1.webp'
import owen from '../Practice/assets/characters/owen-harris.webp'
import priya from '../Practice/assets/characters/priya-nair.webp'
import niamh from '../Practice/assets/characters/niamh-murphy.webp'
import ruby from '../Practice/assets/characters/ruby-bennett.webp'

export { ana, kim, leo, raj, anna, ben }

/** Reviewed identities only. A learner or a scenario alias is never assigned somebody else’s face. */
const characterPortraits: Readonly<Record<string, string>> = {
  Ana: ana,
  Anna: anna,
  Ben: ben,
  Kim: kim,
  Leo: leo,
  Raj: raj,
  Owen: owen,
  Priya: priya,
  Niamh: niamh,
  Ruby: ruby,
  Evelyn: evelyn,
  Cian: cian,
  Noah: noah,
  Arjun: arjun,
  Zanele: zanele,
  Theo: theo,
}
export const characterPortrait = (speaker: string) =>
  characterPortraits[speaker.replace(/^Teacher:\s*/, '').trim()]

import anna from './assets/anna-profile81.webp'
import ben from './assets/ben-profile81.webp'
import ana from './assets/ana-profile-soft-v2.webp'
import kim from './assets/kim-profile-approved.webp'
import leo from './assets/leo-profile-soft-v2.webp'
import raj from './assets/raj-profile-v1.webp'

export { ana, kim, leo, raj, anna, ben }

/** Reviewed identities only. A learner or a scenario alias is never assigned somebody else’s face. */
const characterPortraits: Readonly<Record<string, string>> = {
  Ana: ana,
  Anna: anna,
  Ben: ben,
  Kim: kim,
  Leo: leo,
  Raj: raj,
}
export const characterPortrait = (speaker: string) =>
  characterPortraits[speaker.replace(/^Teacher:\s*/, '').trim()]

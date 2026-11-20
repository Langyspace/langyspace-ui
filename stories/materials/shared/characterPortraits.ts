import ana from './assets/ana-profile-soft-v2.webp'
import kim from './assets/kim-profile-approved.webp'
import leo from './assets/leo-profile-soft-v2.webp'
import raj from './assets/raj-profile-v1.webp'

export { ana, kim, leo, raj }

/** Reviewed identities only. A learner or a scenario alias is never assigned somebody else’s face. */
const characterPortraits: Readonly<Record<string, string>> = {
  Ana: ana,
  Kim: kim,
  Leo: leo,
  Raj: raj,
}
export const characterPortrait = (speaker: string) =>
  characterPortraits[speaker.replace(/^Teacher:\s*/, '').trim()]

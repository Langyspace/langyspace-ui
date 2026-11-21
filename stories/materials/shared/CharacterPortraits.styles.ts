import { css, styled } from 'styled-components'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { MaterialLearningDialogue as LearningDialogue } from './MaterialLearningDialogue'

// Same layout crop as A201 / TrialB1; the underlying bitmap stays unchanged.
const anaAvatarCrop = css`
  img[src$='#ana'] {
    inset: auto;
    max-width: none;
    width: 204.8%;
    height: auto;
    left: -18%;
    top: 0;
    object-fit: contain;
  }
`

export const CharacterDialogue: typeof LearningDialogue = styled(
  LearningDialogue,
)`
  ${anaAvatarCrop}
`

export const CharacterAvatar = styled(Avatar)`
  ${anaAvatarCrop}
`

import { styled } from 'styled-components'
import * as Meeting from '../../../src/components/InteractiveMaterial/InterviewSimulation.styles'

export const Frame = styled(Meeting.Meet)`
  margin: 0;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`
export const Stage = styled(Meeting.Main)`
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const Self = styled(Meeting.Self)`
  > [data-size] {
    position: relative;
    inset: auto;
    max-width: none;
  }
`
export {
  Name,
  Bar as Controls,
  Control,
} from '../../../src/components/InteractiveMaterial/InterviewSimulation.styles'

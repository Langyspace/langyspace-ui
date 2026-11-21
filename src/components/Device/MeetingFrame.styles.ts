import { styled } from 'styled-components'
import * as Meeting from '../InteractiveMaterial/InterviewSimulation.styles'

export const Root = styled(Meeting.Meet).withConfig({
  componentId: 'lsui-sc-meeting-frame',
})`
  margin: 0;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`
export const Stage = styled(Meeting.Main)`
  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  > [data-size] {
    align-self: center;
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
} from '../InteractiveMaterial/InterviewSimulation.styles'

import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
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
  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: inherit;
  }
  > [data-size] {
    position: relative;
    inset: auto;
    max-width: none;
  }
`
export const SplitStage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  aspect-ratio: 16 / 9;
  min-width: 0;
  min-height: 0;
`
export const Tile = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: 0;
  border-radius: ${theme.radius.lg};
  background: ${theme.simulations.stage};
  > img {
    display: block;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
    border-radius: inherit;
  }
`
export {
  Name,
  Bar as Controls,
  Control,
} from '../InteractiveMaterial/InterviewSimulation.styles'

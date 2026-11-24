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
const stageBackground = (tone: 'dark' | 'sky') =>
  tone === 'sky' ? theme.simulations.illustratedStage : theme.simulations.stage

export const Stage = styled(Meeting.Main)<{ $tone: 'dark' | 'sky' }>`
  background: ${(p) => stageBackground(p.$tone)};
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
export const Self = styled.div<{ $video: boolean }>`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 24%;
  min-width: ${(p) => (p.$video ? theme.spacing[24] : '0')};
  min-height: 0;
  aspect-ratio: ${(p) => (p.$video ? '1' : '4 / 3')};
  background: ${theme.simulations.controls};
  border: 2px solid ${theme.simulations.canvas};
  border-radius: 10px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  overflow: hidden;
  > img {
    display: block;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
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
export const Tile = styled.div<{ $tone: 'dark' | 'sky' }>`
  position: relative;
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: 0;
  border-radius: ${theme.radius.lg};
  background: ${(p) => stageBackground(p.$tone)};
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
export const Name = styled(Meeting.Name)`
  max-width: calc(100% - 20px);
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export {
  Bar as Controls,
  Control,
} from '../InteractiveMaterial/InterviewSimulation.styles'

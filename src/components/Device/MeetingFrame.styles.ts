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

export const Stage = styled(Meeting.Main)<{
  $tone: 'dark' | 'sky'
  $fit?: 'contain' | 'cover'
}>`
  background: ${(p) => stageBackground(p.$tone)};
  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: ${(p) => p.$fit ?? 'contain'};
    object-position: ${(p) => (p.$fit === 'cover' ? 'center top' : 'center')};
  }
  > [data-size] {
    align-self: center;
  }
`
export const Self = styled.div<{
  $video: boolean
  $fit?: 'contain' | 'cover'
  $active?: boolean
}>`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 24%;
  min-width: ${(p) => (p.$video ? theme.spacing[24] : '0')};
  min-height: 0;
  aspect-ratio: ${(p) => (p.$video ? '1' : '4 / 3')};
  background: ${theme.simulations.controls};
  border: 2px solid
    ${(p) => (p.$active ? theme.slides.accent : theme.simulations.canvas)};
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
    object-fit: ${(p) => p.$fit ?? 'contain'};
    object-position: ${(p) => (p.$fit === 'cover' ? 'center top' : 'center')};
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
export const Tile = styled.div<{
  $tone: 'dark' | 'sky'
  $fit?: 'contain' | 'cover'
}>`
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
    object-fit: ${(p) => p.$fit ?? 'contain'};
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

export const GroupStage = styled.div<{ $shared: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: ${(p) => (p.$shared ? 'minmax(0, 1fr) minmax(5rem, 0.18fr)' : 'minmax(0, 1fr)')};
  gap: ${theme.spacing[2]};
  aspect-ratio: ${(p) => (p.$shared ? 'auto' : '16 / 9')};
  min-width: 0;
  min-height: 0;
`
export const ParticipantGrid = styled.div<{ $shared: boolean }>`
  display: grid;
  contain: ${(p) => (p.$shared ? 'size' : undefined)};
  grid-template-columns: repeat(${(p) => (p.$shared ? 1 : 3)}, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 1fr);
  gap: ${theme.spacing[2]};
  min-width: 0;
  min-height: 0;
`
export const ParticipantTile = styled(Tile)<{ $active: boolean }>`
  overflow: hidden;
  box-shadow: ${(p) => (p.$active ? `inset 0 0 0 3px ${theme.slides.accent}` : 'none')};
  > img {
    object-fit: ${(p) => p.$fit ?? 'cover'};
    object-position: ${(p) => (p.$fit === 'contain' ? 'center' : 'center 20%')};
  }
  > img,
  > [data-size] {
    z-index: 0;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 3px solid
      ${(p) => (p.$active ? theme.slides.accent : 'transparent')};
    pointer-events: none;
  }
`
export const SharedScreen = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  border: 1px solid ${theme.simulations.active};
  border-radius: ${theme.radius.lg};
  overflow: hidden;
`
export const SharedScreenHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  background: ${theme.simulations.controls};
  color: ${theme.simulations.foreground};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.4;
  > svg {
    width: ${theme.spacing[4]};
    height: ${theme.spacing[4]};
    color: ${theme.simulations.active};
  }
`
export const SharedScreenContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacing[3]};
  min-width: 0;
  padding: ${theme.spacing[4]};
  background: ${theme.colors.surface.canvas};
  color: ${theme.colors.text.primary};
`
export const SharedApplication = styled.div`
  min-width: 0;
  container-type: inline-size;
`
export const Caption = styled.div`
  border-radius: ${theme.radius.lg};
  background: ${theme.simulations.captionBackground};
  color: ${theme.simulations.foreground};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.4;
`

// Restore the reviewed caption overlay for a single speaker, above the video and clear of the learner inset.
export { Caption as OverlayCaption } from '../InteractiveMaterial/InterviewSimulation.styles'

/** Two caption rows remain inside the image; the learner sits below and right. */
export const CaptionStack = styled.div<{ $hasInset?: boolean }>`
  position: absolute;
  left: 12px;
  right: ${(p) => (p.$hasInset === false ? '12px' : 'calc(24% + 22px)')};
  bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
`
export const StackSpeakerCaption = styled(Meeting.Caption)`
  position: static;
  width: fit-content;
  max-width: 100%;
  box-sizing: border-box;
  color: ${theme.simulations.foreground};
`
export const StackLearnerCaption = styled(StackSpeakerCaption)`
  align-self: flex-end;
  max-width: 85%;
`
export const SharedCaptionStack = styled(CaptionStack)`
  position: static;
  min-width: 0;
  min-height: ${theme.spacing[24]};
  align-self: end;
`
export const LearnerCaption = styled(Caption)`
  width: fit-content;
  max-width: 75%;
  margin-left: auto;
`

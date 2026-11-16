import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { Button } from '../../../src/components/Button/Button'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
export const Stage = styled.div`
  height: 100dvh;
  min-width: 0;
`
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const Goal = styled.p`
  margin: 0;
  padding-bottom: ${theme.spacing[4]};
  border-bottom: 1px solid ${theme.voiceMessage.border};
  font-size: ${theme.typography.fontSize.md};
  b {
    color: ${theme.slides.accent};
    font-size: ${theme.typography.fontSize.xs};
    text-transform: uppercase;
    margin-right: ${theme.spacing[3]};
  }
`
export const TranslationButton = styled(Button)`
  padding: 0;
  min-height: ${theme.spacing[6]};
  font-weight: ${theme.typography.fontWeight.regular};
  text-align: left;
  justify-content: flex-start;
  white-space: normal;
  text-decoration: none;
`
export const Muted = styled.span`
  display: block;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
`
export const Use = styled.aside`
  padding: ${theme.spacing[5]};
  background: ${theme.colors.palette.neutral[900]};
  color: ${theme.colors.palette.white};
  border-radius: ${theme.radius.lg};
  p {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: ${theme.spacing[2]};
    margin: ${theme.spacing[4]} 0;
    color: ${theme.colors.palette.neutral[500]};
  }
  b {
    color: ${theme.colors.palette.white};
    font-size: ${theme.typography.fontSize.xl};
    margin-left: ${theme.spacing[2]};
  }
  small {
    color: ${theme.colors.palette.accent.pink};
    text-transform: uppercase;
    font-weight: ${theme.typography.fontWeight.bold};
  }
`
export const Card = styled.div`
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.voiceMessage.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.palette.white};
  min-width: 0;
  h3 {
    margin: 0 0 ${theme.spacing[4]};
  }
`
export const SpeakingCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[3]};
  strong {
    flex: 1;
  }
  small {
    flex-basis: 100%;
    color: ${theme.colors.text.muted};
  }
`
export const Number = styled.span`
  display: inline-grid;
  place-items: center;
  width: ${theme.spacing[8]};
  height: ${theme.spacing[8]};
  border-radius: ${theme.radius.circle};
  background: ${theme.colors.palette.neutral[900]};
  color: ${theme.colors.palette.white};
  font-size: ${theme.typography.fontSize.sm};
  flex-shrink: 0;
`
export const Guest = styled(ChoiceCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]};
  font: inherit;
`
export const Gap = styled(Button)`
  min-width: ${theme.spacing[12]};
  min-height: ${theme.sizes.control.sm};
  padding: 0 ${theme.spacing[2]};
  border-radius: ${theme.radius.sm};
  vertical-align: baseline;
`
export const Homework = styled(Card)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  img {
    width: ${theme.spacing[12]};
    height: ${theme.spacing[12]};
    object-fit: contain;
  }
  span {
    display: block;
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize.sm};
    margin-top: ${theme.spacing[1]};
  }
`
export const CopyFallback = styled.textarea`
  width: 100%;
  min-height: ${theme.spacing[32]};
  font: inherit;
`
export const Notes = styled.main`
  padding: ${theme.spacing[5]};
  font-family: ${theme.typography.fontFamily.sans};
  background: ${theme.colors.surface.canvas};
  min-height: 100vh;
  h1 {
    font-size: ${theme.typography.fontSize.xl};
  }
  li {
    margin-bottom: ${theme.spacing[3]};
  }
`
export const Tools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`
export const Feedback = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  &:empty {
    display: none;
  }
`
export const Hero = styled.span`
  font-size: ${theme.typography.fontSize['3xl']};
  em {
    font-family: Georgia, serif;
    font-weight: ${theme.typography.fontWeight.regular};
    color: ${theme.colors.palette.accent.pink};
  }
`
export const VocabularyHeading = styled.header`
  margin-bottom: ${theme.spacing[6]};
  h3 {
    margin: 0;
    font-size: ${theme.typography.fontSize['2xl']};
  }
  p {
    margin: ${theme.spacing[1]} 0;
    color: ${theme.colors.text.muted};
  }
`
export const Grammar = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: ${theme.spacing[6]};
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const TableScroll = styled.div`
  min-width: 0;
  overflow-x: auto;
  border: 1px solid ${theme.voiceMessage.border};
  border-radius: ${theme.radius.lg};
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: ${theme.spacing[1]} ${theme.spacing[3]};
    text-align: left;
    border-bottom: 1px solid ${theme.voiceMessage.border};
  }
  thead th {
    background: ${theme.semantic.status.success.foreground};
    color: ${theme.colors.palette.white};
    font-size: ${theme.typography.fontSize.xs};
    text-transform: uppercase;
  }
  tbody {
    background: ${theme.colors.palette.white};
  }
  tbody td:nth-child(2) {
    color: ${theme.semantic.status.success.foreground};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  @container (max-width:${theme.breakpoints.sm}) {
    th,
    td {
      padding: ${theme.spacing[1]};
      font-size: ${theme.typography.fontSize.sm};
    }
  }
`
export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[4]};
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const Prompts = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[4]};
  flex-wrap: wrap;
`
export const GuestImages = styled.span`
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${theme.radius.md};
`
export const GuestScene = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const AudioError = styled.p`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: ${theme.spacing[3]};
  background: ${theme.semantic.status.danger.background};
  color: ${theme.semantic.status.danger.foreground};
`

export const Eyebrow = styled.span`
  display: block;
  color: ${theme.slides.accent};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`

export const WarmScene = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  aspect-ratio: 1;
  max-width: 100%;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
`
export const WarmImage = styled.img`
  && {
    min-width: 0;
    min-height: 0;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const CountryFlag = styled.img`
  && {
    position: absolute;
    right: ${theme.spacing[2]};
    bottom: ${theme.spacing[2]};
    width: ${theme.spacing[12]};
    height: ${theme.spacing[8]};
    object-fit: contain;
    border: 2px solid ${theme.colors.palette.white};
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.palette.white};
  }
`

export const QuestionVerb = styled.b`
  color: ${theme.semantic.status.info.foreground};
`
export const StatementVerb = styled.b`
  color: ${theme.semantic.status.success.foreground};
`

export const TitleAudio = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  flex-wrap: wrap;
`

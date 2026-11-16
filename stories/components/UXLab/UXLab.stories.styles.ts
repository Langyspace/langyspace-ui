import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
export const Demo = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  max-width: 760px;
  margin: 0 auto;
  padding: ${theme.spacing[5]} 0;
  min-width: 0;
  > h2 {
    font: 700 26px ${theme.slides.displayFontFamily};
    margin: 0;
    color: inherit;
  }
  > p {
    margin: 0;
    color: ${(p) => Common.recipe(p).muted};
    font-size: 14px;
  }
`
export const Media = styled(Common.Surface)`
  background: ${theme.simulations.stage};
  color: ${theme.simulations.foreground};
  padding: ${theme.spacing[5]};
  min-height: 240px;
  img {
    max-height: 160px;
    object-fit: contain;
    max-width: 40%;
  }
`
export const ReviewList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  li {
    display: flex;
    gap: ${theme.spacing[3]};
    align-items: center;
    padding: ${theme.spacing[4]};
    border: 1.5px solid ${(p) => Common.recipe(p).border};
    border-radius: ${theme.radius.xl};
    font-size: 18px;
  }
`
export const Comparison = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const Stage = styled.div`
  padding: ${theme.spacing[5]};
  max-width: 1120px;
  margin: auto;
  min-width: 0;
  box-sizing: border-box;
`
export const Narrow = styled.div`
  max-width: 320px;
  min-width: 0;
`
export const Sheet = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`
export const ThemeCanvas = styled.div`
  background: ${(p) => Common.recipe(p).canvas};
  color: ${(p) => Common.recipe(p).foreground};
  padding: ${theme.spacing[4]};
  min-width: 0;
`
export const Tile = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
  gap: ${theme.spacing[6]};
  padding: ${theme.spacing[6]};
  border: 1.5px solid ${(p) => Common.recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => Common.recipe(p).canvas};
  color: ${(p) => Common.recipe(p).foreground};
  font-family: ${theme.typography.fontFamily.sans};
  min-width: 0;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    padding: ${theme.spacing[4]};
  }
`
export const TileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  min-width: 0;
  h2 {
    font: 700 26px ${theme.slides.displayFontFamily};
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
    color: inherit;
  }
  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
  }
  a {
    font-size: 12px;
    color: inherit;
  }
`
export const TileStage = styled.div`
  min-width: 0;
  background: ${(p) => Common.recipe(p).surface};
  border: 1.5px dashed ${(p) => Common.recipe(p).border};
  border-radius: 20px;
  padding: ${theme.spacing[4]};
`

export const GrammarExplanation = styled(Common.Surface)`
  font-size: 14px;
  background: ${(p) => Common.recipe(p).canvas};
  > div + div {
    padding-top: ${theme.spacing[3]};
    border-top: 1px solid ${(p) => Common.recipe(p).border};
  }
  p {
    margin: ${theme.spacing[1]} 0 0;
  }
  strong {
    color: ${(p) => `color-mix(in srgb, ${theme.semantic.status.success.foreground} 65%, ${Common.recipe(p).foreground})`};
  }
`

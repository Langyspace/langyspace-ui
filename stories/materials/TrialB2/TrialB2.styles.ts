import { createGlobalStyle, styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme as recipe } from '../../../src/foundations/theme/resolveSlideTheme'

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  min-width: 0;
  color: ${(p) => recipe(p).foreground};
  background: ${(p) => recipe(p).canvas};
  font-family: ${theme.typography.fontFamily.sans};
  line-height: 1.5;
  * {
    box-sizing: border-box;
  }
  button,
  summary {
    cursor: pointer;
  }
  :where(button, summary, textarea, [tabindex]):focus-visible {
    outline: 3px solid ${(p) => recipe(p).accent};
    outline-offset: 4px;
  }
`
export const Page = styled.div`
  min-height: 100cqh;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${(p) => recipe(p).headerHeight} + ${theme.spacing[12]})
    ${theme.spacing[8]} ${theme.spacing[12]};
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: calc(${(p) => recipe(p).headerHeight} + ${theme.spacing[8]})
      ${theme.spacing[4]} ${theme.spacing[8]};
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 70rem;
  min-width: 0;
  margin-inline: auto;
`
export const Title = styled.h2`
  margin: 0;
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: clamp(1.75rem, 4.4cqh, 2.75rem);
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.15;
  letter-spacing: -0.025em;
  text-wrap: balance;
`
export const Hero = styled.h1`
  margin: 0;
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: clamp(2.5rem, 7cqh, 4.5rem);
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.05;
  letter-spacing: -0.03em;
  em {
    color: ${(p) => recipe(p).indicator};
    font-family: ${(p) => recipe(p).accentFontFamily};
    font-weight: ${theme.typography.fontWeight.regular};
  }
`
export const Subtitle = styled.p`
  margin: ${theme.spacing[3]} 0 ${theme.spacing[8]};
  color: ${(p) => recipe(p).muted};
  font-size: 1.125rem;
  line-height: 1.5;
  max-width: 60ch;
`
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  min-width: 0;
`
export const Prompt = styled.p`
  margin: 0;
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: clamp(1.25rem, 2.7cqh, 1.625rem);
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.4;
`
export const Panel = styled(Stack)`
  padding: ${theme.spacing[5]};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${(p) => recipe(p).panelRadius};
  background: ${(p) => recipe(p).surface};
`
export const Questions = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: ${theme.spacing[4]};
  li {
    min-width: 0;
  }
`
export const Support = styled.details`
  font-size: 1rem;
  color: ${(p) => recipe(p).muted};
  summary {
    width: fit-content;
    padding: ${theme.spacing[2]} 0;
    color: ${(p) => recipe(p).foreground};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  p {
    margin: ${theme.spacing[2]} 0 0;
  }
  ul {
    margin: ${theme.spacing[2]} 0 0;
    padding-left: ${theme.spacing[5]};
  }
  li + li {
    margin-top: ${theme.spacing[2]};
  }
`
export const Columns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: ${theme.spacing[8]};
  align-items: center;
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${theme.spacing[5]};
  }
`
export const Scene = styled.div`
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: ${(p) => recipe(p).panelRadius};
  }
`
export const Hotspot = styled.button<{ $x: number; $y: number }>`
  position: absolute;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 2px solid ${(p) => recipe(p).foreground};
  border-radius: ${theme.radius.circle};
  background: ${(p) => recipe(p).canvas};
  color: ${(p) => recipe(p).foreground};
  font: inherit;
  font-weight: ${theme.typography.fontWeight.bold};
  &[aria-pressed='true'] {
    background: ${(p) => recipe(p).accent};
    color: ${(p) => recipe(p).canvas};
  }
`
export const Caption = styled.p`
  margin: 0;
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
`
export const Dialogue = styled.ol`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 54rem;
  li {
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    border-radius: ${(p) => recipe(p).panelRadius};
    background: ${(p) => recipe(p).surface};
    max-width: 92%;
  }
  li:nth-child(2n) {
    margin-left: auto;
    border: 1px solid ${(p) => recipe(p).border};
  }
  b {
    display: block;
    font-size: ${theme.typography.fontSize.sm};
    color: ${(p) => recipe(p).muted};
    margin-bottom: ${theme.spacing[1]};
  }
  p {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.5;
  }
`
export const Choices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[4]};
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Choice = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  min-width: 0;
  min-height: 7rem;
  padding: ${theme.spacing[6]};
  border: 2px solid ${(p) => recipe(p).border};
  border-radius: ${(p) => recipe(p).panelRadius};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: 1.5rem;
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: left;
  line-height: 1.4;
  &[aria-pressed='true'] {
    border-color: ${(p) => recipe(p).accent};
  }
  span[aria-hidden] {
    color: ${(p) => recipe(p).indicator};
  }
`
export const ConversationButton = styled(Choice)`
  min-height: 5rem;
  font-size: 1.25rem;
  padding: ${theme.spacing[4]} ${theme.spacing[5]};
`

// Used only by isolated SSR exports and the review fixture.
export const SnapshotGlobals = createGlobalStyle`
  html, body, #root { margin: 0; width: 100%; height: 100%; }
  [hidden] { display: none !important; }
  body { background: ${theme.colors.palette.black}; }
`

import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { Button } from '../Button/Button'
export const recipe = (p: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(p).slides ?? theme.slides
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const Surface = styled(Stack)`
  padding: ${theme.spacing[4]};
  border: 1.5px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  font-family: ${theme.typography.fontFamily.sans};
  line-height: 1.5;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  min-width: 0;
`
export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: ${theme.spacing[6]};
  min-width: 0;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Hint = styled.p`
  margin: 0;
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.5;
`
export const Heading = styled.h3`
  margin: 0;
  color: inherit;
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: ${theme.typography.fontSize.xl};
  line-height: 1.2;
`
export const Tag = styled.span`
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => recipe(p).accent};
`
export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border: 1.5px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.pill};
  font-size: ${theme.typography.fontSize.sm};
  background: ${(p) => recipe(p).canvas};
`
export const Action = styled(Button)`
  font-family: ${(p) => recipe(p).displayFontFamily};
  &[data-action-appearance='text'] {
    color: ${(p) => recipe(p).foreground};
  }
  &[data-action-appearance='text-subtle'] {
    color: ${(p) => recipe(p).muted};
  }
`
export const Number = styled.span`
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: ${theme.spacing[8]};
  height: ${theme.spacing[8]};
  border-radius: ${theme.radius.circle};
  background: ${(p) => recipe(p).accent};
  color: ${(p) => recipe(p).canvas};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
`
export const Icon = styled.svg`
  display: block;
  width: 22px;
  height: 22px;
  max-width: 100%;
  fill: currentColor;
  flex-shrink: 0;
`

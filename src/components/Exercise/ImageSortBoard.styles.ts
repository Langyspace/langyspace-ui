import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { ChoiceCard } from '../ChoiceCard/ChoiceCard'
import { Button } from '../Button/Button'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-image-sort-board',
})<{ $sequence?: boolean }>`
  display: grid;
  gap: ${theme.spacing[3]};
  min-width: 0;
  container-type: inline-size;
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => resolveSlideTheme(p).foreground};
  --lsui-sort-image-height: clamp(3rem, 9cqh, 5rem);
  @container (max-height: ${theme.viewportHeights.lg}) {
    --lsui-sort-image-height: clamp(2.75rem, 6.5cqh, 3.5rem);
  }
  ${(p) =>
    p.$sequence &&
    css`
      ${Board} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: ${theme.spacing[2]};
      }
      ${Column} {
        grid-column: auto;
        min-height: calc(var(--lsui-sort-image-height) + 6rem);
        padding: ${theme.spacing[2]};
        gap: ${theme.spacing[2]};
      }
      ${Column}:first-child {
        grid-column: 1 / -1;
      }
      ${Items} {
        grid-template-columns: minmax(0, 1fr);
      }
      ${Column}:first-child ${Items} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        min-height: calc(var(--lsui-sort-image-height) + 2rem);
      }
      ${Picture} > div {
        width: var(--lsui-sort-image-height);
        align-self: center;
      }
      ${Picture} span {
        font-size: ${theme.typography.fontSize.sm};
      }
      ${GroupButton} {
        padding-inline: ${theme.spacing[1]};
        font-size: ${theme.typography.fontSize.sm};
      }
      ${Empty} {
        font-size: ${theme.typography.fontSize.xs};
      }
    `}
`
export const Instructions = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  color: ${(p) => resolveSlideTheme(p).muted};
  line-height: 1.4;
`
export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: ${theme.spacing[4]};
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const Column = styled.section<{ $bank: boolean; $target: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: calc(3 * var(--lsui-sort-image-height) + 14rem);
  padding: ${theme.spacing[3]};
  gap: ${theme.spacing[3]};
  border: 1px dashed
    ${(p) => (p.$target ? resolveSlideTheme(p).accent : resolveSlideTheme(p).border)};
  border-radius: ${theme.radius.xl};
  background: ${(p) => resolveSlideTheme(p).surface};
  @container (max-width: ${theme.breakpoints.md}) {
    grid-column: ${(p) => (p.$bank ? '1 / -1' : 'auto')};
    min-height: ${(p) => (p.$bank ? '0' : undefined)};
  }
`
export const GroupButton = styled(Button)`
  width: 100%;
  justify-content: center;
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => resolveSlideTheme(p).foreground};
  border-color: ${(p) => resolveSlideTheme(p).border};
  background: ${(p) => resolveSlideTheme(p).canvas};
  &:disabled {
    opacity: 1;
  }
`
export const Items = styled.div<{ $bank: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(${(p) => (p.$bank ? 3 : 2)}, minmax(0, 1fr));
  }
`
export const Picture = styled(ChoiceCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing[1]};
  padding: ${theme.spacing[2]};
  min-height: 0;
  text-align: center;
  cursor: grab;
  img {
    display: block;
    width: 100%;
    height: var(--lsui-sort-image-height);
    object-fit: contain;
  }
  span {
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 1.25;
  }
`
export const Empty = styled.p`
  margin: auto;
  text-align: center;
  color: ${(p) => resolveSlideTheme(p).muted};
  font-size: ${theme.typography.fontSize.sm};
`
export const Footer = styled.div`
  display: grid;
  justify-items: center;
  gap: ${theme.spacing[2]};
  text-align: center;
  min-width: 0;
`

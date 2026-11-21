import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { Pressable } from '../Pressable'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-grammar-table',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Wrap = styled.div`
  max-width: 100%;
  overflow-x: auto;
  border: 1.5px solid ${(p) => Common.recipe(p).border};
  border-radius: ${theme.radius.xl};
`
export const Table = styled.table<{
  $tone: 'affirmative' | 'negative' | 'question'
  $captionHidden: boolean
}>`
  --grammar-ink: ${(p) => (p.$tone === 'negative' ? (resolveTheme(p).semantic?.status.danger.foreground ?? theme.semantic.status.danger.foreground) : p.$tone === 'question' ? (resolveTheme(p).semantic?.status.info.foreground ?? theme.semantic.status.info.foreground) : (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground))};
  --grammar-surface: ${(p) => (p.$tone === 'negative' ? (resolveTheme(p).semantic?.status.danger.background ?? theme.semantic.status.danger.background) : p.$tone === 'question' ? (resolveTheme(p).semantic?.status.info.background ?? theme.semantic.status.info.background) : (resolveTheme(p).semantic?.status.success.background ?? theme.semantic.status.success.background))};
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
  background: ${(p) => Common.recipe(p).canvas};
  caption {
    text-align: left;
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    font: 700 12px ${theme.slides.displayFontFamily};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${(p) => Common.recipe(p).muted};
    background: ${(p) => Common.recipe(p).surface};
  }
  th {
    font: 700 12px ${theme.typography.fontFamily.sans};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${(p) => Common.recipe(p).muted};
    background: ${(p) => Common.recipe(p).surface};
  }
  th,
  td {
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    border-bottom: 1px solid ${(p) => Common.recipe(p).border};
    vertical-align: middle;
  }
  tbody th {
    font-family: ${theme.typography.fontFamily.sans};
    font-size: inherit;
    text-transform: none;
    letter-spacing: normal;
    color: ${(p) => Common.recipe(p).foreground};
    background: ${(p) => Common.recipe(p).canvas};
    > span {
      display: inline-block;
      padding: 3px 10px;
      border-radius: ${theme.radius.pill};
      background: ${(p) => Common.recipe(p).accent};
      color: ${(p) => Common.recipe(p).canvas};
    }
  }
  td[data-verb],
  td strong {
    font-weight: 700;
    color: var(--grammar-ink);
  }
  tbody tr:last-child > * {
    border-bottom: 0;
  }
  ${(p) =>
    p.$captionHidden &&
    css`
      caption {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
        border: 0;
      }
    `}
`
export const Example = styled(Pressable)<{ $concealed: boolean }>`
  padding: ${theme.spacing[1]} ${(p) => (p.$concealed ? theme.spacing[4] : '0')};
  border: 0;
  background: ${(p) => (p.$concealed ? Common.recipe(p).accent : 'transparent')};
  font: inherit;
  font-weight: ${(p) => (p.$concealed ? theme.typography.fontWeight.bold : theme.typography.fontWeight.semibold)};
  color: ${(p) => (p.$concealed ? Common.recipe(p).canvas : 'inherit')};
  cursor: pointer;
  text-align: left;
  border-radius: ${theme.radius.sm};
  min-height: ${theme.spacing[8]};
  font-family: ${theme.typography.fontFamily.sans};
  transition: none;
  &&:hover:not(:disabled),
  &&:active:not(:disabled) {
    transform: none;
    box-shadow: none;
    background: ${(p) => (p.$concealed ? Common.recipe(p).accent : 'transparent')};
    color: ${(p) => (p.$concealed ? Common.recipe(p).canvas : 'inherit')};
  }
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
`
export const AnswerFrame = styled.div`
  position: relative;
  min-width: 0;
  min-height: ${theme.sizes.control.md};
`
export const AnswerContent = styled.div<{ $concealed: boolean }>`
  visibility: ${(p) => (p.$concealed ? 'hidden' : 'visible')};
  min-width: 0;
`
export const RevealControl = styled(Example)`
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  height: ${theme.sizes.control.md};
  min-height: ${theme.sizes.control.md};
  margin-block: auto;
`

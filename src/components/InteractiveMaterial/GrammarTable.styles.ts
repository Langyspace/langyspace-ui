import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
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
}>`
  --grammar-ink: ${(p) => (p.$tone === 'negative' ? theme.semantic.status.danger.foreground : p.$tone === 'question' ? theme.semantic.status.info.foreground : theme.semantic.status.success.foreground)};
  --grammar-surface: ${(p) => (p.$tone === 'negative' ? theme.semantic.status.danger.background : p.$tone === 'question' ? theme.semantic.status.info.background : theme.semantic.status.success.background)};
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
    color: var(--grammar-ink);
    background: var(--grammar-surface);
  }
  th {
    font: 700 12px ${theme.slides.displayFontFamily};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--grammar-ink);
    background: var(--grammar-surface);
  }
  th,
  td {
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    border-bottom: 1px solid ${(p) => Common.recipe(p).border};
    vertical-align: middle;
  }
  tbody th {
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
    color: ${(p) => `color-mix(in srgb, var(--grammar-ink) 65%, ${Common.recipe(p).foreground})`};
  }
  tbody tr:last-child > * {
    border-bottom: 0;
  }
`
export const Example = styled(Pressable)`
  padding: ${theme.spacing[1]} 0;
  border: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-align: left;
  border-radius: ${theme.radius.sm};
  min-height: ${theme.spacing[8]};
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
`

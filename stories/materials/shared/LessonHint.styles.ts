import { styled } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${theme.spacing[2]};
  min-width: 0;
`

export const Trigger = styled(Button)`
  && {
    align-self: flex-start;
    min-height: ${theme.spacing[10]};
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    border: 1px solid ${(p) => resolveSlideTheme(p).accent};
    color: ${(p) => resolveSlideTheme(p).accent};
    background: transparent;
    font-size: ${theme.typography.fontSize.md};
    white-space: nowrap;
  }
  &&:hover:not(:disabled),
  &&[aria-expanded='true'] {
    background: ${(p) => resolveSlideTheme(p).surface};
    border-color: ${(p) => resolveSlideTheme(p).accent};
    color: ${(p) => resolveSlideTheme(p).accent};
  }
  &&:focus-visible {
    outline: 3px solid ${(p) => resolveSlideTheme(p).accent};
    outline-offset: ${theme.spacing[1]};
    box-shadow: none;
  }
`

export const Panel = styled.div`
  && {
    min-width: 0;
    max-width: 65ch;
    color: ${(p) => resolveSlideTheme(p).muted};
    font-family: ${theme.typography.fontFamily.sans};
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: 1.55;
    overflow-wrap: anywhere;
  }
  &[hidden] {
    display: none;
  }
  && p,
  && li {
    font: inherit;
  }
  && p {
    margin: ${theme.spacing[2]} 0 0;
  }
  && b {
    color: ${(p) => resolveSlideTheme(p).foreground};
  }
`

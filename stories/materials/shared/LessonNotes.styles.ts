import { styled } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
export const Trigger = styled(Button)`
  min-height: 40px;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1.5px solid ${(p) => resolveSlideTheme(p).border};
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).surface};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: 0.9375rem;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 20px;
  &&:hover:not(:disabled),
  &&:active:not(:disabled) {
    transform: none;
    background: ${(p) => resolveSlideTheme(p).surface};
  }
  &:focus-visible {
    outline: 3px solid ${(p) => resolveSlideTheme(p).accent};
    outline-offset: 4px;
    box-shadow: none;
  }
  svg {
    width: 16px;
    height: 16px;
  }
`

export const PopupWarning = styled.p`
  position: absolute;
  top: calc(${(p) => resolveSlideTheme(p).headerHeight} + ${theme.spacing[2]});
  right: ${theme.spacing[4]};
  max-width: min(28rem, calc(100% - ${theme.spacing[8]}));
  padding: ${theme.spacing[3]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).surface};
  z-index: 6;
`

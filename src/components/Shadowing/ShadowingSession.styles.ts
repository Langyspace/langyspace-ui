import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'

export const Frame = styled.section.withConfig({
  componentId: 'lsui-sc-shadowing-session',
})`
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${theme.colors.text.secondary};
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    height: 100%;
    min-height: 0;
    overflow: hidden;
    background: ${theme.colors.surface.canvas};
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]};
  border-bottom: 1px solid ${theme.colors.border.subtle};
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    border-bottom: 0;
  }
`
export const BackButton = styled(Pressable)`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  border-radius: ${theme.radius.circle};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.surface.muted};
`

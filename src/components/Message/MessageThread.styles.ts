import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Panel = styled.section.withConfig({
  componentId: 'lsui-sc-message-thread',
})`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  background: ${theme.colors.palette.white};
`

export const Header = styled.div`
  min-width: 0;
  flex: 0 0 auto;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-bottom: 1px solid ${theme.colors.border.subtle};
`

export const Viewport = styled.div`
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  padding: ${theme.spacing[5]};
  overscroll-behavior-y: contain;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`

export const Footer = styled.footer`
  min-width: 0;
  flex: 0 0 auto;
  padding: ${theme.spacing[4]} ${theme.spacing[5]};
  border-top: 1px solid ${theme.colors.border.subtle};
  background: ${theme.semantic.background.surfaceSubtle};
`

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

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
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  background: ${token.colorNeutral0};
`

export const Header = styled.div`
  min-width: 0;
  flex: 0 0 auto;
  padding: ${token.spacing3} ${token.spacing4};
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
`

export const Viewport = styled.div`
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  padding: ${token.spacing5};
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
  padding: ${token.spacing4} ${token.spacing5};
  border-top: 1px solid ${token.colorSurfaceBorderSubtle};
  background: ${token.colorSurfaceSubtle};
`

import { createGlobalStyle, styled } from 'styled-components'
import { theme } from '../foundations/theme/theme'
export const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
`
export const Viewport = styled.iframe<{ $scale: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 360px;
  height: 640px;
  border: 0;
  transform: translate(-50%, -50%) scale(${(p) => p.$scale});
  transform-origin: center;
  background: ${theme.colors.surface.canvas};
`
export const Canvas = createGlobalStyle<{ $fontFaces: string }>`
  ${(p) => p.$fontFaces}
  html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; color-scheme: light; }
  *, *::before, *::after { box-sizing: border-box; }
  body {
    background: ${theme.colors.surface.canvas}; color: ${theme.colors.text.primary};
    font-family: ${theme.typography.fontFamily.sans}; font-size: ${theme.typography.fontSize.md};
    line-height: ${theme.typography.lineHeight.normal}; font-synthesis: none;
  }
  p, h1, h2, h3, figure { margin: 0; }
  button { font: inherit; }
`

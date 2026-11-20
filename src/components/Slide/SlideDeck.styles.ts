import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'

const recipe = resolveSlideTheme

export const FirstPageButton = styled(IconButton)`
  position: absolute;
  right: max(${theme.spacing[4]}, env(safe-area-inset-right, 0px));
  bottom: max(${theme.spacing[4]}, env(safe-area-inset-bottom, 0px));
  z-index: 2;
  border: 1px solid ${(p) => recipe(p).border};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  &:focus-visible {
    outline: 3px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
`

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-slide-deck',
})`
  &[tabindex='-1']:focus {
    outline: none;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  color: ${(p) => recipe(p).foreground};
  background: ${(p) => recipe(p).canvas};
  font-family: ${theme.typography.fontFamily.sans};
  line-height: ${(p) => recipe(p).pageLineHeight};
`

export const Navigation = styled.nav`
  position: absolute;
  inset: 0 0 auto;
  z-index: 2;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  min-height: calc(
    ${(p) => recipe(p).headerHeight} + env(safe-area-inset-top, 0px)
  );
  padding: env(safe-area-inset-top, 0px)
    max(${theme.spacing[8]}, env(safe-area-inset-right, 0px)) 0
    max(${theme.spacing[8]}, env(safe-area-inset-left, 0px));
  border-bottom: 1px solid ${(p) => recipe(p).border};
  background: ${(p) => recipe(p).headerSurface};
  backdrop-filter: blur(8px);

  @media (max-width: ${(p) => recipe(p).compactBreakpoint}) {
    padding-inline: max(${theme.spacing[4]}, env(safe-area-inset-left, 0px))
      max(${theme.spacing[4]}, env(safe-area-inset-right, 0px));
  }
`

export const BackButton = styled(Button)`
  flex-shrink: 0;
  white-space: nowrap;
  font-family: ${(p) => recipe(p).displayFontFamily};
  line-height: 1.4;
  height: 36px;
  min-height: 36px;
  padding: 0 14px 0 10px;
  gap: ${theme.spacing[1]};
  border: 1.5px solid ${(p) => recipe(p).border};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  &&:hover:not(:disabled),
  &&:active:not(:disabled) {
    transform: none;
    background: ${(p) => recipe(p).surface};
    border-color: ${(p) => recipe(p).foreground};
  }
  &:focus-visible {
    outline: 3px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
    box-shadow: none;
  }
  svg {
    width: 18px;
    height: 18px;
  }
  @media (max-width: ${(p) => recipe(p).compactBreakpoint}) {
    height: 32px;
    min-height: 32px;
    padding: 0 ${theme.spacing[3]} 0 ${theme.spacing[2]};
    font-size: 0.8125rem;
  }
`

export const Actions = styled.div`
  margin-inline-start: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacing[2]};
  min-width: 0;
`

export const Progress = styled.progress`
  position: absolute;
  top: calc(
    ${(p) => recipe(p).headerHeight} + env(safe-area-inset-top, 0px) - 3px
  );
  z-index: 3;
  pointer-events: none;
  display: block;
  flex-shrink: 0;
  width: 100%;
  height: 3px;
  border: 0;
  appearance: none;
  color: ${(p) => recipe(p).indicator};
  background: transparent;

  &::-webkit-progress-bar {
    background: transparent;
  }
  &::-webkit-progress-value {
    background: ${(p) => recipe(p).indicator};
    border-radius: 0 3px 3px 0;
    transition: width ${theme.transitions.duration.fast} linear;
  }
  &::-moz-progress-bar {
    background: ${(p) => recipe(p).indicator};
    border-radius: 0 3px 3px 0;
  }
  @media (prefers-reduced-motion: reduce) {
    &::-webkit-progress-value {
      transition: none;
    }
  }
`

export const Viewport = styled.div<{ $continuous: boolean }>`
  container-type: size;
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  scroll-snap-type: ${(p) => (p.$continuous ? 'none' : 'y mandatory')};
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100cqh;
  min-width: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'

const recipe = (props: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(props).slides ?? theme.slides

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-slide-deck',
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  color: ${(p) => recipe(p).foreground};
  background: ${(p) => recipe(p).canvas};
  font-family: ${theme.typography.fontFamily.sans};
`

export const Navigation = styled.nav`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  min-height: ${(p) => recipe(p).headerHeight};
  padding: ${theme.spacing[2]} ${theme.spacing[8]};
  border-bottom: 1px solid ${(p) => recipe(p).border};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-inline: ${theme.spacing[4]};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacing[2]};
  min-width: 0;
`

export const Progress = styled.progress`
  display: block;
  flex-shrink: 0;
  width: 100%;
  height: 2px;
  border: 0;
  appearance: none;
  color: ${(p) => recipe(p).indicator};
  background: ${(p) => recipe(p).border};

  &::-webkit-progress-bar {
    background: ${(p) => recipe(p).border};
  }
  &::-webkit-progress-value {
    background: ${(p) => recipe(p).indicator};
  }
  &::-moz-progress-bar {
    background: ${(p) => recipe(p).indicator};
  }
`

export const Viewport = styled.div`
  container-type: size;
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;

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

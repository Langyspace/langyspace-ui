import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-comic-role-play',
})`
  display: grid;
  gap: ${theme.spacing[3]};
  min-width: 0;
  container-type: inline-size;
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => resolveSlideTheme(p).foreground};
`
export const Participants = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: ${theme.spacing[4]};
  min-width: 0;
  > * {
    min-width: 0;
  }
`
export const Panels = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: ${theme.spacing[3]};
  margin: 0;
  padding: 0;
  list-style: none;
  @container (max-width: 22rem) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Panel = styled.li`
  display: grid;
  min-width: 0;
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => resolveSlideTheme(p).surface};
`
export const Turns = styled.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  align-items: start;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[3]};
`
export const Balloon = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 3rem;
  min-width: 0;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border-radius: ${theme.radius.xl};
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
  text-align: center;
  overflow-wrap: anywhere;
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing[2]};
    left: 30%;
    width: ${theme.spacing[4]};
    height: ${theme.spacing[3]};
    background: ${theme.colors.background};
    clip-path: polygon(0 0, 100% 0, 30% 100%);
  }
`
export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  border-radius: 0 0 ${theme.radius.xl} ${theme.radius.xl};
`
export const Controls = styled.div`
  display: flex;
  justify-content: center;
`

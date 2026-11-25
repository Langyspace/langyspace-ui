import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-task-board',
})`
  min-width: 0;
  container-type: inline-size;
  color: ${(p) => resolveSlideTheme(p).foreground};
  font-family: ${theme.typography.fontFamily.sans};
`
export const Columns = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${(p) => Math.max(1, p.$count)},
    minmax(0, 1fr)
  );
  gap: ${theme.spacing[3]};
  min-width: 0;
  @container (max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  min-width: 0;
  min-height: calc(${theme.spacing[24]} * 2);
  padding: ${theme.spacing[3]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${theme.radius.lg};
  background: ${(p) => resolveSlideTheme(p).surface};
`
export const Heading = styled.h3`
  margin: 0;
  font: inherit;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.4;
`
export const Cards = styled.ul`
  display: grid;
  gap: ${theme.spacing[2]};
  padding: 0;
  margin: 0;
  list-style: none;
  min-width: 0;
`
export const Card = styled.li`
  display: grid;
  gap: ${theme.spacing[4]};
  min-width: 0;
  padding: ${theme.spacing[3]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${theme.radius.md};
  background: ${(p) => resolveSlideTheme(p).canvas};
`
export const Title = styled.h4`
  margin: 0;
  font: inherit;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.4;
  overflow-wrap: anywhere;
`
export const Owner = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 0;
`

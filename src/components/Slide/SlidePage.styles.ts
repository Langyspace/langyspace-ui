import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'

const recipe = (props: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(props).slides ?? theme.slides

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-slide-page',
})<{ $tone: 'default' | 'inverse' }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: ${theme.spacing[8]};
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseForeground : recipe(p).foreground)};
  background: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseCanvas : recipe(p).canvas)};
  font-family: ${theme.typography.fontFamily.sans};

  @container (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[5]} ${theme.spacing[4]};
  }
`

export const Content = styled.div<{ $width: 'focused' | 'standard' | 'wide' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  max-width: ${(p) => (p.$width === 'focused' ? recipe(p).focusedWidth : p.$width === 'standard' ? recipe(p).standardWidth : recipe(p).wideWidth)};
  margin-inline: auto;
  gap: ${theme.spacing[6]};
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing[3]} ${theme.spacing[4]};
  min-width: 0;
`

export const Heading = styled.div`
  flex: 1 1 16rem;
  min-width: 0;
`

export const Eyebrow = styled.div<{ $tone: 'default' | 'inverse' }>`
  margin-bottom: ${theme.spacing[1]};
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).indicator : recipe(p).accent)};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  overflow-wrap: anywhere;
`

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(
    ${theme.typography.fontSize['2xl']},
    3.5cqh,
    ${theme.typography.fontSize['4xl']}
  );
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.snug};
  letter-spacing: -0.025em;
  overflow-wrap: anywhere;
  text-wrap: balance;
`

export const Instruction = styled.div<{ $tone: 'default' | 'inverse' }>`
  margin-top: ${theme.spacing[2]};
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseMuted : recipe(p).muted)};
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[2]};
  min-width: 0;
`

export const Body = styled.div`
  min-width: 0;
  overflow-wrap: anywhere;
`

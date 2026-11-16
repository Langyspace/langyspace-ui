import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import type { SlidePageProps } from './SlidePage.types'

const recipe = resolveSlideTheme

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-slide-page',
})<{ $tone: 'default' | 'inverse' }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: calc(${(p) => recipe(p).headerHeight} + ${theme.spacing[2]})
    ${theme.spacing[8]} ${theme.spacing[8]};
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseForeground : recipe(p).foreground)};
  background: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseCanvas : recipe(p).canvas)};
  font-family: ${theme.typography.fontFamily.sans};
  line-height: ${(p) => recipe(p).pageLineHeight};

  @container (max-width: ${theme.breakpoints.sm}) {
    padding: calc(${(p) => recipe(p).headerHeight} + ${theme.spacing[2]})
      ${theme.spacing[4]} ${theme.spacing[4]};
  }
`

export const Content = styled.div<{
  $width: NonNullable<SlidePageProps['width']>
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  max-width: ${(p) => (p.$width === 'focused' ? recipe(p).focusedWidth : p.$width === 'standard' ? recipe(p).standardWidth : p.$width === 'reading' ? recipe(p).readingWidth : p.$width === 'exercise' ? recipe(p).exerciseWidth : p.$width === 'conversation' ? recipe(p).conversationWidth : recipe(p).wideWidth)};
  margin-inline: auto;
`

export const Lead = styled.div`
  min-width: 0;
  margin-bottom: clamp(${theme.spacing[2]}, 2cqh, ${theme.spacing[5]});
`

export const Header = styled.header<{ $lead: boolean; $compact: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing[3]} ${theme.spacing[4]};
  min-width: 0;
  margin-bottom: ${(p) => (p.$lead ? `clamp(${theme.spacing[2]}, 2.2cqh, ${theme.spacing[6]})` : p.$compact ? theme.spacing[6] : `calc(${theme.spacing[6]} + ${theme.spacing[1]})`)};
  @container (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${(p) => (p.$lead ? `clamp(${theme.spacing[2]}, 2.2cqh, ${theme.spacing[6]})` : theme.spacing[5])};
  }
`

export const Heading = styled.div`
  flex: 1 1 16rem;
  min-width: 0;
`

export const Eyebrow = styled.div<{ $tone: 'default' | 'inverse' }>`
  margin-bottom: ${theme.spacing[1]};
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-family: ${(p) => recipe(p).displayFontFamily};
  line-height: 1.4;
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).indicator : recipe(p).accent)};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  &::before {
    content: '✦';
    font-size: 1em;
    letter-spacing: 0;
  }
  @container (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`

export const Title = styled.h2`
  margin: 0;
  color: inherit;
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: clamp(
    ${theme.typography.fontSize['2xl']},
    4.4cqh,
    ${theme.typography.fontSize['4xl']}
  );
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.15;
  letter-spacing: -0.02em;
  overflow-wrap: anywhere;
  text-wrap: balance;
  @container (max-height: ${theme.viewportHeights.lg}) and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.875rem;
  }
  @container (max-width: ${theme.breakpoints.md}) {
    font-size: 1.375rem;
  }
`

export const Instruction = styled.div<{ $tone: 'default' | 'inverse' }>`
  margin-top: ${theme.spacing[2]};
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseMuted : recipe(p).muted)};
  font-size: clamp(0.9375rem, 2.2cqh, ${theme.typography.fontSize.lg});
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
  overflow-wrap: anywhere;
  @container (max-width: ${theme.breakpoints.md}) {
    margin-top: ${theme.spacing[1]};
    font-size: ${theme.typography.fontSize.sm};
  }
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

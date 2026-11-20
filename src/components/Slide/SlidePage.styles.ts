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
  padding: calc(
      ${(p) => recipe(p).headerHeight} + env(safe-area-inset-top, 0px) +
        ${theme.spacing[2]}
    )
    max(${theme.spacing[8]}, env(safe-area-inset-right, 0px))
    calc(${theme.spacing[8]} + env(safe-area-inset-bottom, 0px))
    max(${theme.spacing[8]}, env(safe-area-inset-left, 0px));
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseForeground : recipe(p).foreground)};
  background: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseCanvas : recipe(p).canvas)};
  font-family: ${theme.typography.fontFamily.sans};
  line-height: ${(p) => recipe(p).pageLineHeight};
  @container (max-width: ${(p) => recipe(p).compactBreakpoint}) {
    padding: calc(
        ${(p) => recipe(p).headerHeight} + env(safe-area-inset-top, 0px) +
          ${theme.spacing[2]}
      )
      max(${theme.spacing[4]}, env(safe-area-inset-right, 0px))
      calc(${theme.spacing[4]} + env(safe-area-inset-bottom, 0px))
      max(${theme.spacing[4]}, env(safe-area-inset-left, 0px));
  }
  @container (max-height:${theme.viewportHeights.lg}) {
    padding-block: calc(
        ${(p) => recipe(p).headerHeight} + env(safe-area-inset-top, 0px) +
          ${theme.spacing[1]}
      )
      calc(${theme.spacing[3]} + env(safe-area-inset-bottom, 0px));
  }
`

export const Content = styled.div<{
  $width: NonNullable<SlidePageProps['width']>
  $layout: NonNullable<SlidePageProps['layout']>
}>`
  display: ${(p) => (p.$layout === 'split' ? 'grid' : 'flex')};
  flex-direction: column;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.875fr);
  align-items: ${(p) => (p.$layout === 'split' ? 'center' : 'stretch')};
  gap: ${(p) => (p.$layout === 'split' ? `clamp(${theme.spacing[6]}, 4cqw, ${theme.spacing[12]})` : '0')};
  width: 100%;
  min-width: 0;
  max-width: ${(p) => (p.$layout === 'split' ? recipe(p).introductionWidth : p.$width === 'expanded' ? recipe(p).introductionWidth : p.$width === 'focused' ? recipe(p).focusedWidth : p.$width === 'standard' ? recipe(p).standardWidth : p.$width === 'reading' ? recipe(p).readingWidth : p.$width === 'exercise' ? recipe(p).exerciseWidth : p.$width === 'conversation' ? recipe(p).conversationWidth : recipe(p).wideWidth)};
  margin-inline: auto;
  > [data-slide-introduction] {
    min-width: 0;
    > header {
      margin-bottom: 0;
    }
  }
  @container (max-width: ${(p) => recipe(p).compactBreakpoint}) {
    grid-template-columns: minmax(0, 1fr);
  }
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
  @container (max-width: ${(p) => recipe(p).compactBreakpoint}) {
    margin-bottom: ${(p) => (p.$lead ? `clamp(${theme.spacing[2]}, 2.2cqh, ${theme.spacing[6]})` : theme.spacing[5])};
  }
  @container (max-height: ${theme.viewportHeights.lg}) {
    margin-bottom: ${theme.spacing[4]};
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
  font-family: ${theme.typography.fontFamily.sans};
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
  @container (max-width: ${(p) => recipe(p).compactBreakpoint}) {
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
  @container (max-width: ${(p) => recipe(p).compactBreakpoint}) {
    font-size: 1.375rem;
  }
  @container (max-height:${theme.viewportHeights.lg}) {
    font-size: 1.625rem;
  }
`

export const Instruction = styled.div<{ $tone: 'default' | 'inverse' }>`
  margin-top: ${theme.spacing[2]};
  color: ${(p) => (p.$tone === 'inverse' ? recipe(p).inverseMuted : recipe(p).muted)};
  font-size: clamp(0.9375rem, 2.2cqh, ${theme.typography.fontSize.lg});
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
  overflow-wrap: anywhere;
  @container (max-width: ${(p) => recipe(p).compactBreakpoint}) {
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

/** Dialogue and its comprehension stay together; neither column has an inner scrollbar. */
export const Conversation = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr);
  gap: ${theme.spacing[8]};
  align-items: start;
  min-width: 0;
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${theme.spacing[5]};
  }
`
export const ConversationText = styled.div`
  min-width: 0;
`
export const Questions = styled.aside`
  min-width: 0;
  display: grid;
  gap: ${theme.spacing[3]};
  align-content: start;
  font-family: ${theme.typography.fontFamily.sans};
`
export const QuestionsTitle = styled.h3`
  margin: 0;
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.3;
  color: inherit;
`

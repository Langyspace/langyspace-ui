import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import type { MessageThreadHeaderLeadingActionDisplay } from './MessageThreadHeader.types'

export const Header = styled.header.withConfig({
  componentId: 'lsui-sc-message-thread-header',
})`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: ${theme.spacing[3]};
`

const compactOnly = css`
  display: none;

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    display: inline-flex;
  }
`

export const Action = styled.div<{
  $display?: MessageThreadHeaderLeadingActionDisplay
}>`
  display: inline-flex;
  min-width: 0;
  flex: 0 0 auto;
  align-items: center;
  ${({ $display }) => $display === 'compact' && compactOnly}
`

export const Identity = styled.div`
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  align-items: center;
  gap: ${theme.spacing[3]};
`

export const Text = styled.div`
  min-width: 0;
  flex: 1 1 auto;
`

export const Title = styled.h2`
  overflow: hidden;
  margin: 0;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Subtitle = styled.p`
  overflow: hidden;
  margin: ${theme.spacing[1]} 0 0;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  line-height: ${theme.typography.lineHeight.snug};
  text-overflow: ellipsis;
  white-space: nowrap;
`

import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Header = styled.header.withConfig({
  componentId: 'lsui-sc-quiz-session-header',
})`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]} ${theme.spacing[4]} ${theme.spacing[2]};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-right: ${theme.spacing[2]};
    padding-left: ${theme.spacing[2]};
  }
`

export const BackButton = styled(Pressable)`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  border-radius: ${theme.radius.circle};
  color: ${theme.colors.text.primary};
  background: ${theme.semantic.background.muted};
  transition:
    transform 0.12s ease,
    background 0.15s ease;

  &:active {
    transform: scale(0.92);
    background: ${theme.semantic.background.surfaceSubtle};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${theme.shadows.focus};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const ProgressArea = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  color: ${theme.colors.text.primary};
  text-overflow: ellipsis;
  white-space: nowrap;
`

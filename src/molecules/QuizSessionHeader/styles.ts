import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
import { quizRecipe } from '../../foundations/quizRecipe'
import { Pressable } from '../../primitives/Pressable'

export const Header = styled.header.withConfig({
  componentId: 'lsui-sc-quiz-session-header',
})`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  padding: ${tokens.spacing[4]} ${tokens.spacing[4]} ${tokens.spacing[2]};

  @media (max-width: ${quizRecipe.breakpoints.sm}) {
    padding-right: ${tokens.spacing[2]};
    padding-left: ${tokens.spacing[2]};
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
  border-radius: ${quizRecipe.radius.circle};
  color: ${tokens.color.content.default};
  background: ${tokens.color.surface.muted};
  transition:
    transform 0.12s ease,
    background 0.15s ease;

  &:active {
    transform: scale(0.92);
    background: ${tokens.color.surface.subtle};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${quizRecipe.shadows.focus};
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
  gap: ${tokens.spacing[1]};
`

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${tokens.spacing[2]};
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
`

export const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  color: ${tokens.color.content.default};
  text-overflow: ellipsis;
  white-space: nowrap;
`

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { quizRecipe } from '../../foundations/quizRecipe'
import { Pressable } from '../Pressable'

export const Header = styled.header.withConfig({
  componentId: 'lsui-sc-quiz-session-header',
})`
  display: flex;
  align-items: center;
  gap: ${token.spacing3};
  padding: ${token.spacing4} ${token.spacing4} ${token.spacing2};

  @media (max-width: ${quizRecipe.breakpoints.sm}) {
    padding-right: ${token.spacing2};
    padding-left: ${token.spacing2};
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
  color: ${token.colorContentDefault};
  background: ${token.colorSurfaceMuted};
  transition:
    transform 0.12s ease,
    background 0.15s ease;

  &:active {
    transform: scale(0.92);
    background: ${token.colorSurfaceSubtle};
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
  gap: ${token.spacing1};
`

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${token.spacing2};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
`

export const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  color: ${token.colorContentDefault};
  text-overflow: ellipsis;
  white-space: nowrap;
`

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
import { quizRecipe } from '../../foundations/quizRecipe'
export const Option = styled(Pressable).withConfig({
  componentId: 'lsui-sc-quiz-option',
})<{ $state: 'default' | 'correct' | 'wrong' | 'dim' }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${quizRecipe.spacing[3]};
  width: 100%;
  min-height: 3.875rem;
  padding: ${quizRecipe.spacing[3]} ${quizRecipe.spacing[4]};
  border: 1.5px solid
    ${({ $state }) =>
      $state === 'correct'
        ? '#16a34a'
        : $state === 'wrong'
          ? '#dc2626'
          : '#d9d9d6'};
  border-radius: ${quizRecipe.radius.xl};
  background: ${({ $state }) =>
    $state === 'correct'
      ? '#dcfce7'
      : $state === 'wrong'
        ? '#fef2f2'
        : quizRecipe.colors.surface.canvas};
  color: ${token.colorContentDefault};
  cursor: pointer;
  text-align: left;
  opacity: ${({ $state }) => ($state === 'dim' ? 0.54 : 1)};
  transition:
    border-color 0.14s ease,
    background 0.14s ease,
    transform 0.14s ease,
    opacity 0.14s ease;

  .optionText {
    flex: 1;
    min-width: 0;
    color: ${({ $state }) =>
      $state === 'correct'
        ? '#166534'
        : $state === 'wrong'
          ? '#b91c1c'
          : '#0a0a0a'};
    font-size: ${quizRecipe.typography.fontSize.md};
    font-weight: ${quizRecipe.typography.fontWeight.semibold};
    overflow-wrap: anywhere;
  }

  .mark {
    margin-left: auto;
    width: 1.625rem;
    height: 1.625rem;
    border-radius: ${quizRecipe.radius.circle};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .mark.correct {
    background: ${quizRecipe.colors.feedback.success};
    color: ${quizRecipe.colors.text.inverse};
  }

  .mark.wrong {
    background: ${quizRecipe.colors.feedback.danger};
    color: ${quizRecipe.colors.text.inverse};
  }

  &:not(:disabled):hover {
    border-color: ${token.colorSurfaceBorderStrong};
    transform: translateY(-1px);

    .letter {
      color: ${quizRecipe.colors.text.inverse};
      background: ${token.colorNeutral950};
    }
  }

  &:not(:disabled):active {
    transform: scale(0.99);
  }

  &:disabled {
    cursor: default;
    transform: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${quizRecipe.shadows.focus};
  }

  @media (max-width: ${quizRecipe.breakpoints.sm}) {
    min-height: 3.5rem;
    padding: ${quizRecipe.spacing[3]} ${quizRecipe.spacing[3]};
  }
`

export const Letter = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${quizRecipe.radius.md};
  color: ${token.colorContentMuted};
  background: ${token.colorNeutral50};
  font-size: ${quizRecipe.typography.fontSize.sm};
  font-weight: ${quizRecipe.typography.fontWeight.bold};
  flex-shrink: 0;
  transition:
    color 0.14s ease,
    background 0.14s ease;

  @media (max-width: ${quizRecipe.breakpoints.sm}) {
    width: 1.75rem;
    height: 1.75rem;
  }
`

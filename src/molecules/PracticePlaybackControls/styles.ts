import { css, styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
import { playbackRecipe } from './recipe'
export const ControlCluster = styled.div.withConfig({
  componentId: 'lsui-sc-practice-playback-controls',
})`
  display: flex;
  width: min(22rem, 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${() => playbackRecipe.spacing[4]};

  @media (max-width: ${() => playbackRecipe.breakpoints.sm}) {
    width: 100%;
    gap: ${() => playbackRecipe.spacing[4]};
  }

  @media (min-width: ${() => playbackRecipe.breakpoints.sm}) and (max-width: ${() =>
    playbackRecipe.breakpoints.mobileShell}) and (min-height: 761px) {
    width: min(28rem, 100%);
  }
`

export const PlaybackControls = styled.div<{ $withSkip?: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ $withSkip }) => ($withSkip ? '3rem auto 3rem' : 'auto')};
  align-items: center;
  justify-content: center;
  gap: ${() => playbackRecipe.spacing[3]};

  ${({ $withSkip }) =>
    $withSkip
      ? css`
          &::before {
            display: block;
            width: 3rem;
            height: 3rem;
            content: '';
          }
        `
      : null}

  @media (min-width: ${() => playbackRecipe.breakpoints.sm}) and (max-width: ${() =>
    playbackRecipe.breakpoints.mobileShell}) and (min-height: 761px) {
    grid-template-columns: ${({ $withSkip }) => ($withSkip ? '3.5rem auto 3.5rem' : 'auto')};

    ${({ $withSkip }) =>
      $withSkip
        ? css`
            &::before {
              width: 3.5rem;
              height: 3.5rem;
            }
          `
        : null}
  }
`

export const PlayButton = styled(Pressable)<{ $playing?: boolean }>`
  position: relative;
  display: inline-flex;
  width: 4.25rem;
  height: 4.25rem;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${() => playbackRecipe.radius.circle};
  color: ${() => playbackRecipe.colors.text.inverse};
  background: ${() => playbackRecipe.colors.text.primary};
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.2);
  transition: transform 0.14s ease;

  &:active {
    transform: scale(0.93);
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${() => playbackRecipe.shadows.focus};
  }

  svg {
    margin-left: ${({ $playing }) => ($playing ? '0' : '0.25rem')};
  }

  @media (min-width: ${() => playbackRecipe.breakpoints.sm}) and (max-width: ${() =>
    playbackRecipe.breakpoints.mobileShell}) and (min-height: 761px) {
    width: 5.25rem;
    height: 5.25rem;

    svg {
      width: 2.125rem;
      height: 2.125rem;
    }
  }
`

export const SkipButton = styled(Pressable)`
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${() => playbackRecipe.colors.border.default};
  border-radius: ${() => playbackRecipe.radius.circle};
  color: ${() => playbackRecipe.colors.text.primary};
  background: ${() => playbackRecipe.colors.surface.canvas};
  box-shadow: ${() => playbackRecipe.shadows.xs};
  cursor: pointer;
  transition:
    background 0.14s ease,
    border-color 0.14s ease,
    transform 0.14s ease;

  &:hover {
    border-color: ${() => playbackRecipe.colors.text.primary};
    background: ${() => playbackRecipe.colors.surface.subtle};
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${() => playbackRecipe.shadows.focus};
  }

  @media (min-width: ${() => playbackRecipe.breakpoints.sm}) and (max-width: ${() =>
    playbackRecipe.breakpoints.mobileShell}) and (min-height: 761px) {
    width: 3.5rem;
    height: 3.5rem;

    svg {
      width: 1.625rem;
      height: 1.625rem;
    }
  }
`

export const ControlRow = styled.div`
  display: grid;
  width: 100%;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  justify-content: center;
  gap: ${() => playbackRecipe.spacing[3]};

  @media (max-width: ${() => playbackRecipe.breakpoints.sm}) {
    width: min(20rem, 100%);
    grid-template-columns: 1fr;
  }
`

export const SpeedControl = styled.div`
  display: inline-flex;
  width: 100%;
  flex: 1 1 auto;
  gap: 0.1875rem;
  padding: 0.25rem;
  border-radius: ${() => playbackRecipe.radius.pill};
  background: ${() => playbackRecipe.colors.surface.subtle};
`

export const SpeedButton = styled(Pressable)`
  min-width: 0;
  min-height: 2.125rem;
  flex: 1;
  padding-right: ${() => playbackRecipe.spacing[2]};
  padding-left: ${() => playbackRecipe.spacing[2]};
  border: none;
  border-radius: ${() => playbackRecipe.radius.pill};
  color: ${() => playbackRecipe.colors.text.muted};
  background: transparent;
  font-size: ${() => playbackRecipe.typography.fontSize.xs};
  font-weight: ${() => playbackRecipe.typography.fontWeight.semibold};

  &.active {
    color: ${() => playbackRecipe.colors.text.primary};
    background: ${() => playbackRecipe.colors.surface.canvas};
    box-shadow: ${() => playbackRecipe.shadows.xs};
  }

  @media (min-width: ${() => playbackRecipe.breakpoints.sm}) and (max-width: ${() =>
    playbackRecipe.breakpoints.mobileShell}) and (min-height: 761px) {
    min-height: 2.5rem;
    font-size: ${() => playbackRecipe.typography.fontSize.sm};
  }
`

export const TranslationToggle = styled(Pressable)<{ $active?: boolean }>`
  min-height: 2.625rem;
  flex: 0 0 auto;
  padding-right: ${() => playbackRecipe.spacing[3]};
  padding-left: ${() => playbackRecipe.spacing[3]};
  border: 1px solid
    ${({ $active }) => ($active ? playbackRecipe.colors.text.primary : playbackRecipe.colors.border.default)};
  border-radius: ${() => playbackRecipe.radius.pill};
  color: ${({ $active }) => ($active ? playbackRecipe.colors.text.inverse : playbackRecipe.colors.text.muted)};
  background: ${({ $active }) =>
    $active
      ? playbackRecipe.colors.text.primary
      : playbackRecipe.colors.surface.canvas};
  font-size: ${() => playbackRecipe.typography.fontSize.xs};
  font-weight: ${() => playbackRecipe.typography.fontWeight.semibold};

  @media (min-width: ${() => playbackRecipe.breakpoints.sm}) and (max-width: ${() =>
    playbackRecipe.breakpoints.mobileShell}) and (min-height: 761px) {
    min-height: 3rem;
    padding-right: ${() => playbackRecipe.spacing[4]};
    padding-left: ${() => playbackRecipe.spacing[4]};
    font-size: ${() => playbackRecipe.typography.fontSize.sm};
  }
`

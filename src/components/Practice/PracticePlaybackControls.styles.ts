import { css, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const ControlCluster = styled.div.withConfig({
  componentId: 'lsui-sc-practice-playback-controls',
})`
  display: flex;
  width: min(22rem, 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    gap: ${theme.spacing[4]};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    width: min(28rem, 100%);
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.xs}) {
    gap: ${theme.spacing[2]};
  }
`

export const PlaybackControls = styled.div<{ $withSkip?: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ $withSkip }) => ($withSkip ? '3rem auto 3rem' : 'auto')};
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[3]};

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

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
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
  border-radius: ${theme.radius.circle};
  color: ${theme.colors.text.inverse};
  background: ${theme.colors.text.primary};
  box-shadow: 0 8px 22px ${alpha(theme.colors.palette.black, 0.2)};
  transition: transform 0.14s ease;

  &:active {
    transform: scale(0.93);
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${theme.shadows.focus};
  }

  svg {
    margin-left: ${({ $playing }) => ($playing ? '0' : '0.25rem')};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
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
  border: 1px solid ${theme.colors.border.default};
  border-radius: ${theme.radius.circle};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.surface.canvas};
  box-shadow: ${theme.shadows.xs};
  cursor: pointer;
  transition:
    background 0.14s ease,
    border-color 0.14s ease,
    transform 0.14s ease;

  &:hover {
    border-color: ${theme.colors.text.primary};
    background: ${theme.colors.surface.subtle};
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${theme.shadows.focus};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
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
  gap: ${theme.spacing[3]};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: min(20rem, 100%);
    grid-template-columns: 1fr;
  }
`

export const SpeedControl = styled.div`
  display: inline-flex;
  width: 100%;
  flex: 1 1 auto;
  gap: 0.1875rem;
  padding: ${theme.spacing[1]};
  border-radius: ${theme.radius.pill};
  background: ${theme.colors.surface.subtle};
`

export const SpeedButton = styled(Pressable)`
  min-width: 0;
  min-height: 2.125rem;
  flex: 1;
  padding-right: ${theme.spacing[2]};
  padding-left: ${theme.spacing[2]};
  border: none;
  border-radius: ${theme.radius.pill};
  color: ${theme.colors.text.muted};
  background: transparent;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};

  &.active {
    color: ${theme.colors.text.primary};
    background: ${theme.colors.surface.canvas};
    box-shadow: ${theme.shadows.xs};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    min-height: 2.5rem;
    font-size: ${theme.typography.fontSize.sm};
  }
`

export const TranslationToggle = styled(Pressable)<{ $active?: boolean }>`
  min-height: 2.625rem;
  flex: 0 0 auto;
  padding-right: ${theme.spacing[3]};
  padding-left: ${theme.spacing[3]};
  border: 1px solid
    ${({ $active }) => ($active ? theme.colors.text.primary : theme.colors.border.default)};
  border-radius: ${theme.radius.pill};
  color: ${({ $active }) => ($active ? theme.colors.text.inverse : theme.colors.text.muted)};
  background: ${({ $active }) =>
    $active ? theme.colors.text.primary : theme.colors.surface.canvas};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    min-height: 3rem;
    padding-right: ${theme.spacing[4]};
    padding-left: ${theme.spacing[4]};
    font-size: ${theme.typography.fontSize.sm};
  }
`

import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { Pressable } from '../Pressable'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Columns).withConfig({
  componentId: 'lsui-sc-role-play-exercise',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Scene = styled(Common.Surface)<{
  $plain?: boolean
  $compact?: boolean
  $imageFit: 'contain' | 'cover'
}>`
  ${(p) =>
    p.$compact
      ? css`
          padding: ${theme.spacing[3]};
          gap: ${theme.spacing[2]};
        `
      : undefined}
  ${(p) =>
    p.$plain
      ? css`
          padding: 0;
          border: 0;
          background: transparent;
        `
      : undefined}
  img {
    width: 100%;
    max-height: ${(p) => (p.$compact ? 'clamp(8rem, 24cqh, 12rem)' : '300px')};
    object-fit: ${(p) => p.$imageFit};
    border-radius: ${theme.radius.xl};
  }
  > p {
    font-size: ${theme.typography.fontSize.lg};
    margin: 0;
  }
`
export const Step = styled(Pressable)<{
  $done: boolean
  $compact: boolean
  $tracker?: boolean
  $current?: boolean
}>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  border: 1.5px solid
    ${(p) => (p.$done ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : Common.recipe(p).border)};
  border-radius: ${theme.radius.xl};
  padding: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])}
    ${theme.spacing[4]};
  background: ${(p) => (p.$done ? (resolveTheme(p).semantic?.status.success.background ?? theme.semantic.status.success.background) : Common.recipe(p).surface)};
  color: ${(p) => (p.$done ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : Common.recipe(p).foreground)};
  font: inherit;
  font-size: ${(p) => (p.$compact ? theme.typography.fontSize.sm : 'inherit')};
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  min-height: 48px;
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
  ${(p) =>
    p.$tracker
      ? css`
          min-height: 44px;
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
          font-weight: ${theme.typography.fontWeight.semibold};
          border-color: ${p.$current ? resolveSlideTheme(p).indicator : p.$done ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : resolveSlideTheme(p).border};
          > span:first-child {
            width: ${theme.spacing[6]};
            height: ${theme.spacing[6]};
            border: 2px solid
              ${p.$current ? resolveSlideTheme(p).indicator : p.$done ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : resolveSlideTheme(p).border};
            border-radius: ${theme.radius.sm};
            background: transparent;
            color: ${p.$current ? resolveSlideTheme(p).indicator : p.$done ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : resolveSlideTheme(p).muted};
          }
        `
      : undefined}
`
export const TrackerHeader = styled(Common.Row)`
  > p:first-child {
    flex: 1;
  }
  > [role='status'] {
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${(p) => resolveSlideTheme(p).foreground};
  }
`

export const Instructions = styled.ol`
  display: grid;
  gap: ${theme.spacing[4]};
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    gap: ${theme.spacing[3]};
    font-weight: ${theme.typography.fontWeight.semibold};
  }
`

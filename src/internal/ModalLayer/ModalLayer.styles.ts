import { createGlobalStyle, css, styled } from 'styled-components'
import type { OverlayKind, OverlaySize } from './ModalLayer.types'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import type { ExecutionContext } from 'styled-components'
import { cssIdSelector } from '../cssIdSelector'
import { modalScrollLockAttribute } from './stack'

interface ModalPresentationStyleProps {
  $backdropId: string
  $order: number | null
}

// Mounted only in the public client portal. Ordinary host inline overflow stays untouched.
export const Presentation = createGlobalStyle<ModalPresentationStyleProps>`
  body[${modalScrollLockAttribute}='locked'] {
    overflow: hidden !important;
  }

  ${({ $backdropId }) => cssIdSelector($backdropId)} {
    z-index: ${({ $order, ...context }) => resolveTheme(context).zIndex.overlay + ($order ?? 0) * 2};
  }
`

type KindContext = ExecutionContext & { $kind: OverlayKind }
const dialogTokens = (context: ExecutionContext) => resolveTheme(context).dialog
const isDialog = (context: KindContext) => context.$kind === 'dialog'
const mobileBreakpoint = (context: KindContext) =>
  isDialog(context)
    ? dialogTokens(context).mobileBreakpoint
    : resolveTheme(context).breakpoints.sm

const drawerWidths = { lg: '44rem', md: '36rem', sm: '24rem' } satisfies Record<
  OverlaySize,
  string
>

export const Backdrop = styled.div.withConfig({
  componentId: 'lsui-sc-modal-backdrop',
})<{ $kind: OverlayKind }>`
  position: fixed;
  z-index: ${(context) => resolveTheme(context).zIndex.overlay};
  inset: 0;
  display: grid;
  align-items: ${({ $kind }) => ($kind === 'dialog' ? 'center' : 'stretch')};
  justify-items: ${({ $kind }) => ($kind === 'dialog' ? 'center' : 'end')};
  padding: ${(context) => (isDialog(context) ? dialogTokens(context).backdrop.padding : '0')};
  background: ${(context) => (isDialog(context) ? dialogTokens(context).backdrop.background : resolveTheme(context).semantic.background.overlay)};
  backdrop-filter: ${(context) => (isDialog(context) ? dialogTokens(context).backdrop.filter : 'blur(2px)')};
  @media (max-width: ${mobileBreakpoint}) {
    align-items: end;
    justify-items: stretch;
    padding: 0;
  }
`

export const Panel = styled.div.withConfig({
  componentId: 'lsui-sc-modal-panel',
})<{ $kind: OverlayKind; $size: OverlaySize }>`
  box-sizing: border-box;
  position: relative;
  display: grid;
  width: min(
    ${(context) => (isDialog(context) ? dialogTokens(context).widths[context.$size] : drawerWidths[context.$size])},
    100%
  );
  min-width: 0;
  max-height: ${(context) => (isDialog(context) ? dialogTokens(context).panel.maxHeight : '100dvh')};
  grid-template-rows: auto minmax(0, 1fr) auto;
  border: ${(context) => (isDialog(context) ? dialogTokens(context).panel.border : `1px solid ${resolveTheme(context).semantic.border.default}`)};
  background: ${(context) => (isDialog(context) ? dialogTokens(context).panel.background : resolveTheme(context).colors.palette.white)};
  box-shadow: ${(context) => (isDialog(context) ? dialogTokens(context).panel.shadow : resolveTheme(context).shadows.drawer)};
  outline: none;
  ${(context) =>
    isDialog(context)
      ? css`
          border-radius: ${dialogTokens(context).panel.radius};
          color: ${dialogTokens(context).panel.color};
          font-family: ${dialogTokens(context).panel.fontFamily};
          font-size: ${dialogTokens(context).panel.fontSize};
          line-height: ${dialogTokens(context).panel.lineHeight};
        `
      : css`
          height: 100dvh;
          border-radius: ${resolveTheme(context).radius.card} 0 0
            ${resolveTheme(context).radius.card};
        `}
  &:focus-visible {
    box-shadow: ${(context) => resolveTheme(context).shadows.focusHalo};
  }
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    ${(context) =>
      isDialog(context)
        ? css`
            max-height: ${dialogTokens(context).panel.mobileMaxHeight};
            border-radius: ${dialogTokens(context).panel.mobileRadius};
          `
        : css`
            height: 100dvh;
            max-height: 100dvh;
            border-right: 0;
            border-left: 0;
            border-radius: 0;
          `}
  }
`

export const Header = styled.header<{ $kind: OverlayKind }>`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${(context) => (isDialog(context) ? dialogTokens(context).header.gap : resolveTheme(context).spacing[4])};
  border-bottom: ${(context) => (isDialog(context) ? dialogTokens(context).header.borderBottom : `1px solid ${resolveTheme(context).colors.border.subtle}`)};
  padding: ${(context) => (isDialog(context) ? dialogTokens(context).header.padding : resolveTheme(context).spacing[5])};
  ${(context) =>
    isDialog(context) &&
    css`
      text-align: ${dialogTokens(context).header.textAlign};
      > :last-child {
        position: ${dialogTokens(context).closeControl.position};
        top: ${dialogTokens(context).closeControl.top};
        right: ${dialogTokens(context).closeControl.right};
      }
    `}
  @media (max-width:${mobileBreakpoint}) {
    padding-top: ${(context) => (isDialog(context) ? dialogTokens(context).header.mobilePaddingTop : `calc(${resolveTheme(context).spacing[5]} + env(safe-area-inset-top))`)};
  }
`
export const Heading = styled.div<{ $kind: OverlayKind }>`
  min-width: 0;
  ${(context) =>
    isDialog(context) &&
    css`
      width: ${dialogTokens(context).header.headingWidth};
    `}
`
export const Title = styled.h2<{ $kind: OverlayKind }>`
  margin: 0;
  color: ${(context) => (isDialog(context) ? dialogTokens(context).title.color : resolveTheme(context).colors.text.primary)};
  font-size: ${(context) => (isDialog(context) ? dialogTokens(context).title.fontSize : resolveTheme(context).typography.fontSize.xl)};
  font-weight: ${(context) => (isDialog(context) ? dialogTokens(context).title.fontWeight : resolveTheme(context).typography.fontWeight.bold)};
  line-height: ${(context) => (isDialog(context) ? dialogTokens(context).title.lineHeight : resolveTheme(context).typography.lineHeight.snug)};
  overflow-wrap: anywhere;
  ${(context) =>
    isDialog(context) &&
    css`
      font-family: ${dialogTokens(context).title.fontFamily};
      letter-spacing: ${dialogTokens(context).title.letterSpacing};
    `}
`
export const Description = styled.p<{ $kind: OverlayKind }>`
  margin: ${(context) => (isDialog(context) ? dialogTokens(context).description.marginTop : resolveTheme(context).spacing[1])}
    0 0;
  color: ${(context) => (isDialog(context) ? dialogTokens(context).description.color : resolveTheme(context).colors.text.muted)};
  font-size: ${(context) => (isDialog(context) ? dialogTokens(context).description.fontSize : resolveTheme(context).typography.fontSize.sm)};
  line-height: ${(context) => (isDialog(context) ? dialogTokens(context).description.lineHeight : resolveTheme(context).typography.lineHeight.normal)};
  overflow-wrap: anywhere;
`
export const Body = styled.div<{ $kind: OverlayKind }>`
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: ${(context) => (isDialog(context) ? dialogTokens(context).body.padding : resolveTheme(context).spacing[5])};
  overscroll-behavior: contain;
  @media (max-width: ${mobileBreakpoint}) {
    ${(context) =>
      isDialog(context) &&
      css`
        padding-bottom: ${dialogTokens(context).body.mobilePaddingBottom};
      `}
  }
`
export const Footer = styled.footer`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${(context) => resolveTheme(context).spacing[2]};
  border-top: 1px solid
    ${(context) => resolveTheme(context).colors.border.subtle};
  padding: ${(context) => resolveTheme(context).spacing[4]}
    ${(context) => resolveTheme(context).spacing[5]};
  @media (max-width: ${(context) => resolveTheme(context).breakpoints.sm}) {
    align-items: stretch;
    flex-direction: column;
    padding-bottom: calc(
      ${(context) => resolveTheme(context).spacing[4]} +
        env(safe-area-inset-bottom)
    );
    > * {
      width: 100%;
    }
  }
`

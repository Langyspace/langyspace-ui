import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { OverlayKind, OverlaySize } from './types'

const dialogWidths = {
  lg: '42.5rem',
  md: '31rem',
  sm: '24rem',
} satisfies Record<OverlaySize, string>

const drawerWidths = {
  lg: '44rem',
  md: '36rem',
  sm: '24rem',
} satisfies Record<OverlaySize, string>

export const Backdrop = styled.div.withConfig({
  componentId: 'lsui-sc-modal-backdrop',
})<{ $kind: OverlayKind }>`
  position: fixed;
  z-index: 800;
  inset: 0;
  display: grid;
  align-items: ${({ $kind }) => ($kind === 'dialog' ? 'center' : 'stretch')};
  justify-items: ${({ $kind }) => ($kind === 'dialog' ? 'center' : 'end')};
  padding: ${({ $kind }) => ($kind === 'dialog' ? token.spacing5 : '0')};
  background: ${token.colorOverlayDefault};
  backdrop-filter: blur(2px);

  @media (max-width: 640px) {
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
    ${({ $kind, $size }) => ($kind === 'dialog' ? dialogWidths[$size] : drawerWidths[$size])},
    100%
  );
  min-width: 0;
  max-height: ${({ $kind }) => ($kind === 'dialog' ? 'calc(100dvh - 2.5rem)' : '100dvh')};
  grid-template-rows: auto minmax(0, 1fr) auto;
  border: 1px solid ${token.colorSurfaceBorderDefault};
  background: ${token.colorNeutral0};
  box-shadow: ${({ $kind }) => ($kind === 'dialog' ? token.shadowPopover : token.shadowDrawer)};
  outline: none;

  ${({ $kind }) =>
    $kind === 'dialog'
      ? css`
          border-radius: ${token.radiusCard};
        `
      : css`
          height: 100dvh;
          border-radius: ${token.radiusCard} 0 0 ${token.radiusCard};
        `}

  &:focus-visible {
    box-shadow: ${token.shadowFocus};
  }

  @media (max-width: 640px) {
    width: 100%;

    ${({ $kind }) =>
      $kind === 'drawer'
        ? css`
            height: 100dvh;
            max-height: 100dvh;
            border-right: 0;
            border-left: 0;
            border-radius: 0;
          `
        : css`
            max-height: calc(100dvh - ${token.spacing4});
            border-radius: ${token.radiusCard} ${token.radiusCard} 0 0;
          `}
  }
`

export const Header = styled.header`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${token.spacing4};
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  padding: ${token.spacing5};

  @media (max-width: 640px) {
    padding-top: calc(${token.spacing5} + env(safe-area-inset-top));
  }
`

export const Heading = styled.div`
  min-width: 0;
`

export const Title = styled.h2`
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeXl};
  font-weight: ${token.typographyFontWeightBold};
  line-height: ${token.typographyLineHeightSnug};
  overflow-wrap: anywhere;
`

export const Description = styled.p`
  margin: ${token.spacing1} 0 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
  overflow-wrap: anywhere;
`

export const Body = styled.div`
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: ${token.spacing5};
  overscroll-behavior: contain;
`

export const Footer = styled.footer`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${token.spacing2};
  border-top: 1px solid ${token.colorSurfaceBorderSubtle};
  padding: ${token.spacing4} ${token.spacing5};

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
    padding-bottom: calc(${token.spacing4} + env(safe-area-inset-bottom));

    > * {
      width: 100%;
    }
  }
`

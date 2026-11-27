import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'
import { Pressable } from '../Pressable'
import { FlashcardFrame } from './FlashcardFrame'

export const Root = styled(FlashcardFrame).withConfig({
  componentId: 'lsui-sc-flashcard-session',
})``

export const Header = styled.header.withConfig({
  componentId: 'lsui-sc-flashcard-session-header',
})`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: 1rem 1.125rem 0.625rem;
  @media (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.lg}) {
    gap: ${theme.spacing[2]};
    padding: ${theme.spacing.responsive.compactBlock.sm} ${theme.spacing[4]}
      ${theme.spacing[2]};
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
  color: var(--fc-ink);
  background: var(--fc-bg-soft);
  transition:
    transform 0.12s ease,
    background 0.15s ease;
  &:active {
    transform: scale(0.92);
    background: ${theme.colors.palette.neutral[200]};
  }
`
export const Picture = styled.img`
  position: relative;
  z-index: 1;
  width: var(--fc-card-image-size);
  height: var(--fc-card-image-size);
  object-fit: contain;
  filter: drop-shadow(0 8px 14px ${alpha(theme.colors.palette.black, 0.1)});
  pointer-events: none;
  user-select: none;
`
export const RegionPicture = styled.div`
  position: relative;
  z-index: 1;
  width: var(--fc-card-image-size);
  height: var(--fc-card-image-size);
  pointer-events: none;
  user-select: none;
  > * {
    width: 100%;
    height: 100%;
  }
`
export const Footer = styled.footer`
  display: flex;
  min-height: var(--fc-footer-min-height);
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: flex-end;
  padding-block: var(--fc-footer-padding-block);
  padding-inline: var(--fc-footer-padding-inline);
`
export const RateQuestion = styled.div`
  margin-bottom: var(--fc-rate-question-margin);
  color: var(--fc-muted);
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-align: center;
`
export const RateRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--fc-rate-row-gap);
`

import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { FlashcardFrame } from '../../../src/components/Flashcard/FlashcardFrame'
import { ShadowingPanel } from '../../../src/components/Shadowing/ShadowingPanel'

// Same session owners and header recipe as Student; domain scheduling/progress stays in Student.
export const Cards = styled(FlashcardFrame)`
  height: 100dvh;
  min-height: 0;
  overflow: hidden;
  --fc-card-min-height: 20.5rem;
  --fc-card-fluid-height: 50svh;
  --fc-card-max-height: 26rem;
  --fc-stage-padding-block: 0.125rem 0.25rem;
  --fc-footer-min-height: 0;
  --fc-footer-padding-block: 0.625rem 0.875rem;
  --fc-image-panel-size: clamp(7.5rem, 22svh, 10.25rem);
  --fc-front-padding: 1rem 1rem 0.875rem;
  --fc-back-padding: 1rem;
`
export const Shadow = styled(ShadowingPanel)`
  height: 100dvh;
  min-height: 0;
  max-height: none;
`
export const Header = styled.header`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]};
`
export const Picture = styled.img`
  width: 100%;
  height: var(--fc-image-panel-size);
  object-fit: contain;
`
export const Rating = styled.footer`
  display: grid;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  text-align: center;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
`
export const RatingRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
`
export const Error = styled.p`
  padding: ${theme.spacing[2]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.feedback.danger};
`
export const Assignment = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
  p {
    margin: 0;
  }
  strong {
    font-weight: ${theme.typography.fontWeight.bold};
  }
`

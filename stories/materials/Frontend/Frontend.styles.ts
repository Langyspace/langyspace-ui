import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { Stack, Surface, Hero } from '../shared/Lesson.styles'
export * from '../shared/Lesson.styles'
export const Profile = styled(Surface)`
  img {
    width: ${theme.spacing[12]};
    height: ${theme.spacing[12]};
    object-fit: cover;
    border-radius: ${theme.radius.circle};
  }
  p {
    margin: 0;
    line-height: 1.4;
  }
`
export const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: ${theme.spacing[2]};
  li {
    display: flex;
    align-items: center;
    gap: ${theme.spacing[2]};
  }
`
export const Artwork = styled.img`
  display: block;
  width: 100%;
  max-height: 18rem;
  object-fit: contain;
  border-radius: ${theme.radius.lg};
`
export const Mini = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  width: 8rem;
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: ${theme.radius.sm};
  }
  @container (max-width:${theme.breakpoints.md}) {
    width: 100%;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
export const Call = styled(Stack)`
  > section img {
    max-height: none;
  }
`
export const AudioStatus = styled.div`
  position: absolute;
  z-index: 6;
  bottom: ${theme.spacing[2]};
  left: ${theme.spacing[4]};
  right: ${theme.spacing[4]};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${theme.radius.lg};
  background: ${(p) => resolveSlideTheme(p).surface};
  color: ${(p) => resolveSlideTheme(p).foreground};
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
`

export const FrontendHero = styled(Hero)`
  em {
    display: inline;
  }
`
export const Person = styled.div`
  display: grid;
  grid-template-columns: ${theme.spacing[12]} minmax(0, 1fr);
  gap: ${theme.spacing[1]} ${theme.spacing[2]};
  align-items: center;
  img {
    grid-row: 1/3;
    width: ${theme.spacing[12]};
    height: ${theme.spacing[12]};
    object-fit: cover;
    border-radius: ${theme.radius.circle};
  }
  b {
    font-size: ${theme.typography.fontSize.xs};
    color: ${(p) => resolveSlideTheme(p).muted};
  }
  p {
    margin: 0;
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    border: 1px solid ${(p) => resolveSlideTheme(p).border};
    border-radius: ${theme.radius.lg};
    background: ${(p) => resolveSlideTheme(p).surface};
    line-height: 1.4;
  }
`

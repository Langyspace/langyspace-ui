import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { CardLink } from '../../../src/components/Card/CardLink'
import { Card } from '../../../src/components/Card/Card'
import { recipe } from '../../../src/components/Exercise/Material.shared.styles'

export const Page = styled.main`
  min-height: 100dvh;
  background: ${(p) => recipe(p).canvas};
  color: ${(p) => recipe(p).foreground};
  padding: clamp(${theme.spacing[4]}, 4vw, ${theme.spacing[10]});
  font-family: ${theme.typography.fontFamily.sans};
`
export const Content = styled.div`
  max-width: 1120px;
  margin-inline: auto;
  display: grid;
  gap: ${theme.spacing[6]};
`
export const Header = styled.header`
  display: grid;
  gap: ${theme.spacing[2]};
  h1 {
    margin: 0;
    font-family: ${(p) => recipe(p).displayFontFamily};
    font-size: clamp(2rem, 4vw, 3rem);
  }
  p {
    margin: 0;
    color: ${(p) => recipe(p).muted};
  }
`
export const Filters = styled.div`
  display: grid;
  gap: ${theme.spacing[4]};
  max-width: 800px;
`
export const Levels = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: ${theme.spacing[4]};
`
export const LessonLink = styled(CardLink)`
  display: flex;
  gap: ${theme.spacing[4]};
  align-items: center;
  padding: ${theme.spacing[5]};
  color: inherit;
  text-decoration: none;
`
export const LessonCard = styled(Card)`
  display: flex;
  gap: ${theme.spacing[4]};
  align-items: center;
  padding: ${theme.spacing[5]};
`
export const Text = styled.div`
  flex: 1;
  min-width: 0;
  h2 {
    margin: ${theme.spacing[1]} 0;
    font-size: ${theme.typography.fontSize.lg};
    font-family: ${(p) => recipe(p).displayFontFamily};
  }
  p {
    margin: 0;
    color: ${(p) => recipe(p).muted};
    line-height: 1.5;
  }
`
export const Code = styled.span`
  color: ${(p) => recipe(p).accent};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
`
export const Availability = styled.span`
  display: block;
  margin-top: ${theme.spacing[2]};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.xs};
`
export const Empty = styled.div`
  padding: ${theme.spacing[8]};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.xl};
  text-align: center;
  h2 {
    margin-top: 0;
  }
`

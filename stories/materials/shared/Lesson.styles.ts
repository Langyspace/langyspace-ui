import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
export const Stage = styled.div`
  position: relative;
  height: 100dvh;
  min-width: 0;
`
export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  padding-bottom: ${theme.spacing[5]};
  border-bottom: 1px solid ${theme.slides.border};
`
export const Eyebrow = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  font-family: ${theme.slides.displayFontFamily};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${theme.slides.muted};
  b {
    color: ${theme.slides.accent};
  }
`
export const Hero = styled.h1`
  margin: 0;
  font-family: ${theme.slides.displayFontFamily};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: clamp(2rem, 6cqh, 3.25rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  em {
    display: block;
    font-family: ${theme.slides.accentFontFamily};
    font-weight: ${theme.typography.fontWeight.regular};
    color: ${theme.slides.indicator};
  }
`
export const Goal = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.5;
  > span {
    color: ${theme.slides.indicator};
    font-size: ${theme.typography.fontSize.xl};
  }
  p {
    margin: 0;
  }
  b {
    display: block;
    color: ${theme.slides.accent};
    font-family: ${theme.slides.displayFontFamily};
    font-size: ${theme.typography.fontSize.xs};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`
export const Questions = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`
export const Question = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.slides.border};
  border-radius: ${theme.slides.panelRadius};
  background: ${theme.slides.surface};
  min-width: 0;
  font-family: ${theme.slides.displayFontFamily};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: clamp(1.0625rem, 2.8cqh, 1.5rem);
  line-height: 1.3;
  > div {
    flex: 1;
    min-width: 0;
  }
`
export const Number = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: calc(${theme.spacing[8]} + ${theme.spacing[1]});
  height: calc(${theme.spacing[8]} + ${theme.spacing[1]});
  border-radius: ${theme.radius.circle};
  background: ${theme.slides.accent};
  color: ${theme.colors.palette.white};
  font-size: ${theme.typography.fontSize.md};
`
export const Hint = styled.small`
  display: block;
  color: ${theme.slides.muted};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
`
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  min-width: 0;
`
export const Center = styled(Row)`
  justify-content: center;
`
export const Surface = styled(Stack)`
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.slides.border};
  border-radius: ${theme.slides.panelRadius};
  background: ${theme.slides.surface};
`
export const VocabularyTools = styled(Row)`
  justify-content: center;
  padding-top: ${theme.spacing[5]};
`
export const QuestionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  margin: 0;
  font-family: ${theme.slides.displayFontFamily};
  font-size: clamp(1.125rem, 2.8cqh, 1.375rem);
  line-height: 1.3;
`
export const Counter = styled.span`
  flex-shrink: 0;
  color: ${theme.slides.muted};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  white-space: nowrap;
`
export const WarmImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 18rem;
  object-fit: contain;
  border-radius: ${theme.slides.panelRadius};
`
export const MiniGrid = styled.ol<{ $column?: boolean }>`
  display: grid;
  grid-template-columns: repeat(${(p) => (p.$column ? 2 : 8)}, minmax(0, 1fr));
  gap: ${theme.spacing[1]};
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 0;
  width: ${(p) => (p.$column ? '8rem' : '100%')};
  @container (max-width:${theme.breakpoints.md}) {
    width: 100%;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
export const MiniCard = styled.li`
  position: relative;
  aspect-ratio: 1;
  min-width: 0;
  overflow: hidden;
  border: 1px solid ${theme.slides.border};
  border-radius: ${theme.radius.sm};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 ${theme.spacing[1]};
    background: ${theme.slides.accent};
    color: ${theme.colors.palette.white};
    font-size: ${theme.typography.fontSize.xs};
  }
`
export const Now = styled(Surface)`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.4;
  > b {
    color: ${theme.slides.accent};
    font-family: ${theme.slides.displayFontFamily};
  }
  > p {
    flex: 1;
    min-width: 0;
    margin: 0;
  }
`
export const GrammarColumns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
  gap: ${theme.spacing[5]};
  align-items: start;
  @container (max-width:${theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Explanation = styled(Surface)`
  h3 {
    margin: 0;
    font-family: ${theme.slides.displayFontFamily};
    font-size: ${theme.typography.fontSize.lg};
  }
  p {
    margin: 0;
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.5;
  }
  b {
    color: ${theme.slides.accent};
  }
`
export const ConversationColumns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${theme.spacing[5]};
  align-items: center;
  @container (max-width:${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Support = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  span {
    padding: ${theme.spacing[1]} ${theme.spacing[2]};
    border: 1px solid ${theme.slides.border};
    border-radius: ${theme.radius.sm};
    font-size: ${theme.typography.fontSize.sm};
  }
`
export const Dark = styled(Stack)`
  small {
    color: ${theme.slides.inverseMuted};
  }
  padding: ${theme.spacing[4]};
  border-radius: ${theme.slides.panelRadius};
  background: ${theme.slides.inverseCanvas};
  color: ${theme.slides.inverseForeground};
  p {
    margin: 0;
    line-height: 1.4;
  }
  strong {
    color: ${theme.slides.indicator};
    font-family: ${theme.slides.displayFontFamily};
    font-size: ${theme.typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`
export const Correction = styled(Question)`
  flex-wrap: wrap;
  font-size: clamp(1rem, 2.4cqh, 1.25rem);
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  s {
    color: ${theme.slides.muted};
  }
  small {
    flex-basis: 100%;
    font-family: ${theme.typography.fontFamily.sans};
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.slides.muted};
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: 1.4;
  }
  [role='status'] {
    flex-basis: 100%;
    font-family: ${theme.typography.fontFamily.sans};
    font-size: ${theme.typography.fontSize.sm};
  }
`
export const Clues = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
`
export const Summary = styled(Surface)`
  gap: ${theme.spacing[2]};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  label {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[1]};
    min-width: 0;
    font-size: ${theme.typography.fontSize.xs};
    color: ${theme.slides.muted};
  }
  > div {
    grid-column: 1/-1;
    justify-content: space-between;
  }
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Homework = styled(Surface)`
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing[4]};
  font-family: ${theme.slides.displayFontFamily};
  font-size: clamp(1.125rem, 3cqh, 1.5rem);
  line-height: 1.3;
  img {
    width: ${theme.spacing[12]};
    height: ${theme.spacing[12]};
    object-fit: cover;
    border-radius: ${theme.radius.sm};
  }
  b {
    display: block;
  }
`
export const Notes = styled.aside`
  position: absolute;
  z-index: 5;
  top: calc(${theme.slides.headerHeight} + ${theme.spacing[2]});
  right: ${theme.spacing[4]};
  width: min(22.5rem, calc(100% - ${theme.spacing[8]}));
  height: min(27.5rem, calc(100% - ${theme.spacing[20]}));
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.slides.border};
  border-radius: ${theme.slides.panelRadius};
  background: ${theme.slides.canvas};
  box-shadow: ${theme.shadows.md};
  textarea {
    flex: 1;
    resize: none;
    min-height: 0;
  }
`
export const AudioError = styled.p`
  position: fixed;
  z-index: 6;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: ${theme.spacing[3]};
  color: ${theme.semantic.status.danger.foreground};
  background: ${theme.semantic.status.danger.background};
`
export const LearnerCue = styled.div`
  @container (max-height:${theme.viewportHeights.lg}) {
    small {
      font-size: ${theme.typography.fontSize.xs};
      line-height: 1.3;
    }
  }
  small {
    color: inherit;
  }
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`
export const CompactIntroduction = styled(Introduction)`
  gap: ${theme.spacing[2]};
  padding-bottom: ${theme.spacing[3]};
  h1 {
    font-size: clamp(1.875rem, 5.4cqh, 3.25rem);
  }
  em {
    display: inline;
  }
  p {
    font-size: ${theme.typography.fontSize.sm};
  }
`
export const CompactQuestion = styled(Question)`
  border: 0;
  padding: 0;
  background: transparent;
  gap: ${theme.spacing[3]};
  font-size: clamp(1rem, 2.6cqh, 1.1875rem);
  > span {
    width: calc(${theme.spacing[6]} + ${theme.spacing[1]});
    height: calc(${theme.spacing[6]} + ${theme.spacing[1]});
    font-size: ${theme.typography.fontSize.sm};
  }
`

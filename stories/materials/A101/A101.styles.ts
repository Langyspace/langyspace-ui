import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { Button } from '../../../src/components/Button/Button'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
export const Stage = styled.div`
  height: 100dvh;
  min-width: 0;
`
export const NotesButton = styled(Button)`
  background: ${theme.slides.surface};
  min-height: ${theme.spacing[10]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1.5px solid ${theme.slides.border};
  font-size: 0.9375rem;
  line-height: 20px;
  font-weight: ${theme.typography.fontWeight.bold};
`
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(${theme.spacing[2]}, 1.4cqh, ${theme.spacing[4]});
  padding-bottom: clamp(${theme.spacing[2]}, 2cqh, ${theme.spacing[5]});
  border-bottom: 1.5px solid ${theme.slides.border};
`
export const LessonEyebrow = styled.div`
  font-family: ${theme.slides.displayFontFamily};
  font-size: ${theme.typography.fontSize.xs};
  line-height: 16px;
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${theme.slides.muted};
  display: flex;
  gap: 1em;
  b {
    color: ${theme.slides.accent};
  }
  @container (max-width: ${theme.breakpoints.md}) {
    font-size: 0.625rem;
    line-height: 1.4;
  }
`
export const Goal = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: clamp(${theme.typography.fontSize.sm}, 2.1cqh, 1.0625rem);
  line-height: 1.45;
  p {
    margin: 0;
  }
  b {
    display: block;
    font-family: ${theme.slides.displayFontFamily};
    color: ${theme.slides.accent};
    font-size: ${theme.typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`
export const GoalStar = styled.span`
  width: ${theme.spacing[5]};
  height: ${theme.spacing[5]};
  flex-shrink: 0;
  margin-top: 2px;
  color: ${theme.slides.indicator};
`
export const IntroVocabulary = styled.div`
  padding-top: ${theme.exercises.vocabularyTopSpace};
`
export const LessonVocabulary = styled(VocabularyGrid)<{ $regular: boolean }>`
  padding-top: ${(p) => (p.$regular ? theme.exercises.vocabularyRegularTopSpace : '0')};
`
export const TranslationButton = styled(Button)`
  padding: 0;
  min-height: ${theme.sizes.control.sm};
  font-weight: ${theme.typography.fontWeight.regular};
  text-align: left;
  justify-content: flex-start;
  white-space: normal;
  text-decoration: none;
`
export const Muted = styled.span`
  display: block;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
`
export const Use = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[5]};
  background: ${theme.colors.palette.neutral[900]};
  color: ${theme.colors.palette.white};
  border-radius: ${theme.radius.lg};
  p {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: ${theme.spacing[2]};
    margin: 0;
    color: ${theme.colors.palette.neutral[500]};
  }
  b {
    color: ${theme.colors.palette.white};
    font-size: ${theme.typography.fontSize.xl};
    margin-left: ${theme.spacing[2]};
  }
  small {
    font-family: ${theme.slides.displayFontFamily};
    letter-spacing: 0.2em;
    color: ${theme.colors.palette.accent.pink};
    text-transform: uppercase;
    font-weight: ${theme.typography.fontWeight.bold};
  }
`
export const Card = styled.div`
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.voiceMessage.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.palette.white};
  min-width: 0;
  h3 {
    margin: 0 0 ${theme.spacing[4]};
  }
`
export const SpeakingCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[3]};
  strong {
    flex: 1;
  }
  small {
    flex-basis: 100%;
    color: ${theme.colors.text.muted};
  }
`
export const DialogueQuestion = styled(SpeakingCard)`
  min-height: 70px;
  padding: ${theme.spacing[4]} ${theme.spacing[4]} ${theme.spacing[4]}
    ${theme.spacing[5]};
  gap: ${theme.spacing[4]};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.surface.canvas};
  strong {
    font-family: ${theme.slides.displayFontFamily};
    font-size: clamp(${theme.typography.fontSize.lg}, 2.8cqh, 1.375rem);
    line-height: 1.3;
  }
`
export const Number = styled.span`
  display: inline-grid;
  place-items: center;
  width: ${theme.spacing[8]};
  height: ${theme.spacing[8]};
  border-radius: ${theme.radius.circle};
  background: ${theme.colors.palette.accent.pinkSoft};
  color: ${theme.slides.accent};
  font-size: ${theme.typography.fontSize.sm};
  flex-shrink: 0;
`
export const Guest = styled(ChoiceCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]};
  font: inherit;
  background: ${theme.slides.surface};
  > b {
    font-family: ${theme.slides.displayFontFamily};
    font-size: clamp(1.1875rem, 3.3cqh, 1.75rem);
    line-height: 1.1;
  }
`
export const Gap = styled(Button)`
  min-width: ${theme.spacing[12]};
  min-height: ${theme.sizes.control.sm};
  padding: 0 ${theme.spacing[2]};
  border-radius: ${theme.radius.sm};
  vertical-align: baseline;
`
export const Homework = styled(Card)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[5]};
  padding: clamp(0.875rem, 2.6cqh, 1.375rem) ${theme.spacing[6]};
  border-color: ${theme.slides.border};
  background: ${theme.slides.surface};
  b {
    font-family: ${theme.slides.displayFontFamily};
    font-size: clamp(1.1875rem, 3cqh, 1.4375rem);
    line-height: 1.2;
  }
  img {
    flex-shrink: 0;
    width: clamp(${theme.spacing[8]}, 5cqh, ${theme.spacing[10]});
    height: clamp(${theme.spacing[8]}, 5cqh, ${theme.spacing[10]});
    object-fit: contain;
  }
  span {
    display: block;
    color: ${theme.slides.muted};
    font-size: clamp(0.9375rem, 2.2cqh, 1.0625rem);
    line-height: 1.4;
    margin-top: calc(${theme.spacing[1]} / 2);
  }
`
export const HomeworkStack = styled(Stack)`
  gap: ${theme.spacing[4]};
`
export const HomeworkCopy = styled(Button)`
  font-family: ${theme.slides.displayFontFamily};
  font-size: 0.9375rem;
  min-height: ${theme.spacing[10]};
`
export const CopyFallback = styled.textarea`
  width: 100%;
  min-height: ${theme.spacing[32]};
  font: inherit;
`
export const Notes = styled.main`
  padding: ${theme.spacing[5]};
  font-family: ${theme.typography.fontFamily.sans};
  background: ${theme.colors.surface.canvas};
  min-height: 100vh;
  h1 {
    font-size: ${theme.typography.fontSize.xl};
  }
  li {
    margin-bottom: ${theme.spacing[3]};
  }
`
export const Tools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`
export const Feedback = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  &:empty {
    display: none;
  }
`
export const Hero = styled.h1`
  margin: 0;
  font-family: ${theme.slides.displayFontFamily};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: clamp(1.875rem, 5.4cqh, 3.25rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: ${theme.slides.foreground};
  em {
    font-family: ${theme.slides.accentFontFamily};
    font-weight: ${theme.typography.fontWeight.regular};
    color: ${theme.slides.indicator};
    letter-spacing: normal;
  }
`
export const Grammar = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: ${theme.spacing[6]};
  @container (max-width:${theme.breakpoints.mobileShell}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const TableScroll = styled.div`
  min-width: 0;
  overflow-x: auto;
  border: 1px solid ${theme.voiceMessage.border};
  border-radius: ${theme.radius.lg};
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    text-align: left;
    border-bottom: 1px solid ${theme.voiceMessage.border};
  }
  thead th {
    background: ${theme.semantic.status.success.foreground};
    color: ${theme.colors.palette.white};
    font-size: 0.8125rem;
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    text-transform: uppercase;
  }
  tbody {
    background: ${theme.colors.palette.white};
  }
  tbody th,
  tbody td {
    height: 44px;
    font-size: ${theme.typography.fontSize.md};
  }
  @container (max-height: ${theme.viewportHeights.lg}) {
    tbody th,
    tbody td {
      height: 40px;
      padding-block: ${theme.spacing[1]};
    }
  }
  tbody td:nth-child(2) {
    color: ${theme.semantic.status.success.foreground};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  @container (max-width:${theme.breakpoints.sm}) {
    th,
    td {
      padding: ${theme.spacing[1]};
      font-size: ${theme.typography.fontSize.sm};
    }
  }
`
export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[6]};
  @container (max-width:${theme.breakpoints.mobileShell}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const GrammarCard = styled(Card)<{ $kind: 'negative' | 'question' }>`
  background: ${theme.slides.canvas};
  border: 1.5px solid ${theme.slides.border};
  border-radius: ${theme.radius.xl};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[6]} ${theme.spacing[8]};
  h3 {
    display: flex;
    align-items: center;
    gap: ${theme.spacing[4]};
    margin: 0;
    font-family: ${theme.slides.displayFontFamily};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.bold};
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${(p) => (p.$kind === 'negative' ? theme.exercises.negative : theme.exercises.question)};
    span {
      width: ${theme.spacing[12]};
      height: ${theme.spacing[12]};
      display: grid;
      place-items: center;
      border-radius: ${theme.radius.circle};
      color: ${theme.colors.palette.white};
      background: ${(p) => (p.$kind === 'negative' ? theme.exercises.negative : theme.exercises.question)};
      font-size: ${theme.typography.fontSize['2xl']};
    }
  }
  ${TranslationButton} {
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.xl};
  }
  p {
    color: ${theme.slides.muted};
  }
  @container (max-height: ${theme.viewportHeights.lg}) {
    padding: ${theme.spacing[5]} ${theme.spacing[6]};
    gap: ${theme.spacing[3]};
  }
`
export const TrueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[5]};
  @container (max-width: ${theme.breakpoints.mobileShell}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @container (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const TrueCard = styled(SpeakingCard)<{ $index: number }>`
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: ${theme.spacing[3]};
  min-height: 180px;
  padding: ${theme.spacing[5]} ${theme.spacing[6]};
  background: ${theme.slides.canvas};
  border-radius: ${theme.radius.xl};
  strong {
    flex: initial;
    font-size: 1.375rem;
    line-height: 28px;
  }
  small {
    font-size: 0.9375rem;
    flex-basis: auto;
  }
  ${Number} {
    width: 44px;
    height: 44px;
    color: ${theme.colors.palette.white};
    background: ${(p) => (p.$index % 3 === 0 ? theme.slides.accent : p.$index % 3 === 1 ? theme.semantic.status.success.foreground : theme.exercises.question)};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  @container (max-height: ${theme.viewportHeights.lg}) {
    min-height: 150px;
    padding: ${theme.spacing[4]} ${theme.spacing[5]};
  }
`
export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const Prompts = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[2]};
  flex-wrap: wrap;
  b {
    background: ${theme.slides.foreground};
    color: ${theme.slides.inverseForeground};
    border-radius: ${theme.radius.pill};
    padding: ${theme.spacing[2]} ${theme.spacing[5]};
    font-size: ${theme.typography.fontSize.lg};
  }
`
export const TalkGrid = styled(ThreeColumns)`
  @container (max-width: ${theme.breakpoints.mobileShell}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @container (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const TalkQuestion = styled(ChoiceCard)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  min-height: 56px;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1.5px solid ${theme.slides.border};
  border-radius: ${theme.radius.xl};
  b {
    flex: 1;
    font-size: 1.0625rem;
    line-height: 24px;
  }
  ${Number} {
    width: 28px;
    height: 28px;
    font-size: 0.8125rem;
  }
  &[aria-pressed='true'] {
    border-color: ${theme.semantic.status.success.foreground};
    background: ${theme.semantic.status.success.background};
  }
`
export const GuestImages = styled.span`
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${theme.radius.md};
`
export const GuestScene = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const AudioError = styled.p`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: ${theme.spacing[3]};
  background: ${theme.semantic.status.danger.background};
  color: ${theme.semantic.status.danger.foreground};
`

export const Eyebrow = styled.span`
  display: block;
  color: ${theme.slides.accent};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`

export const WarmScene = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  aspect-ratio: 1;
  max-width: 100%;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
`
export const WarmImage = styled.img`
  && {
    min-width: 0;
    min-height: 0;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const CountryFlag = styled.img`
  && {
    position: absolute;
    right: ${theme.spacing[2]};
    bottom: ${theme.spacing[2]};
    width: ${theme.spacing[12]};
    height: ${theme.spacing[8]};
    object-fit: contain;
    border: 2px solid ${theme.colors.palette.white};
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.palette.white};
  }
`

export const QuestionVerb = styled.b`
  color: ${theme.semantic.status.info.foreground};
`
export const StatementVerb = styled.b`
  color: ${theme.semantic.status.success.foreground};
`

export const TitleAudio = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  flex-wrap: wrap;
`

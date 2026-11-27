import { theme } from '../theme/theme'

/** Shared bounds for regular contextual cards and the heading of their composition. */
export const regularVocabularyMaxWidth = (columns = 3) =>
  `calc(${theme.exercises.vocabularyRegularHeight} * ${columns * 1.5} + ${theme.spacing[3]} * ${columns - 1})`

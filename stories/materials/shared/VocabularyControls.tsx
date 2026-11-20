import { IconButton } from '../../../src/components/IconButton/IconButton'
import * as S from './VocabularyControls.styles'
import type { VocabularyControlsProps } from './VocabularyControls.types'

export function VocabularyControls({
  showInitial,
  showAll,
  onToggleInitial,
  onToggleAll,
}: VocabularyControlsProps) {
  return (
    <S.Controls>
      <IconButton
        size="md"
        variant="neutral"
        aria-label="Hint: first letter"
        aria-pressed={showInitial}
        onClick={onToggleInitial}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z" />
        </svg>
      </IconButton>
      <IconButton
        size="md"
        variant="neutral"
        aria-label={showAll ? 'Hide all words' : 'Show all words'}
        aria-pressed={showAll}
        onClick={onToggleAll}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </IconButton>
    </S.Controls>
  )
}

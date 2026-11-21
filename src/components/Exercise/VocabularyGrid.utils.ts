/** First-letter clues recovered from the human-authored Vocabulary revision. */
export function formatVocabularyHint(
  text: string,
  visibleWords: readonly string[] = [],
): string {
  return text
    .split(' ')
    .map((word) =>
      visibleWords.includes(word)
        ? word
        : `${word[0] ?? ''}${word.slice(1).replace(/[A-Za-z]/g, '\u2009_')}`,
    )
    .join('\u2003')
}

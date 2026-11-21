/** Authored reviews of earlier content; a current-topic warm-up is not a review. */
export const lessonOpeningReviews: Readonly<Record<string, string>> = {
  'a1-02': 'A1.01 · introductions, origin and feelings',
  'a1-03': 'A1.02 · names and spelling',
  'b1-01': 'Existing review · invitations and arranging plans',
}
export const hasLessonOpeningReview = (materialKey: string) =>
  Object.hasOwn(lessonOpeningReviews, materialKey)

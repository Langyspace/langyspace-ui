/** Use the authored order so inserts and reordering cannot leave a stale preload trigger. */
export function isUpcomingLessonPage(
  pageIds: readonly string[],
  currentPageId: string,
  targetPageId: string,
) {
  const targetIndex = pageIds.indexOf(targetPageId)
  return targetIndex > 0 && pageIds[targetIndex - 1] === currentPageId
}

export interface NotesPopupLaunch {
  url: string
  /** Same named window is reused; lesson context is handled by its own protected host. */
  name?: string
}
export const launchNotesWindow = (
  launch: NotesPopupLaunch,
  opener: Pick<Window, 'open' | 'location'> = window,
) => {
  const url = new URL(launch.url, opener.location.href)
  if (url.origin !== opener.location.origin)
    throw new Error('notes_destination_invalid')
  const popup = opener.open(
    '',
    launch.name ?? 'langy-lesson-notes',
    'popup=yes,width=480,height=720,resizable=yes,scrollbars=yes',
  )
  if (!popup) return { kind: 'blocked' as const }
  try {
    if (popup.location.href === 'about:blank') popup.location.replace(url.href)
    else
      popup.postMessage(
        { type: 'langy.notes.navigate', version: 1, url: url.href },
        url.origin,
      )
    popup.focus()
    return { kind: 'opened' as const, popup }
  } catch {
    return { kind: 'unavailable' as const }
  }
}

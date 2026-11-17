import { waitFor, within } from 'storybook/test'
export async function lessonCanvas(canvas: HTMLElement, pageId: string) {
  const page = canvas.querySelector<HTMLElement>(
    '[data-slide-id="' + pageId + '"]',
  )
  if (!page) throw new Error('Missing lesson slide ' + pageId)
  await waitFor(
    () => {
      if (page.dataset.current !== 'true')
        throw new Error('Waiting for slide ' + pageId)
    },
    { timeout: 5000 },
  )
  return within(page)
}

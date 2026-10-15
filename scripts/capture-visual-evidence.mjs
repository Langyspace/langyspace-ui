// Keep modal evidence inside the viewport that owns its fixed backdrop.
// A full-page screenshot adds offscreen document content below that backdrop.
export async function captureVisualEvidence(page, options) {
  const modalCount = await page.locator('[aria-modal="true"]:visible').count()
  const fullPage = modalCount === 0
  const viewport = page.viewportSize()

  await page.screenshot({ ...options, fullPage })

  return {
    mode: fullPage ? 'full-page' : 'viewport',
    viewport,
    modalCount,
  }
}

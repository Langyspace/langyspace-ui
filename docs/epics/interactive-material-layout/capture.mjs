/* global document, innerWidth, window */
import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from 'playwright'

const directory = '.github/evidence/interactive-material-layout'
await mkdir(directory, { recursive: true })
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
  reducedMotion: 'reduce',
})
const results = []
const story = async (id) => {
  await page.goto(
    `http://localhost:6016/iframe.html?id=slide-${id}&viewMode=story`,
  )
  await page.locator('[class*="lsui-sc-slide-"]').first().waitFor()
  await page.evaluate(() => document.fonts.ready)
}
const current = async (id) => {
  await page.waitForFunction((expected) => {
    const element = document.querySelector('[data-current="true"]')
    const viewport = document.querySelector('[data-slide-viewport]')
    return (
      element?.getAttribute('data-slide-id') === expected &&
      element.getBoundingClientRect().top <=
        viewport.getBoundingClientRect().top + 2 &&
      element.getBoundingClientRect().bottom >=
        viewport.getBoundingClientRect().bottom - 2
    )
  }, id)
}
const capture = async (name) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  )
  if (overflow) throw new Error(`Horizontal overflow: ${name}`)
  await page.screenshot({ path: `${directory}/${name}.png`, fullPage: false })
  results.push({
    name,
    viewport: page.viewportSize(),
    horizontalOverflow: overflow,
  })
}

try {
  await story('slidedeck--controlled')
  await current('intro')
  await capture('intro-1280')
  const viewport = page.locator('[data-slide-viewport]')
  await viewport.hover()
  await page.mouse.wheel(0, 900)
  await current('warm-up')
  await capture('warm-up-1280')
  await page.getByRole('button', { name: 'A I’m tired.' }).click()
  await page.getByRole('button', { name: /Voltar/ }).click()
  await current('intro')
  await viewport.focus()
  await page.keyboard.press('PageDown')
  await current('warm-up')
  if (
    (await page
      .getByRole('button', { name: 'A I’m tired.' })
      .getAttribute('aria-pressed')) !== 'true'
  )
    throw new Error('Exercise state was lost')
  await capture('answered-1280')
  await page.getByRole('button', { name: 'Let’s talk', exact: true }).click()
  await current('conversation')
  await page.getByRole('textbox').fill('I’m good, thanks.')
  await page.getByRole('textbox').press('Home')
  if (
    (await page
      .locator('[data-current="true"]')
      .getAttribute('data-slide-id')) !== 'conversation'
  )
    throw new Error('Input key changed slide')
  if ((await page.evaluate(() => window.scrollY)) !== 0)
    throw new Error('Deck scrolled its host')
  await viewport.focus()
  await page.keyboard.press('Home')
  await current('intro')
  await page.keyboard.press('End')
  await current('conversation')
  results.push({
    interaction:
      'wheel, controlled navigation, keyboard, input isolation, state persistence, host isolation',
    passed: true,
  })

  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.setViewportSize({ width: 390, height: 844 })
  await current('conversation')
  await viewport.focus()
  await page.keyboard.press('Home')
  await current('intro')
  await page.keyboard.press('End')
  await current('conversation')
  results.push({
    interaction:
      'live resize keeps the current page; smooth navigation settles correctly',
    passed: true,
  })
  await page.emulateMedia({ reducedMotion: 'reduce' })

  for (const [width, height] of [
    [390, 844],
    [844, 390],
    [1280, 720],
  ]) {
    await page.setViewportSize({ width, height })
    await story('slidedeck--warm-up')
    await current('warm-up')
    await capture(`warm-up-${width}x${height}`)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await story('slidedeck--long-content')
  await current('long-content')
  await capture('long-content-start-390')
  await page.locator('[data-slide-viewport]').focus()
  await page.keyboard.press('PageDown')
  await page.waitForFunction(
    () => document.querySelector('[data-slide-viewport]').scrollTop > 850,
  )
  if (
    (await page
      .locator('[data-current="true"]')
      .getAttribute('data-slide-id')) !== 'long-content'
  )
    throw new Error('Long slide was skipped')
  const lastQuestion = page.getByRole('heading', {
    name: '14. Where are you from?',
  })
  await lastQuestion.scrollIntoViewIfNeeded()
  await capture('long-content-end-390')
  results.push({
    interaction: 'long content remains reachable before the next slide',
    passed: true,
  })

  await page.setViewportSize({ width: 1280, height: 720 })
  await story('slidepage--theme-override')
  await capture('theme-1280')
  await story('slidepage--long-heading')
  await capture('long-heading-1280')
  await page.setViewportSize({ width: 390, height: 844 })
  await story('slidepage--long-heading')
  await capture('long-heading-390')
  await story('slidedeck--narrow')
  await current('warm-up')
  await capture('narrow-280')
  await writeFile(
    `${directory}/results.json`,
    `${JSON.stringify(results, null, 2)}\n`,
  )
  console.log(JSON.stringify({ passed: true, results }, null, 2))
} finally {
  await browser.close()
}

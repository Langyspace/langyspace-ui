/* global document, window, innerWidth */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { chromium } from 'playwright'

const output = '.github/evidence/voice-message'
await mkdir(output, { recursive: true })
const voice = await readFile(
  'stories/components/VoiceMessage/assets/kim-demo.mp3',
)
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
  reducedMotion: 'reduce',
})
const results = []
const story = async (name) => {
  await page.goto(
    `http://localhost:6016/iframe.html?id=voicemessage-voicemessageexercise--${name}&viewMode=story`,
  )
  await page.locator('.lsui-sc-voice-message-exercise').waitFor()
  await page.evaluate(() => document.fonts.ready)
}
const root = () => page.locator('.lsui-sc-voice-message-exercise')
const status = async (value) =>
  page.waitForFunction(
    (value) =>
      document
        .querySelector('[data-playback]')
        ?.getAttribute('data-playback') === value,
    value,
  )
const count = async (value) =>
  page.waitForFunction(
    (value) =>
      document.querySelector('[data-listens]')?.getAttribute('data-listens') ===
      String(value),
    value,
  )
const snapshot = async (name) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  )
  if (overflow) throw new Error(`Horizontal overflow: ${name}`)
  await page.screenshot({ path: `${output}/${name}.png`, fullPage: true })
  results.push({
    name,
    viewport: page.viewportSize(),
    horizontalOverflow: false,
  })
}
const play = async () => {
  await page
    .getByRole('button', { name: /^(Ouvir áudio|Ouvir novamente)$/ })
    .click()
  await status('playing')
}
const finish = async () => {
  await page.locator('audio').evaluate((audio) => {
    audio.currentTime = audio.duration - 0.06
  })
  await status('ended')
}

try {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 720 })
    await story('default')
    await snapshot(`idle-${width}`)
    await page.getByRole('region', { name: 'Conversa: Kim' }).focus()
    await snapshot(`keyboard-focus-${width}`)
    await page.getByRole('region', { name: 'Conversa: Kim' }).focus()
    await snapshot(`keyboard-focus-${width}`)
    await play()
    await count(1)
    await snapshot(`playing-${width}`)
    await page.getByRole('button', { name: 'Pausar áudio' }).click()
    await status('paused')
    await snapshot(`paused-${width}`)
    await play()
    if ((await root().getAttribute('data-listens')) !== '1')
      throw new Error('Pause/resume counted as a second listen')
    await page.getByRole('button', { name: 'Velocidade: 1x' }).click()
    if (
      (await page.locator('audio').evaluate((audio) => audio.playbackRate)) !==
      0.75
    )
      throw new Error('Speed did not reach native media')
    await finish()
    await snapshot(`first-pass-complete-${width}`)
    await play()
    await count(2)
    await snapshot(`transcript-${width}`)
    await page.getByRole('button', { name: 'Pausar áudio' }).click()
    const tired = page.getByRole('group', { name: '1. Is Kim tired?' })
    await tired.getByRole('button', { name: 'No, she isn’t.' }).click()
    await tired.getByRole('button', { name: 'Yes, she is.' }).click()
    await snapshot(`answered-${width}`)
  }
  results.push({
    interaction:
      'native playback, pause/resume, second-pass-only transcript, native speed, controlled answers',
    passed: true,
  })

  await page.setViewportSize({ width: 1280, height: 720 })
  await story('in-slide-deck')
  await page.waitForFunction(
    () =>
      document
        .querySelector('[data-current="true"]')
        ?.getAttribute('data-slide-id') === 'listening',
  )
  await play()
  await count(1)
  const viewport = page.locator('[data-slide-viewport]')
  await viewport.focus()
  await page.keyboard.press('End')
  await page.waitForFunction(
    () =>
      document
        .querySelector('[data-current="true"]')
        ?.getAttribute('data-slide-id') === 'next',
  )
  await page.waitForFunction(() => document.querySelector('audio').paused)
  await page.keyboard.press('PageUp')
  await page.waitForFunction(
    () =>
      document
        .querySelector('[data-current="true"]')
        ?.getAttribute('data-slide-id') === 'listening',
  )
  if ((await root().getAttribute('data-listens')) !== '1')
    throw new Error('Slide return reset the listening pass')
  await play()
  await count(1)
  await page.getByRole('button', { name: 'Pausar áudio' }).click()
  await snapshot('deck-listening-1280')
  if ((await page.evaluate(() => window.scrollY)) !== 0)
    throw new Error('Deck moved the outer document')
  results.push({
    interaction:
      'active-page audio pause, preserved listening state, deck host isolation',
    passed: true,
  })

  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 720 })
    await story('error-and-retry')
    await page.getByRole('alert').waitFor()
    await snapshot(`error-${width}`)
    await page.route('**/missing-voice-message.mp3', (route) =>
      route.fulfill({ body: voice, contentType: 'audio/mpeg' }),
    )
    await page.getByRole('button', { name: 'Tentar novamente' }).click()
    await status('playing')
    await count(1)
    await page.getByRole('button', { name: 'Pausar áudio' }).click()
    await snapshot(`retry-recovered-${width}`)
    await page.unroute('**/missing-voice-message.mp3')
  }
  results.push({
    interaction: 'native missing-file error and retry with actual MP3 response',
    passed: true,
  })

  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 720 })
    for (const name of [
      'missing-recording',
      'answer-feedback',
      'inactive',
      'theme-override',
    ]) {
      await story(name)
      await snapshot(`${name}-${width}`)
    }
    await story('long-content')
    await play()
    await finish()
    await play()
    await count(2)
    await page.getByRole('button', { name: 'Pausar áudio' }).click()
    await snapshot(`long-content-${width}`)
  }
  await story('narrow-container')
  await snapshot('narrow-container-280')
  await writeFile(
    `${output}/results.json`,
    JSON.stringify({ passed: true, results }, null, 2) + '\n',
  )
  console.log(
    JSON.stringify(
      {
        passed: true,
        captures: results.filter((result) => result.name).length,
        interactions: results.filter((result) => result.interaction),
      },
      null,
      2,
    ),
  )
} finally {
  await browser.close()
}

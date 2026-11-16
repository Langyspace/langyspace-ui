/* global document, window, innerWidth, getComputedStyle */
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
const compactPlayer = async () => {
  const metrics = await root().evaluate((element) => {
    const rect = (node) => {
      const { width, height } = node.getBoundingClientRect()
      return { width, height }
    }
    const play = element.querySelector('button')
    return {
      play: rect(play),
      glyph: rect(play.querySelector('svg')),
      speed: rect(element.querySelector('button[aria-label^="Velocidade:"]')),
      waveform: rect(element.querySelector('i').parentElement),
      bubble: rect(element.querySelector('audio').parentElement),
      choices: [...element.querySelectorAll('fieldset button')].map(rect),
    }
  })
  if (
    Math.abs(metrics.play.width - 32) > 0.5 ||
    Math.abs(metrics.play.height - 32) > 0.5
  )
    throw new Error('Play must match the 32px reference control')
  if (metrics.glyph.width !== 14 || metrics.glyph.height !== 14)
    throw new Error('Play glyph is disproportionate to the reference')
  if (metrics.speed.width > 28 || metrics.speed.height !== 24)
    throw new Error('Speed control crowds out the waveform')
  if (metrics.waveform.width < 60 || metrics.waveform.height !== 28)
    throw new Error('Waveform is compressed inside the voice bubble')
  if (metrics.bubble.height > 64)
    throw new Error('Locked transcript adds visible bulk to the voice bubble')
  if (metrics.choices.some(({ height }) => height < 32 || height > 34))
    throw new Error('Question choices no longer match the compact reference')
  results.push({
    viewport: page.viewportSize(),
    geometry: metrics,
    passed: true,
  })
}

try {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 720 })
    await story('default')
    await compactPlayer()
    await snapshot(`idle-${width}`)
    await page.getByRole('region', { name: 'Conversa: Kim' }).focus()
    await snapshot(`keyboard-focus-${width}`)
    await page.keyboard.press('Tab')
    const focusedPlay = page.getByRole('button', {
      name: 'Ouvir áudio',
      exact: true,
    })
    if (
      !(await focusedPlay.evaluate(
        (button) =>
          button === document.activeElement &&
          getComputedStyle(button).boxShadow !== 'none',
      ))
    )
      throw new Error('Compact play control lost keyboard focus visibility')
    await page.keyboard.press('Enter')
    await status('playing')
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

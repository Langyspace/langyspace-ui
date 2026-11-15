import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { gzipSync } from 'node:zlib'
import { execFileSync } from 'node:child_process'
import { chromium } from 'playwright'
import { startStaticStorybook } from '../../../scripts/layout-audit/server.mjs'
const phase = process.argv[2]
if (!['before', 'after'].includes(phase)) throw Error('before/after required')
const root = process.cwd(),
  staticRoot =
    process.env.LIBRARY_STYLED_STATIC_ROOT ??
    path.join(
      root,
      '.local/styled-only',
      phase === 'before' ? 'storybook-before' : 'storybook-after',
    )
const output =
  process.env.LIBRARY_STYLED_OUTPUT ??
  path.join(root, 'docs/epics/styled-components-only/evidence', phase)
fs.mkdirSync(output, { recursive: true })
const requested = new Set(
  (process.env.LIBRARY_STYLED_CASES ?? '').split(',').filter(Boolean),
)
const stories = [
  'actionmenu--default',
  'actionmenu--tones-and-disabled',
  'actionmenu--narrow-viewport-flip',
  'actionmenu--loading',
  'actionmenu--stress-long-labels',
  'auth-authfooter--default',
  'avatar--stress',
  'button-button--stress',
  'calendar-calendarcontrols--narrow-container',
  'calendar-schedulecalendar--week',
  'calendar-schedulecalendar--long-names',
  'calendar-schedulecalendar--month',
  'charts-groupedbarchart--default',
  'dialog--default',
  'dialog--blocked',
  'dialog--stress',
  'drawer--default',
  'drawer--large',
  'flashcard-flashcardaudiobutton--default',
  'flashcard-flashcardflipbutton--default',
  'flashcard-flashcardprogress--default',
  'flashcard-flashcardratingbutton--default',
  'flashcard-flashcardwordskeleton--default',
  'flashcard-flashcardswiper--default',
  'flashcard-flashcardswiper--exiting',
  'form-carddetailsfields--default',
  'form-carddetailsfields--existing-country-control',
  'form-controlledfield--default',
  'form-fieldroot--default',
  'form-fieldroot--stress',
  'form-textinput--stress',
  'message-messagecomposer--growing',
  'message-messagecomposer--states',
  'message-messagecomposer--stress',
  'notice-noticebanner--narrow-stress',
  'operationallist--empty',
  'practice-practicecardbody--default',
  'practice-practicecardbody--completed',
  'practice-practicelevelbadge--default',
  'practice-practiceprogressbar--default',
  'practice-practiceprogressbar--zero',
  'practice-practiceprogressbar--complete',
  'practiceresultpanel--default',
  'quiz-quizoption--default',
  'quiz-quizoption--correct',
  'quiz-quizoption--wrong',
  'quiz-quizoption--long-content',
  'quiz-quizsessionheader--default',
  'toast-toastitem--default',
  'flashcard-flashcardframe--default',
  'flashcard-flashcardframe--limited-height',
  'flashcard-flashcardframe--completed',
  'shadowing-shadowingpanel--default',
  'shadowing-shadowingpanel--completed',
].map((id) => ({ id, story: id, motion: 'reduce' }))
const actions = [
  {
    id: 'progress-changing',
    story: 'practice-practiceprogressbar--changing-value',
    action: 'progress',
  },
  {
    id: 'swiper-entering',
    story: 'flashcard-flashcardswiper--default',
    motion: 'no-preference',
    animationTime: 100,
  },
  {
    id: 'swiper-exiting',
    story: 'flashcard-flashcardswiper--exiting',
    motion: 'no-preference',
    animationTime: 100,
  },
  ...[
    'composer-grow',
    'composer-shrink',
    'composer-keyboard',
    'modal-open',
    'modal-nested',
    'modal-menu',
    'modal-reopen',
    'drawer-open',
    'menu-scroll',
  ].map((action) => ({ id: action, fixture: true, action, motion: 'reduce' })),
]
const cases = [...stories, ...actions].filter(
  (c) => !requested.size || requested.has(c.id),
)
const index = JSON.parse(
  fs.readFileSync(path.join(staticRoot, 'index.json'), 'utf8'),
)
for (const c of cases)
  if (c.story && !index.entries[c.story])
    throw Error('Missing story ' + c.story)
const server = await startStaticStorybook(staticRoot)
const report = {
  phase,
  baseSource: 'be8a31600a548f6b3fb828c650163341e7d42009',
  head: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  localOnly: true,
  cases: [],
  failures: [],
  pageErrors: [],
  blockedHosts: [],
}
let browser
try {
  browser = await chromium.launch({ headless: true })
  for (const width of [390, 1440])
    for (const c of cases) {
      const id = c.id + '-' + width
      if (fs.existsSync(path.join(output, id + '.json.gz'))) continue
      const context = await browser.newContext({
        viewport: { width, height: 1100 },
        colorScheme: 'light',
        reducedMotion: c.motion ?? 'reduce',
      })
      const page = await context.newPage()
      page.setDefaultTimeout(15000)
      await page.clock.setFixedTime(new Date('2026-11-15T12:00:00Z'))
      page.on('pageerror', (e) =>
        report.pageErrors.push({ id, message: e.message }),
      )
      await page.route('**/*', async (route) => {
        const url = new URL(route.request().url())
        if (url.origin !== server.baseUrl) {
          report.blockedHosts.push(url.hostname)
          return route.abort()
        }
        if (url.pathname === '/__styled-runtime.html')
          return route.fulfill({
            contentType: 'text/html',
            body: `<!doctype html><html><head></head><body style="overflow:auto"><div id="root"></div><div id="overlay-root"></div><script type="module" src="/@fs/${root}/test/fixtures/styled-only/Runtime.tsx"></script></body></html>`,
          })
        return route.continue()
      })
      try {
        await page.goto(
          c.fixture
            ? server.baseUrl + '/__styled-runtime.html'
            : server.baseUrl + '/iframe.html?id=' + c.story + '&viewMode=story',
          { waitUntil: 'networkidle' },
        )
        await page
          .locator(c.fixture ? 'h1' : '#storybook-root > *')
          .first()
          .waitFor()
        await page.evaluate(() => document.fonts.ready)
        if (c.action === 'progress')
          await page
            .getByRole('button', { name: 'Atualizar progresso' })
            .click()
        if (c.action?.startsWith('composer-')) {
          const input = page.getByRole('textbox', { name: 'Mensagem local' })
          await input.fill(
            Array.from(
              { length: 20 },
              (_, i) => 'Linha ' + i + ' de conteúdo local',
            ).join('\n'),
          )
          if (c.action === 'composer-shrink') await input.fill('Curta')
          if (c.action === 'composer-keyboard') {
            await input.fill('Primeira linha')
            await input.press('Shift+Enter')
            await input.press('a')
            await input.dispatchEvent('keydown', {
              key: 'Enter',
              code: 'Enter',
              isComposing: true,
              bubbles: true,
              cancelable: true,
            })
            if (
              (await page.locator('[data-submissions]').innerText()) !==
              '0 envios locais'
            )
              throw Error('IME submitted')
            await input.press('Enter')
            await page.getByText('1 envios locais', { exact: true }).waitFor()
            if ((await input.inputValue()) !== '')
              throw Error('Submission did not clear')
          }
        }
        if (c.action?.startsWith('modal-')) {
          await page
            .getByRole('button', { name: 'Abrir modal', exact: true })
            .click()
          await page
            .getByRole('dialog', { name: 'Modal pai', exact: true })
            .waitFor()
          if (c.action === 'modal-nested') {
            await page
              .getByRole('button', { name: 'Abrir modal filho' })
              .click()
            await page
              .getByRole('dialog', { name: 'Modal filho', exact: true })
              .waitFor()
            await page.keyboard.press('Tab')
            await page.keyboard.press('Shift+Tab')
          }
          if (c.action === 'modal-menu') {
            await page.getByRole('button', { name: 'Ações do modal' }).click()
            await page.getByRole('menu').waitFor()
            await page.keyboard.press('Escape')
            if (await page.getByRole('menu').count())
              throw Error('Child menu stayed open')
            if (
              !(await page
                .getByRole('dialog', { name: 'Modal pai', exact: true })
                .isVisible())
            )
              throw Error('Escape dismissed parent')
          }
          if (c.action === 'modal-reopen') {
            await page.keyboard.press('Escape')
            await page
              .getByRole('button', { name: 'Abrir modal', exact: true })
              .waitFor()
            if (
              (await page
                .locator('body')
                .evaluate((el) => el.style.overflow)) !== 'auto'
            )
              throw Error('Inline overflow not restored')
            await page
              .getByRole('button', { name: 'Abrir modal', exact: true })
              .click()
            await page.getByRole('dialog').waitFor()
          }
        }
        if (c.action === 'drawer-open') {
          await page
            .getByRole('button', { name: 'Abrir drawer', exact: true })
            .click()
          await page.getByRole('dialog', { name: 'Drawer local' }).waitFor()
        }
        if (c.action === 'menu-scroll') {
          await page.getByRole('button', { name: 'Ações locais' }).click()
          await page.getByRole('menu').waitFor()
          await page.evaluate(() => window.scrollTo(0, 180))
          await page.waitForTimeout(100)
        }
        await page.evaluate((time) => {
          for (const animation of document.getAnimations()) {
            animation.pause()
            animation.currentTime = time ?? 0
          }
        }, c.animationTime)
        await page.waitForTimeout(100)
        const readMetrics = () =>
          page.evaluate(() => {
            const properties = [
              'display',
              'position',
              'width',
              'height',
              'min-height',
              'max-height',
              'min-width',
              'max-width',
              'top',
              'left',
              'right',
              'bottom',
              'margin-top',
              'margin-right',
              'margin-bottom',
              'margin-left',
              'padding-top',
              'padding-right',
              'padding-bottom',
              'padding-left',
              'font-family',
              'font-size',
              'font-weight',
              'line-height',
              'letter-spacing',
              'color',
              'background-color',
              'text-align',
              'align-items',
              'justify-content',
              'gap',
              'flex',
              'flex-shrink',
              'flex-direction',
              'flex-wrap',
              'overflow-x',
              'overflow-y',
              'opacity',
              'visibility',
              'transform',
              'z-index',
              'animation-name',
              'animation-duration',
              '--tx',
              '--ty',
              '--tr',
              'stroke',
              'fill',
            ]
            const nodes = [...document.body.querySelectorAll('*')].filter(
              (e) => !['SCRIPT', 'STYLE', 'LINK'].includes(e.tagName),
            )
            return {
              text: document.body.innerText,
              overflow: document.documentElement.scrollWidth > innerWidth,
              bodyComputedOverflow: getComputedStyle(document.body).overflow,
              bodyInlineOverflow: document.body.style.overflow,
              appInert: document.getElementById('root')?.inert ?? false,
              layerInert: [
                ...document.querySelectorAll('[data-ui-modal-backdrop]'),
              ].map((e) => e.inert),
              focused:
                document.activeElement?.getAttribute('aria-label') ??
                document.activeElement?.textContent,
              scroll: [scrollX, scrollY],
              nodes: nodes.map((e) => {
                const s = getComputedStyle(e),
                  r = e.getBoundingClientRect()
                return {
                  tag: e.tagName,
                  box: [r.x, r.y, r.width, r.height],
                  css: Object.fromEntries(
                    properties.map((p) => [p, s.getPropertyValue(p)]),
                  ),
                }
              }),
            }
          })
        const metricsBeforeScreenshot = await readMetrics()
        const png = await page.screenshot({
          path: path.join(output, id + '.png'),
          fullPage: true,
          animations: 'allow',
        })
        const metrics = await readMetrics()
        const metricsRepeat = await readMetrics()
        if (JSON.stringify(metrics) !== JSON.stringify(metricsRepeat))
          throw Error(
            'Computed presentation did not stabilize on repeated raw read',
          )
        fs.writeFileSync(
          path.join(output, id + '.json.gz'),
          gzipSync(
            Buffer.from(
              JSON.stringify({
                ...metrics,
                metricsBeforeScreenshot,
                metricsRepeat,
              }),
            ),
          ),
        )
        report.cases.push({
          ...c,
          width,
          sha256: createHash('sha256').update(png).digest('hex'),
          nodes: metrics.nodes.length,
        })
        console.log(phase + ' ' + id)
      } catch (error) {
        report.failures.push({ id, message: error.message })
        console.log('FAILED ' + id + ' ' + error.message.split('\n')[0])
      } finally {
        await context.close()
      }
    }
} finally {
  await browser?.close()
  await server.close()
  fs.writeFileSync(
    path.join(output, 'report-' + Date.now() + '.json'),
    JSON.stringify(report, null, 2) + '\n',
  )
  console.log(
    JSON.stringify({
      cases: report.cases.length,
      failures: report.failures,
      pageErrors: report.pageErrors,
    }),
  )
}

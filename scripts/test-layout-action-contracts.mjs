import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
import { inspectStory } from './layout-audit/rules.mjs'
const browser = await chromium.launch()
const page = await browser.newPage()
try {
  const scenario = {
    storyId: 'fixture',
    width: 1280,
    height: 720,
    motion: 'normal',
  }
  const cases = [
    ['boxed-short', 'button', 19, true],
    ['boxed-valid', 'button', 40, false],
    ['text-valid', 'text', 19, false],
    ['text-clipped', 'text', 5, true],
  ]
  for (const [name, appearance, height, fails] of cases) {
    await page.setContent(
      `<button class="lsui-sc-button" data-action-appearance="${appearance}" style="height:${height}px;font-size:16px;line-height:19px;padding:0;border:0;overflow:hidden">Example</button>`,
    )
    const report = await inspectStory(page, scenario, 2)
    assert.equal(
      report.issues.some((x) => x.rule === 'action/minimum-height'),
      fails,
      name,
    )
  }
  for (const [appearance, nested, passes] of [
    ['text', false, true],
    ['button', true, true],
    ['button', false, false],
  ]) {
    const spinner =
      '<span class="lsui-sc-spinner" style="display:inline-block;width:16px;height:16px;animation:spin 1s linear infinite"></span>'
    await page.setContent(
      `<style>@keyframes spin{to{transform:rotate(360deg)}}</style><button class="lsui-sc-button" data-loading="true" data-action-appearance="${appearance}" style="height:40px">Example${nested ? '<span>' + spinner + '</span>' : spinner}</button>`,
    )
    const report = await inspectStory(page, scenario, 2)
    assert.equal(
      report.issues.some(
        (x) => x.rule === 'action/loading-spinner-ending-slot',
      ),
      !passes,
      `${appearance} spinner contract`,
    )
  }
  console.log(
    'Action audit fixtures passed: boxed and text heights remain independently enforced',
  )
} finally {
  await browser.close()
}

// These are production component CSS assertions, not hand-authored geometry fixtures.
// Keep them in the existing CI layout gate because the styled-components Node entry
// does not install createGlobalStyle rules into jsdom's document.
const root = resolve(import.meta.dirname, '..')
const presentation = spawnSync(
  process.execPath,
  [
    resolve(root, 'node_modules/vitest/vitest.mjs'),
    'run',
    '--config',
    resolve(root, 'test/browser/styled-only.config.ts'),
  ],
  { cwd: root, stdio: 'inherit' },
)
if (presentation.error) throw presentation.error
assert.equal(
  presentation.status,
  0,
  'Shared styled presentation browser contracts failed',
)

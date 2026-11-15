import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

// Invoked by the existing test:layout entrypoint; the native unit/Storybook configs stay unchanged.
export default defineConfig({
  test: {
    name: 'styled-browser',
    include: ['test/browser/styled-only.browser.tsx'],
    setupFiles: ['./test/setup.ts'],
    maxWorkers: 1,
    fileParallelism: false,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
})

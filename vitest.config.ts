import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      provider: 'v8',
      reporter: ['text', 'json-summary'],
      reportsDirectory: '.local/quality/coverage',
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
    projects: [
      {
        extends: true,
        test: {
          environment: 'jsdom',
          globals: true,
          maxWorkers: 2,
          name: 'unit',
          setupFiles: ['./test/setup.ts'],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            // Story play functions use synthetic clicks, which cannot grant a media gesture.
            // Permit native fixture playback in this isolated test browser. The separate
            // Playwright capture verifies real clicks with the browser's normal policy.
            provider: playwright({
              launchOptions: {
                args: ['--autoplay-policy=no-user-gesture-required'],
              },
            }),
          },
          name: 'storybook',
        },
      },
    ],
  },
})

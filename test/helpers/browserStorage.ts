import { createRequire } from 'node:module'
// Vitest's Node26 global alias can mask JSDOM's existing localStorage getter.
// A fresh browser realm supplies actual Web Storage semantics to these unit fixtures.
const { JSDOM } = createRequire(import.meta.url)('jsdom') as {
  JSDOM: new (
    html: string,
    options: { url: string },
  ) => { window: { localStorage: Storage; close: () => void } }
}
export function createBrowserStorage() {
  const browser = new JSDOM('', { url: 'https://notes.test' })
  return {
    storage: browser.window.localStorage,
    dispose: () => browser.window.close(),
  }
}

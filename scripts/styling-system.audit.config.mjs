import { resolve } from 'node:path'
import { defineStylingAuditConfig } from '../audit/index.mjs'

export default defineStylingAuditConfig({
  root: resolve(import.meta.dirname, '..'),
  sourceRoots: ['src', 'stories', '.storybook'],
})

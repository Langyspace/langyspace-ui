#!/usr/bin/env node

import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { auditStyling } from './styling.mjs'

const file = process.argv[2]
if (!file) {
  console.error('Usage: langyspace-styling-audit <config-file>')
  process.exitCode = 1
} else {
  try {
    const { default: config } = await import(pathToFileURL(resolve(file)).href)
    const result = await auditStyling(config)
    for (const row of result.failures)
      console.error(`[${row.ruleId}] ${row.file}:${row.line} ${row.message}`)
    if (result.failures.length) process.exitCode = 1
    else
      console.log(
        `Langyspace styling audit passed: ${result.files.length} owned source files; ${result.generatedFiles.length} verified generated assets.`,
      )
  } catch (error) {
    console.error(
      `Langyspace styling audit failed: ${error.code ?? error.message}`,
    )
    process.exitCode = 1
  }
}

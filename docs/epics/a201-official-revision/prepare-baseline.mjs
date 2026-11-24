import { execFileSync } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
const root = process.cwd()
const target = resolve(
  root,
  '.github/evidence/a201-official-revision/before-source',
)
const baseline = 'cfc558ed36d4ffaacb4d43854961a15cc10b3581'
await mkdir(target, { recursive: true })
for (const name of [
  'A201Lesson.tsx',
  'A201.practice.tsx',
  'A201.conversation.tsx',
  'A201.data.ts',
  'A201.styles.ts',
  'A201.turns.ts',
  'A201.content.json',
]) {
  let text = execFileSync(
    'git',
    ['show', `${baseline}:stories/materials/A201/${name}`],
    { encoding: 'utf8' },
  )
  for (const [from, to] of [
    ['../../../src/', '../../../../src/'],
    ['../shared/', '../../../../stories/materials/shared/'],
    ['../UXLab/', '../../../../stories/materials/UXLab/'],
    ['./assets/', '../../../../stories/materials/A201/assets/'],
  ])
    text = text.replaceAll(from, to)
  await writeFile(resolve(target, name), text)
}
await writeFile(
  resolve(target, 'index.html'),
  `<!doctype html><html><meta name="viewport" content="width=device-width,initial-scale=1.0"><div id="root"></div><script type="module">import React from 'react';import{createRoot}from'react-dom/client';import{GlobalStyles}from'../../../../src/foundations/theme/GlobalStyles';import{FontStyles}from'../../../../stories/materials/Standalone/Standalone.styles';import{A201Lesson}from'./A201Lesson';createRoot(document.getElementById('root')).render(React.createElement(React.Fragment,null,React.createElement(GlobalStyles),React.createElement(FontStyles),React.createElement(A201Lesson,{initialPageId:'s1'})));</script></html>`,
)

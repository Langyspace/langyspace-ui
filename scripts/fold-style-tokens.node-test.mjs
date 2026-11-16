import assert from 'node:assert/strict'
import test from 'node:test'
import { transformSync } from '@babel/core'
import { foldStyleTokens } from './fold-style-tokens.mjs'

const transform = (source) =>
  transformSync(source, { plugins: [foldStyleTokens], configFile: false }).code

test('folds static style values and leaves the theme callback live', () => {
  const output = transform(
    "import {styled} from 'styled-components'; const Box = styled.div`color:${'red'};gap:${8}px;background:${p => p.theme.canvas};`;",
  )
  assert.match(output, /color:red;gap:8px;background:\$\{p => p.theme.canvas\}/)
})

test('preserves escape sequences and arbitrary tagged-template semantics', () => {
  const value = '` ${x} \\ path'
  const source =
    "import {css} from 'styled-components'; const a=css`content:${" +
    JSON.stringify(value) +
    "};`; const other=tag`color:${'red'};`;"
  const output = transform(source)
  assert.match(output, /const other = tag`color:\$\{'red'\};`/)
  assert.doesNotThrow(() => transform(output))
})

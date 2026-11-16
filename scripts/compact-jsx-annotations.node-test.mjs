import test from 'node:test'
import assert from 'node:assert/strict'
import { compactJSXAnnotations } from './compact-jsx-annotations.mjs'

test('keeps top-level allocations and styled annotations while compacting local JSX', () => {
  const output =
    compactJSXAnnotations(`import {jsx as h} from 'react/jsx-runtime';
const top = /* @__PURE__ */ h('span', {});
const Box = /* @__PURE__ */ styled.div([]);
export function Example() { return /* @__PURE__ */ h(Box, {}); }`)
  assert.match(output, /top = \/\* @__PURE__ \*\/ h/)
  assert.match(output, /Box = \/\* @__PURE__ \*\/ styled/)
  assert.match(output, /return\s+h\(Box/)
  assert.equal(output.match(/__PURE__/g).length, 2)
})

test('leaves unrelated calls and a module without JSX imports intact', () => {
  const input = 'function example() { return /* @__PURE__ */ factory(); }'
  assert.equal(compactJSXAnnotations(input), input)
})

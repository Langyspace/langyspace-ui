import { expect, it } from 'vitest'
import { cssIdSelector } from '../../src/internal/cssIdSelector'

it.each(['_r_0_', ':R1:', 'prefix:"quote\\slash space', '2-leading', 'olá-😀'])(
  'targets only the exact DOM ID %s',
  (id) => {
    const element = document.createElement('div')
    element.id = id
    document.body.append(element)
    try {
      expect(document.querySelector(cssIdSelector(id))).toBe(element)
    } finally {
      element.remove()
    }
  },
)

import { inspectStylingSource } from './styling-source.mjs'

const attributes = (text) => {
  const found = []
  const expression =
    /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g
  for (const item of text.matchAll(expression))
    found.push({
      name: item[1].toLowerCase(),
      value: item[2] ?? item[3] ?? item[4] ?? '',
      offset: item.index,
    })
  return found
}

export function inspectStylingHtml(source, file) {
  const findings = []
  let position = 0
  while (position < source.length) {
    const start = source.indexOf('<', position)
    if (start < 0) break
    if (source.startsWith('<!--', start)) {
      const end = source.indexOf('-->', start + 4)
      position = end < 0 ? source.length : end + 3
      continue
    }
    let quote,
      end = start + 1
    for (; end < source.length; end++) {
      const char = source[end]
      if (quote) {
        if (char === quote) quote = undefined
      } else if (char === '"' || char === "'") quote = char
      else if (char === '>') break
    }
    position = end + 1
    const tag = /^<\s*([a-z][\w:-]*)\b/i.exec(source.slice(start, end + 1))
    if (!tag) continue
    const name = tag[1].toLowerCase()
    const attrStart = start + tag[0].length
    const attrs = attributes(source.slice(attrStart, end))
    const attr = (key) => attrs.find((item) => item.name === key)?.value
    const add = (ruleId, offset, message) =>
      findings.push({ ruleId, offset, message })
    for (const item of attrs) {
      if (item.name === 'style')
        add(
          'LSSTYLE002',
          attrStart + item.offset,
          'HTML style attributes bypass the styled-components owner.',
        )
    }
    if (name === 'style')
      add(
        'LSSTYLE004',
        start,
        'Source HTML cannot contain an authored style block; generate critical CSS through styled-components SSR.',
      )
    if (
      name === 'link' &&
      /(?:^|\s)stylesheet(?:\s|$)/i.test(attr('rel') ?? '')
    )
      add(
        'LSSTYLE001',
        start,
        'Source HTML cannot load an authored CSS stylesheet.',
      )
    if (['script', 'style', 'textarea', 'title'].includes(name)) {
      const close = new RegExp(`</${name}\\s*>`, 'ig')
      close.lastIndex = position
      const match = close.exec(source)
      const contentEnd = match?.index ?? source.length
      if (
        name === 'script' &&
        [
          undefined,
          '',
          'module',
          'text/javascript',
          'application/javascript',
        ].includes(attr('type'))
      )
        findings.push(
          ...inspectStylingSource(
            source.slice(position, contentEnd),
            file + '.js',
            position,
          ),
        )
      position = match ? close.lastIndex : source.length
    }
  }
  return findings
}

import ts from 'typescript'

const nameOf = (node) => {
  if (!node) return undefined
  if (ts.isIdentifier(node) || ts.isStringLiteral(node)) return node.text
  if (ts.isPropertyAccessExpression(node)) return node.name.text
  if (ts.isElementAccessExpression(node)) return nameOf(node.argumentExpression)
  return undefined
}

const unwrap = (node) => {
  while (
    node &&
    (ts.isParenthesizedExpression(node) ||
      ts.isAsExpression(node) ||
      ts.isSatisfiesExpression(node) ||
      ts.isNonNullExpression(node))
  )
    node = node.expression
  return node
}

const isMember = (node) =>
  ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node)

const touchesStyle = (node) =>
  Boolean(
    node &&
    isMember(node) &&
    (nameOf(node) === 'style' || touchesStyle(node.expression)),
  )

const stylesheet = /\.(?:css|scss|sass|less)(?:[?#].*)?$/i
const fontStylesheet = /^@fontsource\/[a-z0-9-]+\/[a-z0-9./-]+\.css$/i
const assignment = /^(?:=|\+=|-=|\*=|\/=|\?\?=|&&=|\|\|=)$/

export function inspectStylingSource(source, file, offset = 0) {
  const kind = /\.[cm]?[jt]sx$/i.test(file)
    ? ts.ScriptKind.TSX
    : ts.ScriptKind.TS
  const parsed = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    kind,
  )
  const findings = []
  const reported = new Set()
  const bindings = new Map()

  const report = (ruleId, node, message) => {
    const position = node.getStart(parsed)
    const key = `${ruleId}:${position}`
    if (reported.has(key)) return
    reported.add(key)
    findings.push({ ruleId, offset: offset + position, message })
  }
  const readBindings = (node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer
    )
      bindings.set(node.name.text, node.initializer)
    if (ts.isFunctionDeclaration(node) && node.name)
      bindings.set(node.name.text, node)
    ts.forEachChild(node, readBindings)
  }
  readBindings(parsed)

  const isStyleReference = (input, seen = new Set()) => {
    const node = unwrap(input)
    if (!node || seen.has(node)) return false
    seen.add(node)
    if (touchesStyle(node)) return true
    if (isMember(node)) return isStyleReference(node.expression, seen)
    return (
      ts.isIdentifier(node) && isStyleReference(bindings.get(node.text), seen)
    )
  }

  // Resolve owned local props factories at known React/styled sinks. Ordinary data objects
  // named `style` (for example a typography token registry) are not DOM presentation.
  const inspectProps = (input, seen = new Set()) => {
    const node = unwrap(input)
    if (!node || seen.has(node)) return
    seen.add(node)
    if (ts.isIdentifier(node))
      return inspectProps(bindings.get(node.text), seen)
    if (ts.isObjectLiteralExpression(node)) {
      for (const property of node.properties) {
        if (ts.isSpreadAssignment(property))
          inspectProps(property.expression, seen)
        else if (nameOf(property.name) === 'style')
          report(
            'LSSTYLE002',
            property,
            'Author presentation in a tagged styled-components stylesheet, not a style object.',
          )
      }
    } else if (ts.isConditionalExpression(node)) {
      inspectProps(node.whenTrue, seen)
      inspectProps(node.whenFalse, seen)
    } else if (
      ts.isArrowFunction(node) ||
      ts.isFunctionDeclaration(node) ||
      ts.isFunctionExpression(node)
    ) {
      if (node.body && !ts.isBlock(node.body)) inspectProps(node.body, seen)
      else {
        const returns = (child) => {
          if (ts.isReturnStatement(child)) inspectProps(child.expression, seen)
          else if (child === node.body || !ts.isFunctionLike(child))
            ts.forEachChild(child, returns)
        }
        if (node.body) returns(node.body)
      }
    } else if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
      inspectProps(bindings.get(node.expression.text), seen)
    }
  }

  const checkImport = (node, argument) => {
    if (!argument || !ts.isStringLiteralLike(argument)) return
    const value = argument.text
    if (stylesheet.test(value) && !fontStylesheet.test(value))
      report(
        'LSSTYLE001',
        node,
        'Owned stylesheet imports are forbidden; use styled-components. Only package font stylesheets are allowed.',
      )
    if (
      /^(?:sass|less|tailwindcss|styled-jsx)(?:\/|$)|^@(?:emotion|vanilla-extract)\//.test(
        value,
      )
    )
      report(
        'LSSTYLE001',
        node,
        'This source must use the styled-components styling engine.',
      )
  }

  const visit = (node) => {
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node))
      checkImport(node, node.moduleSpecifier)
    if (ts.isJsxAttribute(node) && nameOf(node.name) === 'style')
      report(
        'LSSTYLE002',
        node,
        'JSX style props bypass the styled-components owner.',
      )
    if (ts.isJsxSpreadAttribute(node)) inspectProps(node.expression)
    if (
      (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
      nameOf(node.tagName) === 'style'
    )
      report(
        'LSSTYLE004',
        node,
        'Author styles with styled-components instead of a manual style element.',
      )
    if (
      ts.isBinaryExpression(node) &&
      assignment.test(node.operatorToken.getText(parsed))
    ) {
      if (isStyleReference(node.left))
        report(
          'LSSTYLE003',
          node,
          'Direct DOM CSS mutation must become declarative styled-components state.',
        )
      if (nameOf(node.left) === 'adoptedStyleSheets')
        report(
          'LSSTYLE004',
          node,
          'Do not install an authored CSSOM stylesheet.',
        )
    }
    if (ts.isNewExpression(node) && nameOf(node.expression) === 'CSSStyleSheet')
      report('LSSTYLE004', node, 'Do not create an authored CSSOM stylesheet.')
    if (ts.isCallExpression(node)) {
      const method = nameOf(node.expression)
      if (
        node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        method === 'require'
      )
        checkImport(node, node.arguments[0])
      if (method === 'attrs')
        for (const argument of node.arguments) inspectProps(argument)
      if (method === 'createElement') {
        const tag = node.arguments[0]
        if (
          tag &&
          ts.isStringLiteralLike(tag) &&
          tag.text.toLowerCase() === 'style'
        )
          report('LSSTYLE004', node, 'Do not create a manual style element.')
        if (node.arguments[1]) inspectProps(node.arguments[1])
      }
      if (
        method === 'assign' &&
        node.arguments[0] &&
        isStyleReference(node.arguments[0])
      )
        report(
          'LSSTYLE003',
          node,
          'Do not assign an object to a DOM CSS declaration.',
        )
      if (
        ['setProperty', 'removeProperty'].includes(method) &&
        isMember(node.expression) &&
        isStyleReference(node.expression.expression)
      )
        report(
          'LSSTYLE003',
          node,
          'Direct DOM CSS property mutation bypasses the styled-components owner.',
        )
      if (['setAttribute', 'setAttributeNS'].includes(method)) {
        const argument = node.arguments[method === 'setAttributeNS' ? 1 : 0]
        if (
          argument &&
          ts.isStringLiteralLike(argument) &&
          argument.text.toLowerCase() === 'style'
        )
          report('LSSTYLE003', node, 'Do not assign a raw style attribute.')
      }
      if (['insertRule', 'addRule', 'replaceSync'].includes(method))
        report(
          'LSSTYLE004',
          node,
          'Let styled-components own stylesheet insertion.',
        )
    }
    ts.forEachChild(node, visit)
  }
  visit(parsed)
  return findings
}

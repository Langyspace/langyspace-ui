import ts from 'typescript'

// A function that is unused is removed as a unit. JSX calls inside its body do
// not need additional purity comments. Top-level JSX allocations and every
// styled-components allocation keep their annotations for consumer tree shaking.
export function compactJSXAnnotations(code) {
  const source = ts.createSourceFile(
    'bundle.js',
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS,
  )
  const jsx = new Set()
  for (const statement of source.statements) {
    if (
      !ts.isImportDeclaration(statement) ||
      statement.moduleSpecifier.text !== 'react/jsx-runtime'
    )
      continue
    const bindings = statement.importClause?.namedBindings
    if (bindings && ts.isNamedImports(bindings))
      for (const item of bindings.elements)
        if (
          ['jsx', 'jsxs', 'jsxDEV'].includes(
            item.propertyName?.text ?? item.name.text,
          )
        )
          jsx.add(item.name.text)
  }
  const edits = []
  function visit(node, insideFunction) {
    const inside = insideFunction || ts.isFunctionLike(node)
    if (
      inside &&
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      jsx.has(node.expression.text)
    ) {
      const prefix = code.slice(node.getFullStart(), node.getStart(source))
      for (const match of prefix.matchAll(/\/\*\s*[@#]__PURE__\s*\*\//g))
        edits.push([node.getFullStart() + match.index, match[0].length])
    }
    ts.forEachChild(node, (child) => visit(child, inside))
  }
  visit(source, false)
  for (const [start, length] of edits.sort((a, b) => b[0] - a[0]))
    code = code.slice(0, start) + code.slice(start + length)
  return code
}

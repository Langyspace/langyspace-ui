// Resolve only literal interpolations of styled-components templates. Functions,
// theme overrides and arbitrary tagged templates retain their runtime semantics.
export function foldStyleTokens({ types: t }) {
  const escapeRaw = (value) =>
    value
      .replaceAll('\\', '\\\\')
      .replaceAll('`', '\\`')
      .replaceAll('${', '\\${')
  return {
    name: 'fold-static-style-tokens',
    visitor: {
      TaggedTemplateExpression(path) {
        let tag = path.node.tag
        while (t.isCallExpression(tag) || t.isMemberExpression(tag))
          tag = t.isCallExpression(tag) ? tag.callee : tag.object
        if (!t.isIdentifier(tag)) return
        const binding = path.scope.getBinding(tag.name)
        if (
          !binding?.path.isImportSpecifier() ||
          binding.path.parentPath.node.source.value !== 'styled-components'
        )
          return
        const { expressions, quasis } = path.node.quasi
        const nextQuasis = [quasis[0]],
          nextExpressions = []
        expressions.forEach((expression, index) => {
          const following = quasis[index + 1]
          if (t.isStringLiteral(expression) || t.isNumericLiteral(expression)) {
            const previous = nextQuasis[nextQuasis.length - 1]
            const value = String(expression.value)
            previous.value.raw += escapeRaw(value) + following.value.raw
            previous.value.cooked =
              (previous.value.cooked ?? '') +
              value +
              (following.value.cooked ?? '')
            previous.tail = following.tail
          } else {
            nextExpressions.push(expression)
            nextQuasis.push(following)
          }
        })
        path.node.quasi.expressions = nextExpressions
        path.node.quasi.quasis = nextQuasis
      },
    },
  }
}

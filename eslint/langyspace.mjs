// Library conventions that generic plugins do not express. Each convention is a
// separate rule so existing debt can be suppressed and paid down per rule.

const styleRuntimeImports = new Set([
  'createGlobalStyle',
  'css',
  'keyframes',
  'styled',
])

const rawColor = /#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?)\(/i
const rawColorMatches = new RegExp(rawColor.source, 'gi')

const componentTypes = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Keep component files free of type declarations; use <Component>.types.ts.',
    },
    messages: {
      moveTypes:
        'Declare component types in <Component>.types.ts and export them from there.',
    },
    schema: [],
  },
  create(context) {
    const report = (node) => context.report({ node, messageId: 'moveTypes' })

    return {
      'Program > TSInterfaceDeclaration': report,
      'Program > TSTypeAliasDeclaration': report,
      'Program > ExportNamedDeclaration > TSInterfaceDeclaration': report,
      'Program > ExportNamedDeclaration > TSTypeAliasDeclaration': report,
      'ExportNamedDeclaration[exportKind="type"][declaration=null]': report,
      'ExportSpecifier[exportKind="type"]': report,
      TSTypeLiteral: report,
    }
  },
}

const componentStyles = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Keep styled-components definitions in <Component>.styles.ts.',
    },
    messages: {
      moveStyles:
        'Define styles in <Component>.styles.ts and import them as `* as Styled`.',
    },
    schema: [],
  },
  create(context) {
    return {
      'ImportDeclaration[source.value="styled-components"][importKind!="type"] > ImportSpecifier[importKind!="type"]'(
        node,
      ) {
        if (styleRuntimeImports.has(node.imported.name)) {
          context.report({ node, messageId: 'moveStyles' })
        }
      },
    }
  },
}

const rawColors = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Use theme colors instead of hex, rgb or hsl literals.',
    },
    messages: {
      useTheme: 'Use a theme color instead of a raw color literal.',
    },
    schema: [],
  },
  create(context) {
    const { sourceCode } = context

    return {
      Literal(node) {
        if (typeof node.value === 'string' && rawColor.test(node.value)) {
          context.report({ node, messageId: 'useTheme' })
        }
      },
      TemplateElement(node) {
        // The element range starts at the opening backtick or `}`.
        const start = node.range[0] + 1

        for (const match of node.value.raw.matchAll(rawColorMatches)) {
          const index = start + match.index

          context.report({
            loc: {
              start: sourceCode.getLocFromIndex(index),
              end: sourceCode.getLocFromIndex(index + match[0].length),
            },
            messageId: 'useTheme',
          })
        }
      },
    }
  },
}

const inlineStyles = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Style elements with styled-components, not the style prop.',
    },
    messages: {
      useStyled:
        'Use a styled component; pass dynamic values through transient props or attrs.',
    },
    schema: [],
  },
  create(context) {
    return {
      'JSXAttribute[name.name="style"]'(node) {
        context.report({ node, messageId: 'useStyled' })
      },
    }
  },
}

export default {
  meta: { name: 'langyspace' },
  rules: {
    'no-component-styles': componentStyles,
    'no-component-types': componentTypes,
    'no-inline-styles': inlineStyles,
    'no-raw-colors': rawColors,
  },
}

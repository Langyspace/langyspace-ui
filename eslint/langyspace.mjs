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

// Builds the CSS text of a template literal, keeping each character's source index.
function templateText(node) {
  let text = ''
  const indexes = []

  node.quasis.forEach((quasi, position) => {
    const start = quasi.range[0] + 1

    for (let offset = 0; offset < quasi.value.raw.length; offset += 1) {
      text += quasi.value.raw[offset]
      indexes.push(start + offset)
    }
    if (position < node.expressions.length) {
      text += '0'
      indexes.push(node.expressions[position].range[0])
    }
  })

  return { text, indexes }
}

const rawBreakpoints = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Use theme breakpoints and viewport heights in media queries.',
    },
    messages: {
      useTheme:
        'Use theme.breakpoints or theme.viewportHeights instead of a raw media query size.',
    },
    schema: [],
  },
  create(context) {
    const { sourceCode } = context
    const feature =
      /\(\s*(?:min-|max-)?(?:width|height)\s*(?::|[<>]=?)\s*\d+(?:\.\d+)?(?:px|r?em)\b/g

    return {
      TemplateLiteral(node) {
        const { text, indexes } = templateText(node)

        for (const query of text.matchAll(/@media[^{]*/g)) {
          for (const match of query[0].matchAll(feature)) {
            const index = indexes[query.index + match.index]

            context.report({
              loc: {
                start: sourceCode.getLocFromIndex(index),
                end: sourceCode.getLocFromIndex(index + match[0].length),
              },
              messageId: 'useTheme',
            })
          }
        }
      },
    }
  },
}

const rawZIndex = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Use the theme z-index scale for stacking across layers.',
    },
    messages: {
      useTheme:
        'Use theme.zIndex for z-index values of 10 or more; local stacking may use 0-9.',
    },
    schema: [],
  },
  create(context) {
    const { sourceCode } = context

    return {
      TemplateLiteral(node) {
        const { text, indexes } = templateText(node)

        for (const match of text.matchAll(/z-index:\s*-?\d{2,}/g)) {
          const index = indexes[match.index]

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

const plugin = {
  meta: { name: 'langyspace' },
  rules: {
    'no-component-styles': componentStyles,
    'no-component-types': componentTypes,
    'no-inline-styles': inlineStyles,
    'no-raw-breakpoints': rawBreakpoints,
    'no-raw-colors': rawColors,
    'no-raw-z-index': rawZIndex,
  },
}

// Shared styling rules for the Langy products: styled-components with the
// @langyspace/ui theme as the only styling path.
export const productConfig = {
  files: ['src/**/*.{ts,tsx}'],
  ignores: ['src/**/*.test.{ts,tsx}'],
  plugins: { langyspace: plugin },
  rules: {
    'langyspace/no-inline-styles': 'error',
    'langyspace/no-raw-breakpoints': 'error',
    'langyspace/no-raw-colors': 'error',
    'langyspace/no-raw-z-index': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            regex: '^(?!@fontsource/).*\\.(css|less|sass|scss)$',
            message: 'Style with styled-components and the @langyspace/ui theme.',
          },
          {
            regex:
              '^(@emotion/|@vanilla-extract/|clsx$|classnames$|sass|styled-jsx|tailwindcss)',
            message: 'Style with styled-components and the @langyspace/ui theme.',
          },
        ],
      },
    ],
  },
}

export default plugin

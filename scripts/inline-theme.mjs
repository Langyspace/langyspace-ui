import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import vm from 'node:vm'
import ts from 'typescript'

const themeFile = resolve(import.meta.dirname, '../src/foundations/theme/theme.ts')
const themeImport = /(?:^|\/)theme\/theme$|^\.\/theme$/

function loadTheme() {
  const { outputText } = ts.transpileModule(readFileSync(themeFile, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  })
  const module = { exports: {} }

  vm.runInNewContext(outputText, { exports: module.exports, module })

  return module.exports.theme
}

// Components read `theme.a.b` for clarity; the package ships the resolved values
// so each component keeps only the tokens it uses instead of the whole theme.
export function inlineTheme({ types: t }) {
  const theme = loadTheme()

  return {
    name: 'inline-langy-theme',
    visitor: {
      ImportDeclaration(path, state) {
        if (!themeImport.test(path.node.source.value)) return
        if (state.filename === themeFile) return

        for (const specifier of path.get('specifiers')) {
          if (
            !specifier.isImportSpecifier() ||
            specifier.node.imported.name !== 'theme'
          )
            continue
          const binding = specifier.scope.getBinding(specifier.node.local.name)

          if (!binding) continue
          let inlinedAll = true

          for (const reference of binding.referencePaths) {
            let current = reference
            const keys = []

            while (
              current.parentPath.isMemberExpression({ object: current.node })
            ) {
              const { computed, property } = current.parentPath.node

              if (!computed && t.isIdentifier(property)) keys.push(property.name)
              else if (
                computed &&
                (t.isStringLiteral(property) || t.isNumericLiteral(property))
              )
                keys.push(String(property.value))
              else break
              current = current.parentPath
            }
            if (keys.length === 0) {
              inlinedAll = false
              continue
            }
            const value = keys.reduce((node, key) => node?.[key], theme)

            if (value === undefined)
              throw current.buildCodeFrameError(
                `theme.${keys.join('.')} does not exist`,
              )
            current.replaceWith(t.valueToNode(value))
          }
          if (inlinedAll) specifier.remove()
        }
        if (path.node.specifiers.length === 0) path.remove()
      },
    },
  }
}

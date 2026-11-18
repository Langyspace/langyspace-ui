import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import vm from 'node:vm'
import ts from 'typescript'

const themeFile = resolve(
  import.meta.dirname,
  '../src/foundations/theme/theme.ts',
)
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

const virtualPrefix = 'virtual:langyspace/theme-default/'
const resolvedPrefix = '\0' + virtualPrefix

function readToken(theme, keys) {
  return keys.reduce((node, key) => node?.[key], theme)
}

function isObject(value) {
  return value !== null && typeof value === 'object'
}

function createDefaults(theme) {
  const ids = new Map()
  const modules = new Map()

  function add(value) {
    const known = ids.get(value)
    if (known) return known

    const id = virtualPrefix + ids.size
    ids.set(value, id)
    const imports = new Map()
    const entries = Object.entries(value).map(([key, entry]) => {
      if (!isObject(entry)) return [key, String(JSON.stringify(entry))]

      const dependency = add(entry)
      let name = imports.get(dependency)
      if (!name) {
        name = 'token' + imports.size
        imports.set(dependency, name)
      }
      return [key, name]
    })
    const shape = Array.isArray(value)
      ? '[' + entries.map(([, entry]) => entry).join(',') + ']'
      : '{' +
        entries
          .map(([key, entry]) => JSON.stringify(key) + ':' + entry)
          .join(',') +
        '}'
    const dependencies = [...imports].map(
      ([from, name]) => 'import ' + name + ' from ' + JSON.stringify(from),
    )
    modules.set(id, [...dependencies, 'export default ' + shape].join('\n'))
    return id
  }

  add(theme)
  return { ids, modules }
}

function defaultsSnapshot() {
  const theme = loadTheme()
  return { theme, ...createDefaults(theme) }
}

// Keep primitive tokens inline so they can fold into CSS. Back the public
// theme and individual default objects with the same build-time modules.
// A component importing a slice does not acquire the rest of the theme.
export function themeBuild() {
  let snapshot
  const defaults = () => (snapshot ??= defaultsSnapshot())
  return {
    defaults: {
      name: 'langyspace-theme-defaults',
      buildStart() {
        snapshot = undefined
        this.addWatchFile(themeFile)
      },
      resolveId(id) {
        if (defaults().modules.has(id)) return '\0' + id
      },
      load(id) {
        if (id.startsWith(resolvedPrefix))
          return defaults().modules.get(id.slice(1))
      },
    },
    inline: ({ types: t }) => ({
      name: 'inline-langy-theme',
      visitor: {
        VariableDeclarator(path, state) {
          if (
            !state.filename ||
            resolve(state.filename) !== themeFile ||
            !t.isIdentifier(path.node.id, { name: 'theme' }) ||
            !path.parentPath.parentPath.isExportNamedDeclaration()
          )
            return
          const { theme, ids } = defaults()
          const identifier = path.scope.generateUidIdentifier('themeDefaults')
          const program = path.findParent((parent) => parent.isProgram())
          program.unshiftContainer(
            'body',
            t.importDeclaration(
              [t.importDefaultSpecifier(t.cloneNode(identifier))],
              t.stringLiteral(ids.get(theme)),
            ),
          )
          path.node.init = identifier
        },
        ImportDeclaration(path, state) {
          if (!themeImport.test(path.node.source.value)) return
          if (state.filename === themeFile) return

          const { theme, ids } = defaults()
          const imports = new Map()
          for (const specifier of path.get('specifiers')) {
            if (
              !specifier.isImportSpecifier() ||
              specifier.node.imported.name !== 'theme'
            )
              continue
            const binding = specifier.scope.getBinding(
              specifier.node.local.name,
            )
            if (!binding) continue
            let inlinedAll = true

            for (const reference of binding.referencePaths) {
              let current = reference
              const keys = []
              while (
                current.parentPath.isMemberExpression({ object: current.node })
              ) {
                const { computed, property } = current.parentPath.node
                if (!computed && t.isIdentifier(property)) {
                  keys.push(property.name)
                } else if (
                  computed &&
                  (t.isStringLiteral(property) || t.isNumericLiteral(property))
                ) {
                  keys.push(String(property.value))
                } else break
                current = current.parentPath
              }
              if (keys.length === 0) {
                inlinedAll = false
                continue
              }
              const value = readToken(theme, keys)
              if (value === undefined)
                throw current.buildCodeFrameError(
                  `theme.${keys.join('.')} does not exist`,
                )
              if (isObject(value)) {
                const id = ids.get(value)
                let identifier = imports.get(id)
                if (!identifier) {
                  identifier = path.scope.generateUidIdentifier(keys.at(-1))
                  imports.set(id, identifier)
                  path.insertBefore(
                    t.importDeclaration(
                      [t.importDefaultSpecifier(t.cloneNode(identifier))],
                      t.stringLiteral(id),
                    ),
                  )
                }
                current.replaceWith(t.cloneNode(identifier))
              } else {
                current.replaceWith(t.valueToNode(value))
              }
            }
            if (inlinedAll) specifier.remove()
          }
          if (path.node.specifiers.length === 0) path.remove()
        },
      },
    }),
  }
}

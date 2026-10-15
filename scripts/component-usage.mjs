import { existsSync, realpathSync } from 'node:fs'
import { resolve, relative, sep } from 'node:path'
import ts from 'typescript'

export function createComponentUsageResolver(repositoryRoot, entrypoints) {
  const root = realpathSync(repositoryRoot)
  const configPath = ['tsconfig.app.json', 'tsconfig.json']
    .map((name) => resolve(root, name))
    .find(existsSync)
  const config = configPath
    ? ts.getParsedCommandLineOfConfigFile(
        configPath,
        { noEmit: true },
        {
          ...ts.sys,
          onUnRecoverableConfigFileDiagnostic(diagnostic) {
            throw Error(
              ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
            )
          },
        },
      )
    : {
        options: {
          jsx: ts.JsxEmit.ReactJSX,
          module: ts.ModuleKind.ESNext,
          moduleResolution: ts.ModuleResolutionKind.Bundler,
        },
        fileNames: ts.sys.readDirectory(resolve(root, 'src'), ['.ts', '.tsx']),
      }
  const program = ts.createProgram(
    entrypoints?.map((file) => realpathSync(file)) ?? config.fileNames,
    config.options,
  )
  const checker = program.getTypeChecker()
  const memo = new Map()
  const sourceFiles = program
    .getSourceFiles()
    .filter((file) => file.fileName.startsWith(resolve(root, 'src') + sep))
  const inside = (node) =>
    node.getSourceFile().fileName.startsWith(root + sep) &&
    !node.getSourceFile().fileName.includes(sep + 'node_modules' + sep)
  const merge = (results) => {
    const byExport = new Map()
    for (const result of results.flat())
      if (!byExport.has(result.exportName))
        byExport.set(result.exportName, result)
    return [...byExport.values()]
  }
  const importDeclaration = (node) => {
    for (let current = node; current; current = current.parent)
      if (ts.isImportDeclaration(current)) return current
  }
  const uiOrigin = (name, node) => [
    { exportName: name, path: [relative(root, node.getSourceFile().fileName)] },
  ]
  const moduleExport = (specifier, name, seen) => {
    const module = checker.getSymbolAtLocation(specifier)
    const symbol =
      module &&
      checker.getExportsOfModule(module).find((value) => value.name === name)
    return symbol ? origins(symbol, seen) : []
  }

  function origins(symbol, seen = new Set()) {
    if (!symbol || seen.has(symbol)) return []
    if (memo.has(symbol)) return memo.get(symbol)
    const next = new Set(seen).add(symbol)
    const results = []
    for (const node of symbol.declarations ?? []) {
      if (!inside(node)) continue
      let found = []
      if (ts.isImportSpecifier(node)) {
        const statement = importDeclaration(node)
        if (node.isTypeOnly || statement.importClause?.isTypeOnly) continue
        const name = (node.propertyName ?? node.name).text
        found =
          statement.moduleSpecifier.text === '@langyspace/ui'
            ? uiOrigin(name, node)
            : moduleExport(statement.moduleSpecifier, name, next)
      } else if (ts.isImportClause(node)) {
        const statement = importDeclaration(node)
        if (!node.isTypeOnly)
          found = moduleExport(statement.moduleSpecifier, 'default', next)
      } else if (ts.isExportSpecifier(node)) {
        const statement = node.parent.parent
        if (node.isTypeOnly || statement.isTypeOnly) continue
        const name = (node.propertyName ?? node.name).text
        if (statement.moduleSpecifier) {
          found =
            statement.moduleSpecifier.text === '@langyspace/ui'
              ? uiOrigin(name, node)
              : moduleExport(statement.moduleSpecifier, name, next)
        } else {
          const local = checker.getExportSpecifierLocalTargetSymbol(node)
          found = local ? origins(local, next) : []
        }
      } else if (ts.isVariableDeclaration(node) && node.initializer) {
        found = expressionOrigins(node.initializer, next)
      } else if (ts.isFunctionDeclaration(node) && node.body) {
        found = jsxOrigins(node.body, next)
      } else if (ts.isExportAssignment(node)) {
        found = expressionOrigins(node.expression, next)
      }
      const path = relative(root, node.getSourceFile().fileName)
      results.push(
        ...found.map((result) => ({
          ...result,
          path: [...new Set([path, ...result.path])],
        })),
      )
    }
    const result = merge([results])
    // Empty cyclic paths are deliberately not cached.
    if (result.length) memo.set(symbol, result)
    return result
  }

  function expressionOrigins(node, seen) {
    if (
      ts.isParenthesizedExpression(node) ||
      ts.isAsExpression(node) ||
      ts.isSatisfiesExpression(node)
    )
      return expressionOrigins(node.expression, seen)
    if (ts.isIdentifier(node))
      return origins(checker.getSymbolAtLocation(node), seen)
    if (ts.isArrowFunction(node) || ts.isFunctionExpression(node))
      return jsxOrigins(node.body, seen)
    if (ts.isTaggedTemplateExpression(node))
      return expressionOrigins(node.tag, seen)
    if (ts.isCallExpression(node)) {
      const callee = node.expression
      if (
        ts.isIdentifier(callee) &&
        ['styled', 'memo', 'forwardRef'].includes(callee.text)
      )
        return node.arguments[0]
          ? expressionOrigins(node.arguments[0], seen)
          : []
      if (ts.isPropertyAccessExpression(callee)) {
        if (['attrs', 'withConfig'].includes(callee.name.text))
          return expressionOrigins(callee.expression, seen)
        if (['memo', 'forwardRef'].includes(callee.name.text))
          return node.arguments[0]
            ? expressionOrigins(node.arguments[0], seen)
            : []
      }
    }
    if (ts.isPropertyAccessExpression(node)) {
      const symbol = checker.getSymbolAtLocation(node.name)
      const resolved = origins(symbol, seen)
      if (resolved.length) return resolved
      if (ts.isIdentifier(node.expression)) {
        const namespace = checker.getSymbolAtLocation(node.expression)
        for (const declaration of namespace?.declarations ?? []) {
          if (!ts.isNamespaceImport(declaration)) continue
          const statement = importDeclaration(declaration)
          if (statement.importClause.isTypeOnly) continue
          if (statement.moduleSpecifier.text === '@langyspace/ui')
            return uiOrigin(node.name.text, node)
          return moduleExport(statement.moduleSpecifier, node.name.text, seen)
        }
      }
    }
    return []
  }

  function jsxOrigins(node, seen = new Set()) {
    const found = []
    function visit(current) {
      if (
        ts.isJsxOpeningElement(current) ||
        ts.isJsxSelfClosingElement(current)
      ) {
        const file = relative(root, current.getSourceFile().fileName)
        found.push(
          ...expressionOrigins(current.tagName, seen).map((result) => ({
            ...result,
            path: [...new Set([file, ...result.path])],
          })),
        )
      }
      ts.forEachChild(current, visit)
    }
    visit(node)
    return merge([found])
  }

  return {
    files: sourceFiles.map((file) => file.fileName),
    uses(file) {
      const source = program.getSourceFile(realpathSync(file))
      if (!source) throw Error('Source not in program: ' + file)
      return jsxOrigins(source)
    },
  }
}

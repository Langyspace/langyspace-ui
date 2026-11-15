import assert from 'node:assert/strict'
import fs from 'node:fs'
import { execFileSync } from 'node:child_process'
import ts from 'typescript'

const base = '8aaa792d207507e07f00f17483e9c2e25845ac40'
const readBase = (file) =>
  execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' })
const parse = (file, text) =>
  ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith('tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )
const printer = ts.createPrinter({ removeComments: true })
const print = (node) =>
  printer.printNode(ts.EmitHint.Unspecified, node, node.getSourceFile())
const checkedUnchangedFiles = [
  'src/components/ActionMenu/useActionMenu.ts',
  'src/components/ActionMenu/position.ts',
  'src/components/Calendar/WeekView.tsx',
  'src/components/Charts/GroupedBarChart.tsx',
  'src/components/Practice/PracticeProgressBar.tsx',
  'src/components/Flashcard/FlashcardSwiper.tsx',
]
for (const file of checkedUnchangedFiles)
  assert.equal(fs.readFileSync(file, 'utf8'), readBase(file), file)

const stateNames = new Set([
  'measurement',
  'measuredHeight',
  'backdropId',
  'layerOrder',
])
const normalized = (file, text) => {
  const source = parse(file, text)
  const result = ts.transform(source, [
    (context) => {
      const visit = (node) => {
        if (ts.isImportDeclaration(node)) return undefined
        if (ts.isJsxText(node)) {
          const text = node.text
            .split(/\r\n|\n|\r/)
            .map((line, index, lines) => {
              let value = line.replace(/\t/g, ' ')
              if (index !== 0) value = value.replace(/^ +/, '')
              if (index !== lines.length - 1) value = value.replace(/ +$/, '')
              return value
            })
            .filter(Boolean)
            .join(' ')
          return text ? context.factory.createJsxText(text) : undefined
        }
        if (ts.isVariableStatement(node)) {
          const declaration = node.declarationList.declarations[0]
          const name = declaration?.name
          if (
            name &&
            (ts.isIdentifier(name)
              ? stateNames.has(name.text)
              : ts.isArrayBindingPattern(name) &&
                name.elements.some(
                  (element) =>
                    ts.isBindingElement(element) &&
                    ts.isIdentifier(element.name) &&
                    stateNames.has(element.name.text),
                ))
          )
            return undefined
        }
        if (ts.isExpressionStatement(node)) {
          const expression = node.expression
          // The new measured/render state and former imperative CSS are covered by browser contracts.
          if (
            ts.isCallExpression(expression) &&
            ts.isIdentifier(expression.expression) &&
            expression.expression.text === 'setLayerOrder'
          )
            return undefined
          if (
            ts.isBinaryExpression(expression) &&
            print(expression.left).endsWith('.style.zIndex')
          )
            return undefined
          if (
            file.includes('MessageComposer') &&
            ts.isCallExpression(expression) &&
            ts.isIdentifier(expression.expression) &&
            expression.expression.text === 'useLayoutEffect'
          )
            return undefined
        }
        if (ts.isJsxFragment(node)) {
          const content = node.children.filter(
            (child) =>
              !(ts.isJsxText(child) && !child.text.trim()) &&
              !(
                ts.isJsxSelfClosingElement(child) &&
                ['Styled.MenuPosition', 'Styled.Presentation'].includes(
                  print(child.tagName),
                )
              ),
          )
          if (content.length === 1) return ts.visitNode(content[0], visit)
        }
        if (ts.isJsxAttribute(node)) {
          const owner = node.parent.parent
          const tag = 'tagName' in owner ? print(owner.tagName) : ''
          if (
            (tag === 'Styled.Menu' && node.name.text === '$position') ||
            (tag === 'Styled.Backdrop' && node.name.text === 'id') ||
            (tag === 'Styled.Input' && node.name.text === '$height')
          )
            return undefined
        }
        return ts.visitEachChild(node, visit, context)
      }
      return (root) => ts.visitNode(root, visit)
    },
  ])
  const textResult = printer.printFile(result.transformed[0])
  result.dispose()
  return textResult
}
const normalizedDrivers = [
  'src/components/ActionMenu/ActionMenu.tsx',
  'src/components/Message/MessageComposer.tsx',
  'src/internal/ModalLayer/ModalLayer.tsx',
]
for (const file of normalizedDrivers)
  assert.equal(
    normalized(file, fs.readFileSync(file, 'utf8')),
    normalized(file, readBase(file)),
    `Unexpected control/render delta: ${file}`,
  )
const stack = 'src/internal/ModalLayer/stack.ts'
const stackFunctions = (text) =>
  parse(stack, text)
    .statements.filter(
      (statement) =>
        ts.isVariableStatement(statement) &&
        statement.declarationList.declarations.some(
          (declaration) =>
            ts.isIdentifier(declaration.name) &&
            [
              'syncLayerInertState',
              'registerModalLayer',
              'unregisterModalLayer',
              'isTopModalLayer',
            ].includes(declaration.name.text),
        ),
    )
    .map(print)
assert.deepEqual(
  stackFunctions(fs.readFileSync(stack, 'utf8')),
  stackFunctions(readBase(stack)),
  'Stack registration/inert ordering changed',
)
const result = {
  base,
  unchangedDriverFiles: checkedUnchangedFiles,
  normalizedRenderAndControlDrivers: normalizedDrivers,
  stackRegistrationAndInertFunctionsUnchanged: true,
  excludedReviewedPresentationDeltas: [
    'Composer measurement state/layout effect',
    'Modal order state/z-index write replacement',
    'private GlobalStyle fragment and backdrop id',
    'private transient presentation props',
  ],
  exclusionValidation:
    'Real-browser computed CSS/actions plus 132-state receipts; this proof does not claim effect equivalence by AST alone.',
}
fs.writeFileSync(
  'docs/epics/styled-components-only/evidence/runtime-equivalence.json',
  JSON.stringify(result, null, 2) + '\n',
)
console.log(JSON.stringify(result))

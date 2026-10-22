# Progresso

## T1 — Lint e registro da dívida (22/10/2026)

Impacto renderizado: `none`. Só ferramentas de desenvolvimento, documentação e
testes das regras; nenhum arquivo de `src`, stories ou build alterado.

- Dependências de desenvolvimento fixadas em versões com pelo menos duas semanas:
  `@eslint-react/eslint-plugin@5.24.10`, `eslint-plugin-jsx-a11y@6.10.2`,
  `eslint-plugin-import-x@4.17.1`, `eslint-import-resolver-typescript@4.4.5`.
- Plugin local `eslint/langyspace.mjs` com quatro regras e testes em
  `test/eslint/langyspace.test.mjs` (RuleTester, 16 casos).
- Presets compartilhados promovidos a `error`, porque bulk suppressions só
  registram erros.
- Registro inicial: 573 violações em 190 arquivos.

| Regra                            | Violações |
| -------------------------------- | --------- |
| `langyspace/no-component-types`  | 217       |
| `langyspace/no-raw-colors`       | 144       |
| `langyspace/no-component-styles` | 76        |
| `@typescript-eslint/*` (strict)  | 59        |
| `import-x/*`                     | 32        |
| `@eslint-react/*`                | 40        |
| `langyspace/no-inline-styles`    | 4         |
| `jsx-a11y/no-autofocus`          | 1         |

Validação local:

- `vitest run --project unit test/eslint/langyspace.test.mjs`: 16 aprovados.
- `eslint .`: aprovado com o registro; um componente de prova com `forwardRef`,
  `styled` no `.tsx`, interface exportada, cor hex, `style`, import de `.css` e
  `isOpen` falhou nas oito regras esperadas e foi removido.

Próxima tarefa: T2 (contrato React 19).

# Legibilidade do código da UI Library

## Objetivo e escopo

Separar os blocos que ficaram colados nos arquivos TypeScript/TSX da biblioteca.
O exemplo inicial é `AuthBrandAccent.test.tsx`: imports, setup e teste não têm
separação. O levantamento encontrou 582 arquivos sem uma linha em branco após os
imports.

Impacto renderizado: `none`. Esta entrega acrescenta apenas linhas em branco no
código existente. Assinaturas, nomes, imports, expressões, JSX, textos e CSS mantêm
seu conteúdo. As outras oportunidades identificadas na revisão ficam fora desta
correção de espaçamento.

## Convenção

- Manter imports consecutivos juntos e separar o bloco das declarações seguintes.
- Separar funções, componentes, tipos, stories e definições de estilos.
- Manter juntos o export de um componente e o reexport de tipos do mesmo módulo
  no entrypoint público; separar os grupos de módulos diferentes.
- Preservar listas compactas de constantes simples relacionadas.
- Separar setup e casos de teste, e distinguir preparação, ação e verificação
  dentro dos testes. Assertions consecutivas continuam agrupadas.
- Preservar comentários associados, literais, templates de CSS e texto do JSX.

## Execução e validação

- [x] Inspecionar o exemplo, as convenções atuais e a base limpa.
- [x] Aplicar a separação aos arquivos em `src/`.
- [x] Comparar cada arquivo alterado com a base: apenas linhas vazias adicionadas
      e árvore sintática/literais preservados.
- [x] Conferir Prettier nos arquivos alterados e revisar exemplos do diff.
- [x] Registrar o resultado; o commit desta entrega contém este documento.

Base: `7aa888e3df8a4deea2d857f5bd792cefb14a6f2d`.
Não requer nova versão do pacote nem adoções nos produtos.

## Resultado de 17/10/2026

Foram examinados os 912 arquivos TypeScript/TSX de `src/`; 735 receberam 2.231
linhas em branco. A separação contempla imports, definições de componentes e
estilos, exports agrupados por módulo, stories e blocos dos testes.

Validação final:

- Linhas não vazias idênticas à base em todos os 735 arquivos.
- Árvores sintáticas e conteúdo dos literais, incluindo templates e texto de JSX,
  idênticos à base em todos os arquivos alterados.
- Prettier aprovado nos 735 arquivos alterados.
- `git diff --check` e `git diff --ignore-blank-lines --exit-code -- src`
  aprovados.
- Diff inspecionado no teste e componente AuthBrandAccent, no AuthSubmitButton e
  no entrypoint público. As assertions consecutivas e os pares de exports de cada
  módulo permanecem agrupados.

Os recibos locais estão em `.local/source-readability-20261017/changes.json` e
`validation.json`. Não foram executadas suítes de comportamento nem capturas
visuais para esta alteração de espaçamento.

Visual gate review: not applicable — apenas separação do código com linhas em
branco, sem alteração renderizada.

# R06 — ActionMenu na barra de views salvas Admin

Impacto direto. UI primeiro: ActionMenu existente na versão oficial 1.7.0 já instalada no produto.
Substituir somente RowMenu usado pela barra de contexto; não migrar os outros menus de fila, header
ou formulários nem remover CSS que eles usam. Preservar renomear, duplicar, excluir, desfazer,
storage local, rotas e stopPropagation. Sem props novas na biblioteca.

Superfícies: início, alunos, professoras, agenda e as oito abas de financeiro a_fazer, cobrancas,
assinaturas, planos, repasses, despesas, influencers, fechamento. A barra não aparece em detail ou
drawer de matrícula; essas superfícies não são alteradas. Fixture: uma view salva local sanitizada,
mesma baseline, relógio, fontes e dados mock reais do produto. Rede externa bloqueada.

1. Capturar Antes fechado/aberto em 390/1440 de todas as superfícies; medir barra, chip e trigger.
2. Adotar ActionMenu size sm e mapear actions para itens semânticos; callbacks continuam locais.
3. Capturar Depois e fronteiras relevantes; aceitar somente concessões pequenas dentro do popup e
   trigger, sem reflow/ocultar comandos. Teclado, Escape, clique fora, foco e propagação
   verificados.
4. Executar o teste existente de salvar/renomear/duplicar/excluir/desfazer e typecheck focados.
5. Conservar dependência/lock 1.7.0; preparar ambiente próprio com frozen install e abrir draft só
   com Evidências e tabela Antes | Depois.

A geometria do trigger é 32px nos dois recipes. Popup UI min-width 208px versus local 196px, item
com alvo mínimo 40px versus densidade anterior; medir e documentar a concessão. Não introduzir
overrides para reproduzir CSS local. Nenhuma mutação remota, merge/release/deploy.

Baseline, adoção e verificações concluídas. Próxima tarefa: publicar evidências e abrir draft;
review humana antes de merge.

## Resultado preparado

A barra, chip e trigger preservam geometria. Popup min-width 196 → 208px, altura medida 142,75 →
143px, tipografia 13,5 → 14px e trigger canônico sem borda. O popup antigo é recortado pelo scroll
horizontal da barra; o portal compartilhado o torna visível. Essa mudança funcional é intencional e
precisa review própria. CSS dos outros menus permanece.

A fixture rola a lista horizontal para mostrar a view salva nos dois lados e espera duas frames
antes de medir/clicar. Isso evita interpretar o scroll automático do Playwright, ainda enfileirado,
como um scroll do usuário após a abertura. Nenhum handler foi alterado na biblioteca para contornar
a preparação do teste. UI 1.7.0 e seus locks permanecem iguais.

## Validação e concessões

70 pares Antes/Depois: 12 superfícies em 390/1440 e início também em
720/721/768/920/921/1280/1281/1536/1551/1552/2048. Fonte Montserrat carregada, relógio e fixture
iguais, PNG width conferida. Geometria de barra/chip/trigger idêntica nos 70 pares; popup cabe no
viewport. Teclado/fechamento em 35 cenários: foco inicial, ArrowUp/ArrowDown, Escape/retorno, Tab
para Salvar view e clique fora. Renomear/duplicar/excluir/desfazer uma view local funcionou em
browser. Nenhuma chamada externa foi permitida.

Typecheck e teste existente de salvar/renomear/duplicar/excluir/desfazer passaram. Comando local do
teste:
`NODE_OPTIONS=--no-experimental-webstorage pnpm exec vitest run src/pages/AdminPortal/index.test.tsx -t 'saves, renames, duplicates, deletes and restores a personal view' --testTimeout=30000`.
Node 26 requer essa opção para evitar que seu storage experimental sem arquivo substitua o storage
do JSDOM; o código do produto não foi alterado para corrigir ambiente de teste. Instalação congelada
com pnpm 11 passou e o bundle instalado 1.7.0 é idêntico ao capturado. Package/lock/política de
idade não mudaram.

Source runtime reduz 37 linhas, sem acrescentar código à biblioteca. Outros menus e sua CSS
continuam locais. Concessões: trigger sem borda; popup 12px mais largo, fonte 14px e alvos de 40px.
O popup agora visível é uma mudança funcional intencional, não igualdade de pixels. Cada PR exige
review humana própria. Nenhum merge/deploy.

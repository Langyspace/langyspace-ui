# Requisitos

- Uma implementação por responsabilidade visual/interativa reutilizável; consumidores fornecem conteúdo e ações. Usar componentes existentes antes de criar API nova.
- Preferir children e elementos semânticos visíveis: AuthEyebrow, AuthTitle/AuthAccent, AuthDescription, AuthForm e botões. Não usar um header que receba toda a árvore como configuração.
- Cada componente próprio tem index.tsx, styles.ts e types.ts, com nome claro, sem dependência de Router/Firebase/serviços. A biblioteca não lê o theme privado do consumidor.
- Não criar flag de produto nem prop de CSS por pequena diferença. Preservar layouts diferentes por composição; prop semântica só com necessidade real.
- Auditar autenticação, marca/legal, campos/ações, navegação, dados/estados, mensagens, calendários, exercícios e relatório Cupom. Reabrir candidatos antes adiados se uma composição menor resolver o custo.
- Preservar semântica de forms, navegação SPA, paste/foco/teclado, disabled/loading, áudio e callbacks. Não alterar serviços ou regras financeiras.
- Cobrir rotas reais e estados afetados: auth/login/cadastro, shells, listas/drawers, calendário, práticas, perfil/pagamentos, site/SEO/legal, relatório/redirecionamento. Fixtures locais sem dados reais, rede externa bloqueada.
- Evidência em390/768/1440 e breakpoints específicos afetados, alturas baixas relevantes, foco/disabled/vazio/loading/erro e conteúdo longo. Reaproveitar evidência válida; não gerar um produto cartesiano sem risco correspondente.
- As tabelas finais mostram Antes/Depois de todas as telas afetadas. PRs incompletos ficam em draft e não são chamados de concluídos. Os PRs R26 existentes são preservados até decidir sua atualização cumulativa; não perder sua baseline.
- Resolver a dívida de lint Student antes de afirmar entrega verde; não desligar regras. Problemas visuais anteriores são distinguidos de regressões introduzidas.

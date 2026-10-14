# Plano técnico

Baselines e workspaces: workspaces.json local, com todos os SHAs. UI/Student/Teacher continuam nos worktrees R26, sem perder commits/evidência. Site/Admin/Cupom têm feature worktrees sparse próprios a partir das refs remotas atuais. Canônicos e trabalho paralelo não são editados.

Fase1 atualiza inventário AST de imports/exports/dynamic imports, alcançabilidade conservadora desde main e componentes/famílias de estilo. A análise manual confirma os callsites e separa código morto. Os38 grupos históricos recebem decisão atual. Fase2 elimina wrappers locais duplicados usando APIs já disponíveis; fases seguintes extraem famílias completas antes de adotar.

Ordem: Auth e composição de resultado; marca/legal; campos/ações/estados; dados/listas; navegação/mensagens; calendário; flashcards/quiz/shadowing; Cupom/Site específicos; varredura residual; evidências/pacote e PRs completos. Cada tarefa tem responsabilidade única e termina por diff/check focado antes da próxima, sem encerrar o turno entre famílias.

Auth usa tokens/recipes equivalentes às duas implementações. Router continua em wrappers locais sem CSS. Props nativas e children preservam refs/eventos/acessibilidade. Tema privado, assets importados de produtos, hooks de domínio e formatos financeiros não entram no pacote.

O R26 ainda não é oficial: rever a API de resultado para composição explícita antes de consolidar o candidato. Toda mudança de revisão requer evidência final nova; o aceite anterior não se transfere. Pacote cumulativo1.21.0 ainda não publicado, em namespace novo de candidato e checksum. Produtos apontam para SHA imutável e integrity; após review usar oficial byte-equivalente.

Capacidade planejada antes dos novos owners: library raw320000/gzip65000; famílias Auth presentation20000/6000, Flashcard presentation22000/6000, Shadowing presentation18000/5000, Calendar presentation20000/6000 e Layout presentation16000/5000. Estes são tetos de capacidade para a expansão autorizada, não metas. Preservar limites das famílias existentes, medir deltas atribuídos por família e tree shaking. Não elevar limites após uma falha apenas para passar.

Validação por família: focused unit/story/manifest e TypeScript dos consumidores afetados. No pacote cumulativo: API, build, bundles e smoke browser/SSR reais. Reusar checks válidos e não repetir full suites por componente; CI ampla permanece assíncrona e evitada por [skip ci] no modo manual. Não enfraquecer audits, budgets ou testes.

Evidência final agrupa estados por risco, não repete centenas de cenários idênticos por fragmento. Capturas locais originais de rotas completas, antes nas fontes/pacotes baselines e depois no candidato exato. Host público UI recebe somente PNGs de fixtures/proveniência. Se o limite do corpo GitHub for atingido, dividir PRs por família/coorte, sem omitir telas ou usar montagens de imagem.

Riscos: estilos que parecem iguais podem ter significados diferentes; não exportar Row/Stack globais só para mover CSS. Public API pode crescer sem ganho; exigir uso ativo e JSX legível. Rotas/dados sensíveis exigem mocks isolados e zero rede de produção. Cupom usa CSS global, preservar escopo. Lint Student e nav Teacher baixos já documentados serão examinados em suas famílias, sem bypass.

Reserva de marca, refinada antes do código da tarefa03: quatro SVGs canônicos totalizam36750 bytes fonte (~49k quando inline). Capacidade cumulativa ajustada antes de medir por esse custo concreto; não é elevação após falha. Famílias existentes continuam protegidas e tree shaking da entrada Button será conferido.

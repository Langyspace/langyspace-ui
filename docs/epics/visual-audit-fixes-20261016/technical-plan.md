# Plano técnico e revisão crítica

Baseline: UI 2529fa9, Teacher 28cca327, Student c3a5472, Admin 7f71897; refs remotas verificadas em 16/10. Worktrees isolados em ~/.local/langyspace-ui-visual-fixes-20261016. Auditoria original: Teacher .local/visual-audit-portals-20261016/relatorio.md.

1. Rever composição FlashcardFrame/Stage/Deck: respeitar altura disponível e reservar ações; evitar cortar conteúdo. Frentes/versos devem permitir leitura em espaços curtos. Consumidor Teacher deve dimensionar pelo container real (aviso e shell), Student mantém sessão existente.
2. ShadowingReader pode encolher e rolar seu conteúdo; ControlDock preserva ações. Verificar limites definidos pelos painéis dos produtos.
3. ToggleButton: regra de hover restrita ao não selecionado, preservando estado sem alterar API.
4. Admin: depurar URL/seleção antes de editar; manter fonte única de verdade para aula aberta, sem estado duplicado que reabra o drawer.

Riscos: clipping com transformação 3D, conteúdo longo, rolagem aninhada, foco após fechamento e outras composições do leitor. Mitigação: stories representativas, browser focal com hit tests/cliques reais, retrato/desktop e música. Sem alterações de APIs/dados. Trade-off: rolar texto/cartão quando necessário, mantendo ações visíveis e tipografia atual.

Validação: até dois checks focais por entrega (terceiro apenas se alto risco); browser das reproduções como evidência funcional/visual e typecheck ou stories focadas. Build para produzir candidato imutável, smoke apenas pelo empacotamento. Gates amplos pertencem à CI. Não monitorar após push; lookup único de URLs por SHA.

Revisão PM/TL/engenharia/QA: escopo limitado aos cinco defeitos, com um painel compartilhado de props nativas; antes/depois reais em todos os consumidores afetados; confiança limitada ao ambiente sintético/Chromium. PRs dependentes em draft até pacote oficial aprovado; aprovação atual exigida para integrar, sem auto-merge.

## Refinamento após reprodução focal

Reduzir apenas o cartão/leitor libera botões, mas produz leitura inadequada em 844×390. Em telas largas e baixas (640–900 px, altura até 500 px), distribuir conteúdo e controles em duas colunas. ShadowingPanel concentra o painel repetido dos dois portais, com props nativas e composição explícita header/Reader/ControlDock; FlashcardFrame usa a mesma regra interna. Frente/verso e leitor podem rolar conteúdo longo; nenhuma prop específica por portal. Retrato/desktop mantêm uma coluna.

Admin: a URL é atualizada no fechamento, mas o efeito que copia item da URL para estado local entra em loop por dependências derivadas instáveis. Derivar a aula da URL elimina a duplicação e o loop.

Site tem showcase de ShadowingReader, mas continua pinado em 2.0.0 e não recebe adoção neste lote. A nova composição usa ShadowingPanel somente nos portais de prática.

## Composição de resultados

A grade compacta depende da presença dos componentes de estudo (FlashcardStage ou ShadowingReader), sem flags adicionais. Resultados não usam essa grade. Frames com header e sem conteúdo de estudo podem rolar em telas móveis, sem comprimir as ações finais. A posição do cartão é estável antes/depois de virar, mesmo quando o rodapé de avaliações ainda não está montado.

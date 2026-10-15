# Verificação cumulativa

Impacto direto da migração. As telas/estados/widths estão associados às fontes baselines.json e ao manifest de evidências. Fixtures sintéticas, rede externa bloqueada, pt-BR/São Paulo, data fixa2026-10-14, DPR1, reduced motion e PNG original: viewport com modal visível e fullPage nos demais casos. Estados bottom mostram os trechos roláveis internos em capturas separadas. As capturas não consultaram nem publicaram dados de produção. Admin nomes/contatos/IDs/links substituídos na fonte de fixture e revisão de conteúdo, mantendo relações.

| Checagem           | Evidência e limite                                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI API             | 170 valores,236 tipos,531 declarações; write/check API intencionais, runtime 1.21.0 aprovado e publicado no oficial 1.21.1                                                                                          |
| UI build/budgets   | 278416bytes brutos/57981gzip no medidor; limites globais320000/65000 e limites legados preservados                                                                                                                  |
| Arquitetura        | 701 fontes; corrigido import privado CardLink→Card por recipe compartilhada; sem exceção nova                                                                                                                       |
| Pacote             | Tarball instalado em consumidor isolado, import Node ESM, SSR e bundle TypeScript/Vite passaram; stylesheet sem dependência do tema do portal                                                                       |
| Stories            | Build Storybook da revisão completa passou; stories/testes/SSR/browser snippets/props/docs/consumers em manifest                                                                                                    |
| Famílias           | Testes focados por família registrados durante execução; últimas mudanças: Card/CardLink2, Word+manifest6, FileInput1; não somar execuções repetidas                                                                |
| Música Student     | 2 testes de avançar/pular trecho e1 de seek/áudio/progresso de palavras passaram; espera RAF controlada, mesmos tempos de playback                                                                                  |
| Cinco produtos     | TypeScript e bundles passaram com o dist exato do candidato; Site SSR/prerender passou. Manifests, locks e pacotes extraídos conferidos com o mesmo SHA512                                                          |
| Lint               | UI/Student/Admin/Site passou. Cupom não tem lint script. Teacher2 falhas anteriores em efeitos de páginas públicas, blocos idênticos à baseline; não desligadas nem consideradas verdes                             |
| Campo de data Site | 48 cenários Chromium/WebKit da jornada trial passaram; PR4 paralelo não foi incorporado silenciosamente                                                                                                             |
| Capturas           | Compare de headings/control count/rects; corrigidos splash transitório, arquivo48px, tipo de problema48px, seletor Teacher32px externo, CPF50px. UI standalone compara Avatar fallback/Card e resultado equivalente |

Interações são verificadas localmente com mocks/fixtures: seletores/callbacks, links SPA, checkbox/radio, abrir/fechar drawers e estados da prática. Não são smoke de infraestrutura nem prova de deploy.

Dívidas anteriores não bloqueiam descrição honesta: lint Teacher das páginas públicas; quiz Teacher em390x568 tem baseline própria para distinguir limitação antiga de regressão. CI/coverage/full E2E permanecem em seus workflows; a entrega manual [skip ci] executou somente os smokes descritos em entrega.md, sem monitoramento dos workflows. Regras, provider, OTP backend, billing e Calendar/Meet não foram alterados.

A revisão humana foi recebida para os seis PRs originais e os dois ajustes de Sidebar, cada qual na sua revisão atual. A release oficial 1.21.1 e os cinco deploys foram conferidos. [Evidência de staging, produção e limites](entrega.md); sem auto-merge.

Correção das capturas em2026-10-15: impacto none no produto, somente tooling/evidências/documentação. Recaptura real antes/depois de6 pares, verificação do backdrop fixo nos quatro cantos e de PNGs com altura844px; controle não modal preservou fullPage1440×1173. Sintaxe dos dois scripts conferida. Nenhuma repetição dos builds/testes da migração, pois fontes, API, pacote e dependências permanecem iguais. Consulte evidence-capture-fix.md.

# Validação e limites

## Resultado funcional

| Achado | Comportamento corrigido                                                                                        | Evidência focal                                                                                        |
| ------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| F01    | Cartão não intercepta as avaliações; quatro ações acessíveis desde o primeiro frame.                           | Hit tests antes de rolar e ensaios de clique em Difícil/Bom, incluindo 844×390 e área segura de 34 px. |
| F02    | Leitor e controles dividem o espaço em landscape; texto pode rolar sem deslocar Play, tradução ou velocidades. | Teacher/Student, shadowing e música, tradução ativa/oculta, frases longas.                             |
| F03    | Fechar remove a seleção da URL e desmonta o drawer.                                                            | X, Escape, rodapé, backdrop desktop, retorno de foco, URL direta e voltar/avançar.                     |
| F04    | Texto selecionado permanece branco no hover.                                                                   | ToggleButton e calendário Teacher, repouso/hover/foco/disabled, 390/844/1440 px.                       |
| F05    | Prévia usa a altura disponível após aviso e shell; avaliação não começa sob a navegação.                       | Teacher lições/vocabulário, 390×568, 390×844, 768×1000, 844×390 e desktop.                             |

## Checks locais

- UI: 7 testes focais (manifesto, ShadowingPanel e ToggleButton), typecheck e build/declarations para o candidato, snapshot de API revisado: 1 componente e 1 tipo aditivos, SemVer 2.1.0.
- UI: smoke do tarball externo cobre auditoria, SSR, tipos e build do consumidor; candidato inclui as declarações. Terceiro check justificado pelo novo contrato público e pelo empacotamento.
- UI: roteiro `scripts/practice-visual-review.mjs` com stories afetadas e asserts de clique/contraste. Reproduzir com Storybook local iniciado: `node scripts/practice-visual-review.mjs http://localhost:6006 .local/practice-review after`.
- Admin: teste focal de fechamento por rota passou; browser comprova os quatro fechamentos, foco, URL e histórico. A versão anterior reproduz o loop de seleção.
- Teacher/Student: browser focal com fixtures sintéticas e rede externa bloqueada; typecheck da adoção registrado nos documentos dos respectivos PRs.
- Full suites, validate:ui, segurança e E2E de staging pertencem à CI. Não foram executados localmente nem substituídos por estas capturas.

## Comparabilidade e cobertura

`evidence-manifest.json` registra PNGs originais, viewport, rota, baseline, SHA256 dos arquivos e candidato. As imagens de leitura longa incluem a mesma tentativa de rolagem na baseline; quando ela não consegue deslocar o conteúdo antigo, a imagem registra esse resultado real. Stories novas são identificadas sem inventar um Antes.

Capturas usam Chromium, tema atual, dados sintéticos estáveis e viewport igual nas duas fases. Modais usam screenshot do viewport. Não foram usados dados, contas ou mutações de produção. Site/Cupom continuam pinados em sua versão anterior, sem adoção neste lote.

As imagens não certificam Safari, hardware móvel, teclado virtual ou leitores de tela. A composição compacta reserva controles e prioriza texto sobre ilustração; frases longas continuam roláveis. O produto mantém estado, dados, rotas e decisões de estudo.

Visual gate review: pending human

## Reuso focal da revisão final

A última diferença compilada é apenas `align-self: start` em FlashcardImagePanel sob `(min-width: 640px) and (max-width: 900px) and (max-height: 500px)`. Todas as imagens 844×390 foram refeitas. As imagens em 390/768/1440 px preservam sua proveniência anterior e têm CSS efetivo inalterado por essa regra. `runtime-delta-proof.json` contém os dois hashes e a inserção exata; o manifesto diferencia o runtime capturado do candidato validado. As imagens da UI usam o código-fonte das stories correspondente ao mesmo runtime.

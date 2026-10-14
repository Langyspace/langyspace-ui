# Progresso R25

S01 e S02 concluídas. QuizSessionHeader criado com cinco props, Pressable e PracticeProgressBar públicos, SVG equivalente e recipe independente do consumidor. Root export/README/manifest/API snapshot e smokes browser/SSR da CI atualizados. API aditiva; nenhuma alteração em tokens ou exports existentes.

Checks focados: seis testes unit/manifest passaram; build e declarações passaram; snapshot revisado contém somente o novo valor/tipo e três declarations próprios. Bundle observado 140970 raw / 28871 gzip, dentro do orçamento143000/30000 existente, sem aumento. Full-suite, coverage, package smoke e layout amplo ficam com CI.

40 PNGs originais das novas stories: default, nome longo, completed, focus e updating;390/640/641/1440, motion normal/reduced. Nenhuma story equivalente na baseline. Capturas de produtos foram preparadas com baselines imutáveis:154 pares Student e126 Teacher; header/back/opções/texto/disabled/roles/overflow com geometria igual em todos os pares. Loading Teacher também usa o mesmo contrato, sem prop adicional; seus pares são preparados na S03.

Concessões: contador muted para AA; track da barra compartilhada; transição de progresso e supressão por reduced motion no Teacher. Dimensões e layouts externos preservados. Fontes e fixtures não alteram o produto.

Uma colisão local de pasta de evidências foi corrigida antes de publicação:13 arquivos históricos restaurados byte a byte; canônico UI limpo. Novas capturas ficam em .github/evidence/r25-quiz-header, com cópias independentes. Nada histórico entra no diff.

S03 concluída. [Student #19](https://github.com/MarcosLaboriosi/langyspace-student/pull/19) e [Teacher #42](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/42) em draft.154 pares por produto, incluindo28 pares de loading Teacher. TypeScript e frozen locks passaram; candidato imutável conferido por SHA256. Métricas de header/back/options/texto/disabled/roles iguais nas sessões; loading/foco/back também preservados. Fonte dos PNGs e SHAs em .github/evidence/q25s e q25t/provenance.json.

Os produtos são privados: URLs raw de seus repositórios não servem como anexo público. Cópias PNG originais de fixtures ficam no repositório público UI e seus PRs apontam para este SHA imutável. Código de produto, logs e dados reais não foram copiados.

Próxima tarefa única: S04 revisão humana dos três PRs; release oficial da UI, checksum/filemap e integração dos produtos via staging. Nenhum auto-merge.

Visual gate review: accepted by human — pedido explícito de publicação manual em 2026-10-14.
CI iniciada pelos PRs; sem monitoramento após push. Nenhum release oficial ou deploy de produto disparado por estes PRs de feature. Produção não verificada.

Publicação manual autorizada pela product owner por bloqueio de cobrança em Student/Teacher. UI architecture tinha um erro real: hook em render anônimo da story Updating. Corrigido nomeando UpdatingHeader, sem alterar renderização/runtime; arquitetura, lint, formatação e typecheck locais passaram; cinco stories focadas passaram. Tests/package da CI passaram no payload inalterado e são reutilizados. Próxima etapa: merge UI, release manual com checksum e comparação integral do candidato; depois fixar pacote oficial e publicar Hosting staging/produção dos produtos com validação local real. Registros fora do repositório em manual-publication-20261014.

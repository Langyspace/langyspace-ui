# Progresso R25

S01 e S02 concluídas. QuizSessionHeader criado com cinco props, Pressable e PracticeProgressBar públicos, SVG equivalente e recipe independente do consumidor. Root export/README/manifest/API snapshot e smokes browser/SSR da CI atualizados. API aditiva; nenhuma alteração em tokens ou exports existentes.

Checks focados: seis testes unit/manifest passaram; build e declarações passaram; snapshot revisado contém somente o novo valor/tipo e três declarations próprios. Bundle observado 140970 raw / 28871 gzip, dentro do orçamento143000/30000 existente, sem aumento. Full-suite, coverage, package smoke e layout amplo ficam com CI.

40 PNGs originais das novas stories: default, nome longo, completed, focus e updating;390/640/641/1440, motion normal/reduced. Nenhuma story equivalente na baseline. Capturas de produtos foram preparadas com baselines imutáveis:154 pares Student e126 Teacher; header/back/opções/texto/disabled/roles/overflow com geometria igual em todos os pares. Loading Teacher também usa o mesmo contrato, sem prop adicional; seus pares são preparados na S03.

Concessões: contador muted para AA; track da barra compartilhada; transição de progresso e supressão por reduced motion no Teacher. Dimensões e layouts externos preservados. Fontes e fixtures não alteram o produto.

Uma colisão local de pasta de evidências foi corrigida antes de publicação:13 arquivos históricos restaurados byte a byte; canônico UI limpo. Novas capturas ficam em .github/evidence/r25-quiz-header, com cópias independentes. Nada histórico entra no diff.

Próxima tarefa única: S03 finalizar evidências/pacote candidato/PRs draft nos produtos. O release oficial e os merges pertencem à S04, após revisão humana de cada revisão corrente.

Visual gate review: pending human
CI/deploy ainda não disparados. Nenhuma publicação oficial ou produção afirmada.

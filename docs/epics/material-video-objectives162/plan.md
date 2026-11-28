# Vídeos ligados aos objetivos — revisão162

## Entrega autorizada

Aplicar a auditoria161 aprovada pela proprietária: cinco prioridades de alinhamento (A1.09, B1.09, B2.12, B2.08 e C1.03), avaliar treze oportunidades adicionais e conectar a preparação antecipada nas sete extras/experimentais. A base é o commit `1e1dae65306be5945a9ae78b1c96420ea99dbdb1`, já no PR71; cinco melhorias anteriores permanecem e duas fontes foram reavaliadas pela composição real do quadro.

Usar fontes originais horizontais, sem Shorts, com trechos autossuficientes e duração apropriada ao arco. Preservar player, grid, quatro Questions, IDs das páginas/perguntas, vídeo antes da conversa livre e catálogo67. A1.01 e o vídeo validado de DevFirstDay continuam preservados. Uma fonte já adequada pode ser mantida com justificativa, especialmente nos dois alvos opcionais; não substituir para cumprir uma contagem.

## Ordem de execução

1. Corrigir a integração de preload já existente, sem autoplay nem outro player.
2. Curar fontes, conferir limites nas captions e preparar respostas/hints sustentados para cada alvo.
3. Consolidar as dezoito disposições, aplicar dados e testar as novas fontes no iframe real. Metadados não demonstram disponibilidade incorporada.
4. Rever apenas as páginas/estados afetados, executar as verificações locais focadas e atualizar o PR em uma entrega coerente.

## Preparação do player

- `MaterialVideoPage` passa o `preload` canônico para `VideoExercise`.
- `isUpcomingLessonPage` deriva a proximidade da ordem autorada. Não depende do nome de uma página anterior; inserções mudam o gatilho automaticamente.
- InfluencerRoutine, DevStudy, DevInterviews, DevFirstDay, TrialA1 e o adaptador dos dois experimentais avançados adotam a mesma regra.
- Mantém a instância pronta ao entrar; não inicia playback; pausa/libera ao sair da página e da proximidade.
- Teste focado `VideoExcerpt.test.tsx`:10 testes passaram, incluindo a navegação pela composição das extras e uma inserção na ordem.
- Prévia de InfluencerRoutine: iframe `widget2` preparado em `reply`, com autoplay 0; a mesma instância permaneceu em `s_video131`, com Play nativo pausado; após entrar em Free conversation não havia iframe YouTube. Resultado de integração, sem medição de latência universal.

## Limites e revisão

Sem nova API pública ou alteração do contrato da biblioteca; a evidência API659 anterior permanece pertinente enquanto `src` e exports estiverem inalterados. Curadoria final, comparação e limites estão nos recibos desta pasta. Nenhum deploy faz parte desta execução. A revisão humana da seleção atual continua necessária antes da integração do PR.

## Seleção final aplicada

Foram avaliadas dezoito prioridades da auditoria161 e duas seleções anteriores corrigidas por enquadramento:14 disposições alteram os dados e6 preservam a fonte. B2.02, B2.05 e B2.09 continuam oportunidades editoriais abertas, sem substituição forçada. O PR inclui19 atividades alteradas:14 desta revisão e5 seleções anteriores mantidas.

| Material | Atividade | Trecho | Duração |
|---|---|---|---|
| a1-09 | Find the pharmacy | 92.8–112.9s | 20.1s |
| b1-09 | Report what was taken | 17.4–77.2s | 59.8s |
| b2-08 | Would this apartment suit you? | 185.3–287.15s | 101.85s |
| b1-07 | Before booking the trip | 74.3–125.0s | 50.7s |
| b2-12 | One rule, different needs | 73.96–250.48s | 176.52s |
| c1-03 | When the source changes | 0–103.44s | 103.44s |
| c1-11 | What do you mean? | 3.12–60.06s | 56.94s |
| b2-04 | Why did the tests fail? | 17.209–80.084s | 62.875s |
| trial-b1 | Would you try camping? | 20–146.5s | 126.5s |
| trial-b2 | What does the job cost? | 66.2–182.45s | 116.25s |
| extra-influencer-routine | Get ready for a workout | 44–146s | 102s |
| extra-dev-interviews | Explain a project decision | 348–492s | 144s |
| a1-04 | How often do they do it? | 65–104s | 39s |
| a2-01 | Describe what he is doing | 90–132s | 42s |

A1.09 usa Easy English/@easyenglish551, dos cartoons Kids-Pages, que é distinto do canal de entrevistas EasyEnglish usado em B1.06. Os recortes de BBC A1.09/A1.04/A2.01 foram rejeitados porque a conversa/ação ocupava só uma faixa ou quadrante, apesar do arquivo horizontal; não foram classificados como Shorts. Trial B1 começa em20s, após o carryover de uma piada da abertura, e preserva a primeira resposta completa. B2.12 tem 176.52s e 8min de atividade autorada, sem temporizador obrigatório.

As perguntas evitam extrapolar o vídeo: o quarto item é transferência oral; o notebook não provado no caso de furto não vira fato; contas da moradia não foram confirmadas; a página de museu revisada enfraquece a evidência sem provar a história falsa; o teste de letras em Studio C não tem resultado dentro do recorte. As legendas e os limites de conteúdo continuam como evidência de curadoria, sem transcrição integral no produto.

## Evidências e validação concluídas

-14 fontes finais abriram o Play nativo e aceitaram a solicitação de reprodução no iframe local, sem mensagem explícita de indisponibilidade. Isso é distinto de assistir continuamente a todos os trechos: várias capturas rápidas ocorreram durante buffering. Quadros reais decodificados foram observados em fontes como PocketPassport, TomScott, FAH, Studio C, RyanGeorge e Channel4. EmB2.12 o vídeo avançou até 120.910s e foi pausado em 143.163s, readyState 4/1280×720; imagem de evidência preservada. Sem certificação perceptiva de toda a audição.
-17 pares antes/depois em 1280×720, tema escuro:14 atividades de dados e3 consumidores somente de preload. As cinco comparações anteriores ainda válidas permanecem na revisão160. As imagens preservam estados iniciais reais; poster/loading variam pela carga assíncrona da fonte. Não foi feita uma nova matriz mobile, pois este lote preserva o player/grid.
-Teste focado: 10 testes passaram. TypeScript: exit 0. API659 reutilizada, pois não há alterações emsrc/exports. Nenhuma suíte, build de pacote ou export adicional.
-Inspeção do diff de autoria:67 materiais preservados, mesmos IDs/ordem e quatro IDs de perguntas por atividade; somente título, instrução, fonte, perguntas e orçamento declarado de atividade mudaram nosJSONs. Relatório em `authorship-receipt.json`.
-Preload observado na composição de InfluencerRoutine, além da cobertura unitária da ordem: prepara na antecessora, conserva a instância ao entrar e libera ao sair; autoplay 0. Não é promessa de latência de rede.

## Entrega e limites

Fonte em branch de PR, sem merge, pacote ou deploy. A revisão humana atual deve avaliar a adequação do humor, apoio ao nível e audição dos trechos. Três oportunidades B2 continuam explicitamente abertas no manifesto. O relatório resumido e as fontes estão em `research-report.md`; o manifesto detalhado preserva os hashes e a proveniência.

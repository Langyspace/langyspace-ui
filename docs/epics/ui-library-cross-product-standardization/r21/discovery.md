# Discovery R21 — alternativas e feedback do quiz

Student portal/index.tsx QuizPlayer e styles QuizOption/Letter/Explain/Mark; Teacher
QuizPreviewSession e StudentLearningPreview/styles.ts. Layout/callbacks são equivalentes:
opção A/B…, texto, resposta correct/wrong/dim/default, ícone decorativo; mensagem de feedback.
Diferenças pequenas: Teacher texto usa verde/vermelho claros de borda; Student usa #166534/#b91c1c.
Padronizar texto na receita Student, com melhor contraste. Geometria, hover/foco e breakpoint640
preservados. Não migrar prompt/header/card/resultados/persistência/áudio nesta unidade.

| Recorte           | Proposta                                  | Concessão / impacto                                                          |
| ----------------- | ----------------------------------------- | ---------------------------------------------------------------------------- |
| Alternativa       | QuizOption native button + letter + state | Cores Teacher passam ao texto escuro; callback/disabled seguem no controller |
| Feedback          | QuizFeedback tone + children              | Mesma anatomy22px icon/14px texto; copy e decisão ficam locais               |
| Pergunta completa | Mantida local                             | Student prompt wrapper/completion async/error; Teacher preview/audio próprio |
| Site demo         | Fora deste piloto                         | Sem contrato provado; não impor engine de quiz ao conteúdo promocional       |

Ganho: remover duas receitas CSS extensas e markup de letter/mark em ambos, sem API de pergunta,
resposta correta, áudio, score, timers ou callback de persistência. Nenhuma variante de produto.

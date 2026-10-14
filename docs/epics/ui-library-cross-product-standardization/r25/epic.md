# R25 — Cabeçalho de sessão de quiz

Student e Teacher repetem o mesmo cabeçalho: retorno, nome truncado, contador e progresso. Compartilhar a apresentação em QuizSessionHeader, mantendo QuizExerciseShell/frame, questões, teclado numérico/Enter, áudio, pontuação e persistência nos produtos.

Dois consumidores ativos: Student /licoes (Gramática e personalizadas) e Teacher /alunos/:studentId/licoes (mesmas categorias). Admin, Site e Cupom não têm este cabeçalho ativo; não criar adoções artificiais. Site/demo, conclusão e outros headers ficam fora deste recorte.

Sucesso: um owner com cinco props semânticas, remoção dos três wrappers locais por produto, layouts externos preservados e PRs com imagens originais lado a lado. Impacto direct. Nenhuma migração antes da revisão das propostas anteriores; a solicitação atual autoriza preparar este próximo recorte.

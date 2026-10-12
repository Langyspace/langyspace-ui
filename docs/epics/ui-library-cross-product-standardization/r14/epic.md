# R14 — progresso linear dos cards de prática

## Problema e objetivo

Student e Teacher repetem uma linha de progresso de 6px nos cards de flashcards, quiz, shadowing e música. O cálculo dos dados e os controles pertencem aos produtos; a apresentação da barra pode ter um contrato único. O objetivo é preparar uma receita pequena, preservar a geometria dos cards e facilitar a composição futura da PracticeCard R20.

## Escopo e jornada

Piloto em Student `/licoes` e Teacher `/alunos/:studentId/licoes`, cinco abas: flashcards, personalized, quiz, shadowing e music. Estudar três branches de card em cada produto, com zero, parcial e concluído. Ao navegar/abrir/refazer, os callbacks e estados existentes continuam locais.

Fora do piloto: sessões de quiz/áudio/flashcards, home, vocabulário, lista de alunos, CEFR, segmentos, StepIndicator, lotes financeiros do Admin, demonstrações Site e skeletons. Manter seus styled ainda consumidos. Cupom não tem consumidor linear equivalente identificado.

## Impacto e sucesso

Implementação futura `direct`: barra, motion e semântica decorativa; screenshots devem mostrar toda tela afetada. Este planejamento é `none`, pois só escreve Markdown. Sucesso: mesma altura, largura, posição, cores, raio, texto e ações nos dois pilotos; nenhuma prop de produto/layout/tema/tamanho; motion reduzido sem transição; domínio e acessibilidade dos botões preservados.

Compartilhamento não significa redução global de linhas ou bytes: a UI cresce e os styled locais seguem atendendo consumidores fora do recorte. Medir o custo real antes de ampliar. Se o piloto alterar significativamente layouts ou exigir variantes, revisar o plano e manter a receita local.

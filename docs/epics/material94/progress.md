# Progresso

Branch feat/material94 criada a partir da entrega93 preservada. Inventário inicial confirmou países/sentimentos com3 itens, profissões com3, vegetais com3 e diversas conversas pessoais com2 pares. Há diálogos contínuos divididos em partes (8–14 falas no total) que não são automaticamente defeitos; serão classificados pela função e continuidade.

Próxima tarefa: fechar as ocorrências no catálogo ativo e reutilizar o acervo original.

Implementação fechada: quatro blocos recuperados (países, sentimentos, profissões e vegetais); 57 práticas pessoais existentes completadas, mais a conversa com fotos e quatro trackers nativos completos. Find Mia permanece uma verificação visual factual. Países e sentimentos recuperam imagens e labels já existentes; somente seis exemplos ausentes foram sintetizados com a mesma Jessica e combinados com os labels (gap quieto total de350ms). Os12 novos IDs têm proveniência e arquivos relativos exatos, sem alterar clipes válidos.

O inventário cobre as 65 fontes ativas:69 grupos introdutórios verificados, três referências suplementares justificadas, modelos gravados completos agrupados por continuidade e285 slots de compreensão. ReviewedLesson separa propósito nos dados; CourseActivity faz o mesmo. PromptExercise compõe RevealCard e VocabularyControls existentes; nenhuma API pública ou pacote novo. Não houve novas imagens, fatos de personagem, homework, backend ou alteração de Student.

Check de autoria passou; os três testes focados de interação passaram (compreensão numerada, introdução com três pares, dica progressiva sem abrir resposta). Typecheck final passou depois de corrigir um item de ficha indevidamente duplicado durante autoria. Capturas antes/depois e revisão funcional de arquivos estão em andamento. A conferência de fonte não constitui aprovação humana de áudio ou visual.

A inspeção dos casos abertos encontrou uma distinção adicional: as missões e respostas curtas não têm gabarito factual. O refinamento mantém sua intenção visível e a lâmpada de linguagem, sem apresentar o placeholder “One possible response” como resposta. São 102 slots de resposta/aplicação (dois sem pergunta por serem adaptadores de mapa), separados das 183 verificações de compreensão. O inventário também confere diretamente os 10 números, as 26 letras e os quatro modelos nativos de oito turnos. A verificação foi integrada ao CI.

O primeiro neutral 09b5ce66 e a primeira adoção Teacher d3c51503 foram compilados e publicados com recibo real em staging. Esta publicação intermediária é preservada como histórica: a entrega final ainda precisa do pequeno refinamento de respostas abertas, dos checks invalidados por essa mudança e de novo export/admissão source-bound. Não reutilizar o recibo intermediário como prova da revisão final.

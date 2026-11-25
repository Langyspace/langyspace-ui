# Question list98 — aplicação ao catálogo

## Entrega

Aplicar a direção aprovada no A1.01 a todos os materiais mantidos: Questions com a mesma estrela de Guided conversation, uma lista com borda/divisórias, números brancos, perguntas legíveis e respostas factuais completas. Uma lâmpada externa fica centralizada no fim da coluna; dica e resposta alternam na mesma área reservada. O componente público QuestionList é o dono; PromptExercise só adapta dados. SlidePage e VoiceMessageExercise compartilham a composição.

## Conteúdo

Os 66 materiais atuais foram classificados pela fonte ativa. Os 53 regulares de Course e sete regulares ReviewedLesson usam os mesmos adaptadores; os demais seis são experimentais/extras/Frontend. Todo bloco de perguntas tem pelo menos três itens pertinentes. Perguntas novas são autorais e ancoradas no áudio, diálogo, fatos ou objetivo pessoal; não há preenchimento automático em runtime. Perguntas abertas não recebem falso gabarito. As três aulas A201/B101/B201 hoje delegam a CourseLesson; a checagem anterior ainda inspecionava seus dados legados. Agora valida a fonte ativa, classifica os blocos e reconhece as partes do mesmo diálogo gravado sem inventar novas falas.

Frontend tem três perguntas por parte do diálogo, filtradas por part explícito. InfluencerRoutine e experimentais recebem respostas completas e dicas próprias. Os dois áudios TrialA1 mantêm três perguntas cada em uma lista de seis com uma só lâmpada inferior. Retirada a ação avulsa Now you no rodapé dos múltipla escolha Frontend, conforme a regra de separar tarefas.

## Progresso e validação

- Componente, histórias, documentação e regra de autoria implementados
- Conteúdo dos blocos revisado; checagem estrutural de 66 materiais aprovada
- Verificação local de teclado, revelação, substituição dica/resposta e SSR; API pública intencionalmente aditiva
- Conferência visual dirigida no local; o catálogo completo segue para revisão humana, sem matriz visual ampla
- Sem alteração de texto/IDs de áudio, imagens, gravações, contratos de identidade, navegação ou homework

## Entrega técnica

Reutilizar build/testes válidos enquanto as entradas relevantes não mudarem. Fazer apenas checks focados e snapshot de API; CI cuida das suítes amplas. Commit na feature existente/PR54 em draft, sem merge ou Hosting nesta revisão. Prévia local permanece aberta. Não declarar publicação a partir do push.

## Limites

A checagem verifica contagem, duplicidade, dicas e fontes ativas; não substitui a avaliação pedagógica/visual humana. Respostas longas e composições com seis perguntas devem continuar responsivas, sem scroll dentro da lista nem corte. Conversas pessoais mantêm o contrato de balões, distinto da compreensão factual.

Validação final: 66 materiais; 374 blocos/1.122 perguntas; mínimo de três em todos os blocos verificados. JSONs de áudio, mídia, falas e demais dados fora dos blocos permaneceram iguais. Typecheck, build, API e testes focados aprovados. Ajustes de tipos preexistentes corrigidos sem ampliar a UI: opção vazia de createTheme na história, visualLabel explícito no adaptador Dev e argumentos de Testing Library; o contrato de resposta autoral passa a ser opcional para prática aberta, sem gabarito fictício.

Conferência dirigida: A1.01 com respostas abertas e dica substituindo a primeira; C1.07 com três respostas completas (altura estável de 416px antes/depois); experimental A1/A2 com seis perguntas e lâmpada inteira dentro do viewport de 720px (base do controle em 692px). A variante compacta reduz espaçamento, não fonte. A prévia local permanece em A1.01.

# Anatomia explícita dos flashcards — plano antes da edição

A leitura dos 60 contratos de calendário/prática e dos dois consumidores reais mostrou uma dependência de classes montadas por Student e Teacher: word/rule/phonetic/exampleHint, en/divider/translation/example e circle/message/next. FlashcardFlip procura .front/.back, enquanto esses consumidores fornecem side sem essas classes. Faces escondidas visualmente ainda contêm controles acessíveis. ShadowingTranslation estiliza todo div descendente.

| Componente                | Contrato proposto                                               | Adaptação                                                             | Risco e evidência                                            |
| ------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------ |
| FlashcardWord             | children para termo; phonetic e example opcionais               | Student/Teacher removem classes; skeleton usa slots                   | Dimensões, espaços e conteúdo rico                           |
| FlashcardBack             | term, translation, phonetic e example: quatro slots de conteúdo | Student/Teacher mantêm áudio e texto; retiram markup repetido         | Frente/verso, texto longo e exemplo ausente                  |
| FlashcardFeedback         | grade, mark, children como mensagem e next                      | Produto mantém mensagem, intervalo e persistência; UI possui cor/glow | Quatro avaliações, salvando, reduced motion e anúncio        |
| FlashcardImagePanel       | emoji opcional; children mantém imagem/ação                     | Remover span.emoji nos dois produtos                                  | Fallback e áudio independentes                               |
| FlashcardFlip/Face        | contexto privado somente para lado ativo e marcadores próprios  | Standalone Face da landing continua independente                      | Face inativa inert/aria-hidden; foco, CSS 3D                 |
| FlashcardFlipButton, novo | button nativo nomeado dentro de FlashcardFront                  | Remover role/click/keydown do Swiper nos dois produtos                | Clique no card; Enter/Espaço no áudio; foco nas avaliações   |
| ShadowingContext          | Retirar export sem uso ativo                                    | Student remove reexport morto ShadowContext                           | Sem superficie ativa; ver compatibility.md                   |
| ShadowingTranslation      | children em Content privado                                     | Student/Teacher retiram div implícito                                 | Conteúdo simples/rico, reserva vazia e ausência de vazamento |

Classificação direct/indirect. Teacher: /alunos/:studentId/vocabulario e preview/skeleton. Student: flashcards e shadowing. Site: Face standalone no showcase, preservada. Rotas finais e estados exatos serão reconciliados na adoção, sem inferir uso ativo apenas por import.

Candidato major 2.0.0, ainda não publicado. Adotar os novos contratos nos produtos antes de integrar. Não manter modo legado silencioso. Uma interação nova, FlashcardFlipButton, tem responsabilidade própria; não acrescentar dezenas de exports tipográficos ou flags de layout. Conteúdo, áudio, regras de aprendizagem, progresso e persistência permanecem nos produtos.

Validação focada: contratos/anatomia e comportamento das faces com áudio em testes locais; integração de teclado/camada e capturas nos consumidores na tarefa09/10. Não declarar acessibilidade só pela presença de ARIA. O inventário original tem169 componentes; o novo owner será adicionado explicitamente.

Os outros componentes coesos permanecem e recebem documentação individual. Dados de dias, slots e opções são coleções legítimas, não schemas para gerar telas.

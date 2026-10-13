# R22 — botão de avaliação do flashcard

Student FlashcardsV2.{tsx,styles.ts} RateButton e Teacher StudentFlashcardSession/FlashcardRateButton:
mesmas quatro notas, label/intervalo, selected/hover/feedback. Cartão, flip e scheduler continuam locais.

| Diferença                                                                              | Concessão / custo-benefício                                                                             |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Student altura62/56/52/48 nos limites880/760/700; Teacher62/54/50 nos760/700           | Padrão Student, Teacher diminui2–6px em alturas baixas; não mudar footer/card nem hit target abaixo48   |
| Ambos texto de intervalo#9a e notas claras                                             | Intervalo#6b e tons escuros legíveis, preservando cores das bordas/fundos; a11y não é exceção cosmética |
| Student saving/feedback disabled e confirmação assíncrona; Teacher rate guard síncrono | Native disabled/callback continuam fornecidos pelos produtos; nenhuma lógica de avanço na UI            |
| Timing420/300/600ms e saída por nota                                                   | Permanecem nos controllers e CSS dos cards, fora do botão                                               |

Compartilhar FlashcardRatingButton com grade/selected/interval e props nativas, removendo receta
extensa e markup label/interval dos dois. Grid/footer/question/frame continuam locais. Não migrar
sessão inteira, SRS, shuffle, retry/idempotência, áudio, cartão3D ou asset fallback neste lote.

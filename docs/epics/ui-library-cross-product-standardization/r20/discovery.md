# Discovery R20 — corpo dos cards de prática

Student src/components/features/portal/index.tsx DeckPracticeCard, QuizPracticeCard e
ShadowingLessonCard; Teacher StudentPracticeActivityCards e SavedVocabularyPreviewCard.
Todos repetem corpo flex, padding16, gap8, título16 bold, duas metadatas12 e barra6px.
R12/R14 já padronizaram skeleton e barra. As capas continuam locais: paletas/gradientes,
nível, contagem, check e labels por tipo. Não mover dados de atividade para a UI.

| Parte             | Diferença atual                                                             | Decisão / custo-benefício                                                          |
| ----------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Corpo             | Mesmo layout nos dois; JSX repetido em 3 branches por produto               | Migrar PracticeCardBody com cinco props semânticas                                 |
| Título            | Student div linha1.1; Teacher h3 linha1.25                                  | Padrão h3 e linha1.25, concessionar poucos pixels de altura                        |
| Metadata          | Student regular/centro/linha herdada; Teacher600/linha1.25/última à direita | Padrão600, linha1.25, última à direita; conferir títulos longos e quebra mobile    |
| Concluído         | Teacher/Student mutam cor por seletores privados da capa/title/meta         | Corpo recebe completed; capas e interação continuam locais                         |
| Capas/frame       | Gradiente custom Student, múltiplas paletas, conteúdo e feedback locais     | Manter nesta unidade; não adicionar size, produto, kind ou gradient à API do corpo |
| Vocabulário salvo | Teacher corpo igual e track vazia; Student tem outro card                   | Adotar no Teacher com value0; não impor novo layout ao Student                     |

Ganho: uma fonte do corpo e remoção de três styles Teacher, Body/MetaRow Student,
seis blocos de markup e seletores de conclusão; CardTitle Student permanece porque Chat o usa.
As concessões tipográficas serão medidas por viewport; se causarem cortes ou deslocamento relevante,
reavaliar receita em vez de acrescentar variantes. Não migrar controllers/sessões/progress persistence.

# Ask about the town — correção154

Relato: a página permanecia quebrada. A observação local confirmou duas causas: RolePlayExercise.Scene aplicava max-height a qualquer img descendente, comprimindo a arte interna do RouteMap sem redimensionar o frame dos pontos; e a regra por viewport empilhava mapa e conversa mesmo quando havia espaço para duas colunas, fazendo SlidePageFit encolher toda a página.

## Alterações

- A regra de imagem do RolePlayExercise agora é direta (> img). Imagens internas de componentes filhos preservam sua própria proporção. Imagens diretas continuam com seus limites anteriores.
- Prop opcional layout=split/stacked no dono canônico. Split usa o encaixe natural das duas colunas, com o mesmo mínimo240px já usado na biblioteca, em vez de forçar empilhamento por viewport. Omissão preserva a composição anterior; somente as atividades de mapa optam por split. Mudança compatível/additiva para uma futura versão minor.
- As quatro atividades de mapa usam a composição corrigida. UX Lab ganha MapWithConversation com o mesmo CourseActivity, arte e dados reais, sem variante visual copiada.
- Ask about the town mantém três pares, mas agora a aluna pede localização, rota e repetição; a professora tem réplicas prontas. Título/subtítulo concentram a instrução; o mesmo botão canônico libera uma frase por vez, substituindo a intenção.

## Evidência

No navegador real589×630, antes o img tinha max-height151.2px dentro de um frame371.3px antes da escala. Depois, os quatro mapas preservam razão1.5 e max-height none. Ask about the town usa tracks266.5px/266.5px; a arte e seu frame diferem apenas pela borda. O clique na dica substituiu a primeira intenção pela pergunta completa. Geometria e captura final em outputs/town154 no workspace.

Um teste focado da conversa passou; confirma referência, três intenções e substituição da primeira por uma única pergunta acessível. A primeira execução do teste novo encontrou duas cópias textuais, porque o componente mantém o modelo completo oculto/inert. A consulta foi corrigida para exigir exatamente uma cópia acessível; o comportamento existente não foi alterado. Typecheck e declarações passaram; API185/312/659 passou após revisão dos três hashes de RolePlayExercise. A inspeção foi proporcional à composição relatada, sem suíte ampla ou matriz visual de todo o catálogo.

As gravações, a arte e as outras aulas não foram reescritas. A guideline registra o isolamento dos estilos de imagens filhas, o encaixe das colunas e a dinâmica correta das perguntas. Somente local, sem push, CI ou deploy. Não é apresentada como correção já publicada nos portais.

Visual gate review: pending human

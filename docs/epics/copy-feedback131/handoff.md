# Feedback de cópia — rodada 131

Pedido: confirmar a cópia do dever sem mover ou redimensionar o botão aprovado “Copy homework”.
Classificação: `direct`, nos estados inicial, copiando, copiado, falha/manual e página inativa da
ação compartilhada de homework. A mudança vale para todas as aulas que a compõem.

Causa demonstrada: `CopyStatus` era um irmão flex em fluxo antes do botão. Ao ganhar o texto
“Dever de casa copiado”, passava a ocupar largura no conjunto centralizado e deslocava o botão.

Plano mínimo: manter o mesmo status local com live region e timeout, ancorá-lo de forma absoluta
acima do rodapé e preservar botão/ícone/label. O status continua discreto e acessível, sem um
provider global de toast. Manter Dialog, seleção do texto e proteção contra resultados pendentes
de página inativa. Não editar a galeria de mídia, nem contratos públicos.

Cobertura: teste focado da ação, incluindo posição fora do fluxo por estilo, identidade/markup do
botão antes/depois, sucesso, fallback manual e sucesso/falha pendentes após desativação. O jsdom não
prova coordenadas reais. A raiz confere geometria antes/depois em navegador, nas larguras estreita
e desktop, com a galeria integrada. Não haverá browser, build, commit, push, CI ou deploy nesta frente.

Implementado: `Footer` é o bloco relativo e `CopyStatus` fica absoluto acima, centralizado e sem
capturar eventos. Tipografia usa `xs`, cor semântica de sucesso e entrelinha `snug`. O botão é o
único item no fluxo: não há espaço reservado variável nem mudança de ícone, rótulo, tamanho ou
markup. O status permanece montado, `polite` e `atomic`, e só mostra a confirmação enquanto a
página está ativa. O timeout original de 2,5 segundos continua igual. O Dialog manual e seus refs
de seleção/foco permanecem intactos.

Validação executada: `node node_modules/vitest/vitest.mjs run --project unit test/materials/shared/HomeworkCopyAction.test.tsx`.
Um arquivo, quatro casos passaram em 1,46 segundo. O teste confirma o status absoluto antes e
depois, o mesmo nó/markup do botão, a mensagem acessível, cópia literal, fallback manual e ambos
os resultados pendentes após `active=false`. Os arquivos editados foram formatados com Prettier.
Nenhum teste de geometria real foi alegado. O arquivo `LessonHomeworkGallery.tsx` não foi editado
por esta frente; alterações paralelas de mídia permanecem com seu responsável.

Estado: implementação e revisão do diff concluídas. Próxima ação: a raiz conferir as coordenadas
antes/depois em navegador, em largura estreita e desktop, e integrar esta alteração com a galeria.
Sem commit, push, build, CI ou deploy nesta frente.

Visual gate review: pending human


Ajuste na integração visual da raiz: o aviso verde acima do botão interferia na leitura da borda dos celulares. A confirmação visual passou para um check branco no mesmo ícone de18px; o texto integral continua no status acessível e no title, sem ocupar espaço. Rótulo Copy homework preservado. Geometria conferida após integração.

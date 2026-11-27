# A1.09 — mapa ilustrado152

Pedido: substituir o mapa com traços e emojis por uma cidade visualmente acabada, vista de cima, com ruas e pontos de referência legíveis. A referência citada pela Sofia não está no ZIP exportado: o chat registra a imagem como omitida. A composição segue o brief da proprietária e a geografia das falas existentes.

## Entrega local

Uma ilustração nova, gerada pela ferramenta built-in image_gen: seis lugares reconhecíveis, duas avenidas que saem à direita da Main Street e dois quarteirões residenciais. Prompt canônico Langy1.8 preservado literalmente e seguido somente pelo brief de composição. Uma chamada, zero referências/variantes. Original PNG1536×1024 copiado byte a byte para stories/materials/Course/assets/a1-09-town-map152.png; sem edição ou conversão. Prompt exato e hashes em outputs/map152 no workspace da tarefa.

RouteMap recebe props opcionais image, área de clique por lugar e nome por rua. A arte substitui os traços na apresentação ilustrada; nomes e controles continuam nativos e acessíveis. A seleção cobre o prédio inteiro, aceita teclado e mantém rótulos ocultos/revelados. Compatibilidade com consumidores anteriores preservada. São adições opcionais compatíveis para uma futura versão minor; nenhum nome exportado foi acrescentado ou removido. Snapshot API revisado: somente os três arquivos de declaração de RouteMap mudaram.

As quatro atividades de mapa do A1.09 usam a mesma imagem/geografia. Vocabulário mantém seis lugares com áudio, dica, mostrar e reset. As demais páginas preservam seus objetivos e perguntas. O hotel fica ao sul do banco; o café e a farmácia na primeira avenida, mercado e parque na segunda. Áudios e textos de gravação não foram alterados. O UX Lab usa o mesmo RouteMap e a mesma arte, com exemplos de referência e vocabulário parcialmente revelado.

## Evidência e limites

- Quatro testes focados passaram: teclado/seleção/revelação, SSR legado, arte sem linhas sobrepostas e consistência da geografia nas quatro atividades. A primeira execução encontrou um pressuposto incorreto no teste novo: startLabel intencionalmente diferia entre páginas. O teste foi corrigido para comparar a geografia e preservar a finalidade de cada atividade; não houve relaxamento de um teste existente.
- Typecheck passou. Declarações regeneradas e API pública conferida:185values/312types/659declarations. Nenhum build de pacote/exportação neutral/consumidor ou publicação foi necessário para a prévia.
- Navegador local: mapa aberto em s2; café selecionado por clique, estado alterado e reset confirmado; nomes revelados; temas claro e escuro observados em painel estreito. Rótulo pharmacy ajustado para não quebrar. Não houve certificação de todas as resoluções.
- Guideline atualizada: mapas de cidade precisam de ilustração acabada e coerência de rotas; traços/ícones não substituem a arte final; nomes e alvos clicáveis permanecem nativos.

Prévia:http://127.0.0.1:8851/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s2#a1-09 . Somente local, aguardando revisão. Sem push, CI, Hosting ou mudança de Student/dados.

Visual gate review: pending human

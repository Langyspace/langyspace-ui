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

## Hotel153 — correção de áudio local

A proprietária relatou pronúncia estranha de hotel no mapa. O clique usa A109-FS81.5, uma montagem histórica do label hotel e do exemplo Start at the hotel. A gravação foi substituída por uma fala contínua, Jessica/cgSgspJ2msm6clMCkdW9, eleven_v4, inglês, com IPA hoʊˈtɛl nas duas ocorrências da palavra. Uma chamada, zero retry, mesmos textos de exibição; bytes originais do provider sem cortes, emendas ou outros efeitos. O idioma deixa de depender de inferência sobre a palavra isolada. O relato não estabelece sozinho qual fonema do arquivo antigo estava errado.

Consulta dirigida no provenance encontrou somente o próprio clipe relatado como inadequado com esse texto/voz. Os demais registros, gravações e a arte do mapa não foram alterados. O check de autoria e os hashes conferem a troca única. Metadados/histórico em Course/hotel153-provenance.json; pedido, resposta e MP3 anterior preservados em outputs/hotel153 do workspace. A nova pronúncia precisa de escuta da proprietária. Somente prévia local; sem push, CI ou deploy.

Visual gate review: pending human

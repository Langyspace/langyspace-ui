# Vocabulário com área inteira clicável

## Pedido e causa

Clothes and accessories, A1.11 s2, tratava seis objetos independentes de uma prancha como se fossem uma cena contínua. O adaptador usava SceneExplorer e limitava o clique a pequenos pontos. A mesma autoria existia em 52 pranchas Course, com 313 alvos.

## Implementação

As 52 páginas agora declaram vocabulary/items e reutilizam VocabularyGrid: o botão ocupa o card inteiro, revela nome/exemplo e mantém o binding de áudio existente. imageRegion é uma prop opcional da biblioteca e reutiliza PictureImage para apresentar regiões dos mesmos arquivos, sem gerar/editar bitmaps. As regiões desiguais da prancha B2.01 usam spans opcionais; os consumidores sem spans preservam o cálculo anterior. A grade e o cabeçalho usam a mesma quantidade de colunas.

Pessoas e objetos em cenas contínuas mantêm os pontos quando ambiente, posição e relações fazem parte da atividade. Não há heurística de palavras-chave em runtime. Guideline central atualizada.

## Evidências proporcionais

- Dois testes focados passaram: clique no descendente do card encaminha uma única revelação e playback; a prancha de sete itens mantém suas regiões distintas
- TypeScript, declarações e API passaram: 184 valores, 307 tipos, 651 declarações, sem novos exports
- Comparação exata com a base confirmou IDs, palavras, exemplos, áudio e imagens dos 313 itens preservados; demais páginas e atividades dos arquivos alterados continuam iguais
- Prévia local real A1.11: seis objetos sem pontos; clique na camiseta revelou seu nome/exemplo. B2.01: sete ilustrações completas, sem vazamento da ilustração vizinha
- Capturas em evidence/, inventário em inventory.json. Não há captura anterior equivalente da página de roupas; evidência visual incompleta fica em draft para revisão humana. Não foi feita escuta perceptiva de todos os áudios, nem matriz visual das 52 páginas
- Sem publicação em staging/produção ou merge

## Tarefas

- [x] Identificar autoria incorreta nas outras pranchas
- [x] Reutilizar o card canônico e preservar mídias
- [x] Verificação focada e guideline
- [ ] Revisão visual humana da revisão corrente

Visual gate review: pending human

# Homework flashcard images — revisão163

## Escopo

Corrigir a distorção do flashcard at first em C1.05 e o ajuste proporcional no renderer canônico de Student, simulação e homework. Conservar IDs, palavras, áudios e experiência de flip. Trocar somente a referência visual ambígua de at first por uma sequência de primeira impressão e descoberta, acompanhada do exemplo existente. O prompt Langy1.8 deve ficar byte-idêntico; composição anexada.

## Causa observada

O recorte de atlas deveria ser quadrado, porém RegionPicture força width e height de 100% do viewport do painel:180.11×119.67 na prévia, mesmo com aspect-ratio 1/1 no filho. Background-size expande a célula para essa caixa.

## Entrega

Proporção contida e centralizada em uma caixa, incluindo recortes horizontais/verticais. Revisar casos de família, TI e recortes percentuais como alcance da correção; sem alegar validação semântica dos601 cards. Um asset novo para C1.05, com origem/hashes e sem mudar estilo canônico. Preview local e PR separado da revisão de vídeos. Sem publicação solicitada.

## Resultado

- Região proporcional declarada pelo PictureImage em uma variável CSS; FlashcardSession usa uma caixa de contenção que considera largura e altura disponíveis. O fundo do atlas não é esticado para caber. Mesma implementação canônica para os consumidores, sem nova API pública.
- Medição no segundo card de C1.05: o recorte 1:1 antes tinha 180.11×119.67; depois 119.59×119.59, centralizado na área. Fixture com três regiões:1:1=163.70×163.70;2:1=180.11×90.06;1:2=81.85×163.70. Antes todas tinham a mesma caixa deformada180.11×163.70.
- At first ganhou uma sequência nova de dois momentos: busca no trem e cachecol encontrado no café. O significado temporal continua apoiado pela palavra/exemplo; nenhuma imagem isolada é apresentada como definição inequívoca de uma expressão abstrata. A imagem tem 1774×887 e foi convertida para WebP sem redimensionar/cortar/deformar. Prompt canônico preservado, uma chamada built-in e zero referências.
- Os outros 19 cards, todos os IDs, textos e áudios de C1.05 foram preservados. Não há alegação de revisão semântica de todos os cards do catálogo.
- Typecheck passou. Compilação de declarações e check:api passaram: 185 values/312 types/659 declarations. Sem suíte ampla, build de pacote ou deploy.
- Cinco pares antes/depois: homework 1280 escuro, segundo card, 1280 claro, 390×844 e renderer com três proporções. Flip, avaliação e reset foram usados de verdade. Os controles de homework foram preservados.

A revisão de vídeos continua isolada no PR71. Este lote tem um PR próprio com base main e não publica novo pacote nem adota em Teacher/Student. O arquivo lógico da imagem está preparado no mesmo mapa usado pela prévia/publicação de atividades. Requer publicação da mídia/atividade e adoção do componente para refletir nos portais hospedados.

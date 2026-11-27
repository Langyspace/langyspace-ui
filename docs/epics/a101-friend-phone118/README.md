# A1.01 — mostrar uma foto e apresentar um amigo

Base 70834f87. Impacto direto/indireto. Revisão local, sem adoção, merge ou publicação.

## Tela

Título: Introduce your friend

Subtítulo: Look at the photo. Tell Teacher your friend’s name, where they’re from and how they feel

Uma mão segurando celular em POV, como se a aluna mostrasse a foto. Dentro: uma das seis imagens aprovadas, nome nativo e bandeira oficial. Não exigir apresentar os seis. Guess who mantém sua galeria com seis pessoas e sua função original.

## Sorteio e composição

Sorteio uniforme ao entrar na página. Não sorteia no pré-mount inativo nem nos rerenders da aula. Mantém a pessoa durante a atividade; sair e voltar inicia outro sorteio. Não há obrigação de percorrer as seis nem botão adicional obrigatório. O mesmo resultado pode se repetir por acaso. personId controlado serve a fixtures estáveis no Lab, separado da seleção ao vivo.

MobileFrame recebeu a prop opcional illustration: imagem do aparelho e retângulo percentual da tela, mantendo conteúdo nativo. A moldura gerada substitui a moldura CSS; não desenhar um telefone dentro de outro. Default content/application preservados. Sem novo componente público/export ou duplicação de app. Personagem/legenda/bandeira e sorteio pertencem à aula, não à UI Library.

## Mídia

Uma chamada built-in image_gen, sem referências. Somente mão/aparelho novos; as seis fotos 110 continuam byte-idênticas. Prefixo Langy 1.8 literal, 1909 bytes, SHA fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489. Prompt completo em image-prompt.txt e proveniência em stories/materials/A101/image-provenance118.json. PNG original preservado no output privado; WebP 768×1152 alpha com resize proporcional, sem corte/edição de fundo. Sem áudio gerado.

## Validação e limites

Cinco testes direcionados passaram: sorteio só na entrada/reentrada, estabilidade entre rerenders, Guess who com seis cards, fixture controlada e MobileFrame default/illustrated com conteúdo/ref/ações nativas. TypeScript geral passou. Declarações reconstruídas e snapshot API reavaliado: 8 hashes, cobrindo a prop MobileFrame118 e a preload 114 já preparada, mais comentário do helper de navegação. A verificação de API 114 anterior usava declarações existentes sem reconstruí-las; esta etapa reconcilia o contrato com a fonte atual.184 values / 307 types / 648 declarations, sem export novo. Sem bundle/package/release ou suíte geral.

No navegador, antes/depois na mesma largura 829×775; nova composição também em 507×775 e 1280×720. Hiro→sair/entrar→Chloé observado. Redimensionamentos mantiveram Chloé, sem novo sorteio. Nome e bandeira visíveis; crop lateral da foto mantém rosto e ação corporal relevante nas capturas inspecionadas (não alegar inspeção visual das seis pessoas em todos tamanhos). Prefixo e invariantes conferidos. Previews nativos da geração tinham bordas suaves; não se observou halo amplo na composição final escura registrada. Sem promessa de recorte perfeito.

Captura anterior feita via restauração temporária de dois arquivos de HEAD, com snapshot privado e restauração imediata dos arquivos da revisão 118; não gerou commit intermediário nem descartou trabalho. Dois arquivos preexistentes da revisão 107 continuam fora desta entrega. Visual humano pendente.

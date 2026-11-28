# Imagens de vocabulário e áudio da B1.01

A professora relatou a poltrona suspensa na grade, uma pronúncia estranha na primeira resposta de Ana e falhas ao ouvir a aula no primeiro clique. A revisão das imagens cobriu os 67 materiais do catálogo, incluindo exercícios que reutilizam a mesma figura e o dever de casa.

## Entrega

| Uso na aula           | Alteração                                                                                                                                                                                   | Evidência                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Vocabulário           | 168 ilustrações em 28 aulas, com cenas opacas. Nos achados e perdidos, os seis objetos repousam sobre o balcão.                                                                             | [Inventário e exceções](inventario-imagens.md) e [janelas de cada ilustração](../../../stories/materials/Course/image-provenance173.json) |
| Outros enquadramentos | Trem, bilhete e capa de chuva centralizados dentro dos respectivos cards. A sequência de mudança da A2.05 usa a nova prancha da aula.                                                       | [Capturas das 30 aulas](evidence/)                                                                                                        |
| Flashcards            | 210 vínculos em 22 deveres usam 155 imagens de cartão, incluindo 47 cenas novas para 50 usos de ilustrações independentes. Os sete termos da B2.01 têm uma cena distinta cada.              | [Imagens, vínculos e caminhos de publicação](../../../stories/materials/Practice/native-scenes173.provenance.json)                        |
| Áudio                 | O player prepara a primeira gravação da página atual e a próxima fala durante a sequência. Um novo clique no mesmo pedido em carregamento conserva a reprodução.                            | [Protocolo de reprodução no Chrome](audio-verification.md)                                                                                |
| Voz de Ana            | A primeira resposta em B1.01 usa a mesma nova gravação no diálogo e nas lacunas. O reconhecimento identificou as oito palavras, e a pausa entre “back” e “Yeah” passou de 1,26 para 0,44 s. | [Proveniência da fala](../../../stories/materials/Course/welcome-back173-audio-provenance.json)                                           |

## Verificação

As comparações cobrem a mesma página de cada aula em 1440 × 900 e 390 × 844. Cada navegação conferiu o nome acessível da primeira figura daquele vocabulário e aguardou a decodificação das imagens. A segunda largura representa um navegador de desktop com viewport estreito. Os testes de áudio também incluem emulação de toque.

A nova regra de autoria está em [diretrizes do material](../../materials/content-planning-guidelines.md). O [teste das imagens de vocabulário](../../../test/materials/VocabularySceneMedia.test.ts) lê os arquivos resolvidos dos módulos de curso e dos flashcards ativos. Nas aulas, sinaliza transparência fora das palavras revisadas como objetos isolados. Nos deveres, confere o hash e a palavra de cada imagem raster com canal de transparência. As 50 ocorrências de figuras independentes reproduziram a falha do teste antes da substituição. A revisão visual em fundo claro e escuro continua necessária para avaliar contornos e enquadramento.

Foram percorridos 210 cartões no iframe da prévia dos deveres. Cada imagem exibida foi decodificada e conferida contra o hash e as dimensões esperados. Das 412 ocorrências com transparência no homework original, 209 agora usam uma cena opaca e uma usa um recorte recentralizado. Entre as 202 preservadas há 48 bandeiras, 125 objetos e símbolos, 22 gestos ou ações com a silhueta íntegra e sete imagens de dispositivos.

O pacote de revisão atende a prévia local de apresentação e de homework. A publicação das imagens com seus caminhos imutáveis, dos 22 deveres no Student e dos materiais no Teacher é uma etapa de release.

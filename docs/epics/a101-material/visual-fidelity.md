# Fidelidade visual da A1.01

Correção solicitada após a revisão das imagens: elas foram aprovadas; o header, os títulos e a apresentação restante divergiam do Claude. Esta revisão preserva os 15 WebPs gerados e corrige os componentes e a composição.

## Referência verificada

[A1.01 no Claude](https://claude.ai/artifact/KX94fLxvBjhqmz8VmHpjgr), conferida pela interface em 16/11/2026. A CLI autenticou o backend de artifacts, mas `inspect`/`files` não expuseram o conteúdo privado. A leitura visual e das medidas foi realizada no documento renderizado, sem alteração remota. Não há alegação de sincronização de arquivos do Claude.

O export local publicado foi congelado em `.local/a101-fidelity/reference-current.html`, SHA-256 `99580ebd4eb6c4e513b74352f12762613cf4557d663874522717a08d1bb81b8d`. Sua tipografia, colunas e anatomia foram confrontadas com o documento ao vivo. Os screenshots locais desse export são identificados como referência local, não como download remoto verificado. O baseline React é o commit `62848623cffa02211a9b14bd4419b0b10981d6d9`, servido por um worktree separado durante a captura.

Medidas observadas no documento ao vivo, com área de material 1280×720:

| Elemento            | Referência                                                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header              | 56px; Notes à direita; Back à esquerda a partir da segunda página; progresso de 3px                                                                               |
| Progresso           | Indicador de 3px sobre trilha transparente, junto à borda do header; sem contador adicional                                                                       |
| Texto               | Montserrat; títulos Space Grotesk; “yourself” em Instrument Serif itálico                                                                                         |
| Introdução          | Coluna 760px, x=260; título 38,88px; objetivo com estrela e rótulo separado; divisor abaixo do bloco                                                              |
| Título do exercício | 30px no desktop de 720px; 22px no celular de 390px                                                                                                                |
| Larguras            | Warm-ups 600px; vocabulário/listening/role play/homework 760px; diálogo/perguntas 900px; gramática/associação 1040px; conversação 960px; inversão de frases 880px |
| Vocabulário inicial | Três colunas e duas fileiras, inclusive no celular; sem badges de interrogação; dica e revelação nos controles existentes                                         |

## Alterações

- `SlideDeck`: barra sobreposta ao viewport inteiro, ação inicial sem espaço vazio à esquerda, indicador discreto, scroll contido na aula e foco mantido na navegação.
- `SlidePage`: tokens de tipografia de material, slot `lead` para introdução sem duplicar cabeçalhos, larguras semânticas adicionais e espaçamento compacto. O conteúdo continua crescendo em telas longas.
- `VocabularyGrid`: colunas fixas opcionais, densidade e revelação com tooltip/caption. O modo de overlay permanece disponível. As imagens aprovadas preenchem a área da cena.
- `A101Lesson`: introdução, objetivo, nomes e posição das ações, largura de cada composição e play do diálogo conforme a referência.
- Superfícies: fundo branco, cartões cinza e header translúcido branco. As instruções usam 14px no celular. O cinza de texto e o vermelho de Negative recebem pequenos ajustes de contraste para passar a verificação de acessibilidade.
- Exercícios: avatar e balão do diálogo, números de associação, cartões de gramática, três colunas de True for you e cartões da conversação seguem as receitas visuais observadas. Pequenos textos e marcadores usam tons acessíveis do sistema quando o rosa claro da referência não oferece contraste suficiente.
- Os seis retratos de Guess who mantêm a proporção aprovada das cenas com ambientação. Essa grade tem mais altura que os emojis usados na referência; o bloco centralizado sobe para acomodar as imagens. Isso não altera os arquivos nem o conteúdo das cenas aprovadas.
- As alternativas e seus feedbacks nos warm-ups foram reconciliados com a referência atual. Os gabaritos e a ordem de 26 telas foram preservados. Mudanças substituem distratores de gramática incompleta por frases completas, como `She cold.` → `She is hungry.` e `She’s Korea.` → `She’s from Japan.`.

## Validação e limites

A captura `capture-fidelity.mjs` recebe o export congelado por `A101_REFERENCE_HTML`, confronta as 26 páginas nos mesmos tamanhos e registra medidas de títulos, coluna, estados de resposta e conteúdo longo. Inclui antes/depois dos componentes compartilhados, themes e largura estreita, comparando o worktree de baseline com a revisão atual. A ferramenta verifica que os hashes das imagens aprovadas continuam iguais.

Typecheck, ESLint direcionado, 17 testes de contrato/SSR/navegação e declarações/API passaram. O relatório de API permanece em 153 valores, 241 tipos e 509 declarações; as adições públicas são slots/variantes opcionais e tokens. As 39 variantes de Storybook afetadas passaram em lotes direcionados, incluindo acessibilidade; os cinco casos afetados pela última revisão de escala foram revalidados. Foram corrigidos o contraste de Negative e do contador sobre cinza. O teste de teclado aguarda as fontes para evitar que um relayout durante o scroll cancele a navegação.

A evidência final contém 122 estados de aula/componentes e oito jornadas aprovadas, incluindo reprodução nativa seguida de transcrição na segunda escuta e notas em janela separada acompanhando a página ativa. Há 52 medições de título (26 páginas em duas larguras), com tamanho e coluna conferidos contra a referência. A ferramenta não afirma igualdade de cada pixel: enquadramento das cenas, diferenças de altura de conteúdo e ajustes de contraste ficam visíveis nos pares. CI mantém a responsabilidade pelas suítes completas.

O servidor isolado da baseline usa o mesmo node_modules por symlink. Foi necessário liberar esse caminho na configuração local de arquivos do Vite para servir as fontes; a configuração não modifica a apresentação da revisão anterior e é restaurada depois da captura. O driver exige Montserrat carregada para evitar comparações com fonte de fallback. As capturas do Antes foram refeitas após essa correção do ambiente.

Nenhum merge, release, publicação de catálogo, deploy de portal ou alteração remota de design faz parte desta revisão. Áudios finais e adoção nos produtos permanecem no fluxo já documentado. A próxima decisão é a revisão visual do produto no PR #42 atualizado.

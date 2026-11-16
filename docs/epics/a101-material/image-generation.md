# Imagens dos exercícios A1.01

Os emojis do protótipo eram exemplos. O material passa a usar ilustrações 3D de pessoas em ambientes reconhecíveis, com expressão e gesto que sustentam a resposta do exercício. O fundo faz parte da imagem. Bandeiras de países continuam como SVGs exatos, compostos pela interface, sem depender da geração de símbolos nacionais.

## Motor existente e adaptação

O produtor atual está no repositório `langyspace-student`: `scripts/generate-flashcard-images.mjs` chama `scripts/flashcards/generate.mjs`; `scripts/flashcards/engine.mjs` prepara os jobs a partir de `content/flashcards/generation.json`. A configuração local usa Gemini para imagens, validação semântica, relatórios, retomada e conversão WebP. As bandeiras já têm um renderizador local.

Não basta pular a remoção de fundo. O prompt dos flashcards também proíbe cenas e acrescenta um contrato de fundo ciano. A adaptação correta para um produtor automatizado é um perfil independente `exercise-scene`, reutilizando transporte, retomada, validação e exportação, mas substituindo o construtor de prompts e desativando o contrato ciano e toda a etapa de recorte. O julgamento semântico deve considerar pergunta, resposta correta, distratores, gesto e ambiente. Esse adaptador de backend é um próximo trabalho; não foi criado ou executado neste PR de componentes.

| Perfil              | Composição                                | Fundo                             | Saída                  |
| ------------------- | ----------------------------------------- | --------------------------------- | ---------------------- |
| Flashcard existente | Sujeito isolado                           | Ciano temporário, depois removido | WebP com transparência |
| Cena de exercício   | Pessoa, ação/expressão e ambiente simples | Opaco, preservado                 | WebP com ambientação   |

A [documentação oficial de geração do Gemini](https://ai.google.dev/gemini-api/docs/image-generation) confirma geração com texto e referências de imagem. O modelo configurado no produtor foi apenas inspecionado; disponibilidade, custos e credenciais desse serviço não foram testados nem alterados nesta entrega.

## Entrega deste PR

As cenas foram geradas pelo `image_gen` integrado, sem chamar a API Gemini do produto. O primeiro Tom cansado foi a referência visual das demais imagens. Não são fotografias de pessoas reais. A inspeção humana da direção de arte permanece pendente.

- `stories/materials/A101/image-scenes.json`: perfil, prompt integral por imagem, alvo semântico, texto alternativo, páginas e instruções de cenário. Esse é o conjunto de prompts para regeneração.
- `stories/materials/A101/assets/scene-*.webp`: arquivos finais usados pela prévia. As imagens são redimensionadas proporcionalmente para 768×768, qualidade 86, sem recorte ou remoção de fundo. A interface aplica enquadramento onde necessário.
- `stories/materials/A101/assets/generated-scenes.json`: hashes dos originais e dos WebPs, dimensões e ferramenta usada. Os PNGs originais permanecem também em `.local/a101-scenes/originals`, fora do Git; os WebPs e prompts são os artefatos portáveis do PR.
- Seis emoções atendem ao vocabulário e aos seis warm-ups. Seis cenas de pessoas atendem aos warm-ups de países. Três cenas adicionais permitem compor os seis convidados de Guess who com estado e pessoa coerentes.
- A variação opcional `VocabularyGrid imageVariant="scene"` enquadra cenas em cartões 3:2. O padrão de ilustração isolada continua disponível para flashcards e outros exemplos.
- As seis bandeiras SVG vêm de `flag-icons` 7.5.0, a mesma biblioteca do produtor de flashcards. Os arquivos originais simplificados do protótipo ficam preservados como referência; a pista exibida usa os novos arquivos `flag-*.svg`, sem geração e sem cortar símbolos. A licença e os hashes estão junto dos assets.

Países não são inferidos pela aparência: a pista explícita é a bandeira do exercício. Vocabulário de países mantém suas bandeiras didáticas. Avatares, ícones de interface e ícones de lição de casa mantêm suas funções próprias; não são usados como substitutos das cenas.

## Regeneração e revisão

Gerar uma imagem por entrada, com `transparent_background=false`, usando o prompt integral e a cena de Tom como referência de estilo. Não gerar pranchas para depois recortar. Conferir a expressão, as mãos e o ambiente contra a resposta e os distratores. Converter o arquivo aprovado para WebP sem extrair o fundo; registrar o hash; manter o nome estável da entrada para atualizar as referências.

Imagens geradas são conteúdo do material, fora de `src` e dos exports do pacote. Provedor, fila, credenciais e geração ficam no produtor de conteúdo. A UI recebe somente URLs e descrições. Nenhuma chamada de geração acontece quando professor ou aluno abre um slide.

As evidências desta revisão ficam em `.github/evidence/a101-scenes`, comparadas à revisão React `f84a6fabc89464cd0a5c88bf546e5385c94e2f2d`. As evidências anteriores do protótipo permanecem históricas. A adoção nos portais continua dependendo da revisão, publicação da biblioteca e PR do consumidor.

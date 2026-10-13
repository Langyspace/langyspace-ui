# Correção de publicação do lote R20–R23

1.17.2 parou no format:check do discovery R24; documento formatado. 1.18.1 passou arquitetura e formatação, mas parou no teste de correspondência entre exports e catálogo: faltavam PracticeCardBody, QuizOption, QuizFeedback e FlashcardRatingButton. R23 acrescenta PracticePlaybackControls, também registrado nesta correção.

1.19.1 completa as cinco entradas com owner/props/docs/consumidores e coverage real. QuizFeedback passa a ter seu teste e stories próprios, além da composição já coberta por QuizOption. Nenhum gate/assertion foi relaxado.

Testes focados do catálogo e Feedback, três stories com acessibilidade, build e check:api passaram. Todos os arquivos publicados de 1.19.1 são idênticos ao pacote 1.19.0 fotografado, exceto a versão em package.json. Os 300 pares de reprodução e 308 pares de flashcards continuam válidos. UI/produtos de R20/R21 preservam as implementações verificadas; a biblioteca mantém a correção de ownership sem mudança visual, antes comprovada por 56 PNGs iguais.

Produtos só integram com artefato oficial e checksum/file-map validados. Produção continua assíncrona e não verificada.

Visual gate review: accepted by human — autorização contínua expressa deste lote.

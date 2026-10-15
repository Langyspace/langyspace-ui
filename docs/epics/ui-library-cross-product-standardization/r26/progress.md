# Progresso R26

S01 e S02 concluídas. O owner `PracticeResultPanel` foi preparado na UI com quatro props: `title`, `description`, `children` e `actions`. Os produtos preservam métricas, cálculo, callbacks, áudio, mensagens e persistência. Três blocos de estilo duplicados por produto foram removidos; os grids de métricas continuam locais para preservar os layouts existentes.

Validação do novo contrato: 11 testes focados (unit, manifest e stories) passaram; arquitetura e lint passaram; build, declarações e API passaram. O snapshot público contém somente o novo valor/tipo, seus três arquivos de declaração e o novo hash do índice. Smokes do pacote real passaram em SSR e navegador com o novo componente. A classificação de motion foi documentada antes de ser adicionada; nenhuma regra foi desligada.

Bundle medido: 143042 bytes raw / 29189 gzip na biblioteca; entrada resultPanel 5288 raw / 1987 gzip. Cabe na capacidade planejada de 146000/30000 e 6500/2200, sem elevar limites após medir. Os limites das famílias anteriores foram preservados.

Candidato 1.21.0: 85326 bytes, 363 arquivos; SHA256 `e7c48db5c48dd60187c94450c32059ef5b0dbc8e15e699df9aa2ede92a4d52cc`. O recibo e o mapa de arquivos ficam com a UI. Ainda não há release oficial.

S03: capturas concluídas e comparadas. São 60 PNGs de stories, 140 pares Student e 100 pares Teacher. Geometria, texto, ordem, tipo e disabled dos botões coincidem em todos os pares. Capturas originais de resultados 0/50/100%, teclado/refazer/voltar e Student salvando/erro. Antes usa fonte git e pacote oficial 1.20.0; depois usa o candidato 1.21.0. Fixtures sintéticas, controllers reais e rede externa bloqueada. A geometria depois da animação foi preservada. Os PNGs não são todos byte-idênticos: há diferenças pequenas de rasterização/composição e efeitos existentes; o máximo observado foi 96 pixels Student e 116 Teacher, sem divergência de bounding boxes. A review humana continua necessária.

Concessão sujeita a review: Teacher recebe a entrada finita do ícone que já existia no Student. Movimento reduzido suprime essa entrada. As imagens estáticas mostram o resultado estabilizado; não representam uma revisão humana de animação.

TypeScript dos dois produtos passou. Lint Teacher e formatação dos arquivos alterados passaram. Student tem um erro de lint em shadowing no arquivo monolítico, preexistente no baseline: react-hooks/set-state-in-effect em playPhrase, fora da alteração do resultado. O mesmo diagnóstico foi reproduzido no baseline e o trecho está byte-idêntico; nenhuma regra foi desligada. Essa dívida técnica impede afirmar lint global verde e precisa ser resolvida em recorte próprio antes de entregar Student.

Problema visual preexistente preservado: no Teacher a 390×568, a navegação fixa cobre parte das ações do resultado. O antes e o depois mostram a mesma limitação. A correção exige decisão própria sobre overflow/shell e não foi embutida na migração do painel. As imagens de maior altura mostram as ações completas.

Próxima tarefa única: fixar o candidato imutável e abrir os três PRs. Student e Teacher ficam em draft até a publicação oficial da UI após review. O aceite anterior fecha R25; não aprova esta revisão nova.

CI/deploy não acionados até aqui. Modo manual por cobrança permanece; os commits usarão [skip ci]. Nenhuma produção ou provedor é alterado nesta preparação.

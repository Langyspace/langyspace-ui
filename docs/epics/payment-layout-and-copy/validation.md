# Validação da correção visual

Bases: UI 216cf402c4b2cf9a783f1830e322a9b0ca4ec1dd; Student 0ce5d5616b1b102162f3ee578408edbb054ee26d. A base Student já inclui o PR34 aprovado e mesclado em staging. Esta entrega não altera serviço, API, valor, enum ou protocolo financeiro.

## Checks focados

- Biblioteca: 3 testes ToastItem/ToastViewport passaram (teclado, ref, disabled e conteúdo opcional); build/declarations, API pública, budgets e smoke externo do pacote passaram. API preservada: 140 values, 210 types, 264 declarations. Nenhum snapshot ou orçamento relaxado.
- Student: 50 casos de pagamento/escolha passaram; 4 casos de integração de pagamento passaram (QR/cópia, skeleton, preservação de dados no refresh e fallback com preflight). Typecheck e formatação dos arquivos alterados passaram. A primeira execução do consumidor isolado tinha peers React/Styled resolvidos a partir de outro projeto; corrigidos os links privados para os peers do Student, sem alterar código do produto.
- O Node26 do runner expôs uma limitação de Web Storage nos workers; a mesma falha de setup ocorria na base. NODE_OPTIONS=--no-experimental-webstorage permitiu rodar os casos com o storage do JSDOM. Nenhum mock de storage ou enfraquecimento de teste foi introduzido no produto. A máquina também passou a resolver Node24 durante a rodada.
- Um teste antigo ainda exigia o modal de confirmação removido na entrega anterior. A falha foi reproduzida na base. O teste agora informa status pendente da própria fixture, exige preflight, envio único e QR manual na mesma sessão sem confirmação extra. O writer financeiro não foi alterado; os 49 casos financeiros anteriores permanecem evidência do mesmo protocolo.

## Artefato preparado

UI 3.2.1, patch de apresentação sem API nova. Tarball preparado e consumido exatamente no Student, ainda sem publicação. SHA256: 3fdd31fc7f3a2b2585c005766bd446989dcdc6847f22a61d781bcc2e14f097d6. O lock registra o integrity do arquivo preparado e a URL oficial futura. Conferir o download byte a byte após publicação da biblioteca antes de mesclar o consumidor. Nenhum peer/node_modules privado entra no tarball.

## Browser e evidências

50 pares Antes/Depois, 100 imagens. Estados: escolha, contratação, QR, ajuda, envio, manual, falha, retomada, recebido durante a ação, carregamento, expirado, texto longo e variantes do componente. Viewports: 320, 390, 768, 900, 901, 1024, 1280, 1440 e 1920px; mais 720×450 como reflow equivalente a 200%, sem alegar zoom nativo do navegador.

Todos os estados capturados sem erro de execução, sem rolagem horizontal e sem requisição financeira externa. Plano visualmente anterior à cobrança em desktop; composição e geometria de hero/banner preservadas em mobile no estado principal em 320/390/720/768/900. As seções independentes mantêm seu DOM e sua sequência de foco anteriores; a mudança de ordem visual é restrita ao desktop. QR e código usam duas colunas a partir de1024px; estados de revisão mantêm botões de largura natural no desktop. Toast com gap medido de8px entre título/mensagem/ação quando presentes; erro não repete o título. Ajuda não captura foco e a ação funciona com Enter, inclusive no erro/retomada.

Respostas de API são simuladas, QR sintético não pagável. A evidência não é qualificação bancária nem comprovação de publicação. Cores/contraste, timers e barreiras financeiras inalterados; reutilizada a evidência válida da entrega anterior.

Artefatos privados: review-evidence.json, mobile-geometry.json, gallery-proof.json e logs focados em .local/pix-automatic-reactivation-20261021/visual-refinement-20261022 do Teacher canônico. Galeria autocontida em Downloads/langy-pagamento-layout-textos-revisao-2026-10-22/revisao-tela-a-tela.html; servidor local: http://127.0.0.1:5480/pagamento-layout-e-textos.html. Anexos nativos nos PRs devem ser conferidos com autenticação do repositório, pois assets privados retornam404 sem sessão.

## Limite de entrega

Não publicar o Student anterior com os problemas apontados. Os dois PRs da correção visual precisam de aceite atual; a aprovação anterior dos PRs Teacher61/Student34 continua registrada historicamente. Após aceite: biblioteca primeiro, conferência do pacote, consumidor por staging, validação real e promoção protegida para produção. A exceção temporária de billing só substitui o executor; falha real de teste/build/segurança bloqueia publicação.

# Progresso

U1 concluído: CardDetailsFields reutiliza FieldRoot/TextInput; valores sem máscara, caret, colagem,
CPF/CNPJ, agrupamento comum/Amex, CEP formatado e CVV visível. Nenhuma mudança em controles globais.
U2 preparado: integração Student com CEP em serviço próprio, cancelamento e estado por valor atual.
Onze testes de biblioteca/manifesto passaram; cinco do componente repetidos após ajuste visual.
Build, contrato API aditivo, smoke de tarball/SSR/consumer e lint focado passaram. Student: 22 testes
focados e typecheck passaram. Browser real em 390/1440 e 320×640: 74 imagens/37 pares no produto,
com respostas simuladas. Consulta pública ViaCEP 01001000 retornou CEP/cidade consistentes e CORS.

Fonte original UI 4966d1c, Student f9142b1. Fingerprint conjunto de runtime:
`532b2cf4f2aff44bba6f532b97362714d2a51f644a37d6b229b0368ac89aeefe`.
As imagens da biblioteca cobrem o componente em seu consumidor real. Campos preenchidos contêm
somente fixtures sintéticas; nenhum cartão real foi reutilizado ou submetido nesta revisão.

U3 concluído para a biblioteca: revisão `22112c0` aprovada explicitamente pelo produto e integrada
em `b9c7df5`. Todos os oito jobs do CI dessa fonte passaram (arquitetura, pacote, testes, quatro
partições visuais e gate final): https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/39609086921.
A execução de release duplicada foi cancelada; reutilizada a evidência completa do mesmo código.
Tag/release `v3.1.0` publicado com o arquivo preparado e checksum. Download verificado:
`d5720989e073944a9c657940025d819212247f4cf8468ba7c1cc47a355c9d740`.
Student adotou esse download e foi publicado via staging em `ff6db95`; jornada de formulário do
staging passou sem envio financeiro. Backend e frontend foram conferidos em produção. O teste
bancário continua no epic do produto, com cartão próprio a ser informado novamente pelo titular.

U4 preparado: máscara de telefone e slot opcional phoneField para controle internacional já existente
no produto. API aditiva compatível, minor 3.2.0; 12 testes focados, build/declarations/API, typecheck,
lint e smoke SSR do tarball passaram. Exportações da raiz preservadas; snapshots refletem somente
prop e helpers privados. Artefato preparado e consumidor conferido com o arquivo exato.

Capturas antes/depois: 18 pares do componente/consumidor em 390/1440, incluindo telefone do cadastro,
país, edição e fallback sem telefone. Dados/respostas simulados, sem qualificação bancária.
U4 concluído: produto aprovou PR35 `f3830fe` e a adoção Student. Merge `1a5fa60`, sem diferença na
árvore da revisão. Todos os oito jobs do CI 39629905679 passaram na fonte aprovada; prova reutilizada.
Release `v3.2.0` publicado com o arquivo preparado; download SHA-256 conferido:
`440872d9284c527540289f0dbb25706264d53b0f88c3a2978b4156fe2e2ba5df`.
Student adotou UI 3.2.0, integrou o fluxo em `d497a39` e publicou a fonte `f2ada1e` via staging em
produção. Browser real confirmou telefone do cadastro/país editável e máscaras em 390/1440. Essa
publicação não enviou cartão nem qualificou a volta bancária completa; continuidade no epic do
produto. Nenhum novo pacote é necessário para registrar este encerramento documental.

Visual gate review: accepted by human

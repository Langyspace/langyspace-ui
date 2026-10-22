# Campo date mobile

Impacto direto no TextInput `type=date` abaixo de 768 px; estados vazio, preenchido, inválido e disabled, tamanhos sm/md/lg. Altura usa o mesmo token do controle. Sem alteração de API, seletor nativo, valor ISO ou desktop.

Preparação compartilhada solicitada pela recuperação do formulário da landing. Baseline 600c364; produto baseline 679b9a1. Story date cobre estados/tamanhos; audit focado Chromium/WebKit verifica geometria e produto com rede externa bloqueada. Outros produtos não serão atualizados.

Candidato de revisão em .github/evidence/native-date-mobile/candidate, com checksum; após aprovação usar release oficial. Nenhuma publicação oficial autorizada por inferência de screenshot. A solicitação de entrega do usuário autoriza a preparação, mas o AGENTS exige revisão da revisão atual antes do merge.

Visual gate review: pending human

## Validação da revisão preparada

Build JS/declarations e check:api passaram (140 valores, 210 tipos, 264 declarations; API inalterada). O audit de componente passou 72 cenários (2 engines, 3 larguras, 3 tamanhos, 4 estados); matrizes antes/depois preservadas em .github/evidence/native-date-mobile. Em 768/1440 px a geometria é idêntica à baseline.

Ao remover a aparência nativa, o WebKit deixou de centralizar o conteúdo interno apesar de a geometria externa permanecer idêntica. A correção usa padding derivado da altura do controle, line-height de 1.5 e as duas bordas de 1px; não usa line-height igual à altura inteira, que esticava a seleção do dia. Chromium/WebKit revalidados após essa revisão.

A story NativeDate é nova; o Antes usa o TextInput anterior na mesma composição sintética dos estados/tamanhos. Nenhum outro produto foi atualizado. A revisão em iPhone físico continua humana.

As capturas sanitizadas da adoção da landing também estão em .github/evidence/landing-form-recovery, porque o repositório do produto é privado e suas URLs raw não exibem imagens no PR. Este complemento altera somente evidências, sem modificar componente, candidato ou validações de runtime.

## Ajuste do contrato de teste — 2026-10-22

Release v3.2.2 bloqueada pelo teste de CompoundControl em JSDOM: a asserção de min-height literal não resolve a variável CSS. Os 365 casos Storybook passaram e os quatro grupos visuais passaram; o teste de tamanho deve continuar estrito no navegador real. A asserção de altura do filho será movida para a story Sizes, exigindo 40/44/56px em sm/md/lg. O teste JSDOM mantém disabled/invalid e tamanho externo. Nenhum código de componente, estilo ou tipo será alterado; não há exceção de layout ou redução do tamanho esperado.

A correção de testes e a versão 3.2.3 têm impacto none: não alteram renderização. O tag 3.2.2 falho será preservado. Runtime e declarations do novo pacote devem ser idênticos ao candidato visual aprovado. Aprovação humana permanece sobre UI 9dc51f9 e Site 3def539, com a integração não visual c510 preservada.

Validação do ajuste não visual: 5 testes unitários de CompoundControl passaram; 3 stories passaram no Chromium, incluindo min-height computado e altura real de 40/44/56px. Fontes src/, declarations e contrato de API não foram modificados. A instalação própria do worktree resolveu uma limitação local do symlink de node_modules no runner Storybook; nenhum ajuste de produção foi necessário.

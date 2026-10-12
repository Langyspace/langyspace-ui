# Retomada da release 1.9.0 — 2026-10-12

Impacto `none`: somente execução da CI, sem alterar componentes, API, pacote, imagens ou a tag
aprovada. UI #9 foi aceita pela pessoa responsável e integrada em `db4cfe8d`; a tag v1.9.0 aponta
a esse commit. Admin #12 e Teacher #29 foram aceitas em `05fb53ce` e `de06f73a` e aguardam o
artefato oficial antes da integração.

O run [38261788857](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38261788857)
foi cancelado por timeout, confirmado pela annotation “The job has exceeded the maximum execution
time of 20m0s”. Execução 14:17:14–14:37:32 UTC; a validação começou só às 14:29:18. A instalação
Chromium/deps e o gate sequencial ultrapassam o limite original. Nenhum artefato oficial foi criado.

Correção proposta: timeout 45 minutos para o job sequencial e workflow_dispatch com input da tag
existente. Checkout explícito dessa tag, confirmação de tag/versão/HEAD e ancestralidade em main,
todos os mesmos gates `validate:ui`, pack/checksum e publicação normal. Não mover nem recriar a tag,
não publicar o candidato manualmente e não dispensar testes. Tags futuras usam o mesmo caminho.

Revisão crítica: a retomada deve operar no commit aprovado, embora a definição corrigida do
workflow venha de main. Env separa tag de publicação de ref do workflow; input não vira código
shell. Scripts do pacote continuam os da tag. O limite amplia duração disponível, sem flexibilizar
as assertions ou budgets. Validar o wiring YAML/contrato e retomar v1.9.0 por dispatch normal.

Validação local concluída: YAML e wiring conferidos; shells parseáveis; guard aceita v1.9.0 e rejeita versão incorreta, branch e input inválido. Todos os gates foram preservados. Correção entregue em main por impacto none, seguida de dispatch da tag existente. Produtos ainda aguardam o artefato oficial; publicação não declarada concluída.

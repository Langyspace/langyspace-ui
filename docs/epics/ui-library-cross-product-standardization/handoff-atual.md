# Handoff — R12 aprovada; preparação UI R14

Atualizado em 2026-10-12. A owner aprovou as revisões R12 UI #11, Student #8 e Teacher #33 com “Aprovo as três revisões R12; pode integrar”. UI #11 integrada em `a542b87a7a799492eff29c0b596d7b11c8c119ec` e tag normal v1.11.0 enviada. A integração dos produtos depende da disponibilidade e comparação do pacote oficial com o candidato revisado; preservar as evidências e conciliar staging atual. Não interpretar esta aprovação como aceite R14.

R13: migração de pares label/value adiada por custo-benefício, após auditar os cinco projetos. Student não tem o equivalente somente de leitura inicialmente suposto; Admin, Teacher e Cupom têm receitas distintas. [Discovery](r13/discovery.md).

R14: PracticeProgressBar preparada primeiro na UI; valor 0–1, ref/atributos, 6px e decoração forçada. Nove testes focados e typecheck passam; API aditiva com hashes anteriores preservados salvo barrel. Bundle +857 raw/+199 gzip, famílias anteriores inalteradas. 48 PNGs originais de stories; o pacote 1.12.0 é candidato exclusivo de preview.

Próxima subtarefa: concluir R12 oficial/adoções aprovadas; depois capturar Before R14 dos dois produtos e adotar somente os cards das cinco abas. D03/D04/D05 de produtos ainda não concluídas; não declarar telas migradas. Sessões/home/vocabulário e demais layouts permanecem fora do piloto. [Plano R14](r14/technical-plan.md).

CI/CD assíncrona: nenhum monitoramento de logs/status após push. Conferir a disponibilidade do artefato somente quando necessária à integração; staging é a via dos produtos, sem push para main. Continuar pelo handoff persistente em `.local/langyspace-ui-library-continuous/integration-20261012` e registrar ali URLs e SHAs atuais.

Visual gate review: pending human — R14 UI.

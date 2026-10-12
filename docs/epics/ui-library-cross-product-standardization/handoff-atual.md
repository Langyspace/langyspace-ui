# Handoff — R12 aprovada em publicação; R14 em review

2026-10-12. Owner: “Aprovo as três revisões R12; pode integrar”. UI #11 integrada em a542b87. Publicação 1.11.0 falhou por shimmer sem classificação LSUI002; corrigida em 4c239c0 e tag normal v1.11.1 enviada. Fontes/API/imagens R12 aprovadas idênticas; nenhuma tag reescrita. [Correção](r12/ci-correction.md).

Próxima dependência R12: obter oficial 1.11.1 e comparar todos os arquivos ao candidato revisado, permitindo apenas version de package.json; trocar metadata e conciliar/merge Student #8 e Teacher #33 aprovadas, via staging. Não integrar candidatos. CI/release assíncronas; não declarar produção concluída.

R13 adiado após discovery dos cinco projetos; diferenças Admin/Teacher/Cupom não compensam API com variantes. Student não tem o perfil somente de leitura inicialmente suposto. [Discovery](r13/discovery.md).

R14 preparada primeiro na UI #12; PracticeProgressBar value 0–1 e decoração/ref/atributos. Adoções limitadas aos cards Student/Teacher. 360 PNGs: 48 stories, 80 pares Student/76 Teacher com scroll. Geometria/conteúdo/controles iguais; Teacher normal ganha 520ms e reduced sem transição. -5 linhas runtime por produto, UI +199 gzip. Domínio e styled ainda consumidos preservados. Checks focados passam. [Progresso](r14/progress.md).

Próxima subtarefa R14: review humana própria dos três drafts; conciliar R12 oficial antes de merge e publicar R14 oficial comparada ao candidato. Aceite R12 não se estende à R14. Heads/URLs/registros em `.local/langyspace-ui-library-continuous/integration-20261012`; handoff persistente atual supersede anteriores.

Visual gate review: pending human — R14.

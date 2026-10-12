# Handoff — R12 integrada; R14 em review

Atualizado em 2026-10-12. Owner aprovou UI #11, Student #8 e Teacher #33. Os três PRs R12 foram integrados; total histórico 22 PRs aprovados integrados. UI **1.11.2 oficial**, checksum/289 arquivos verificados; publicação normal preservou tags anteriores. Registro de motion e remoção de declaração redundante resolveram as falhas de CI. 24 PNGs do skeleton idênticos aos aprovados, caixas/motion e declarações públicas iguais. [Correção](r12/ci-correction.md).

Student staging 9b189c0 e Teacher staging 7a34da4 adotam o pacote oficial. CI/deploy iniciadas pelos workflows de staging; promoção/produção permanecem assíncronas e não foram verificadas. Não declarar produção concluída. Fontes/evidências/PR bodies aprovados preservados.

R13: migração adiada após discovery dos cinco projetos. Diferentes layouts Admin/Teacher/Cupom não compensam nova API com variantes; Student não tem readonly equivalente confirmado. [Discovery](r13/discovery.md).

R14: preparado primeiro na UI, drafts [UI #12](https://github.com/MarcosLaboriosi/langyspace-ui/pull/12), [Student #10](https://github.com/MarcosLaboriosi/langyspace-student/pull/10), [Teacher #34](https://github.com/MarcosLaboriosi/langyspace-teacher/pull/34). PracticeProgressBar com value 0–1, decoração e ref/atributos, sem props visuais. -5 linhas runtime por consumidor, +199 gzip na UI. 48 stories e 80 pares Student/76 Teacher com scroll = 360 PNGs originais. Geometria/textos/controles/cores/raios iguais; Teacher normal ganha 520ms e reduced sem transição. Domínio e demais barras locais. Candidato **1.12.0 exclusivo dos previews**, não oficial.

Próxima subtarefa única: review humana própria das três revisões R14; após aceite, release oficial comparada ao candidato e adoção por staging. R12 não concede aceite R14. Human gate mantém os drafts separados; nenhuma implementação R14 está no main da UI nem em staging dos produtos.

Canonicals limpos/alinhados aos remotos da entrega. Commits locais concorrentes de analytics preservados antes da conciliação em branches e worktrees `recovery/ui-r12-{student,teacher}-canonical-20261012`, incluindo drafts ignorados Teacher com hashes iguais. Preservar esses snapshots; não integrar analytics local a esta entrega. Registros e heads completos no handoff persistente `.local/langyspace-ui-library-continuous/integration-20261012`.

Visual gate review: pending human — R14.

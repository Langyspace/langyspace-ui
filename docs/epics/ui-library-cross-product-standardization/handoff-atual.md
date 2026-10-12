# Handoff — R10 integrada; R12 preparado para review

Atualizado em 2026-10-12. 19 PRs aprovados integrados (incluindo UI #10, Admin #13, Teacher #31).
Release UI 1.10.0 oficial verificada por checksum e 283 arquivos byte a byte idênticos ao candidato.
Fontes/evidências R10 preservadas na troca de metadata; teste de mensagem OAuth corrigido, sem
mudar guard/runtime. Analytics paralelo Teacher/Student preservado.

R12: PracticeCardSkeletonBody, um corpo equivalente e fixo de card de lição, primeiro na UI,
adoções Student /licoes e Teacher /alunos/:studentId/licoes. Cinco abas, normal/reduced,
390/900/901/1440, 40 pares por produto + 24 stories = 184 PNG. Cards/body/conteúdo/controles
preservados; Teacher segunda meta +1px e reduced motion estático são as concessões documentadas.
Candidato UI 1.11.0 não é release oficial e não entra em staging antes de novo aceite.

Próxima tarefa: review humana própria dos três drafts R12. Em seguida, release oficial idêntica,
substituição do candidato, merges por staging. R13–R24 ainda propostos; R04/R05 continuam locais.
CI/CD assíncrona; canonical dos três produtos da entrega R10 alinhados e features R12 preservadas.

Detalhes: r10/progress.md, r12/{epic,requirements,technical-plan,tasks,progress,discovery}.md.

Visual gate review: pending human — R12.

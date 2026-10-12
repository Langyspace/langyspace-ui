# Progresso R10

2026-10-12: três PRs aprovados pelo owner em “aprova tudo e continua pro próximo”. UI #10
integrada em 557669b; release 1.10.0 oficial HTTP200, checksum verificado e 283 arquivos idênticos
ao candidato revisado. Admin #13 integrado em a9ed093; Teacher #31 em aa263e23. UI 1.10.0
oficial substituiu o candidato nos manifests/locks, sem editar fonte visual ou PNGs aprovados.

O teste Calendar de staging esperava mensagem antiga; corrigida apenas a asserção, mantendo
bloqueio status 1/stdout vazio, três casos passando. Teacher preserva os commits paralelos de
analytics 0aa52b14 e 5ae4f4ac; inventário da base atual, somente fingerprint por metadata.
Canonical UI/main, Admin/staging e Teacher/staging limpos/alinhados após integrações.

CI/CD dos produtos iniciada e assíncrona; não afirmar produção concluída por merge. Próxima
família R12 preparada em branch própria, com review humana própria pendente.

Visual gate review: accepted by human.

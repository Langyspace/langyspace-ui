# Progresso R14

2026-10-12: UI preparada primeiro em #12, PracticeProgressBar decorativa 6px, value 0–1 e ref/atributos nativos. Nove casos unit e typecheck passam; API 43 valores/103 tipos/144 declarations, hashes anteriores preservados salvo barrel. Bundle 106876 raw/22586 gzip (+857/+199), entry progress 3658/1468; famílias anteriores inalteradas. 48 PNGs de stories incluem atualização de valor e reduced motion. Candidato 1.12.0 por SHA b3ac623, somente audit/dist/LICENSE/README/package.json.

Adoções Student/Teacher preparadas: três branches de cards por produto, -5 linhas runtime cada com import. 40 cenas por produto; 80 pares Student + 76 Teacher com scroll = 360 PNGs originais incluindo 48 stories. Fixture sintética 0/4/8 em cada tipo, Before do staging real. Cards/corpos/trilhas/fills e texto/controles/cores/raios idênticos. Teacher normal ganha 520ms, reduced none; Student motion igual. Testes focados de nomes/keyboard/callback único/disabled, typechecks e locks congelados passam.

R12 aprovada pela owner e UI #11 integrada. Release 1.11.0 falhou por shimmer sem classificação LSUI002; corrigida em main 4c239c0 e tag normal 1.11.2 iniciada, sem alterar src/API/imagens aprovados. Adoções R12 aguardam artefato oficial comparado, permitindo somente version de package.json diferente. Drafts R14 podem ser revisados em paralelo; somente integração depende de R12 oficial.

Próxima subtarefa única: D06 — review própria R14, conciliação R12 oficial antes de merge e publicação oficial R14 comparada ao candidato. R13 adiado; demais componentes em discovery. CI/deploy assíncronos, produção não verificada.

Visual gate review: pending human — R14.

Conciliação técnica com main: registro de motion e remoção da única declaração redundante em spans vazios R12; 24 PNGs do skeleton idênticos aos aprovados e todas as declarações públicas idênticas. Story/compartilhamento ProgressBar, código dos consumidores e os 360 PNGs R14 permanecem iguais. Regenerar candidato com a mesma API/presentation e nova integrity, preservando a revisão visual pendente.

Candidato regenerado após a correção R12: bundle final 106860 raw/22586 gzip, skeletons 4377/1691. API e fonte do ProgressBar iguais; todos os PNGs preservados. URL/integrity atuais constam dos locks e handoff persistente.

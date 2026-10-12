# Correção da publicação R12 — registro de motion

2026-10-12. Impacto `none`: somente registro de auditoria, versão de pacote e documentos; fontes visuais, API, imagens e PR bodies aprovados ficam idênticos.

A release v1.11.0 falhou em [38310105755](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38310105755): LSUI002 detectou o keyframes de PracticeCardSkeletonBody/styles.ts sem classificação. Não era um erro de renderização: o shimmer 1.35s e reduced-motion none já constam da implementação revisada. Faltava registrar seu owner na configuração da biblioteca.

Adicionar apenas o caminho exato a allowedDomainMotion, com owner Practice loading, razão que identifica decoração/reduced motion e expiração 2027-04-12. Regras, motores de auditoria, limites, assertions e caminhos dos produtos ficam iguais. O próprio audit deve passar com o registro válido; não desabilitar LSUI002.

Publicar patch **1.11.1** com nova tag normal. A tag v1.11.0 já enviada fica preservada. Antes de integrar produtos, comparar todos os arquivos do artefato oficial ao candidato 1.11.0 aprovado: somente package.json pode diferir, exclusivamente em version. Substituir URL, integrity e minimumReleaseAgeExclude nos produtos e atualizar só o fingerprint estrutural causado pela metadata de dependência, com todos os demais campos idênticos.

O aceite humano R12 cobre a mesma apresentação; correção técnica não cria nova revisão visual. CI/release são assíncronas. Ainda não declarar pacote oficial disponível ou produção concluída.

## Segunda falha e patch 1.11.2

Release 1.11.1 [38312792229](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38312792229) passou auditoria/lint/formato/tipos/stories/coverage/API, mas mediu skeletons gzip 1705 acima de 1700. O limite permanece 1700. A medição local anterior era 1697, mostrando variação de compressão entre runtimes.

Removida exclusivamente a declaração redundante min-width:0 dos spans internos vazios. Como não têm conteúdo nem slots, a dimensão mínima natural é zero. Nenhuma propriedade de tamanho, padding, gap, raio, cor, motion, markup, atributos/ref ou API muda. Classificação final **none**, respaldada por 24 stories recapturadas: caixas, motion e bytes dos PNGs idênticos às evidências aprovadas, incluindo narrow/reserved-space em quatro larguras e normal/reduced. Todos os hashes de declarações públicas permanecem idênticos.

Bundle final local 106003 raw/22387 gzip; skeletons 4377/1691. Demais famílias preservadas. Foi experimentada ordenação de declarações, sem melhora no entry, e desfeita; só a remoção redundante segue no diff.

Patch normal **1.11.2**, preservando tags anteriores. Comparação com candidato 1.11.0: package.json exclusivamente version; dist/index.js exclusivamente a declaração redundante removida no bloco do skeleton; styles.d.ts.map apenas posições da fonte. Comparar todos os arquivos do artefato oficial ao novo pacote local 1.11.2 validado, sem tolerância geral de JS/API. Aprovação R12 permanece ligada à apresentação original idêntica, não ao sucesso de CI.

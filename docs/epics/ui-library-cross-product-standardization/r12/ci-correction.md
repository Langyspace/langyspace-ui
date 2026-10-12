# Correção da publicação R12 — registro de motion

2026-10-12. Impacto `none`: somente registro de auditoria, versão de pacote e documentos; fontes visuais, API, imagens e PR bodies aprovados ficam idênticos.

A release v1.11.0 falhou em [38310105755](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38310105755): LSUI002 detectou o keyframes de PracticeCardSkeletonBody/styles.ts sem classificação. Não era um erro de renderização: o shimmer 1.35s e reduced-motion none já constam da implementação revisada. Faltava registrar seu owner na configuração da biblioteca.

Adicionar apenas o caminho exato a allowedDomainMotion, com owner Practice loading, razão que identifica decoração/reduced motion e expiração 2027-04-12. Regras, motores de auditoria, limites, assertions e caminhos dos produtos ficam iguais. O próprio audit deve passar com o registro válido; não desabilitar LSUI002.

Publicar patch **1.11.1** com nova tag normal. A tag v1.11.0 já enviada fica preservada. Antes de integrar produtos, comparar todos os arquivos do artefato oficial ao candidato 1.11.0 aprovado: somente package.json pode diferir, exclusivamente em version. Substituir URL, integrity e minimumReleaseAgeExclude nos produtos e atualizar só o fingerprint estrutural causado pela metadata de dependência, com todos os demais campos idênticos.

O aceite humano R12 cobre a mesma apresentação; correção técnica não cria nova revisão visual. CI/release são assíncronas. Ainda não declarar pacote oficial disponível ou produção concluída.

# Handoff ativo — UI 3

Objetivo: concluir a simplificação inteira e sua adoção nos cinco produtos,
preservando comportamento/layouts e revisão humana por revisão atual.

## Resultado preparado

- 40 nomes públicos e tipos associados retirados numa major deliberada.
- 138 componentes com responsabilidades documentadas, agrupados por nomes claros
  em src/components. Stories e testes ficam fora da fonte de produção.
- Button único com variant; nenhuma camada compatibility/legacy na fonte.
- Auth, métricas, estatísticas, resultados, progresso de flashcards e estados de
  tela compõem APIs pequenas. Anatomia do calendário fica privada.
- Teacher/Student/Admin preparados contra o mesmo pacote candidato 3.0.0;
  Site/Cupom não utilizam APIs retiradas. Nenhuma URL oficial foi inventada.
- LeadsPage não montada do Admin retirada, mantendo seu fixture compartilhado;
  a rota real usa LeadCohortPage. Não há mudança nova de menu nessa rota.

## Evidência

UI: 114 pares novos em 390/768/1440 e 60 pares reutilizáveis de Button/Pressable
em 15 folhas. O source desses dois owners não mudou desde a prova de equivalência.
Imagens de adaptadores retirados foram excluídas da revisão atual.
Teacher: 156 pares; Student: 153; Site: 48; Cupom: 15. Admin concluiu 132 pares, incluindo métricas de professoras/marketing e estado
vazio de cobranças.
Origem, hashes, larguras e limites estão em evidence.json de cada repositório.

Checks UI: 68 testes únicos focados, manifesto conferido, arquitetura, API
139 valores/207 tipos/261 declarações, build de Storybook, pacote SSR/build
consumidor. O pacote foi instalado isoladamente nos cinco produtos, com declarações
e JS de execução equivalentes ao candidato usado nas capturas. Typechecks e audits
focados passaram. No Admin, dois testes da rota real substituem como evidência os
quatro testes da view morta que foi retirada. CI possui os gates amplos.

## Ordem restante

1. Fechar os PRs drafts e matrizes atuais; capturas completas não dispensam aceite.
2. Obter revisão humana da UI #33 atual; sem reaproveitar aceites antigos.
3. Integrar/publicar a UI 3 após gates, com artefato e integridade verificáveis.
4. Fixar dependência oficial/lockfile dos cinco produtos, conferindo equivalência
   ao candidato. Completar os PRs de adoção e o aceite humano de cada revisão.
5. Integrar conforme a base de cada repo; verificar publicação e branches segundo
   seus workflows. Branch push, captura e HTTP 200 não provam produção.

O objetivo continua ativo. Este handoff não declara merge, release ou deploy.

Visual gate review: pending human

# Plano técnico R26

Baseline UIcebd979ad286c8f066079f7ba78c6f887813f295; Studente252a7a0e5e4d3f1c4437a89546de5ea8a148d5e; Teacher9d42f00a6bbdf045ff7f4610e0e6d217ba034573. Versão atual oficial1.20.0; proposta aditiva1.21.0.

UI: molecules/PracticeResultPanel index/styles/types/test/stories; root exports, manifest com ownership/props/docs/consumers e smokes browser/SSR; README/API snapshot. Usar tokens existentes, SVG idêntico ao Check Lucide e keyframe copiado em semântica. Sem ThemeProvider/CSS vars do consumidor e sem importar estilos privados de outra família.

Produtos: substituir somente QuizDoneState/QuizDoneIcon/QuizDoneActions nas views reais e remover as três definições. Student conserva Check para outros exercícios; Teacher elimina o import Check apenas neste módulo. MetricGrid/Tile usados também por shadowing e outros dashboards não são removidos. Controllers e serviços não mudam.

StatePanel existente tem state empty/error/loading/partial, padding/surface e heading distintos. Usá-lo para resultado teria semântica inadequada e flags de adaptação; extrair este contrato exato é mais simples. Não incluir métricas só para aumentar a migração.

Capacidade registrada antes do código: library raw143000→146000 (+3000) para um novo owner de composição; gzip30000 preservado. Nova entrada resultPanel raw6500/gzip2200 definida antes de medir. Orçamentos de todas as famílias anteriores intactos. Baseline1.20 usa140970raw/28871gzip. A capacidade adicional exige revisão junto do novo contrato; não elevar após falha para apagar regressão.

Checks focados: unit+manifest e stories do owner; source lint/type/build/API e pacote/bundle por nova API pública. No máximo três grupos por risco de contrato público; nenhum full validate:ui/broad E2E local na preparação. Manual billing persiste: commits [skip ci], checks locais relevantes e nenhum monitoramento Actions. Oficial/manual Hosting só depois da aprovação das revisões concretas.

Antes: fonte git imutável e pacote oficial1.20.0; depois: candidato1.21.0 imutável. Capturas por plugin Vite temporário com dados sintéticos, controllers reais e rede externa bloqueada. Não versionar mocks de serviços. Sanitizar host público UI para imagens de produtos privados. Não sobrescrever arquivos históricos/hardlinks; pastas inéditas r26-result-panel/q26s/q26t, sem histórico de PNGs nos sparse worktrees.

Matriz de telas: quiz/personalizadas nos dois portais; resultado0/50/100%, foco/refazer/voltar; pending/erro Student; 390/640/641/1440px, alturas568/1100 e normal/reduced nas extremidades. Comparar métricas de bounding boxes/texto/botões e verificar estados locais. Imagens full-route equivalentes; story nova usa Antes sem versão anterior.

Motion classificado antes de alterar o audit: owner Practice completion; caminho exato src/molecules/PracticeResultPanel/styles.ts; motivo preservar a entrada finita320ms/y30px já usada no Student, com reduced motion explícito e sem animar ações ou métricas. allowedDomainMotion exige classificação por path; expiração2027-04-14. Nenhuma regra/limite de motion desativado. A concessão no Teacher continua sujeita à review deste R26.

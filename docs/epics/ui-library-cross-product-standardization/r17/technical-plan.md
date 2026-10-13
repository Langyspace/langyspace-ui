# Plano técnico R17

Fontes reais: src/components/layout/AuthShell/{index,styles,types}. Diff CSS Student/Teacher
contém somente FormFooter Teacher. Extração de Page/BrandPanel/BrandInner/FormPanel/MobileHeader/
TopBar/Content/Card/MobileCardAction: aproximadamente 185 linhas removidas por produto; estilos
específicos BrandLogo/Title/Underline/Text/FeatureList/BrandFooter/MobileLogo/FooterLink e footer
Teacher ficam locais. Evita exportar muitos styled parts e props estéticas para conteúdo de marca.

UI molecules/AuthFrame usa tokens nativos e 7 props semânticas; nenhum state. Root exports,
stories e API manifest revisados. Base UI 1.13.0, próxima versão 1.14.0. Capacidade antes do código:
library 125000 raw/26500 gzip; entry authFrame exclusivo 13000 raw/4200 gzip. Medir uso real; reduzir escopo se
exceder, sem alterar caps antigos. Sem dependência nova. Dois checks focados API/typecheck;
package build/bundle necessário para artefato público. CI owns validate:ui/full E2E.

Primeiro UI e pacote imutável, depois wrappers dos produtos. R16 oficial antes de merge products.
Capturas baselines congeladas dos shells e After com componente shared, mesmas fontes/clock/dados.
Rotas de handoff/payment exigem fixtures sintéticas isoladas no driver; nenhum runtime backdoor.
Capturar formulário/OTP/erro/scroll onde alcançável e explicar fixtures. Comparar bounds/scrollheight,
labels e foco; renderizar provas em tabelas Antes/Depois sem notas técnicas no corpo dos PRs.

Revisão crítica: slot brand evita migrar copy/legal específico e 8 componentes primitivos novos.
Props são composição estrutural, não variantes de produto. Custo-benefício forte pelo CSS idêntico;
riscos principais scroll de formulário, legal footer médio e action duplicada por breakpoint.
A mesma marca pode continuar com texto/Feature locais sem sacrificar padronização do frame.

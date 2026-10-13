# Progresso R17

A01/A02: preparado AuthFrame, sem dependência/store/provider/rotas. Sete slots semânticos e
marcador de scroll existente; legal/brand/toasts continuam nos produtos. Teste local de formulário,
labels e marcador passou; typecheck, build/API/bundle aprovados. Declarações antigas preservadas
exceto barrel aditivo. Library 118836/24948 e authFrame 7868/2336 raw/gzip, abaixo dos tetos
planejados; famílias antigas inalteradas. 96 PNGs de quatro stories, seis larguras cruzando
640/1024, alturas 568/1100 e normal/reduced. Scroll do formulário longo alcança último input.

Revisão da CI R16 confirmou import default de styled-components quebrando consumo Node/SSR;
patch dedicado UI #14 muda para named import, sem alterar contrato visual. AuthFrame também
usa named import. Base atualizada no patch e pacote empacotado. Import/SSR do AuthFrame no consumer instalado
aprovado. 96 imagens definitivas recapturadas com essa fonte e package preparado.

A03/A04: Student 113 pares, Teacher 65 pares. Todos os retângulos, textos, campos, scroll, foco
e footer idênticos. Quatro rotas Student (login/registration/acesso/comecar), duas Teacher
(login/cadastro); inclui phone/OTP/erro/success, acesso ausente/ready/switch/error/pending,
handoff error/verification/pending, toast, larguras 390/639/640/1023/1024/1440 e alturas568/1100.
Fixtures somente no driver ignorado: estado inicial/controlado, auth/settings sintéticos e rede
bloqueada. Controllers intactos; nenhum submit válido, OTP, callable ou provider. Antes sourceR16
congelada; verificar sua equivalência a staging após R16. Typechecks de ambos adapters aprovados.
187 linhas CSS removidas por produto. UI1.14.1 é patch de tooling; todos os arquivos de runtime e
API são byte idênticos ao candidato1.14.0 fotografado, somente package.json.version difere.

Próxima subtarefa: A03 — capturas Before/After dos adapters. Sources baseline congeladas dos
shells R16; fixtures de estado somente no driver de captura, sem alterações em controllers.
Matriz cobre auth/OTP/erro/success/handoff/acesso/footer/toast e viewport curto/breakpoints.

Visual gate review: accepted by human — integração autorizada no lote contínuo 2026-10-13,
sem alegar revisão manual dos screenshots futuros; tabelas de todas as superfícies obrigatórias.

Antes/Depois definitivos renovados sobre staging atual (Student d7adf0c, Teacher04e7a58), ambos
com UI1.14.1 oficial verificada. Base contém atualizações concorrentes já integradas de analytics
(e feedback Pix Student), sem alterações nessa lógica neste PR. Driver captura a renderização
real e neutraliza apenas sync de analytics/calls externas.113+65 pares novamente com todas as
medidas/textos/foco/scroll/footer idênticos. Source diff dos produtos só7files (AuthShell+5docs).
Student typecheck repetido no novoBase passou; outros checks reutilizados com inputs pertinentes
iguais. Canônicos R16 alinhados clean e suporte financeiro intocado em caminhos originais.

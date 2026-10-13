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

Próxima subtarefa: A03 — capturas Before/After dos adapters. Sources baseline congeladas dos
shells R16; fixtures de estado somente no driver de captura, sem alterações em controllers.
Matriz cobre auth/OTP/erro/success/handoff/acesso/footer/toast e viewport curto/breakpoints.

Visual gate review: accepted by human — integração autorizada no lote contínuo 2026-10-13,
sem alegar revisão manual dos screenshots futuros; tabelas de todas as superfícies obrigatórias.

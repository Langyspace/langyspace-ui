# Progresso R17

A01/A02: preparado AuthFrame, sem dependência/store/provider/rotas. Sete slots semânticos e
marcador de scroll existente; legal/brand/toasts continuam nos produtos. Teste local de formulário,
labels e marcador passou; typecheck, build/API/bundle aprovados. Declarações antigas preservadas
exceto barrel aditivo. Library 118841/24942 e authFrame 7854/2333 raw/gzip, abaixo dos tetos
planejados; famílias antigas inalteradas. 96 PNGs de quatro stories, seis larguras cruzando
640/1024, alturas 568/1100 e normal/reduced. Scroll do formulário longo alcança último input.

Revisão da CI R16 confirmou import default de styled-components quebrando consumo Node/SSR;
patch dedicado UI #14 muda para named import, sem alterar contrato visual. AuthFrame também
usa named import. R17 precisa atualizar base no patch antes de empacotar o novo release.
Capturas desta revisão são de preparação; evidência definitiva acompanha o pacote final.

Próxima subtarefa: A02 — atualizar base no patch R16, gerar artefato e evidências definitivas,
abrir PR UI; A03 só depois prepara adapters e capturas dos produtos com fonte baseline congelada.

Visual gate review: accepted by human — integração autorizada no lote contínuo 2026-10-13,
sem alegar revisão manual dos screenshots futuros; tabelas de todas as superfícies obrigatórias.

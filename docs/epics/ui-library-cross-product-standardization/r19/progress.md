# Progresso R19 — teacher

CalendarControls UI#17 preparado antes da adoção. Oficial1.15.0:313 arquivos exatamente iguais
à candidata, checksum publicado conferido.28 pares originais teacher, semana/mês, normal/reduced,
390/900/901/920/921/1440; datas anterior/próxima/Hoje no desktop; mobile preserva agenda compacta.
Baseline Teacher cb9e2e5 com oficial1.14.1; Admin a9ed093 com oficial1.10.0 (corrigido pacote
local instalado antigo1.7 para capturar a versão do manifest). Nenhum dado real/ação de slot.
Teacher fixture readonly usa builders reais; Admin designMock nativo; rede externa bloqueada.

Teacher toolbar/grid/dados/scroll iguais (probe específico dos dois grids). Admin ícones32→40,
Hoje32 preservado. Toolbar desktop+8px; grid desloca+8px mantendo dimensões, dados e scroll.
Container estreito agora quebra label/legend sem comprimir data em quatro linhas. Sem overflow.
Legend3Teacher/5Admin permanece local; cursor/fuso/rules/grid/callbacks não alterados.
Único mount Admin: /agenda. Detalhe /professoras/:id contém resumo/link, sem CalendarControls.

Frontend TypeScript passou; frozen lock sob políticas de supply-chain passou. Teacher inventory
somente source.fingerprint mudou por metadata, nenhum contrato backend alterado. API da UI aditiva.
Integração via PR staging sob autorização contínua do lote. Produção não verificada.

Visual gate review: accepted by human — autorização contínua expressa para este lote.

UI testCI https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38387943885
Release https://github.com/MarcosLaboriosi/langyspace-ui/actions/workflows/release.yml
Run indisponível no lookup inicial; publicação provada pelo artefato oficial.

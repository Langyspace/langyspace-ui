# Evidências da revisão completa

student:139, teacher:141, admin:129, site:24, cupom:12; UI:4.449 pares originais, fontes e hashes em .github/evidence/complete-current/provenance.json. Cada produto terá todos os seus pares no PR. O PR UI reúne contexto representativo de cada família e os4 pares de componentes existentes modificados. Novos owners são comparados pela sua origem real nos produtos; não se inventa uma story anterior de componente inexistente.

Cada par usa dados/estado/viewport correspondentes, contexto responsivo mobile/tablet/desktop, mesma data/locale/fontes do consumidor, sem rede externa. PNG original da janela quando há modal visível; página inteira nos demais casos. Casos bottom completam o conteúdo em containers com scroll. Toda foto/dado vem de fixture/mocks locais sanitizados. Renderizado não equivale a deploy nem aprovação visual.

Em2026-10-15, o relato da sombra cortada identificou uma captura fullPage de viewport844px com página1173px. Foram recapturados6 pares de modais Student/Admin;10 PNGs mudaram e443 pares permanecem idênticos. Não houve alteração de runtime. Consulte evidence-capture-fix.md.

As concessões previstas estão em mapeamento.md. Leitura humana da revisão final continua por PR. CI/deploy não foram disparados pela preparação local; entrega manual usa[skip ci] e nenhuma execução automática será monitorada.

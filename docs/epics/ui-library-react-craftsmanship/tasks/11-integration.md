# 11 — Integração e encerramento autorizado

O produto aprovou explicitamente as seis revisões em 15/10/2026. O recibo local `11-human-approval.json` preserva os seis SHAs. Esse aceite continua válido para aqueles pixels, sem autorizar alterações visuais posteriores automaticamente.

## Gate técnico e reconciliação

A execução UI [38772091564](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38772091564) passou arquitetura/pacote e falhou em oito stories por contraste e no catálogo por aguardar visibilidade de AuthMobileFooter em larguras onde ele é intencionalmente oculto. São falhas reais; a exceção de billing não pode contorná-las.

Reparos: usar os tokens existentes de texto auxiliar e warning foreground; ajustar o padrão interno `--fc-muted-2` para texto legível; compor as fixtures responsivas com conteúdo de página. Não alterar o valor público de neutral500, dispensar acessibilidade ou ampliar budgets. As duas faces dos flashcards, mensagens e notificações requerem novas imagens onde afetadas.

Entraram em paralelo Teacher staging `57011690` e Admin staging `c42dcf13`, com adoção de ScheduleCalendar 1.22. A reconciliação traz a fonte UI `4edf3a4`, mantém o contrato 2.0.0 e preserva os wrappers/domain/calendar/billing existentes dessa entrega. Month compõe CalendarDay com day/onOpen/openLabel e eventos irmãos; remove o DayAction duplicado. Teacher/Admin não podem voltar a uma dependência que não exporta ScheduleCalendar. Seus baselines de captura foram atualizados para os respectivos stagings; os baselines anteriores permanecem preservados.

A biblioteca contém agora172 componentes públicos e173 registros de revisão, incluindo o contrato retirado. Os oito componentes de calendário antes compostos diretamente no Teacher são agora usados dentro de ScheduleCalendar. As referências registram esses owners reais da UI, sem inventar uso direto no produto.

## Sequência restante

- [x] Registrar aceite humano original e identificar os gates reais.
- [x] Reconciliar o calendário paralelo e corrigir contraste/fixtures preservando contratos React.
- [x] Conferir tipos da UI,27 testes de calendário/referências e60 cenários de layout focado.
- [ ] Preparar candidato imutável, imagens e adoções da revisão corrigida.
- [ ] Executar gates finais e obter aceite dos pixels posteriores ao aceite original.
- [ ] Integrar UI e publicar o artefato major exato.
- [ ] Integrar as cinco adoções nos targets próprios; publicar staging e verificar fonte/comportamento.
- [ ] Promover pelo pipeline ou exceção temporária comprovada por recusa de billing no alvo; publicar a mesma fonte e verificar produção.
- [ ] Alinhar canônicos e refs locais/remotos, preservando drafts, e encerrar com recibos exatos.

A recusa de billing foi confirmada no check Student116548337725 do SHA original: o job não iniciou. Isso não prova recusa nos novos SHAs nem permite contornar falhas reais da UI. Nenhum merge, tag, release ou deploy desta revisão major ocorreu nesta etapa.

# Plano técnico R09

Baseline UI: d7066591b096d64fc8dc0d37d11db967a16decc0, release 1.8.0 em geração. Admin staging: 314c1a303f437069054112b1ebbb45c02c6d177b. Teacher staging: d809b21984d34dd91becbf0157144d30cc8aa823; aguardar integração dos lotes aprovados antes das branches de adoção.

Implementar src/molecules/Card/{index.tsx,styles.ts,types.ts}, stories, export raiz, manifest e snapshot API. Usar tokens existentes e componentId estável. Versão aditiva posterior à 1.8.0; nenhum produto deve depender de release inexistente em staging.

Admin: substituir apenas os dois wrappers de Início, conservando classes home-priorities-card/home-queues-card e margens externas. Remover classes card/flat/card-pad nesses dois usos para que receitas globais não invalidem o contrato. Não mudar AdminCard genérico, Surface ou regras table-card que dependem de margem negativa 18px.

Teacher: substituir somente Styled.Card de Today se a comparação confirmar a concessão; os grids, headings e espaçamento externo ficam locais. Payouts usa padding responsive 20→16 e section com aria-labelledby: fora desse primeiro piloto, evitando nova prop de responsividade/semântica.

Checks locais: teste de contrato útil (props nativas e conteúdo acessível) e API/build; CI possui suíte e gates amplos. Capturas do UI indicam story nova sem antes; adoções capturam páginas reais antes/depois. Não forjar baseline para Card inexistente.

Revisão crítica: scope pequeno e API plana; alerta principal é a sobreposição CSS Admin e largura útil de textos. Benefício é manutenção única da superfície, não grande redução de linhas. Se os adapters crescerem mais que a duplicação removida, não migrar. Rollback de cada piloto restaura seu wrapper local, sem mudar dados.

Medição do candidato R09: biblioteca 103.997 bytes raw / 21.993 gzip, contra 103.498 / 21.938 da 1.8.0: +499 / +55. Todos os budgets existentes passaram e não foram alterados; há apenas 3 bytes raw e 7 gzip de margem no limite agregado, a ser respeitado por alterações futuras. Não converter essa medição em promessa de redução de bundle nos produtos.

Validação local: contrato de ref/grupo acessível/ação por teclado passou; build/API passaram (40 valores, 100 tipos, 135 declarações); bundle passou. Capturadas 16 imagens das stories default/long/ação/foco em 390/900/901/1440, sem overflow e preservando a ação composta. CI controla SSR/browser smoke, a11y/cobertura e a matriz ampla; nenhum budget relaxado.

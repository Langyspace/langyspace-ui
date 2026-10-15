# Entrega da UI Library 2.0.0

Impacto deste fechamento: `none`; os registros abaixo descrevem a implementação já revisada e publicada.

O catálogo atual foi concluído: 172 componentes públicos, 173 fichas individuais, 355 exemplos atuais de composição e 215 pares únicos Antes/Depois. A revisão preserva os dez critérios por componente e mantém domínio, dados e roteamento nos produtos.

A versão [2.0.0](https://github.com/MarcosLaboriosi/langyspace-ui/releases/tag/v2.0.0) está publicada no commit `207b5c831e2bb8f34c585317fb2b937c20041528`. O download anônimo e o checksum foram conferidos; os 1.126 arquivos internos são idênticos ao candidato aprovado. SHA256 do arquivo oficial: `c56ed123fc88d7024205e049f4d33c0c4aef95c1745f1c70a21ce75241f244ac`.

## Revisão e validação

A resposta literal do produto foi: “Aprovo as seis revisões corrigidas”. O recibo em delivery-summary.json preserva os heads da pergunta e da atualização dos PRs. A reconciliação do gráfico mantém comportamento já integrado na base; as alterações posteriores limitam-se à URL/integridade do pacote e a seletores e isolamento de relatórios da automação do Admin. Não houve novo ajuste visual após esse aceite.

A UI passou nos oito jobs da [CI](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38780573214); o [release](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38783214672) publicou o mesmo conteúdo validado. API major, pacote externo, peers, acessibilidade, SSR/hidratação, teclado/foco e budgets foram preservados.

Admin: 457 testes em 50 arquivos, 47 fluxos acessíveis e 45 cenários de design aprovados; 13 larguras, 1755 casos e 3510 cenários normal/stress da auditoria nativa, sem problemas. Os grupos locais que excederam o limite não foram contados como sucesso; cada largura foi executada integralmente com o mesmo limite e as mesmas verificações. Site: 288 cenários de layout; Cupom: 31 testes, relatório e 36 cenários de layout.

## Produtos publicados

| Produto | Commit integrado                                                                                                  | Testes CI                                                                            | Deploy CI/CD                                                                         | Produção                                  |
| ------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------- |
| teacher | [28cca327](https://github.com/MarcosLaboriosi/langyspace-teacher/commit/28cca327960aa39d88a51609b38dc5dd8c8c4b87) | [CI](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/runs/38788679453) | [CD](https://github.com/MarcosLaboriosi/langyspace-teacher/actions/runs/38789715062) | [verificado](https://teacher.langy.space) |
| student | [c3a5472b](https://github.com/MarcosLaboriosi/langyspace-student/commit/c3a5472b97f7644f6c85e12d70b471cfc7231ddc) | [CI](https://github.com/MarcosLaboriosi/langyspace-student/actions/runs/38788705345) | [CD](https://github.com/MarcosLaboriosi/langyspace-student/actions/runs/38790157323) | [verificado](https://student.langy.space) |
| site    | [a20fa528](https://github.com/MarcosLaboriosi/langyspace/commit/a20fa5285d59e501c187f9602d28f3057f253eed)         | [CI](https://github.com/MarcosLaboriosi/langyspace/actions/runs/38788725588)         | [CD](https://github.com/MarcosLaboriosi/langyspace/actions/runs/38788725588)         | [verificado](https://langy.space)         |
| cupom   | [a884d582](https://github.com/MarcosLaboriosi/langyspace-cupom/commit/a884d5829f877224ee174a80b107079f45e367d1)   | [CI](https://github.com/MarcosLaboriosi/langyspace-cupom/actions/runs/38788745678)   | [CD](https://github.com/MarcosLaboriosi/langyspace-cupom/actions/runs/38788745678)   | [verificado](https://cupom.langy.space)   |
| admin   | [7f71897a](https://github.com/MarcosLaboriosi/langyspace-admin/commit/7f71897a5df423c37d4bf4e9bf1708a84dc9205b)   | [CI](https://github.com/MarcosLaboriosi/langyspace-admin/actions/runs/38793305768)   | [CD](https://github.com/MarcosLaboriosi/langyspace-admin/actions/runs/38794212393)   | [verificado](https://admin.langy.space)   |

Os workflows privados recusaram iniciar por billing nos commits integrados. Os links são rastreabilidade dessas execuções; não representam CI verde. A exceção temporária autorizada foi aplicada com builds reais, isolamento, staging, smoke/E2E e verificação de todos os arquivos HTML/JS/CSS relevantes, incluindo carregamento sob demanda. Teacher/Student/Admin só promoveram main após staging, por fast-forward com guarda exata do ref anterior. Site/Cupom usaram canais de preview no projeto staging antes da publicação.

As verificações de produção do Teacher e Student usaram perfis E2E isolados; a jornada de mensagens do Student foi exercitada em staging. Admin, Site e Cupom tiveram smoke em 390/1440 com tráfego externo bloqueado. Isso prova fonte/artefatos e os fluxos descritos, sem alegar testes de pagamentos ou providers que não foram alterados.

## Continuidade e reversão

As fontes anteriores de main e os releases anteriores de Hosting estão nos recibos locais de publicação. Reverter uma adoção exige restaurar o bundle e a fonte anterior do próprio produto; não basta trocar isoladamente o pacote, pois 2.0.0 tem mudanças intencionais em ScheduleRow/CalendarDay. A tag e o arquivo 2.0.0 permanecem imutáveis.

Rotas, serviços, queries, regras e orquestração continuam nos produtos. A biblioteca concentra apresentação e interação sem flags por projeto, sem DSL de telas e sem import global de CSS. Canônicos e refs locais/remotos foram alinhados com preservação dos drafts; o recibo operacional final registra essa leitura.

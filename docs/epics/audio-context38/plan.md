# Feedback38 — áudio, contexto e dispositivos

Impacto direto, fonte-base UI fa54e171 / Teacher e5bad0c6. Usuária autoriza publicação staging e assume testes/QA/escuta. Corrigir todos os pontos da A102, WhatsApps dos materiais e os dois novos ajustes A103 no mesmo lote. Sem testes/browser/screenshot/QA, produção, Claude/Lab remoto, npm, merge ou backend.

## Causa e trabalho

- A102: retained recordings em audio-provenance.json têm file absoluto local. O glob usa chaves relativas, e o resolver descarta os clipes. Separar file relativo de fonte/proveniência local e usar um adaptador robusto sem alterar correspondência exata ID/texto. Não regenerar51 clipes válidos por bug de binding.
- Quatro falaIDs relatados: A.A, A.M, S.1, D.4. Novos soletrados em fala única, sem montagem/crossfade de fonemas. Toque digital suave em volume baixo, com lifecycle já canônico. D.2 permanece intacto.
- Alfabeto: apoio de som aproximado em PT-BR, nome inglês da letra no áudio. Campo display de dica não vira texto de binding.
- WhatsApps: retrato canônico no cabeçalho e na mensagem de áudio, uma mensagem curta contextual antes. Preservar mensagens já válidas e comportamento de terceira escuta. Não fabricar um perfil de aluna.
- Workstation: monitor proporcional à cena, moldura/stand, barra de janela e horário/taskbar nativos. Campos continuam reais e sem salvamento simulado.
- Outgoing call: título deixa claro que a aluna pergunta; nome/foto da professora logada via bridge autenticada do Teacher, só em memória. Balões dentro do celular, no padrão da fala recebida. Fora do portal usar Your teacher, sem pessoa fictícia.
- A103 Family words: um único subtítulo; balões de palavra+exemplo sem scroll interno, dimensionados para o conteúdo.

## Donos e contrato

Root único writer UI, áudio em output privado e Integração única writer Teacher. Teacher usa useCurrentTeacher com identidade de sessão real, envia teacher-context v1 (materialKey/sourceCommit/teacher.name/avatarUrl). UI verifica origem, source janela, key e SHA; não envia nome/query/localStorage. Notes/foco preservados. Integração aguarda SOURCEFINAL38 para uma adoção/buildTeacher/Hosting ACK; reutiliza package/API/export da raiz. Atualizar guideline, docs/stories da UI Library e registro de personagens apenas quando houver novo fato.

## Implementação

Resolver relativo e proveniência normalizada;51speechIDs válidos mantidos,4 substituídos por requests diretos e SFXnovo. PT-BR sound tips preservam IDs/textos nativos do alfabeto. Bridge autenticada acordada com Integração; receptor UI pronto. Workstation, mensagens dentro do telefone, retrato/mensagem de contexto nos WhatsApps e ajustes A103 implementados na biblioteca/fontes. Stories/guia/documento de personagens atualizados. Seguem somente formatação, package/API/export e publicação staging autorizada.

## Preparação concluída

Uma formatação da fonte, package build exit0 e API write exit0. Alteração de copy final A106 evita implicar que Kim possui os pets da irmã; não altera entradas do pacote. Teacher preparou a bridge em commit local29a9b0c657fa99791c34c3edd5737ff29b799893, sem push/build/deploy. Fonte UI segue para commit/export; publicação final depende do ACK do Hosting, sem QA adicional.

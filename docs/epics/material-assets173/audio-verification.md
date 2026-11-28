# Primeiro clique de áudio na B1.01

Em 28/11/2026, o Chrome reproduziu o início lento no material de produção dentro de um iframe de mesma origem. As três ações enviaram o MP3 correto e chegaram a `playing` após um clique. A espera variou de 4,12 a 6,72 s nas condições medidas. O navegador iniciou o carregamento de 19 gravações antes da seleção. O incidente exato da sessão da professora permanece sem rastreio.

## Comparação no desktop

Com cache vazio, viewport de 1366 × 830 e MP3s limitados a 130 KiB/s com latência de 220 ms, um clique em **Play dialogue: Practise the conversation** produziu os resultados abaixo. O tempo vai do evento de clique até o evento nativo `playing` de D.1. Cada versão foi medida uma vez.

| Versão local                    | Gravações com `loadstart` antes do clique | Início de D.1 | Continuação                            |
| ------------------------------- | ----------------------------------------: | ------------: | -------------------------------------- |
| Base publicada 172 (`1a5cdd0e`) |                                        19 |        4,60 s | D.1 terminou e a fala seguinte começou |
| Candidata 173                   |                                         1 |        1,22 s | D.1 terminou e a fala seguinte começou |

Outra execução demonstrou a interrupção durante o carregamento. Na base, dois cliques consecutivos produziram dois `play()`, um `pause()` e um `AbortError` antes do primeiro evento `playing`. Na candidata, os dois cliques produziram um único `play()` de D.1, que chegou a `ended`. No vocabulário, induzir `ERR_CONNECTION_RESET` uma vez no primeiro pedido do MP3 também permitiu verificar a recuperação. A gravação chegou a `playing` e `ended` com um clique.

## Primeiro toque em viewport de celular

Chrome 158.0.8127.88 em desktop com emulação de 390 × 844, DPR 3 e toque habilitado. Cada linha usou um contexto novo, cache vazio, rede local sem limitação e um único toque pelo Playwright (`locator.tap()`). A medição cobre o navegador emulado. A reprodução em aparelho físico permanece sem verificação.

| Página e controle                                             | Do toque a `playing` | Resultado                              |
| ------------------------------------------------------------- | -------------------: | -------------------------------------- |
| `s2` · Name the pictures · Reveal and listen 1: work overtime |               1,01 s | FS81.0 terminou                        |
| `s_dialogue1` · Practise the conversation · Play dialogue     |               0,13 s | D.1 terminou e a fala seguinte começou |
| `s_gap99` · Complete the conversation · Reveal answer 2       |               0,02 s | D.1 terminou                           |

## Como reproduzir

1. Sirva o Standalone de desenvolvimento e abra-o em um iframe de mesma origem com `allow="clipboard-write; fullscreen"`. Use `/?page=s2&studentPortalOrigin=https%3A%2F%2Fstudent.langy.space#b1-01`. Troque `s2` pelo ID da tabela para as outras páginas. O seletor de página é `[data-slide-id="<id>"]`.
2. Abra um contexto novo por página e desabilite o cache. Acione uma vez o controle indicado. Registre o clique e os eventos nativos `playing` e `ended` do MP3 selecionado. Para testar a interrupção, acione o controle de diálogo de novo enquanto a primeira chamada de `play()` está pendente.
3. Execute as regressões de carregamento, sequência, cancelamento e recuperação com `pnpm exec vitest run --project unit test/internal/usePreparedAudio.test.tsx test/internal/playPreparedAudio.test.ts`. Resultado da candidata em 28/11: 18 de 18 passaram.

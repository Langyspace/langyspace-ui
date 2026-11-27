# Entrega156 — seis altas novas

Corrige somente bag, six, All right, Great, recovery que podia repetir início de fala e previewilegível do Quiz A1.12. Não reabre France, C/D/E/G/T, Souza ou Recife.

## Resultado

- Quatro TTS e um composto de bag: somente cinco MP3 substituídos, mesmos IDs/textos/caminhos e vozes. Bag/six usam CMU/Flashv2 com settings suportados; as falas completas conservam Multilingualv2/settings originais. O exemplo de bag permanece byte-idêntico; pausa composta350ms incluindo silêncio natural retido, sem cortar fonemas. Quatro STTdirigidos reconheceram alvos; isso não certifica naturalidade.
- playPreparedAudio recupera preload antes de começar; após início/progresso, não chama load/replay e informa falha uma vez. Cancelamentos e tentativas obsoletas não retomam playback. Isso elimina o caminho de reinício silencioso identificado, sem afirmar que foi a causa da sessão da professora.
- MobileFrame acrescenta application-responsive, opt-in, com viewport real sem transform. QuizSession acrescenta presentation=preview, também opt-in, com tipografia não escalada/chrome compacto. Depois da resposta resume a seleção; abaixo22rem úteis prioriza feedback e Próxima. O Quiz do homework adota esses modos. SessãoStudentdefault, Flashcards eShadowing preservam comportamentos anteriores.

## Verificação proporcional

-12testes focados de playback passaram (agente);9deMobileFrame/QuizSession passaram após a revisão final dos modos. Não repetidos sem mudança relevante.
- DeclaraçõesTypeScript e contrato público passaram:185valores/312tipos/659declarações. Contratos são aditivos; nenhuma alteração de mapa foi incluída; entrega isolada sobre a fonte publicada7e8e59df.
- Autoria/proveniência: só5bindings e5MP3 alterados; demais objetos de gravação idênticos; ID/texto/file preservados.
- Stories com A1.12 real, escolha/correção e viewportestreito; teste de portal emiframe, fluxo de resposta e defaultsession. Sem navegador, screenshot ou garantia de encaixe universal.
- PreviewVite8868 respondeHTTP200 e abertura noCodexfoi enfileirada; isso não prova render ou escuta humana.

## Preview

- A1.12 homework: http://127.0.0.1:8868/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s_homework#a1-12
- bag: http://127.0.0.1:8868/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s2#a1-11
- six: http://127.0.0.1:8868/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s2#a1-02
- All right: http://127.0.0.1:8868/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s_dialogue2#a2-11
- Great: http://127.0.0.1:8868/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s_dialogue2#a2-12

Preview é fonteHMR, não export qualificado. Servidor isolado e base publicada7e8e59df preservam trabalho dos outroschats; nenhum merge/Teacheradoption/Hosting/Student/auth/dados de alunas foi acionado. Publicação e revisão visual/perceptiva permanecem separadas.

Evidência privada: outputs/high-priority156/audio (requests/hash/headers/STT/derivação), playback/handoff.json, audio-integration.json, preview-review.md. PR permanece draft sem screenshots/revisão da dona.

Visual gate review: pending human

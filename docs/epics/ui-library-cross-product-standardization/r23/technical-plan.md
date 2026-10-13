# Plano R23

UI1.19.0 após1.18.0. PracticePlaybackControls nove props: playing, playLabel, onPlay,
skipAction opcional(label/onClick), speed, speedOptions, onSpeedChange, translationVisible,
onTranslationToggle. Texto Tradução comum aos consumidores; nenhum callback de progresso/provider.
Velocidades são strings controladas, UI não converte para playbackRate. Ícones SVG equivalentes.
Recipe local respeita tokens reais640/900/761,68→84 play,48→56 skip, gaps/paddings/fontsize.

Capacidade pré-code: lib143000raw/30000gzip; entryplayback21000raw/5200gzip. Famílias/caps anteriores
intactos. API aditiva; nativeform/3callbacks/disabled se pertinente/slots opcionais e stories com a11y.
Affected Student /licoes shadowing/music/personalized; Teacher /alunos/:id/licoes mesmas sessões.
Estados parado/tocando/tradução/velocidades/skip/repetição/completo/erro,390/640/900/901/1440,
alturas760/761/1100 e reduced. Fixtures áudio/progresso isoladas; não tocar WebAudio/Speech/controller.
Official+pares antes de staging; controller cleanup/eventos/persistência permanecem locais.

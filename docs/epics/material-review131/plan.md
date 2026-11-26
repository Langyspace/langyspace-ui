# Material review131

Revisão solicitada após produção130: abertura nativa em aba, mídia real dos homework, feedback de cópia sem deslocar botão, referências legíveis em Guess who, materiais e vídeos ausentes na trilha. Agentes com responsabilidades isoladas; raiz integra UI e confere interações visuais. Preservar conteúdo válido, textos aprovados, estilos de outros exercícios e fontes de mídia. Instruções concentradas em título/subtítulo. Não confundir plano com atividade implementada, nem rótulo com imagem.

Base UI fb5c8e38 e Teacher e1563ebe; sem merge automático e sem publicação de pacote/Functions. Mudanças visuais em feature branch com prévia local e gates de revisão separados.

## Implemented source and focused evidence

- Catalog: 67 entries, adding DEV.01 study and DEV.02 interviews, keeping first-day as DEV.03; archived Frontend content remains available in source and is removed only from the listing.
- Each new lesson: 14 pages, six illustrated vocabulary items, guided oral practice, contextual tasks, recordings, a fixed YouTube excerpt, free conversation penultimate, homework last. Study has 20 flashcards and six shadowing phrases; interviews has the same activity counts. The interview cards reuse six coherent scenes as contextual support, rather than claiming 20 distinct illustrations.
- Missing media: source scan covers 65 homework modules, 733 cards (697 image bindings and 36 deliberate A102 letters/digits), plus identified shadowing speakers. Invalid legacy image paths and absolute/bundled avatar resolution have explicit replacements; authoring checks preserve non-media content from the production130 baseline.
- Copy feedback: transient check replaces the copy glyph inside the same button. Accessible confirmation is clipped outside layout; actual browser coordinates before/after match exactly at 1280×800. The superseded external green status is not the delivered design.
- Guess who: shared SpokenPrompt visual variant, white/black, 20px medium weight, ordinary chip usages untouched. Source-derived before/after evidence at narrow and desktop widths.
- InterviewSimulation: optional imageFit forwards to existing MeetingFrame; default cover remains unchanged, new portrait calls opt into contain. This additive API and SpokenPrompt declaration are deliberately reflected in the public snapshot. Focused default/contain test passes; complete portraits confirmed in browser. No package registry publication is needed for bundled lesson source.
- Source and artifact diagnosis: the Student media signer only accepts canonical audio.mp3/back-audio.mp3 and image.webp aliases. Preserve actual source bytes while creating immutable canonical aliases; do not regenerate valid media for a binding problem.
- Native opening: twelve contract tests confirm native blank-target links preserve ordinary/Ctrl/Meta activation. Detached-window behavior is unreplicated; the user cannot identify whether the installed app was used. No asserted popup fix or browser-setting change.

## Verification already reused

Copy interaction tests: four passed. Native opening: twelve passed. Student letter/digit fallback: 44 samples plus three pre-existing cases. Media ownership/scope guard: eight focused cases passed. Audio alias normalizer: three passed. New lesson/video composition checks passed. Homework media and 20-card minimum passed; the Frontend baseline row was intentionally updated for media-only SVG raster/path replacement, and its non-media preservation rerun passed. Interview transport tests passed before the framing addition; framing-only regression passed afterward. Declaration generation and API compatibility check passed. Typecheck rerun only after the new optional prop. CI owns the full repository suites.

## Delivery sequence

Commit prepared UI A, publish the selected Student staging activities with exact source/bytes guard and provider readback, then mark only the two newly provisioned homework modules as staging-published in UI B. Publish one final neutral artifact to Teacher staging with catalog/covers guard. Data receipt binding to A and the metadata-only A→B update remain explicit. No production131 deployment or merge is authorized by this delivery. Detached-window reproduction and final human visual/accent review stay explicit limits.

Browser verification completed on the actual local application: new interview speech entered playing and finished with a learner cue; the optional contain framing keeps the full approved portrait visible. Study listening loads two notes with real durations, first playback entered Pause without an error; six questions and phone fit in the same centered view. Study vocabulary six square scenes fills the grid without the previous empty sidebars. Temporary viewport override was reset and the local preview tab kept for review. These are targeted observations, not an all-page or acoustic-quality certification.

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

## Observed server compatibility correction after provisional staging A

The exact Student readback rejected the attempted emoji mirror for36 A102 letters/digits. The official validator and response mapper do not expose that field; the verifier correctly stopped on the first activity. Storage768 objects had verified receipts, but no activity was marked verified. After removing the unsupported field, a directed readback of A102 matched every expected authored field. No verifier relaxation or backend deployment.

Thirty-six native typographic images now supply the exact A–Z/0–9 symbols, using bundled Montserrat600, black on white,512×512,SVG originals and lossless WebP,74320bytes total,zero AI calls. A102 IDs, wording, examples, audio and progress identities remain unchanged. All733 cards across65 current+archived homework modules now resolve real image bytes (64 homework modules are active; Frontend remains archived). The two focused media/minimum files pass3 checks. The intentional A102 media baseline row is updated, while the independent non-media baseline130 remains exact.

UI B1 only adds these native images/media bindings, authoring guidance and evidence. Student scope is regenerated for this clean source and804 media; actual homework link activation follows provider readback in the final UI revision. Provisional Teacher staging A is verified with catalog67 and preserved latest9f67 business source; its receipt is archived separately. The first coordinator attempt required publishing the feature ref before release source admission; it made no Hosting change. The resumed A release completed with verified provider receipt. Extra source commits/builds are caused by these observed compatibility/concurrent-publication issues.

## Full payload compatibility before final retry

A second actual payload failure identified legacy PictureRegion rectangles unsupported by the activity API (100×100 grids and spans); this stopped at A106 after A102 and A103 were verified. The teacher view supported those rectangles, while the server accepts grids no larger than8×8 without spans. Fifteen native media exports now reproduce21 existing views, preserving source images and their exact documented rectangles (nearest-pixel edges,at most0.5px rounding). Six lesson JSONs and seven modules change only media bindings/region removal, with non-media hashes unchanged. No new AI image or recording was generated for compatibility.

The Student preparer is additionally checked against the official activity validator, including the three shadowing payloads, required theme/tone, canonical speaker IDs/associations and server accent labels. The verifier is not relaxed. First-attempt storage and activity receipts remain separate from the final run. Concurrent Teacher staging publication c25 was merged; only docs/E2E changed relative to9f67, so the existing verified Teacher build was reused to restore the catalog a second time. Latest restoration sourceb9a1d35b and provider version24d5b347d8662f40 are archived separately.

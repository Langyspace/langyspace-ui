# ComicRolePlay

An image-led conversation in a sequence of comic panels. Speech balloons start empty. Two optional progressive controls beneath the whole comic reveal an intention or an example one turn at a time. Examples are speaking support, not correct answers. There is no audio or evaluation.

Provide stable unique panel/turn/participant IDs, full-image URLs and descriptive alternatives. Order the artwork and each panel’s turns consistently with `participants` (left to right); put the same actors in the same positions throughout. The list supplies reading order. `guidance` is optional and controlled: the consumer stores hinted/revealed IDs; callbacks with no ID clear their respective layer. A revealed model supersedes its hint. Hints skip turns already showing a model.

The consumer owns profiles, fallback names, copy and state. `Avatar` renders each participant once; `onParticipantImageError` lets a consumer switch a missing learner photo back to You. The component has no authentication, schedule, storage or teacher-specific rules.

Native balloon bands precede their illustrations in document flow, preserving complete images and expanding for long text. There are no positioned text overlays, clipped answers or nested scrollers. The two-column comic becomes one column in a narrow container. Use the shared SlidePage width contract for both heading and body. A taller revealed or narrow state may need ordinary page navigation; do not shrink readable type to promise fit on every display.

Use illustration-only scenes with coherent visual evidence. Do not bake frames, text, bubbles or real participant photos into generated images. Preserve the canonical illustration prompt byte for byte and record per-scene requests/provenance. Existing guided conversation/MessageBubble components remain responsible for their existing interaction and playback states.

Reference: TrialA1 `TrialA1Comic` (four panels, eight optional turns). Storybook covers blank, tips, models, no support, long text and narrow containers; focused tests cover progressive order, hidden defaults, avatar failures and SSR growth. Visual acceptance remains with the product owner.

# Technical plan

Authority: Student e98c5729 FlashcardsV2/ShadowingPlayer and their CSS. Teacher 6d2ec327 simulation exposes copied session markup; material UI41de58c7 RoutineHomework has another composition.

Add UI FlashcardSession and ShadowingSession controlled presentation contracts, reusing canonical primitives. Move Student's session-only Flashcard frame media rules into FlashcardFrame's opt-in session layout. Existing content frame remains default. Inject localized labels and callback/ref slots; retain Student/Teacher controller code. Remove copied active markup/styles from consumers and material. Existing controllers supply real playback and scheduling, not library business logic.

Adopt one immutable candidate in both products for draft review, with source/hash provenance. Official package release and any deployment remain separate qualified steps. Preserve the paused homework85/quiz worktrees.

Evidence: focused shared contract tests and component inventory/API; focused Student SRS interaction and Teacher preview delegation; browser captures at matching mobile/desktop sizes and lesson virtual viewport, checking native media and common DOM geometry.

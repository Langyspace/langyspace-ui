# Extras and pathway delta131

Base `fb5c8e3808f2b27656ac877f8025a60e5c65c165`; feature branch `feat/material-review131`.

- Restored `DEV.03` in the first-day catalog entry and cover eyebrow. Removed only Frontend from the catalog, following `7fe57221`; its files and MaterialViews mapping remain intact. The catalog now lists65materials. The old Frontend hash is not claimed accessible because bootstrap admission uses the catalog.
- DevFirstDay adds `s_video131` using British Council **Agreeing and disagreeing**,49–107s, previously curated in B1.05. Its four authored questions connect the disagreement/brief to the lesson’s Login work. The existing first call, Planning and Review demos are unchanged. Twelve page IDs preserve all eleven old IDs.
- InfluencerRoutine adds `s_video131` using British Council **Talking about personal interests**,65–104s, previously curated in A104. Its four authored questions practise meditation habits, frequency and oral transfer. Nineteen page IDs preserve all eighteen old IDs.
- Both new pages compose `MaterialVideoPage`; existing VideoExercise and PromptExercise own player, questions and reveal interactions. Each ends `s_video131 → free-conversation → homework`. Notes retain their existing capability/persistence; page IDs and labels supplied by the deck include the new page. No private teacher notes were edited.
- Official transcript inspection found reversed speaker names in the old A104 video questions. Corrected onlyq2/q3 question names/answers in activeA104 and its102curation snapshot: Emir practises in the mornings; Paul once or twice a week. Clip, question IDs, other exercise text and recordings are unchanged.
- DEV.01 studies and DEV.02 interviews remain plans; no new material or media generated. Homework/Copy are outside this delta and handled by their owner.

Evidence and exact questions: [extras-video-curation.json](extras-video-curation.json). Official publisher transcripts were inspected26November2026: [routine](https://learnenglish.britishcouncil.org/free-resources/speaking/a2/talking-about-personal-interests), [work design discussion](https://learnenglish.britishcouncil.org/free-resources/speaking/b1/agreeing-disagreeing). Exact excerpt bounds reuse the existing102curation; historical exported caption filenames/hashes are recorded as prior evidence, without claiming the old text files were reopened.

One focused static composition/syntax check passed: old IDs preserved,12/19unique IDs, one video before the protected ending,4questions each, catalog65with onlyFrontend removed, DEV.03 and A104 names coherent. Receipt: `/Users/margaridamartins/Documents/Codex/2026-11-18/new-chat-3/outputs/material-review131/curriculum/composition-check131.json`.

No playback, replay, caption rendering, iframe embedding, responsive layout, network/error state or preceding-page preload verified here. Root performs the allowed runtime review. No broad tests, build, browser, CI, push or deploy by this subtask. No shared API/component changes, audio/image generation or homework mutation.

Visual gate review: pending human.

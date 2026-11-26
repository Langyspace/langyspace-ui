# DEV.01 implementation handoff

Worktree `/Users/margaridamartins/.codex/worktrees/material-review131-ui`, branch `feat/material-review131`. New key `extra-dev-study`, code `DEV.01`, title **Build your path into tech**, levelsA2/B1. All source is new; no catalog, MaterialViews, Student, publisher or existing lesson changes in this subtask.

## Root integration

- View: `stories/materials/DevStudy131/DevStudy131Lesson.tsx`, export `DevStudy131Lesson`; pageIDs export `devStudyPageIds` (14IDs). Native helper composition in `DevStudy131Exercises.tsx`; types in `.types.ts`.
- Source: `DevStudy131.content.json` (14pages/50min); `DevStudy131.video.json` (officialfreeCodeCamp21:53–22:52); `DevStudy131.practice.json` (exact20cards+6phrases+voice assignment).
- Audio: `DevStudy131.recordings.ts` declares60future staticMP3imports at the exact paths in `frozen-audio.json`. Root adopts provider bytes before building. The frozenSHA remains `d63bb1e0cb9ed89b133543796d80f0a4e132c434bb5c8a2ff8b5c28c506b8298`. Reuse candidates are separate metadata, not altered speech or fake provenance.
- Media: root adopted real `assets/cover131.webp` and `assets/vocabulary-atlas131.webp`. Six classroom/homework images share the new3×2atlas; the other14homework images use approvedDevFirstDay/Frontend bindings through `homeworkMediaImages('extra-dev-first-day')`, including their original regions. `media-bindings.json` enumerates all20.
- Prepared practice: `DevStudy131.practice.ts`; per-lesson loader `stories/materials/Practice/lessons/extra-dev-study.module.ts`. `publishedEnvironments` remains empty. Provision exact IDs `dev-study-flashcards` and `dev-study-shadowing`, tags `dev-track131`+`extra-dev-study`; after real payload/media readback root enables the correct environment. No invented URLs or live progress.
- Three shadowing identities: KimUS×4, OwenGB×1, NiamhIE×1; existing correct portraits mapped under canonicallogical `/flashcards/course-characters/.../image.webp` keys. Both WhatsApp notes use the sameKim/Sarah voice.
- Notes: existing `useLessonNotesPopup`/LessonNotes/trigger; stable14pageIDs and labels are provided by the deck. Root owns any external exporter/catalog/Notes metadata integration; private notes are untouched.

## Interaction and content

Six illustrated introductory words, then native exampleweek and a six-turnAna/Kim model with3Questions beside it. Seven oralpractice pages each have3teacher/learner pairs, real session identities and one progressivebulb cycling hint/model perresponse. The teacher already has complete questions; learner responses are live and never recorded or graded.

Task-list references and a before/afterrefresh comparison are native read-onlywork evidence. The mentor page reuses the actual approvedLoginDemoScreen; the learner explains what the form should do, suggests a safe test account and asks for feedback. Its controls are the teacher’s optional demo, not learner input requirements. The portfolio reference keeps frontend/backend/API/repository concepts coherent with the14TIhomework targets. No extra grammar page is needed.

Listening: oneVoiceMessageExercise, oneKim greeting and2connected notes, automatic third-listentranscripts, one6-question list. The header assigns1–3to note1and4–6to note2. Reply afterward is a focused oralconversation without a project screen. No repeatedHi, simulatedsend, microphone recording or browserTTS.

Ending: video→sharedFreeConversationPage/MeetingFrame→LessonHomeworkGallery. Fullsource and frozencontent stay in English, assignmentcopyPT-BR; no privatelearner details in data/storage.

## Evidence and remaining review

One focused staticcomposition/syntax check passed in `composition-check.json`:14uniqueIDs, renderer/data/IDorder agree,50min,6vocab,6modelturns+3Questions,7livepractices of3pairs,1chat/2notes/6questions,59svideo/4questions,20distinctcards with20realmedia keys,6shadowing(4US/1GB/1IE),all60frozenIDs usedexactly,provisionguard empty. This is source evidence, not perceptualQA.

Root performs combinedcompile after media/adoption and runtimechecks for the player/replay/captions, narrow/wide composition, expandedanswers/transcripts and mutualaudio behavior. In particular,6listeningquestions and3oralpairs can grow when all supports are revealed; no claim of universalfit was made. PrototypeLoginfields remain optionalteachercontrols. The video is explanatory spokenadvice and requires no codingexercise; this snippet stops before laterportfolio advice and does not promise that a tutorialtask-list gets a job.

No broadtests, build, browser, playback, CI, commit, push or deploy. No audio/image generation by this subtask. Integration and staging publication belong to root.

Visual gate review: pending human.

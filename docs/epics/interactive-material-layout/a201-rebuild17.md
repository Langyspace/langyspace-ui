# A2.01 · What Are You Doing?

Final source composition. Based on A1.01 and canonical UX Lab components at UI 477e267578ed09b688cc61409a913ef4e3336671. Global arrow/scroll owned by root, outside this patch. No A101, shared source, publication, builds, tests, QA, screenshots or renders.

| Page    | Objective                                                   | Composition                                                         |
| ------- | ----------------------------------------------------------- | ------------------------------------------------------------------- |
| s1      | Name six actions with matching subjects                     | VocabularyGrid, same regular scene/contain layout as A1             |
| s2      | Recall five time expressions from Portuguese                | GrammarTable, individual controlled reveal/hide, prepared audio     |
| s3–s8   | Identify six activities; alternate correct option positions | WarmupPage, ExercisePanel warmup, QuizOption                        |
| s9      | Compare now/temporary with habits                           | Two GrammarTable blocks, highlighted structures and time markers    |
| s10     | Describe six named people in one park                       | SceneExplorer labels, persistent scene, PromptExercise              |
| s11     | Read Anna/Ben and discuss four exact questions              | CharacterDialogue, DialoguePlaybackAction, PromptExercise           |
| s12     | Complete Emma/Lucas orally, ten independent gaps            | CharacterDialogue + Button, complete text visible                   |
| s13     | Answer six exact comprehension questions with reference     | Same complete gap dialogue and lifted reveal state + PromptExercise |
| s14     | Answer five exact personal questions with reference         | Same complete gap dialogue and lifted reveal state + PromptExercise |
| s15     | Mime eight activities and ask about routines                | RevealCard, always visible four-line model                          |
| s16–s19 | Extend conversation, five exact questions per page          | PromptExercise, standard MaterialSlideDeck navigation               |
| s20     | Record real-life observation audio                          | Shared Surface/PromptExercise, mission, example and four steps      |

Notes popup, page navigation, standard page/keyboard controls and prepared native audio follow A1 architecture. No browser speech fallback. Repeated gap views share state; revealing a gap never hides the dialogue. Names are dialogue metadata, not spoken prefixes.

All dependencies received: seven new images, measured park label coordinates/target bounds and 31 prepared audio items. No old A201 media is used as a fallback. SceneExplorer labelVisibility="always" is available at root source 3fd69645cb1143feb0a6b642aaea48cd017871d5; this patch adopts it. Root composed the frozen package after source16, with staging/original A2/Lab publication following the global16 delivery.

Composition refinements: the catalog now uses What Are You Doing? and the new park cover. Warmups refer to the pictured woman and sleeping group as she/they, while the supplied first-person vocabulary sentences remain exact. Repeated grammar headings were removed because GrammarTable already supplies a visible caption. The time-expression instruction is short English.

Reuse: seven generated images, with the same six action files used in vocabulary and warmups; 31 prepared ElevenLabs clips, without repeated synthesis. No public component contract changed in this material composition. The retired A201:s6 recording binding remains undefined to retain the existing typed registry contract; all other lessons keep their recordings.

After this A2 delivery, stop for Margarida to review. Do not begin further material audits. Functional/visual evaluation remains hers; no tests, browser sessions or screenshots.

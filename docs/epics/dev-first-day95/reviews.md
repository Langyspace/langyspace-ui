# Page-by-page review

Keep feedback here while the sequence grows in the live local preview. Do not rebuild or republish after every note.

| Page | Current design | Review notes |
|---|---|---|
| 01 · Cover | Kim at her desk, title and purpose | Awaiting owner review |
| 02 · Toolkit | POV developer desk, six native hotspots with word + example audio | Awaiting owner review |
| 03 · Team call | Five sequential clips + silent learner intent/hint after each | Owner: fill image width, remove duplicate labels, use canonical meeting icons; implemented |
| 04 · Access | Light monitor, padlock/error evidence + teacher opening and oral learner request | Awaiting owner review |
| 05 · Planning | Five teammates + You; six sequential turns, disagreement and scope negotiation | Owner: replace board/bubbles with group meeting; implemented |
| 06 · Daily | To do / Waiting / Done with assignee avatars + three oral update pairs | Awaiting owner review |
| 07 · Review | Owen Registration, Ruby Password reset, Priya Backend, then You Login | Owner: two colleagues present first, then learner; implemented |
| 08 · Feedback | Kim voice note + clarify / agree next action | Awaiting owner review |
| 09 · New situation | Inactive test-account board + teacher opening and supported oral request | Awaiting owner review |
| 10 · Free conversation | Topic-related, protected eight minutes | Awaiting owner review |
| 11 · Homework | Native Student previews and teacher voice-note task | 20 flashcards and6 shadowing phrases verified in staging; production disabled |

## Applied narrative / screen-share revision

- Replaced Save draft throughout active lesson data, recordings, diagrams, prototypes, feedback and homework with a customer portal: Registration / Login / Password reset / Backend. Historical media receipts remain unchanged and are not active bindings.
- Replaced Ask for access’s message composer with an oral role-play, using the visible repository error as evidence. All classroom fields are read-only demonstration content; no learner keyboard/mouse is required.
- Replaced Noah with existing Ruby and her Australian voice. Owen and Ruby have clearly distinct approved portraits; neither canonical asset was regenerated or changed.
- The Login presenter explains visible success, wrong-password and recovery states, operated by the teacher. The two earlier screen presentations and backend presentation establish the product context first.

## 25 November — Kim caption placement

Owner requested restoring Kim’s caption over the image. The canonical single-speaker MeetingFrame now reuses the original InterviewSimulation caption overlay inside its stage, instead of adding a paragraph below it. Caption width avoids the learner inset and does not add frame height. The separate silent learner turn remains unchanged. Shared-screen/group captions retain their existing placement so this fix does not cover native form controls.

## 25 November — learner caption, no detached bubble

Owner requested the learner turn follow the same caption model as Kim. On completion of a directed teammate clip, the same MeetingFrame caption slot now changes to the learner’s name + Your turn, oral intent and canonical compact bulb. Replaying restores the teammate caption. There is no extra bubble beneath the meeting and no learner audio. Group/shared-screen calls follow their existing caption slot too. The separate oral-response pattern on the feedback activity is unchanged.

## 25 November — learner position and media-bar hint

Owner clarified the learner caption should not occupy Kim’s exact position: place it lower and farther right, still inside the single-speaker video and clear of the learner inset. In shared screens its caption is right-aligned. Move the canonical bulb beside Next using the transport’s opt-in supportAction slot. Remove both the external Your turn · Reply aloud status and the redundant Your turn suffix inside the learner caption; the participant name and cue identify the turn. No learner audio.

## Clarification — both captions and filled media hint

Keep the teammate caption and learner prompt visible together. Inside the single-speaker image use two caption rows: recorded speaker above/left, learner below/right, clear of the inset and without external bubble. The native transport owns the support button, matching the other filled icons on grey circular controls; the consumer supplies the action/label/pressed state. The redundant external Your turn · Reply aloud message is removed.

## Remove changing player notices

Removed all routine below-player helper text (Listen, then reply aloud; Continue when ready; Part/Press play notices). Only actual audio errors use the status slot. The filled grey hint control stays mounted beside Next and is disabled until there is a learner prompt, so neither the button row nor a helper-text block appears/disappears between normal playback states.

## Planning without screen sharing

Owner requested a people-only planning discussion. Planning no longer passes sharedContent, so the existing MeetingFrame renders five teammates plus the learner in its conversation grid. Both current-speaker and silent learner captions remain visible with the agreed separate alignment, and the filled grey hint stays beside Next. Review retains screen sharing for its concrete work presentations. No audio, cast or practice prompts were changed.

## Planning captions inside the video

Owner clarified that both planning captions belong over the images, not below the participant grid. People-only grids now reuse MeetingFrame's existing caption overlay stack: speaker above/left, learner below/right. The overlay is contained by the video stage and adds no external caption rows. Shared-screen review keeps its captions clear of native form controls; spotlight defaults and transport are unchanged.

## Hint replaces the learner instruction

The learner caption shows one text at a time: its oral instruction initially, the speaking hint while the bulb is active, then the original instruction when the hint is hidden. Applied through the shared learner-caption renderer used by the introduction, planning and review; teammate captions and playback remain unchanged.

## Shared application presentation — vertical participants

Owner rejected the cramped shared form and later the horizontal participant strip / captions beside the form. Final composition: identified presenter in the shared window bar, application above and both captions in its lower free area, with the six participants in a vertical column on the right. Participant-grid size containment prevents portrait dimensions from stretching the shared window; there is no fixed-height form overflow over call controls. The content uses native light-theme inputs/buttons and a compact read-only demo; unrelated feedback forms keep their previous size and vertical flow. SharedContentLabel and the screen-share icon are additive canonical props/variants. No new media, audio or recording copy.

## Progressive speaking support

One filled bulb cycles through instruction → short hint → complete example → instruction, replacing the learner text at each step. Applied to all 12 directed learner turns across introduction, planning and review. Examples are optional models, not recorded learner speech or personal biography; Alex is an illustrative example name. Playback/previous/next reset support, and the transport remains mounted.

## Standard light monitors

Owner reported overly wide screens and poor separation between their black content and the black lesson canvas, while reviewing Access. Repository, daily board and demo blocker now use the canonical ExercisePanel screenAspectRatio=4/3 with the existing light theme inside the monitor. The slide and conversation keep their reviewed theme. Aspect ratio is an opt-in library prop, with natural content growth rather than clipping; default monitors in other lessons are unchanged.

## Wide-window participant portraits

Owner reported eye-only crops in the shared review on wider windows. Shared participant columns are now bounded to 6–8rem. Each shared tile reserves separate portrait/name columns, fits the full image with contain, and uses a smaller initials avatar; names no longer cover faces. The planning grid keeps its reviewed cover treatment. No asset regeneration or public prop change.

## Restore the reviewed thumbnail composition

Owner rejected moving names beside the portraits and changing tile geometry. Restored the original shared-column tracks and lower-corner name badges; removed the extra name/photo columns. Portraits remain fully contained and centered (50%/50%) to prevent eye-only crops. This supersedes the previous wide-window layout note.

## Audio-only feedback interpretation

Owner requested removing the Mobile login screen from Respond to feedback on your screen. The activity now keeps Kim’s existing voice note and one silent learner response bubble with optional speaking help. The cue asks the learner to acknowledge the feedback and propose a next step. Removed the unused MobileFeedback composition; the recording, transcript reveal, source task and other Login prototypes remain intact.

## Simpler work screens, with context and support preserved

Final owner clarification supersedes the intermediate frame-free version. Access keeps a native 4:3 light computer frame, generated error artwork, Access denied, project title and work email; a single live teacher opening and You prompt provide hint → full example → reset. Daily keeps its frame and now has To do / Waiting / Done with only task titles and circular owner avatars. The demo blocker keeps its frame with Ready / Blocked and an open learner-led request to activate a test account. No repeated key-value lists or status prose. TaskBoard is a read-only canonical UI Library component, not a drag/save mock. The existing voiced meeting dialogue, all MP3s and homework are unchanged.

Generated access artwork: one built-in call, no references, exact Langy1.8 prefix preserved; PNG copied byte-identically, with prompt and provenance in access-error-image.json. An initial image-only Access version removed too much support and was corrected before handoff.

## Complete speaking support, teacher openings and centered pairs

Daily now uses the same private oral-practice orchestration: first click reveals one response hint, second a complete model, then proceeds to the next response in order; after all models the control resets. Feedback and demo blocker have an explicit live teacher opening. All live prompt labels use Teacher when context is absent, otherwise the existing teacher context’s first name and photo. No new authentication or voice synthesis.

Access now uses a newly generated padlock alone, with centered error text/email inside the same native monitor; the prior laptop+lock asset is historical. One new built-in call, exact1.8prefix, zero references, no edits; provenance is in access-padlock-image.json.

Paired device/board and live conversation columns are vertically centered consistently: SlidePage columnAlignment opts in for Access/Daily/Blocker, matching the existing balanced voice-message layout for Feedback. Default lesson alignment remains top. Screen text centering belongs to ExercisePanel screenTextAlign; Common.Stack remains unchanged to preserve its existing polymorphic consumers.
## 25 November — top alignment and trailing help

Owner prefers the short conversations aligned to the top of their paired device/board, and the help icon at the end rather than below. Access, Daily, Feedback and Blocker now opt into top alignment. A single native help control sits inside the final learner bubble via LearningDialogueLine.trailingAction. The existing hint → complete example sequence and meeting transport placement remain unchanged. This supersedes the earlier centered pairing preference.
## 25 November — POV work toolkit

Owner rejected the white vocabulary icons and requested a POV scene. Replaced six icon cards with one generated developer-desk illustration and six SceneExplorer vocabulary hotspots. Notebook = task; keycard = access permissions; blocked laptop = blocker; calendar = deadline; phone progress message = update; annotated Login printout = feedback. Each point reveals the same authored word/example and plays the exact existing word-plus-example recording. No new audio or local CSS. The canonical illustration prefix remains byte-identical; prompt and image provenance saved alongside this epic.

## 25 November — clarified column footer and staged homework

Owner clarified the bulb belongs outside all bubbles, horizontally centered at the bottom of the conversation column. This supersedes the intermediate inline-bubble placement. Access/Daily/Feedback/Blocker use the canonical stretch pairing with LearningDialogue.footerAction; dialogue remains at the top and meeting transport is unchanged.

Two homework activities are now verified in staging: dev-first-day-flashcards (6cards) and dev-first-day-shadowing (6phrases). The local ending enables their native links; production stays disabled.18 existing recordings and the canonical Kim portrait were reused, with no new generation. See homework/README.md and publication-receipt.json. No lesson Hosting export/publication or backend deployment occurred.

## 25 November — minimum twenty-card practice sets

Owner established a minimum of20 distinct useful words/expressions per flashcard set and asked to plan smaller sets already published. The Dev deck is now20:the original6 plus14 Login/work terms, all with matching label/example audio. Two exact technical labels reused from Frontend;26 missing recordings generated in the existing approved Kim voice. No unrelated B2 vocabulary imported merely to reach the count. Classroom vocabulary remains6 as a separate introductory rule.

Read-only inventories found30 other course decks below20 in both staging and production. Per-lesson additions, targets and thematic reuse paths are recorded in homework/expansion-plan20; these are proposals, not published updates. Existing80-card Software Development remains B2. Rule added to central material guide, UI agent guide and Student flashcard operations. Dev20 publication was verified in staging only, preserving shadowing and progress.

## Guideline consolidation —25 November

Final decisions consolidated in docs/materials/material-authoring-playbook.md and indexed at the top of the central guideline. The new-material entry in AGENTS points there. Developer series and current plan/table now match the customer-portal mission, POV toolkit, external column-footer help and20-card staged homework. Historical rejected iterations remain below as history rather than active instructions. Documentation only in this step; no new media, product changes or publication.

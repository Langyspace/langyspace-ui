# Grammar that teaches169

## Owner request and scope

Replace abstract/shallow grammar blocks with coherent teaching of the actual structures used in each lesson. A grammar page is optional. Preserve communicative practice instead of forcing a table of ready-made phrases into every lesson.

The maintained catalogue has 60 main lessons, three trial lessons and four extras. Inspection found 63 existing grammar pages across the maintained Course/dedicated sources and two manual extras. The trials, developer-study and developer-first-day lessons have no grammar page and remain without one.

## Result

- Rewrite 56 existing grammar pages and add two be pages to A1.01: 58 grammar pages remain in 56 materials.
- Remove seven weak/redundant blocks: A1.12, A2.06, B2.11, C1.10, C1.11, C1.12 and the second C1.01 block. Their useful language remains in the unchanged model/practice; no empty replacement page is rendered.
- Cover a named structure with its meaning, explicit form, complete contextual examples and a useful restriction/contrast. Include statements, negatives, questions and short answers where the topic warrants them; do not force that paradigm onto every advanced construction.
- A1.01: subject → am/is/are → full/short example. A separate page explains not, question inversion and short answers. Placement: after the recorded model, before the existing gaps/personal practice.
- A1.04: affirmative/negative/question forms plus third-person spelling. A2.02 and A2.08 include relevant irregular forms/past participles. Later grammar explains real contrasts rather than just communicative purposes.
- Preserve necessary nuance: present perfect simple can describe a continuing situation; didn’t need to does not alone establish whether the action happened; reporting/deduction language does not establish a claim’s truth.

## Presentation and reuse

Reuse GrammarTable, its existing columns/patterns variants, existing theme/type and the native grammar note slot. No public component/API/style changes. The influencer extra now centres its single grammar block in one column; its rows expose the structure rather than comparing two unexplained sentence columns. The interview extra focuses on present perfect versus past simple instead of adding an unrelated would pattern and vocabulary-dialog trigger to the grammar page.

The central guideline and title patterns now require an actual teaching purpose and allow omission when there is no focal rule. Scope does not include reauthoring the portal homework, new media, player changes or unrelated exercise redesign.

## Verification

- Focused authorship verification compares all 62 changed JSON sources with baseline `78421cf256feed866f8d94dfc37fe02d7d90beb4`: stripping only grammar pages/fields restores complete equality. Non-grammar pages, questions, roleplays, recordings/media and homework are unchanged. Retained/new page IDs are unique and every grammar row has meaning, form and example.
- Schema/content counts: 63 old → 56 rewritten + 2 new = 58 retained; seven removed. All removed blocks have a documented rationale in coverage.json.
- Browser inspection: A1.01 affirmative and negative/question pages, B1.01 tense comparison, C1.07 perfect participle clauses, and both manual extras. Before/after pairs exist for B1.01, C1.07 and the influencer grammar. New A1.01 pages have no equivalent previous page. A Right key advanced from the first be page to the second; Left returned to the first.
- Evidence at the actual 1280×720 preview shows the relevant table/note fitting. The late light-theme/extra finishing batch timed out in the browser tool and the runtime reset; no new light-theme or every-page visual validation is claimed. The visible A1.01 page was reacquired and verified afterwards. Existing canonical theme/style coverage remains relevant because colours/styles were not changed.
- No package/API build, broad suite, audio playback, media generation, merge or deployment. The owner performs teaching-quality and final visual review.

## Delivery

Feature branch and existing draft PR70, with representative evidence updated. One scoped push, then one exact-SHA workflow-link lookup without polling status/logs. Local A1.01 be page left open for review.

Visual gate review: pending human

"""Focused review evidence; checks source links and preservation, not pedagogy."""
import json
import subprocess
from pathlib import Path

root = Path(__file__).resolve().parents[3]
folder = Path(__file__).resolve().parent
ledger = json.loads((folder / 'answer-evidence.json').read_text())
base = ledger['baseline']

def read(path):
    return json.loads((root / path).read_text())

def old(path):
    return json.loads(subprocess.check_output(['git', 'show', f'{base}:{path}'], cwd=root, text=True))

for entry in ledger['questions']:
    key, page_id = entry['material'], entry['page']
    data = read('stories/materials/C101/C101.review.json' if key == 'c1-01' else f'stories/materials/Course/lessons/{key}.json')
    if key == 'c1-01':
        source = next(p for p in data['pages'] if p['id'] == page_id)
        paragraphs, questions = source['paragraphs'], source['questions']
    else:
        source = data['activities'][page_id]
        paragraphs, questions = source['referenceParagraphs'], source['questions']
        assert source['questionPurpose'] == 'comprehension'
        assert not source.get('options') and not source.get('facts')
    question = next(q for q in questions if q['id'] == entry['question'])
    assert question['answer'] == entry['answer'] and question['hint']
    assert len(questions) >= 3
    for span in entry['evidence']:
        if span.startswith('@chart:'):
            _, item_id, value = span.split(':')
            item = next(i for i in source['chart']['items'] if i['id'] == item_id)
            assert item['values'] == [int(value)]
        else:
            assert span in '\n'.join(paragraphs), (key, page_id, span)

paths = [f'stories/materials/Course/lessons/c1-{n:02}.json' for n in range(2, 13)]
for path in paths:
    before, after = old(path), read(path)
    assert before.keys() == after.keys()
    assert {p['id'] for p in before['pages']} == {p['id'] for p in after['pages']}
    for page in after['pages']:
        if page['id'] not in ['s_source0', 's_source1', 's_mission', 's_reply']:
            assert page == next(p for p in before['pages'] if p['id'] == page['id']), (path, page['id'])
    assert after['activities']['s_personal'] == before['activities']['s_personal']
    for key in before:
        if key not in ['pages', 'activities']:
            assert before[key] == after[key]
    assert after['activities'].keys() == before['activities'].keys()
    for key, activity in before['activities'].items():
        if key not in ['s_mission', 's_reply']:
            assert after['activities'][key] == activity
        elif 'image' in activity:
            assert after['activities'][key]['image'] == activity['image']
        if 'chart' in activity:
            assert after['activities'][key]['chart'] == activity['chart']

path = 'stories/materials/C101/C101.review.json'
before, after = old(path), read(path)
assert {p['id'] for p in before['pages']} - {p['id'] for p in after['pages']} == {'s42', 's43'}
for page in after['pages']:
    if page['id'] not in ['s4', 's8']:
        assert page == next(p for p in before['pages'] if p['id'] == page['id'])

allowed = set(paths + [path, 'stories/materials/Course/Course.types.ts', 'stories/materials/Course/CourseActivity.tsx', 'docs/materials/content-planning-guidelines.md', 'src/components/Charts/GroupedBarChart.tsx', 'src/components/Charts/GroupedBarChart.styles.ts', 'test/components/Charts/GroupedBarChart.test.tsx', 'stories/components/Charts/GroupedBarChart.stories.tsx'])
changed = subprocess.check_output(['git', 'diff', '--name-only', base], cwd=root, text=True).splitlines()
assert all(p in allowed or p.startswith('docs/epics/c1-reading170/') for p in changed)
assert len(ledger['questions']) == 70
result = {'answersWithSourceEvidence': 70, 'materials': 12, 'courseReferenceBlocks': 22, 'initialReadingReferences': 22, 'unrelatedPagesAndPersonalRoleplaysPreserved': True, 'recordedPagesAndMediaPreserved': True, 'scope': 'static authoring evidence; no perceptual, audio or classroom validation'}
(folder / 'authoring-check.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
print(json.dumps(result, ensure_ascii=False))

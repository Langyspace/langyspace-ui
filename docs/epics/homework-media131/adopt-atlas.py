"""Adopt one frozen generated atlas; encode the full original losslessly, never crop pixels."""
import hashlib
import json
from pathlib import Path
import sys
import struct
import subprocess

root = Path(__file__).resolve().parents[3]
docs = root / 'docs/epics/homework-media131'
batch_file = Path(sys.argv[1])
batch = json.loads(batch_file.read_text())
original = Path(batch['assetPath'])
assert hashlib.sha256(original.read_bytes()).hexdigest() == batch['sha256']
name = batch['atlas']
dest = root / f'stories/materials/Practice/assets/homework131/{name}.webp'
width, height = struct.unpack('>II', original.read_bytes()[16:24])
assert (width, height) == (batch['width'], batch['height'])
subprocess.run(['cwebp', '-quiet', '-lossless', str(original), '-o', str(dest)], check=True)
url = '/flashcards-transparent/course-practice/homework-media131/' + hashlib.sha256(dest.read_bytes()).hexdigest() + '/image.webp'
runtime = root / 'stories/materials/Practice/homework-media131.json'
bindings = json.loads(runtime.read_text())
by_lesson = {}
for item in batch['items']:
    for target in item['bindings']:
        binding = {'lesson': target['lesson'], 'word': item['word'], 'imageSrc': url, 'imageRegion': item['imageRegion']}
        assert not any(x['lesson'] == binding['lesson'] and x['word'] == binding['word'] for x in bindings)
        bindings.append(binding)
        by_lesson.setdefault(target['lesson'], []).append((target['id'], binding))
for lesson, items in by_lesson.items():
    if lesson == 'extra-dev-first-day':
        continue
    data_file = root / f'stories/materials/Practice/lessons/{lesson}.json'
    data = json.loads(data_file.read_text())
    for item_id, binding in items:
        card = next(x for x in data['first']['cards'] if x['id'] == item_id)
        assert card['word'] == binding['word'] and not card.get('imageSrc')
        card.update({k: binding[k] for k in ['imageSrc', 'imageRegion']})
    data_file.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    module_file = data_file.with_suffix('.module.ts')
    module = module_file.read_text()
    if "import { homeworkMediaImages } from '../homeworkMedia131'" not in module:
        module = "import { homeworkMediaImages } from '../homeworkMedia131'\n" + module
    spread = f"    ...homeworkMediaImages('{lesson}'),"
    if spread not in module:
        module = module.replace('  images: {', '  images: {\n' + spread, 1)
    module_file.write_text(module)
runtime.write_text(json.dumps(bindings, ensure_ascii=False, indent=2) + '\n')
helper_file = root / 'stories/materials/Practice/homeworkMedia131.ts'
helper = helper_file.read_text()
identifier = 'atlas' + name.replace('-', '_')
helper = f"import {identifier} from './assets/homework131/{name}.webp'\n" + helper
helper = helper.replace('const images: Readonly<Record<string, string>> = {', 'const images: Readonly<Record<string, string>> = {\n' + f"  '{url}': {identifier},", 1)
helper_file.write_text(helper)
record_file = docs / 'generated-media.adoption.json'
records = json.loads(record_file.read_text()) if record_file.exists() else []
records.append({'atlas': name, 'batchFile': str(batch_file), 'batchSha256': hashlib.sha256(batch_file.read_bytes()).hexdigest(), 'originalSha256': batch['sha256'], 'source': str(dest.relative_to(root)), 'url': url, 'sha256': hashlib.sha256(dest.read_bytes()).hexdigest(), 'bytes': dest.stat().st_size, 'width': width, 'height': height, 'processing': 'Full original PNG lossless WebP encoding only; no resize/crop/semantic edit; original preserved by generation owner', 'bindings': [x for item in batch['items'] for x in item['bindings']]})
record_file.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
print(name, len(records[-1]['bindings']), dest.stat().st_size)

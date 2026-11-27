"""Normalize card paths to the existing media signer's image.webp contract; no backend change."""
from pathlib import Path
import hashlib,json,re,subprocess,os,sys
root=Path(__file__).resolve().parents[3]
docs=root/'docs/epics/homework-media131'
if (docs/'path-aliases131.json').exists():
 print('Already normalized; immutable alias receipt preserved');sys.exit(0)
helper=root/'stories/materials/Practice/homeworkMedia131.ts'
helpertext=helper.read_text()
imports_re=r"import (\w+) from ['\"]([^'\"]+)['\"]"
def source(t,owner,url):
 imports={name:(owner.parent/path).resolve()for name,path in re.findall(imports_re,t)}
 m=re.search(r"['\"]"+re.escape(url)+r"['\"]:\s*(\w+)",t)
 return imports[m[1]] if m else None
conversions={};aliases={};formats={'.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml'}
def usable_image(src):
 suffix=src.suffix.lower()
 if suffix=='.webp':return src
 if src in conversions:return conversions[src]['dest']
 orig=hashlib.sha256(src.read_bytes()).hexdigest()
 dst=root/f'stories/materials/Practice/assets/homework131/raster-{orig}.webp'
 if suffix=='.svg':
  code="require('/Users/margaridamartins/.codex/worktrees/homework92-teacher/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp')(process.argv[1],{density:288}).webp({lossless:true}).toFile(process.argv[2]).catch(e=>{console.error(e);process.exit(1)})"
  subprocess.run(['node','-e',code,str(src),str(dst)],check=True)
 elif suffix=='.png':subprocess.run(['cwebp','-quiet','-lossless',str(src),'-o',str(dst)],check=True)
 else:raise ValueError(suffix)
 conversions[src]={'originalSource':str(src.relative_to(root)),'originalSha256':orig,'originalContentType':formats[suffix],'source':str(dst.relative_to(root)),'sha256':hashlib.sha256(dst.read_bytes()).hexdigest(),'contentType':'image/webp','processing':'Full source lossless export; SVG rendered at density288 preserving viewBox; no crop/semantic edit'if suffix=='.svg'else'Full source lossless WebP encoding; no resize/crop/semantic edit','dest':dst}
 return dst

def alias(url,src):
 dst=usable_image(src);sha=hashlib.sha256(dst.read_bytes()).hexdigest();new='/flashcards-transparent/course-practice/homework-media131/'+sha+'/image.webp'
 aliases[url]={'oldUrl':url,'url':new,'source':str(dst.relative_to(root)),'sha256':sha,'bytes':dst.stat().st_size,'contentType':'image/webp'}
 return new,dst
# Existing reused/generated runtime helper supplies sources for the new mappings.
runtime=root/'stories/materials/Practice/homework-media131.json';bindings=json.loads(runtime.read_text())
for b in bindings:
 old=b['imageSrc']
 if old not in aliases:
  src=source(helpertext,helper,old);assert src,old
  new,dst=alias(old,src)
  # The original native file remains intact; only this bundle import adopts its raster derivative.
  if dst!=src:
   relative=os.path.relpath(dst,helper.parent);relative=relative if relative.startswith('.') else './'+relative;original=os.path.relpath(src,helper.parent)
   helpertext=helpertext.replace("'"+original+"'","'"+relative+"'")
 b['imageSrc']=aliases[old]['url']
# Fix every legacy card key with a non-signable basename as well.
for path in sorted((root/'stories/materials/Practice/lessons').glob('*.json')):
 d=json.loads(path.read_text());module=path.with_suffix('.module.ts');text=module.read_text();changed=False
 for card in d['first'].get('cards',[]):
  old=card.get('imageSrc')
  if not old:continue
  if old in aliases:new=aliases[old]['url']
  elif re.match(r'^/flashcards(?:-transparent)?/.+/image\.webp$',old):continue
  else:
   src=source(text,module,old);assert src,(path,old)
   new,dst=alias(old,src)
   if dst!=src:
    relative=os.path.relpath(dst,module.parent);original=os.path.relpath(src,module.parent)
    text=text.replace("'"+original+"'","'"+relative+"'")
  card['imageSrc']=new;text=text.replace(old,new);changed=True
 if changed:path.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');module.write_text(text)
for old,a in aliases.items():helpertext=helpertext.replace(old,a['url'])
helper.write_text(helpertext);runtime.write_text(json.dumps(bindings,ensure_ascii=False,indent=2)+'\n')
# Keep the adoption records/publication inputs aligned with the final logical keys.
for file in ['reused-media.json','generated-media.adoption.json']:
 p=docs/file;d=json.loads(p.read_text())
 def update(v):
  if isinstance(v,dict):
   if 'url'in v and v['url']in aliases:
    a=aliases[v['url']];v.update({k:a[k]for k in ['url','source','sha256','bytes']})
   for key,x in list(v.items()):
    if key=='imageSrc'and x in aliases:v[key]=aliases[x]['url']
    elif isinstance(x,(list,dict)):update(x)
  elif isinstance(v,list):
   for x in v:update(x)
 update(d);p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
(docs/'path-aliases131.json').write_text(json.dumps(list(aliases.values()),ensure_ascii=False,indent=2)+'\n')
for c in conversions.values():c.pop('dest')
(docs/'raster-exports131.json').write_text(json.dumps(list(conversions.values()),ensure_ascii=False,indent=2)+'\n')
print('canonical aliases',len(aliases),'raster exports',len(conversions))

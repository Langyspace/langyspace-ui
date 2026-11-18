"""Arrange unedited paired captures into review sheets. Originals remain authoritative."""
import json,re,subprocess,io,math
from pathlib import Path
from PIL import Image,ImageDraw
root=Path('.');out=root/'.github/evidence/material-interface/integration/review';out.mkdir(parents=True,exist_ok=True)
old=[]
for line in Path('.local/sofia-adoption/original-pr-body.md').read_text().splitlines():
 urls=re.findall(r'<img src="https://raw.githubusercontent.com/Langyspace/langyspace-ui/([a-f0-9]{40})/([^\"]+)"',line)
 if len(urls)==2:old.append({'label':line.split('<br>')[0].strip('| '),'source':urls})
new=[]
sources=[('.github/evidence/material-interface/integration/verification.json','.github/evidence/material-interface/integration','sofia'),('.github/evidence/frontend-material/verification.json','.github/evidence/frontend-material','frontend'),('.github/evidence/frontend-material/interactions.json','.github/evidence/frontend-material','states')]
for manifest,folder,prefix in sources:
 d=json.loads(Path(manifest).read_text());groups={}
 for row in d['rows']:
  key=(row.get('key',prefix),row['width'],row.get('height',''))
  groups.setdefault(key,[]).append({'label':row.get('key',prefix)+' '+row.get('id',row.get('name'))+' '+str(row['width']),'files':{'before':str(Path(folder)/row['before']),'after':str(Path(folder)/row['after'])}})
 for key,items in groups.items():
  for start in range(0,len(items),4):new.append((prefix,items[start:start+4]))
sets=[('retained',old[start:start+4])for start in range(0,len(old),4)]+new
index=[]
for n,(prefix,items)in enumerate(sets,1):
 row={'label':f'{prefix} {n:02d}','captures':items}
 for side_i,side in enumerate(['before','after']):
  images=[]
  for item in items:
   if 'source'in item:
    sha,path=item['source'][side_i];data=subprocess.check_output(['git','show',f'{sha}:{path}']);im=Image.open(io.BytesIO(data)).convert('RGB')
   else:im=Image.open(item['files'][side]).convert('RGB')
   images.append((im,item['label']))
  w=max(im.width for im,_ in images);h=max(im.height for im,_ in images);cols=min(2,len(images));rows=math.ceil(len(images)/cols)
  sheet=Image.new('RGB',(w*cols,(h+28)*rows),(15,15,17));draw=ImageDraw.Draw(sheet)
  for i,(im,label)in enumerate(images):
   x=(i%cols)*w;y=(i//cols)*(h+28);draw.text((x+8,y+6),label,fill=(245,245,245));sheet.paste(im,(x,y+28))
  name=f'{prefix}-{n:03d}-{side}.jpg';sheet.save(out/name,quality=90);row[side]=str(out/name)
 index.append(row)
Path('docs/epics/material-fidelity/review-sheets.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n')
body='# Evidências\n\n| Antes | Depois |\n| --- | --- |\n';sha='0'*40
for row in index:
 def cell(side):return f'{row["label"]}<br><img src="https://raw.githubusercontent.com/Langyspace/langyspace-ui/{sha}/{row[side]}" width="400" alt="{row["label"]} {side}">'
 body+='| '+cell('before')+' | '+cell('after')+' |\n'
Path('.local/sofia-adoption/pr-body-prepared.md').write_text(body);print({'oldPairs':len(old),'newPairs':sum(len(items)for _,items in new),'reviewSheets':len(index),'bodyCharacters':len(body)});assert len(body)<65536

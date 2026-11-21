/* global document */
import {chromium,expect} from 'playwright/test'
import {mkdir,readFile,writeFile} from 'node:fs/promises'
import assert from 'node:assert/strict'
const output='.github/evidence/frontend-material', checkpoint='.local/sofia-adoption/frontend-browser-checkpoint.json'
const source='http://127.0.0.1:6043/frontend-original-8ab03020a5c8f467.html'
const target='http://127.0.0.1:6041/index.html?studentPortalOrigin=https://student.staging.langy.space#tema-frontend'
const ids=['s1','s2','s31','s32','s33','s4','s51','s52','s6','s62','s61','s7','s8','s9','s10','s11','s12']
const state=JSON.parse(await readFile(checkpoint,'utf8').catch(()=>' {"rows":[],"checks":[],"errors":[]}'))
const browser=await chromium.launch()
async function ready(p){await p.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))})}
async function save(){await writeFile(checkpoint,JSON.stringify(state,null,2)+'\n')}
try{
for(const[width,height]of[[1280,900],[1280,620],[390,844],[320,800]]){
 const caseId=width+'x'+height;if(state.checks.some(c=>c.caseId===caseId)&&ids.every(id=>state.rows.some(r=>r.rowId===caseId+':'+id)))continue
 const contexts=await Promise.all(['before','after'].map(()=>browser.newContext({viewport:{width,height},reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write']})))
 const pages=await Promise.all(contexts.map(c=>c.newPage()));
 await Promise.all(pages.map((p,i)=>{p.on('pageerror',e=>state.errors.push({caseId,side:i?'after':'before',error:e.message}));return p.goto(i?target:source,{waitUntil:'domcontentloaded'})}))
 await expect(pages[1].locator('[data-slide-id]')).toHaveCount(17);await ready(pages[0]);await ready(pages[1])
 for(const id of ids){
  const rowId=caseId+':'+id;if(state.rows.some(r=>r.rowId===rowId))continue
  for(const[p,i]of pages.map((p,i)=>[p,i])){
   const section=p.locator(i?`[data-slide-id="${id}"]`:'#'+id);await section.evaluate(e=>e.scrollIntoView({behavior:'instant',block:'start'}));if(i)await expect(section).toHaveAttribute('data-current','true');await ready(p)
   const box=await section.evaluate(e=>({width:e.clientWidth,scrollWidth:e.scrollWidth,broken:[...e.querySelectorAll('img')].filter(i=>!i.naturalWidth).length}));assert(box.scrollWidth<=box.width+2,`${caseId}/${id}/${i}:overflow ${JSON.stringify(box)}`);assert.equal(box.broken,0)
   const side=i?'after':'before';await mkdir(`${output}/${side}`,{recursive:true});await p.mouse.move(0,0);await p.screenshot({path:`${output}/${side}/${id}-${caseId}.jpg`,type:'jpeg',quality:80})
  }
  state.rows.push({rowId,id,width,height,before:`before/${id}-${caseId}.jpg`,after:`after/${id}-${caseId}.jpg`});await save()
 }
 state.checks.push({caseId,inventory17:true,allPagesNoOverflowOrBrokenImages:true});await save();console.log('Passed',caseId,17,'paired pages');await Promise.all(contexts.map(c=>c.close()))
}
assert.deepEqual(state.errors,[]);await writeFile(`${output}/verification.json`,JSON.stringify({sourceVersion:'1795037606-0c26',sourceSha256:'8ab03020a5c8f4673a71dee90771f21289e124f48efa1b5c966942c1732bc9d4',...state},null,2)+'\n');console.log('Complete',state.rows.length,'pairs')
}finally{await browser.close()}

/* global document */
import {chromium,expect} from 'playwright/test'
import {mkdir,readFile,writeFile} from 'node:fs/promises'
import assert from 'node:assert/strict'
const output='.github/evidence/material-interface/integration'
const checkpoints='.local/sofia-adoption/browser-checkpoint.json'
const state=JSON.parse(await readFile(checkpoints,'utf8').catch(()=>' {"rows":[],"checks":[],"errors":[]}'))
const browser=await chromium.launch()
const specs=[['a1-01',26],['a1-03',17],['a1-04',16],['a1-05',16],['a1-06',20]]
async function ready(p){await p.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))})}
async function save(){await writeFile(checkpoints,JSON.stringify(state,null,2)+'\n')}
try{
for(const[width,height]of[[1280,900],[390,844]])for(const[key,count]of specs){
 const caseId=key+':'+width;if(state.checks.some(c=>c.caseId===caseId))continue
 const beforeContext=await browser.newContext({viewport:{width,height},reducedMotion:'reduce'}),afterContext=await browser.newContext({viewport:{width,height},reducedMotion:'no-preference',permissions:['clipboard-read','clipboard-write']})
 const before=await beforeContext.newPage(),after=await afterContext.newPage();after.on('pageerror',e=>state.errors.push({key,width,error:e.message}))
 await Promise.all([before.goto('http://127.0.0.1:6042/#'+key,{waitUntil:'domcontentloaded'}),after.goto('http://127.0.0.1:6041/index.html?studentPortalOrigin=https://student.staging.langy.space#'+key,{waitUntil:'domcontentloaded'})])
 for(const p of[before,after]){await expect(p.locator('[data-slide-id]')).toHaveCount(count,{timeout:30000});await ready(p)}
 const ids=await after.locator('[data-slide-id]').evaluateAll(es=>es.map(e=>e.dataset.slideId));assert.deepEqual(ids,await before.locator('[data-slide-id]').evaluateAll(es=>es.map(e=>e.dataset.slideId)))
 for(const id of ids){
  const name=`${key}-${id}-${width}.jpg`;const rowId=caseId+':'+id
  for(const[p,side]of[[before,'before'],[after,'after']]){
   const el=p.locator(`[data-slide-id="${id}"]`);await el.evaluate(e=>e.scrollIntoView({behavior:'instant',block:'start'}));await expect(el).toHaveAttribute('data-current','true');await ready(p)
   const layout=await el.evaluate(e=>({width:e.clientWidth,scrollWidth:e.scrollWidth,broken:[...e.querySelectorAll('img')].filter(i=>!i.naturalWidth).length}));assert(layout.scrollWidth<=layout.width+2,`${side}/${key}/${id}/${width}:overflow`);assert.equal(layout.broken,0)
   await mkdir(`${output}/${side}`,{recursive:true});await p.mouse.move(0,0);await p.screenshot({path:`${output}/${side}/${name}`,type:'jpeg',quality:80})
  }
  if(!state.rows.some(r=>r.rowId===rowId))state.rows.push({rowId,key,id,width,height,before:'before/'+name,after:'after/'+name});await save()
 }
 for(const p of[before,after]){await p.locator(`[data-slide-id="${ids[1]}"]`).evaluate(e=>e.scrollIntoView({behavior:'instant'}));if(p===after||key!=='a1-01')await p.getByRole('button',{name:'Notes',exact:true}).click()}
 const field=after.getByRole('textbox',{name:'Notes',exact:true});await field.fill(`Saved ${key} notes.\nSecond line.`);await field.press('ArrowDown');await expect(after.locator(`[data-slide-id="${ids[1]}"]`)).toHaveAttribute('data-current','true')
 for(const[p,side]of[[before,'before'],[after,'after']]){if(side==='before'&&key!=='a1-01')await p.getByRole('dialog').getByRole('textbox').fill(`Saved ${key} notes.\nSecond line.`);await p.screenshot({path:`${output}/${side}/${key}-notes-${width}.jpg`,type:'jpeg',quality:80})}
 state.rows.push({rowId:caseId+':notes',key,id:'notes',width,height,before:`before/${key}-notes-${width}.jpg`,after:`after/${key}-notes-${width}.jpg`})
 await field.press('Escape');await expect(after.getByRole('button',{name:'Notes',exact:true})).toBeFocused();await after.reload({waitUntil:'domcontentloaded'});await expect(after.locator(`[data-slide-id="${ids[1]}"]`)).toHaveAttribute('data-current','true');await after.getByRole('button',{name:'Notes',exact:true}).click();await expect(field).toHaveValue(`Saved ${key} notes.\nSecond line.`);await after.getByRole('dialog').getByRole('button',{name:'Clear',exact:true}).click();await expect(field).toHaveValue('');await field.press('Escape')
 await after.keyboard.press('End');await expect(after.getByRole('progressbar')).toHaveAttribute('value','100',{timeout:10000});await after.getByRole('button',{name:'Copy links',exact:true}).click();const copied=await after.evaluate(()=>navigator.clipboard.readText());assert(copied.includes('https://student.staging.langy.space/licoes'))
 await after.keyboard.press('Home');await expect(after.getByRole('progressbar')).toHaveAttribute('value','0',{timeout:10000});await expect(after.getByRole('button',{name:'Ativar tema claro'})).toHaveCount(0)
 await expect(after.locator('[data-slide-id="s1"] > div').first()).toHaveCSS('background-color','rgb(11, 11, 12)')
 state.checks.push({caseId,key,width,height,pages:count,inventory:true,allPagesNoOverflowOrBrokenImages:true,dark:true,notesPersistClearAndRestoreFocus:true,cursorResume:true,nativeEnd100Home0:true,homeworkStagingBound:true});await save();console.log('Passed',caseId,count,'pages')
 await beforeContext.close();await afterContext.close()
}
const c=await browser.newContext();const p=await c.newPage();await p.goto('http://127.0.0.1:6041/index.html?studentPortalOrigin=https://student.staging.langy.space#a2-01',{waitUntil:'domcontentloaded'});await p.locator('[data-slide-id="s9"]').waitFor();await p.locator('[data-slide-id="s9"]').evaluate(e=>e.scrollIntoView({behavior:'instant'}));const playback=p.locator('[data-slide-id="s9"] [data-playback]');await p.getByRole('button',{name:'Play Kim’s message',exact:true}).click();await expect(playback).toHaveAttribute('data-listens','1');await expect(playback).toHaveAttribute('data-playback','ended',{timeout:25000});await p.getByRole('button',{name:'Listen again',exact:true}).click();await expect(playback).toHaveAttribute('data-listens','2');await expect(p.getByRole('region',{name:'Transcription',exact:true})).toContainText('Hi, Ana!');await p.locator('[data-slide-id="s10"]').evaluate(e=>e.scrollIntoView({behavior:'instant'}));await expect(p.locator('[data-slide-id="s9"] audio')).toHaveJSProperty('paused',true);state.checks.push({key:'a2-01',newNativeKimClip:true,secondPassTranscript:true,pauseOnDeparture:true});await c.close()
assert.deepEqual(state.errors,[]);await writeFile(`${output}/verification.json`,JSON.stringify({sourceSofia:'0a3fea8046eb9c73e99612cb67abb26fe551258a',integrationBase:'9186abb61a0469e86210f2f2e037a8f711ed0fa0',...state},null,2)+'\n');console.log('Complete',state.rows.length,'pairs;',state.checks.length,'checks')
}finally{await browser.close()}

import vm from 'node:vm'
import {readFile,writeFile,mkdir,copyFile}from'node:fs/promises'
import{createHash}from'node:crypto'
const root='/Users/margaridamartins/Documents/Editor de vídeo com IA'
const folder=root+'/Planejamento Langy/codigo/tema-frontend'
const source=await readFile(folder+'/int-front.js','utf8')
const svgUri=s=>'data:image/svg+xml;base64,'+Buffer.from(s).toString('base64')
const states={};const context=vm.createContext({NAME:{},IMG:{},TXT:{},WHO:{},LISTS:{},ACT:{},R:{},ORDER:[],WAQ:{},A:{missing:new Set()},I:{},I2:{},window:{addEventListener(){}},document:{addEventListener(){},querySelector(){return null}},ui:k=>states[k]??={},svgUri,Set,setTimeout(){},clearTimeout(){},esc:x=>String(x),speak(){},next(){}})
vm.runInContext(source,context,{timeout:1000})
vm.runInContext(await readFile(folder+'/generated-art.js','utf8'),context,{timeout:1000})
const content=JSON.parse(vm.runInContext('JSON.stringify({vocabulary:VOCS,warmUps:WU3,pronunciation:PP,dialogue:D6,dialogueQuestions:DQ6,grammar:GR,listeningQuestions:WAQ.wa9,corrections:FIX10,interview:JQ,steps:ST11,support:SUP11,noteFields:FIC,homework:HW,order:ORDER,text:TXT,speakers:WHO,images:IMG})',context))
const manifest=JSON.parse(await readFile(root+'/outputs/frontend-audio-elevenlabs-20261117/manifest.json','utf8'))
for(const item of manifest.items){if(content.text[item.id]!==item.text||content.speakers[item.id]!==item.character)throw Error('Audio text/voice mismatch:'+item.id)}
const output='stories/materials/Frontend';await mkdir(output+'/assets/audio',{recursive:true});const images={}
for(const key of ['v_bt','v_fm','v_mn','v_sb','v_pp','v_cb','v_dd','wu_test']){
 const url=content.images[key];if(!url?.startsWith('data:'))throw Error('Missing source image:'+key)
 const [,mime,encoding,payload]=url.match(/^data:([^;,]+)(;base64)?,([\s\S]*)$/);const data=encoding?Buffer.from(payload,'base64'):Buffer.from(decodeURIComponent(payload));const extension=mime==='image/svg+xml'?'svg':mime.split('/')[1];const name=key+'.'+extension;await writeFile(output+'/assets/'+name,data);images[key]={file:'assets/'+name,sha256:createHash('sha256').update(data).digest('hex'),sourceKey:key}
}
for(const name of ['bust_ana','bust_kim','meet_jun','av_leo']){await copyFile(folder+'/assets/'+name+'.webp',output+'/assets/'+name+'.webp');images[name]={file:'assets/'+name+'.webp',sha256:createHash('sha256').update(await readFile(folder+'/assets/'+name+'.webp')).digest('hex')}}
const audio={};for(const item of manifest.items){const sourceFile=root+'/outputs/frontend-audio-elevenlabs-20261117/'+item.file;const bytes=await readFile(sourceFile);if(createHash('sha256').update(bytes).digest('hex')!==item.sha256)throw Error('MP3 mismatch:'+item.id);const name='assets/audio/'+item.id+'.mp3';await writeFile(output+'/'+name,bytes);audio[item.id]={file:name,text:item.text,speaker:item.character,voiceId:item.voiceId,sha256:item.sha256,duration:item.durationSeconds}}
delete content.images;await writeFile(output+'/Frontend.content.json',JSON.stringify(content,null,2)+'\n');await writeFile(output+'/media-provenance.json',JSON.stringify({provider:'elevenlabs',model:manifest.modelId,voiceSettings:manifest.voiceSettings,sourceAuthoringSha256:createHash('sha256').update(source).digest('hex'),sourceArtifact:'2662b64f-844f-4e4f-bd76-8b95b897e654',images,audio,generatedNow:false},null,2)+'\n');console.log({screens:content.order.length,audio:Object.keys(audio).length,images:Object.keys(images).length})

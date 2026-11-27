import assert from'node:assert/strict'
import ts from'typescript'
import{readFileSync,existsSync,writeFileSync}from'node:fs'
import path from'node:path'
import{createHash}from'node:crypto'
const root=process.cwd(),student=process.argv.find(x=>x.startsWith('--student-root='))?.slice(15);assert(student)
const read=p=>JSON.parse(readFileSync(p)),hash=p=>createHash('sha256').update(readFileSync(p)).digest('hex')
const activities=read(path.join(student,'content/course-practice/activities85.json')),media=read(path.join(student,'content/course-practice/media85.json')).items,byPath=new Map(media.map(x=>['/'+x.storagePath,x]))
const expected=new Map(read('stories/materials/Practice/audio-provenance85.json').items.map(x=>[x.bindingId,x.text]));const quiz=read(path.join(student,'content/course-practice/quiz-audio87.json'));for(const x of quiz.bindings)expected.set(x.questionId+'.'+x.kind,x.text);for(const x of read('stories/materials/Practice/quiz-audio-provenance92.json').items)expected.set(x.bindingId,x.text)
const keys=[...new Set(activities.map(x=>x.id.replace(/^course-practice-/,'').replace(/-(flashcards|quiz|shadowing)$/,'')))];assert.equal(keys.length,62)
let bindings=0,images=0
for(const key of keys){
 const file=path.resolve('stories/materials/Practice/lessons/'+key+'.module.ts'),data=read(file.replace('.module.ts','.json')),source=ts.createSourceFile(file,readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true),imports=new Map()
 for(const s of source.statements)if(ts.isImportDeclaration(s)&&s.importClause?.name&&ts.isStringLiteral(s.moduleSpecifier))imports.set(s.importClause.name.text,path.resolve(path.dirname(file),s.moduleSpecifier.text))
 let prepared;const visit=n=>{if(ts.isVariableDeclaration(n)&&n.name.getText(source)==='prepared')prepared=n.initializer;ts.forEachChild(n,visit)};visit(source);assert(ts.isObjectLiteralExpression(prepared))
 const property=(node,name)=>node.properties.find(p=>ts.isPropertyAssignment(p)&&p.name.getText(source)===name)?.initializer
 const array=property(prepared,'recordings');assert(ts.isArrayLiteralExpression(array));const clips=new Map()
 for(const item of array.elements){assert(ts.isObjectLiteralExpression(item));const id=property(item,'id').text,text=property(item,'text').text,src=property(item,'src').getText(source);assert(!clips.has(id));assert(imports.has(src));clips.set(id,{text,file:imports.get(src)});if(expected.has(id))assert.equal(text,expected.get(id),id)}
 const check=(id,url)=>{const clip=clips.get(id),asset=byPath.get(url);assert(clip&&asset,id);assert.equal(hash(clip.file),asset.sha256,id);bindings++}
 const first=activities.find(a=>a.id===data.first.id),shadow=activities.find(a=>a.id===data.shadowing.id)
 if(first.type==='flashcards')for(const card of data.first.cards){const native=first.flashcards.cards.find(c=>c.id===card.id);assert(native);check(card.audioId,native.audioSrc);check(card.backAudioId,native.backAudioSrc)}
 else for(const q of first.quiz.questions){check(q.id+'.prompt',q.promptAudioSrc);check(q.id+'.completion',q.completionAudioSrc)}
 for(const [i,phrase]of data.shadowing.phrases.entries()){check(phrase.id,shadow.shadowing.phrases[i].audioUrl);assert.equal(clips.get(phrase.id).text,shadow.shadowing.phrases[i].text);assert.equal(phrase.speakerId,shadow.shadowing.phrases[i].speakerId)}
 const picture=property(prepared,'images');assert(ts.isObjectLiteralExpression(picture))
 for(const item of picture.properties){assert(ts.isPropertyAssignment(item));const url=item.name.text,src=imports.get(item.initializer.getText(source));assert(src&&existsSync(src),url);const asset=byPath.get(url);if(asset)assert.equal(hash(src),asset.sha256,url);else{assert(url.startsWith('/course-practice/'));assert.equal(hash(src),hash(path.join(student,'public',url)));const teacher=student.replace(/homework92-student$/,'homework92-teacher');assert.equal(hash(src),hash(path.join(teacher,'public',url)))}images++}
}
const result={lessons:keys.length,audioBindings:bindings,imageBindings:images,exactMediaHashes:true,preparedIdsAndTexts:true,staticAssetsBothHosts:true};writeFileSync('.local/bindings92-validation.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result))

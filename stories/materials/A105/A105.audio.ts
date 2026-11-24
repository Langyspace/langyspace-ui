import provenance from './audio-provenance.json'
const assets = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
export function recordingUrl(id: string, text: string) {
  const clip = provenance.items.find(
    (item) => item.id === id && item.text === text,
  )
  return clip ? assets['./' + clip.file] : undefined
}

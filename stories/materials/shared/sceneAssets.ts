const assets = import.meta.glob<string>('./assets/scene-*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})
export function sceneImage(key: string) {
  const url = assets[`./assets/scene-${key}.webp`]
  if (!url) throw new Error(`Unknown lesson scene: ${key}`)
  return url
}

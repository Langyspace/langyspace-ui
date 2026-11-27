import entries from './materials.json'
import { MaterialsCatalogView } from './MaterialsCatalogView'
import type {
  MaterialCatalogEntry,
  MaterialsCatalogProps,
} from './MaterialsCatalog.types'

const defaultMaterials: readonly MaterialCatalogEntry[] = entries
const lessonStories = import.meta.glob([
  '../InfluencerRoutine/InfluencerRoutine.stories.tsx',
  '../A10*/A10*.stories.tsx',
  '../A201/A201.stories.tsx',
  '../B101/B101.stories.tsx',
  '../B201/B201.stories.tsx',
  '../C101/C101.stories.tsx',
])

function storyHref(storyId: string) {
  const base =
    typeof window === 'undefined'
      ? '/'
      : new URL('./', window.location.href).pathname
  return `${base}?path=/story/${storyId}`
}

export function MaterialsCatalog({
  materials,
  ...props
}: MaterialsCatalogProps) {
  const resolved =
    materials ??
    defaultMaterials.map((entry) => ({
      ...entry,
      href:
        entry.storyId && entry.storySource && entry.storySource in lessonStories
          ? storyHref(entry.storyId)
          : undefined,
    }))
  return <MaterialsCatalogView {...props} materials={resolved} />
}

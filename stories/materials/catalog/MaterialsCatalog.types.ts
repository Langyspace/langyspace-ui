export interface MaterialsCatalogProps {
  initialLevel?: string
  initialQuery?: string
}

export interface MaterialCatalogEntry {
  id: string
  level: string
  code: string
  title: string
  description: string
  review: boolean
  storyId?: string
  storySource?: string
}

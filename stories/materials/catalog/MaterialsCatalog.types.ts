export interface MaterialsCatalogProps {
  materials?: readonly MaterialCatalogEntry[]
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
  href?: string
  storyId?: string
  storySource?: string
}

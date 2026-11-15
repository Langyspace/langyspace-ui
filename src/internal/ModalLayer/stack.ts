interface ModalLayerEntry {
  element: HTMLElement
  id: symbol
  order: number
}

const layers: ModalLayerEntry[] = []
let nextOrder = 0
let appRootWasInert = false
export const modalScrollLockAttribute = 'data-lsui-modal-scroll-lock'
let priorScrollLockMarker: string | null = null

const syncLayerInertState = () => {
  layers.forEach((layer, index) => {
    layer.element.inert = index !== layers.length - 1
  })
}

const lockDocument = () => {
  const appRoot = document.getElementById('root')
  appRootWasInert = appRoot?.inert ?? false
  if (appRoot) appRoot.inert = true

  priorScrollLockMarker = document.body.getAttribute(modalScrollLockAttribute)
  document.body.setAttribute(modalScrollLockAttribute, 'locked')
}

const unlockDocument = () => {
  const appRoot = document.getElementById('root')
  if (appRoot) appRoot.inert = appRootWasInert

  if (priorScrollLockMarker === null)
    document.body.removeAttribute(modalScrollLockAttribute)
  else
    document.body.setAttribute(modalScrollLockAttribute, priorScrollLockMarker)
}

export const registerModalLayer = (element: HTMLElement) => {
  if (layers.length === 0) lockDocument()

  const entry = { element, id: Symbol('modal-layer'), order: nextOrder++ }
  layers.push(entry)
  syncLayerInertState()

  return entry
}

export const unregisterModalLayer = (id: symbol) => {
  const index = layers.findIndex((layer) => layer.id === id)
  if (index === -1) return

  const [removedLayer] = layers.splice(index, 1)

  if (removedLayer) removedLayer.element.inert = false
  syncLayerInertState()

  if (layers.length === 0) unlockDocument()
}

export const isTopModalLayer = (id: symbol) => layers.at(-1)?.id === id

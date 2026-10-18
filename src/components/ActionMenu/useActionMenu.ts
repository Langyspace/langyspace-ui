import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { getActionMenuPosition, type ActionMenuPosition } from './position'
import type { ActionMenuItem, ActionMenuProps } from './ActionMenu.types'

type FocusIntent = 'first' | 'last'

const tabbableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const subscribeToClient = () => () => undefined

const isTabbable = (element: HTMLElement) => {
  if (
    element.hidden ||
    element.closest('[inert]') ||
    element.getAttribute('aria-hidden') === 'true'
  ) {
    return false
  }

  const style = window.getComputedStyle(element)

  return style.display !== 'none' && style.visibility !== 'hidden'
}

const normalizeItems = (items: readonly ActionMenuItem[]) => [
  ...items.filter((item) => item.tone !== 'danger'),
  ...items.filter((item) => item.tone === 'danger'),
]

const getEnabledItems = (items: readonly ActionMenuItem[]) =>
  items.filter((item) => !item.disabled && !item.isLoading)

type InteractionProps = Pick<
  ActionMenuProps,
  'align' | 'defaultOpen' | 'items' | 'onOpenChange' | 'open' | 'size'
>

export function useActionMenu({
  align = 'end',
  defaultOpen = false,
  items,
  onOpenChange,
  open,
  size = 'md',
}: InteractionProps) {
  const canUseDOM = useSyncExternalStore(
    subscribeToClient,
    () => true,
    () => false,
  )
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  const [position, setPosition] = useState<ActionMenuPosition | null>(null)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen
  const rootRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef(new Map<string, HTMLButtonElement>())
  const focusIntentRef = useRef<FocusIntent>('first')
  const normalizedItems = useMemo(() => normalizeItems(items), [items])
  const isMenuOpen = isOpen && canUseDOM && normalizedItems.length > 0
  const enabledItems = useMemo(
    () => getEnabledItems(normalizedItems),
    [normalizedItems],
  )
  const requestOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) setInternalOpen(nextOpen)
      onOpenChange?.(nextOpen)
    },
    [isControlled, onOpenChange],
  )

  const focusTrigger = useCallback(() => {
    if (triggerRef.current?.isConnected) {
      triggerRef.current.focus({ preventScroll: true })
    }
  }, [])

  const focusItem = useCallback((item: ActionMenuItem | undefined) => {
    if (!item) return false

    const node = itemRefs.current.get(item.id)
    if (!node?.isConnected) return false

    setActiveItemId(item.id)
    node.focus({ preventScroll: true })

    return true
  }, [])

  const focusRelativeToTrigger = useCallback((backward: boolean) => {
    const trigger = triggerRef.current
    if (!trigger) return

    const menu = menuRef.current
    const tabbables = Array.from(
      document.querySelectorAll<HTMLElement>(tabbableSelector),
    ).filter((element) => isTabbable(element) && !menu?.contains(element))
    const triggerIndex = tabbables.indexOf(trigger)
    const target = tabbables[triggerIndex + (backward ? -1 : 1)]

    if (target) target.focus({ preventScroll: true })
    else trigger.blur()
  }, [])

  useLayoutEffect(() => {
    if (!isMenuOpen || !menuRef.current || !triggerRef.current) {
      setPosition(null)

      return
    }

    const nextPosition = getActionMenuPosition({
      align,
      menu: menuRef.current.getBoundingClientRect(),
      trigger: triggerRef.current.getBoundingClientRect(),
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth,
    })
    setPosition(nextPosition)
  }, [align, isMenuOpen, normalizedItems, size])

  useEffect(() => {
    if (!isMenuOpen || !position || !menuRef.current) return

    const intent = focusIntentRef.current
    focusIntentRef.current = 'first'
    if (
      menuRef.current.contains(document.activeElement) &&
      enabledItems.some((item) => item.id === activeItemId)
    ) {
      return
    }

    const target = intent === 'last' ? enabledItems.at(-1) : enabledItems[0]

    if (!focusItem(target)) {
      setActiveItemId(null)
      menuRef.current.focus({ preventScroll: true })
    }
  }, [activeItemId, enabledItems, focusItem, isMenuOpen, position])

  useEffect(() => {
    if (!isMenuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return
      if (
        rootRef.current?.contains(event.target) ||
        menuRef.current?.contains(event.target)
      ) {
        return
      }

      requestOpen(false)
    }

    const handleViewportChange = (event: Event) => {
      if (
        event.type === 'scroll' &&
        event.target instanceof Node &&
        menuRef.current?.contains(event.target)
      ) {
        return
      }

      const shouldRestore = Boolean(
        document.activeElement &&
        menuRef.current?.contains(document.activeElement),
      )
      requestOpen(false)
      if (shouldRestore) focusTrigger()
    }

    document.addEventListener('pointerdown', handlePointerDown, true)
    document.addEventListener('scroll', handleViewportChange, true)
    window.addEventListener('resize', handleViewportChange)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true)
      document.removeEventListener('scroll', handleViewportChange, true)
      window.removeEventListener('resize', handleViewportChange)
    }
  }, [focusTrigger, isMenuOpen, requestOpen])

  const openWithIntent = (intent: FocusIntent) => {
    focusIntentRef.current = intent
    if (isOpen) {
      const target = intent === 'last' ? enabledItems.at(-1) : enabledItems[0]
      if (!focusItem(target)) menuRef.current?.focus({ preventScroll: true })

      return
    }

    requestOpen(true)
  }

  const handleTriggerKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return

    event.preventDefault()
    openWithIntent(event.key === 'ArrowUp' ? 'last' : 'first')
  }

  const handleMenuKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      requestOpen(false)
      focusTrigger()

      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      requestOpen(false)
      focusRelativeToTrigger(event.shiftKey)

      return
    }

    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    if (enabledItems.length === 0) return

    const activeIndex = enabledItems.findIndex(
      (item) => item.id === activeItemId,
    )
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? enabledItems.length - 1
          : event.key === 'ArrowDown'
            ? (activeIndex + 1 + enabledItems.length) % enabledItems.length
            : (activeIndex - 1 + enabledItems.length) % enabledItems.length

    focusItem(enabledItems[nextIndex])
  }

  return {
    activeItemId,
    focusTrigger,
    handleMenuKeyDown,
    handleTriggerKeyDown,
    isMenuOpen,
    isOpen,
    itemRefs,
    menuRef,
    normalizedItems,
    openWithIntent,
    position,
    requestOpen,
    rootRef,
    setActiveItemId,
    triggerRef,
  }
}

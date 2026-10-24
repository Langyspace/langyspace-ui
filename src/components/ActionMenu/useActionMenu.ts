import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { getActionMenuPosition } from './position'
import type { ActionMenuPosition } from './position'
import type { ActionMenuItem, ActionMenuProps } from './ActionMenu.types'
import { getTabbableElements } from '../../internal/focus'
import { useControllableState } from '../../internal/useControllableState'
import { useIsClient } from '../../internal/useIsClient'

type FocusIntent = 'first' | 'last'

const normalizeItems = (items: readonly ActionMenuItem[]) => [
  ...items.filter((item) => item.tone !== 'danger'),
  ...items.filter((item) => item.tone === 'danger'),
]

const getEnabledItems = (items: readonly ActionMenuItem[]) =>
  items.filter((item) => !item.disabled && !item.loading)

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
  const canUseDOM = useIsClient()
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  const [position, setPosition] = useState<ActionMenuPosition | null>(null)
  const [isOpen, requestOpen] = useControllableState({
    defaultValue: defaultOpen,
    onChange: onOpenChange,
    value: open,
  })
  const rootRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const itemsRef = useRef(new Map<string, HTMLButtonElement>())
  const focusIntentRef = useRef<FocusIntent>('first')
  const normalizedItems = useMemo(() => normalizeItems(items), [items])
  const isMenuOpen = isOpen && canUseDOM && normalizedItems.length > 0
  const enabledItems = useMemo(
    () => getEnabledItems(normalizedItems),
    [normalizedItems],
  )
  const focusTrigger = useCallback(() => {
    if (triggerRef.current?.isConnected) {
      triggerRef.current.focus({ preventScroll: true })
    }
  }, [])

  const focusItem = useCallback((item: ActionMenuItem | undefined) => {
    if (!item) return false

    const node = itemsRef.current.get(item.id)
    if (!node?.isConnected) return false

    setActiveItemId(item.id)
    node.focus({ preventScroll: true })

    return true
  }, [])

  const focusRelativeToTrigger = useCallback((backward: boolean) => {
    const trigger = triggerRef.current
    if (!trigger) return

    const menu = menuRef.current
    const tabbables = getTabbableElements(document).filter(
      (element) => !menu?.contains(element),
    )
    const triggerIndex = tabbables.indexOf(trigger)
    const target = tabbables[triggerIndex + (backward ? -1 : 1)]

    if (target) target.focus({ preventScroll: true })
    else trigger.blur()
  }, [])

  useLayoutEffect(() => {
    const menu = menuRef.current
    const trigger = triggerRef.current

    if (!isMenuOpen || !menu || !trigger) {
      setPosition(null)

      return
    }

    const updatePosition = () => {
      const next = getActionMenuPosition({
        align,
        menu: menu.getBoundingClientRect(),
        trigger: trigger.getBoundingClientRect(),
        viewportHeight: window.innerHeight,
        viewportWidth: window.innerWidth,
      })

      setPosition((current) =>
        current &&
        current.left === next.left &&
        current.top === next.top &&
        current.maxHeight === next.maxHeight &&
        current.placement === next.placement
          ? current
          : next,
      )
    }

    updatePosition()

    // Late size changes, such as a web font finishing to load, move the edges.
    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(updatePosition)

    observer?.observe(menu)

    return () => {
      observer?.disconnect()
    }
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
    itemsRef,
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

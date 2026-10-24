import { useId } from 'react'
import { createPortal } from 'react-dom'
import { IconButton } from '../IconButton/IconButton'
import { IconSlot } from '../../internal/IconSlot/IconSlot'
import { useMergedRef } from '../../internal/useMergedRef'
import { Spinner } from '../Spinner/Spinner'
import { useActionMenu } from './useActionMenu'
import * as Styled from './ActionMenu.styles'
import type { ActionMenuProps } from './ActionMenu.types'

function EllipsisGlyph() {
  return (
    <svg aria-hidden="true" height="18" viewBox="0 0 18 18" width="18">
      <circle cx="3.5" cy="9" fill="currentColor" r="1.25" />
      <circle cx="9" cy="9" fill="currentColor" r="1.25" />
      <circle cx="14.5" cy="9" fill="currentColor" r="1.25" />
    </svg>
  )
}

export function ActionMenu({
  align = 'end',
  defaultOpen = false,
  items,
  onOpenChange,
  open,
  ref,
  size = 'md',
  triggerLabel,
  ...nativeProps
}: ActionMenuProps) {
  const {
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
  } = useActionMenu({
    align,
    defaultOpen,
    items,
    onOpenChange,
    open,
    size,
  })
  const menuId = useId()
  const triggerId = useId()
  const setRootRef = useMergedRef(rootRef, ref)
  const firstDangerIndex = normalizedItems.findIndex(
    (item) => item.tone === 'danger',
  )

  if (normalizedItems.length === 0) {
    return <Styled.Root {...nativeProps} ref={setRootRef} />
  }

  return (
    <Styled.Root {...nativeProps} ref={setRootRef}>
      <IconButton
        aria-controls={isMenuOpen ? menuId : undefined}
        aria-expanded={isMenuOpen}
        aria-haspopup="menu"
        aria-label={triggerLabel}
        id={triggerId}
        ref={triggerRef}
        size={size}
        variant="subtle"
        onClick={() => {
          if (isOpen) requestOpen(false)
          else openWithIntent('first')
        }}
        onKeyDown={handleTriggerKeyDown}
      >
        <EllipsisGlyph />
      </IconButton>

      {isMenuOpen
        ? createPortal(
            <Styled.Menu
              $align={align}
              $placement={position?.placement ?? 'bottom'}
              $position={position}
              aria-labelledby={triggerId}
              data-align={align}
              data-placement={position?.placement}
              data-ui-action-menu="true"
              id={menuId}
              ref={menuRef}
              role="menu"
              tabIndex={-1}
              onKeyDown={handleMenuKeyDown}
            >
              {normalizedItems.map((item, index) => {
                const isUnavailable = Boolean(item.disabled || item.loading)
                const shouldSeparate =
                  index === firstDangerIndex && firstDangerIndex > 0

                return (
                  <div key={item.id} role="none">
                    {shouldSeparate ? (
                      <Styled.Separator role="separator" />
                    ) : null}
                    <Styled.MenuItem
                      $size={size}
                      $tone={item.tone ?? 'neutral'}
                      aria-busy={item.loading || undefined}
                      aria-disabled={isUnavailable || undefined}
                      data-action-menu-item-id={item.id}
                      data-loading={item.loading ? 'true' : undefined}
                      disabled={isUnavailable}
                      ref={(node) => {
                        if (node) itemsRef.current.set(item.id, node)
                        else itemsRef.current.delete(item.id)
                      }}
                      role="menuitem"
                      tabIndex={item.id === activeItemId ? 0 : -1}
                      onClick={() => {
                        requestOpen(false)
                        focusTrigger()
                        item.onSelect()
                      }}
                      onFocus={() => {
                        setActiveItemId(item.id)
                      }}
                    >
                      <IconSlot icon={item.loading ? <Spinner /> : item.icon} />
                      <Styled.ItemLabel>{item.label}</Styled.ItemLabel>
                    </Styled.MenuItem>
                  </div>
                )
              })}
            </Styled.Menu>,
            document.body,
          )
        : null}
    </Styled.Root>
  )
}

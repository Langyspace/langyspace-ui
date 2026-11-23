import { useId, useLayoutEffect, useRef, useState } from 'react'
import * as S from './ImageSortBoard.styles'
import type { ImageSortBoardProps } from './ImageSortBoard.types'
import { PictureImage } from '../../internal/PictureImage'

const dragType = 'application/x-ui-picture'

/** Controlled, ungraded picture categorisation with equivalent pointer and keyboard paths. */
export function ImageSortBoard({
  items,
  categories,
  assignments,
  selectedId,
  onSelect,
  onAssign,
  unassignedLabel = 'Pictures',
  instructions = 'Drag a picture, or select it and choose a column',
  emptyLabel = 'No pictures here yet',
  layout = 'categories',
  footer,
  'aria-describedby': describedBy,
  ...props
}: ImageSortBoardProps) {
  const id = useId()
  const itemRefs = useRef(new Map<string, HTMLButtonElement>())
  const pendingFocus = useRef<string | undefined>(undefined)
  const [dragTarget, setDragTarget] = useState<string>()
  const selected = items.find((item) => item.id === selectedId)
  const categoryIds = new Set(categories.map((category) => category.id))
  useLayoutEffect(() => {
    const target = pendingFocus.current
    if (target) {
      itemRefs.current.get(target)?.focus({ preventScroll: true })
      pendingFocus.current = undefined
    }
  }, [assignments])
  const move = (itemId: string, categoryId: string | undefined) => {
    setDragTarget(undefined)
    if (!items.some((item) => item.id === itemId)) return
    pendingFocus.current = itemId
    onSelect(itemId)
    onAssign(itemId, categoryId)
  }
  const groups = [{ id: undefined, label: unassignedLabel }, ...categories]
  return (
    <S.Root
      {...props}
      $sequence={layout === 'sequence'}
      aria-describedby={[describedBy, id + '-instructions']
        .filter(Boolean)
        .join(' ')}
    >
      <S.Instructions id={id + '-instructions'}>{instructions}</S.Instructions>
      <S.Board>
        {groups.map((group, index) => {
          const groupKey = group.id ?? 'pictures'
          const groupItems = items.filter((item) =>
            group.id
              ? assignments[item.id] === group.id
              : !categoryIds.has(assignments[item.id] ?? ''),
          )
          return (
            <S.Column
              key={index}
              $bank={!group.id}
              $target={dragTarget === groupKey}
              aria-label={group.label}
              onDragOver={(event) => {
                event.preventDefault()
                setDragTarget(groupKey)
              }}
              onDragLeave={(event) => {
                if (
                  !(event.relatedTarget instanceof Node) ||
                  !event.currentTarget.contains(event.relatedTarget)
                )
                  setDragTarget(undefined)
              }}
              onDrop={(event) => {
                event.preventDefault()
                move(event.dataTransfer.getData(dragType), group.id)
              }}
            >
              <S.GroupButton
                id={`${id}-group-${index}`}
                variant="secondary"
                disabled={!selected}
                aria-label={
                  selected
                    ? `Move ${selected.label} to ${group.label}`
                    : `Choose a picture for ${group.label}`
                }
                onClick={() => selected && move(selected.id, group.id)}
              >
                {group.label}
              </S.GroupButton>
              <S.Items $bank={!group.id}>
                {groupItems.map((item) => (
                  <S.Picture
                    key={item.id}
                    variant="lesson"
                    aria-label={item.label}
                    aria-pressed={item.id === selectedId}
                    ref={(element) => {
                      if (element) itemRefs.current.set(item.id, element)
                      else itemRefs.current.delete(item.id)
                    }}
                    draggable
                    onDragStart={(event) => {
                      onSelect(item.id)
                      event.dataTransfer.setData(dragType, item.id)
                      event.dataTransfer.effectAllowed = 'move'
                    }}
                    onDragEnd={() => setDragTarget(undefined)}
                    onClick={() => onSelect(item.id)}
                  >
                    <PictureImage
                      src={item.imageUrl}
                      alt={item.imageAlt ?? ''}
                      region={item.imageRegion}
                    />
                    <span>{item.label}</span>
                  </S.Picture>
                ))}
              </S.Items>
              {!groupItems.length ? <S.Empty>{emptyLabel}</S.Empty> : null}
            </S.Column>
          )
        })}
      </S.Board>
      {footer ? <S.Footer>{footer}</S.Footer> : null}
    </S.Root>
  )
}

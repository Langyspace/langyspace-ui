import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { ActionMenu } from '../ActionMenu/ActionMenu'
import type { NormalizedOperationalListActions } from './normalizeActions'
import * as Styled from './OperationalList.styles'
import type { OperationalListDensity } from './OperationalList.types'

interface RowActionsProps {
  actions: NormalizedOperationalListActions
  density: OperationalListDensity
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
}

export function OperationalRowActions({
  actions,
  density,
  menuOpen,
  onMenuOpenChange,
}: RowActionsProps) {
  const size = density === 'compact' ? 'sm' : 'md'

  return (
    <Styled.ActionsLayout>
      {actions.primary ? (
        <Styled.PrimaryActionSlot data-action-placement="primary">
          <Button
            density={density}
            disabled={actions.primary.disabled}
            iconStart={actions.primary.icon}
            isLoading={actions.primary.isLoading}
            size={size}
            variant={actions.primary.variant ?? 'primary'}
            onClick={actions.primary.onSelect}
          >
            {actions.primary.label}
          </Button>
        </Styled.PrimaryActionSlot>
      ) : null}
      {actions.quick.length > 0 ? (
        <Styled.QuickActions data-action-placement="quick">
          {actions.quick.map((action) => (
            <IconButton
              aria-label={action.label}
              disabled={action.disabled}
              isLoading={action.isLoading}
              key={action.id}
              size={size}
              variant="neutral"
              onClick={action.onSelect}
            >
              {action.icon}
            </IconButton>
          ))}
        </Styled.QuickActions>
      ) : null}
      {actions.overflow.length > 0 ? (
        <div data-action-placement="overflow">
          <ActionMenu
            items={actions.overflow}
            open={menuOpen}
            size={size}
            triggerLabel="Mais ações"
            onOpenChange={onMenuOpenChange}
          />
        </div>
      ) : null}
    </Styled.ActionsLayout>
  )
}

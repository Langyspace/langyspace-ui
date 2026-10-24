import { css, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import type {
  OperationalListAlign,
  OperationalListImportance,
} from './OperationalList.types'
import { theme } from '../../foundations/theme/theme'

interface OperationalListCellStyleProps {
  $align: OperationalListAlign
  $importance?: OperationalListImportance
}

interface OperationalListHeadStyleProps {
  $hasSorting: boolean
}

interface OperationalListHeaderStyleProps {
  $align: OperationalListAlign
  $sortable: boolean
}

const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`

const densityPadding = css`
  padding: var(--lsui-operational-list-cell-y)
    var(--lsui-operational-list-cell-x);
`

const interactiveTitle = css`
  min-width: 0;
  color: ${theme.colors.text.primary};
  font: inherit;
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  text-align: left;
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    color: ${theme.semantic.foreground.brand};
    text-decoration: underline;
    text-underline-offset: 0.18em;
  }

  &:focus-visible {
    border-radius: ${theme.radius.control};
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }
`

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-operational-list',
})`
  --lsui-operational-list-cell-x: ${theme.spacing[4]};
  --lsui-operational-list-cell-y: ${theme.spacing[4]};
  --lsui-operational-list-action-gap: ${theme.spacing[2]};

  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  color: ${theme.colors.text.primary};
  container-type: inline-size;

  &[data-density='compact'] {
    --lsui-operational-list-cell-x: ${theme.spacing[3]};
    --lsui-operational-list-cell-y: ${theme.spacing[3]};
    --lsui-operational-list-action-gap: calc(
      ${theme.spacing[1]} + ${theme.spacing[1]} / 2
    );
  }
`

export const Surface = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  background: ${theme.colors.palette.white};
  overflow: hidden;

  @container (max-width: 71.99rem) {
    border: 0;
    border-radius: 0;
    background: transparent;
    overflow: visible;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  color: inherit;
  font-size: ${theme.typography.fontSize.sm};

  @container (max-width: 71.99rem) {
    display: block;

    > tbody {
      display: grid;
      min-width: 0;
      gap: ${theme.spacing[3]};
    }
  }
`

export const TableHead = styled.thead<OperationalListHeadStyleProps>`
  background: ${theme.semantic.background.muted};

  @container (max-width: 71.99rem) {
    ${({ $hasSorting }) => !$hasSorting && visuallyHidden}

    display: block;
    margin-bottom: ${theme.spacing[3]};
    border: 1px solid ${theme.colors.border.subtle};
    border-radius: ${theme.radius.xl};
    background: ${theme.colors.palette.white};
  }
`

export const HeaderRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.border.subtle};

  @container (max-width: 71.99rem) {
    display: flex;
    min-width: 0;
    flex-wrap: wrap;
    gap: ${theme.spacing[1]};
    padding: ${theme.spacing[2]};
    border: 0;
  }
`

export const ColumnHeader = styled.th<OperationalListHeaderStyleProps>`
  ${densityPadding}
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  text-align: ${({ $align }) => ($align === 'end' ? 'right' : 'left')};
  white-space: nowrap;

  @container (max-width: 71.99rem) {
    ${({ $sortable }) => !$sortable && visuallyHidden}
    padding: 0;
  }
`

export const ActionsHeader = styled.th`
  ${densityPadding}
  width: 1%;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  text-align: right;
  white-space: nowrap;

  @container (max-width: 71.99rem) {
    ${visuallyHidden}
  }
`

export const SortButton = styled(Pressable)`
  display: inline-flex;
  min-width: 0;
  min-height: 2rem;
  align-items: center;
  justify-content: inherit;
  gap: ${theme.spacing[1]};
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border: 0;
  border-radius: ${theme.radius.control};
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: inherit;

  &:hover {
    color: ${theme.colors.text.primary};
    background: ${theme.colors.palette.neutral[200]};
  }
`

export const SortGlyph = styled.span`
  display: inline-flex;
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize.xs};
  line-height: 1;
`

export const Row = styled.tr`
  border-bottom: 1px solid ${theme.colors.border.subtle};

  &:last-child {
    border-bottom: 0;
  }

  &:hover,
  &:focus-within {
    background: ${theme.semantic.background.surfaceSubtle};
  }

  @container (max-width: 71.99rem) {
    box-sizing: border-box;
    display: grid;
    min-width: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid ${theme.colors.border.subtle};
    border-radius: ${theme.radius.card};
    background: ${theme.colors.palette.white};
    box-shadow: ${theme.shadows.xs};
    overflow: visible;
  }

  @container (max-width: 47.99rem) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const EmptyRow = styled.tr`
  @container (max-width: 71.99rem) {
    display: block;
    min-width: 0;
  }
`

export const PrimaryCell = styled.th`
  ${densityPadding}
  min-width: 13rem;
  vertical-align: middle;
  text-align: left;

  @container (max-width: 71.99rem) {
    box-sizing: border-box;
    display: block;
    min-width: 0;
    grid-column: 1 / -1;
    border-bottom: 1px solid ${theme.colors.border.subtle};
  }
`

export const PrimaryLayout = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: ${theme.spacing[3]};
`

export const Leading = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`

export const PrimaryBody = styled.span`
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`

export const PrimaryTitle = styled.span`
  min-width: 0;
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  overflow-wrap: anywhere;
`

export const PrimaryLink = styled.a`
  ${interactiveTitle}
`

export const PrimaryButton = styled(Pressable)`
  ${interactiveTitle}
  padding: 0;
  border: 0;
  background: transparent;
`

export const PrimaryDescription = styled.span`
  min-width: 0;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`

export const PrimaryMeta = styled.span`
  min-width: 0;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`

export const NavigationHint = styled.span`
  display: none;
  flex: 0 0 auto;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1;

  @container (max-width: 71.99rem) {
    display: inline-flex;
  }
`

export const DataCell = styled.td<OperationalListCellStyleProps>`
  ${densityPadding}
  min-width: 0;
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.normal};
  text-align: ${({ $align }) => ($align === 'end' ? 'right' : 'left')};
  vertical-align: middle;
  overflow-wrap: anywhere;

  @container (max-width: 71.99rem) {
    box-sizing: border-box;
    display: block;
    min-width: 0;
    text-align: left;

    ${({ $importance }) =>
      $importance === 'secondary' &&
      css`
        grid-column: span 2;
      `}
  }

  @container (max-width: 47.99rem) {
    grid-column: 1;
  }
`

export const CompactLabel = styled.span`
  display: none;
  margin-bottom: ${theme.spacing[1]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize['2xs']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.snug};
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @container (max-width: 71.99rem) {
    display: block;
  }
`

export const CellValue = styled.div`
  min-width: 0;
`

export const ActionsCell = styled.td`
  ${densityPadding}
  width: 1%;
  vertical-align: middle;

  @container (max-width: 71.99rem) {
    box-sizing: border-box;
    display: block;
    width: auto;
    min-width: 0;
    grid-column: 1 / -1;
    border-top: 1px solid ${theme.colors.border.subtle};
  }
`

export const ActionsLayout = styled.div`
  display: flex;
  min-width: max-content;
  align-items: center;
  justify-content: flex-end;
  gap: var(--lsui-operational-list-action-gap);

  @container (max-width: 71.99rem) {
    min-width: 0;
    flex-wrap: wrap;
  }

  @container (max-width: 47.99rem) {
    align-items: stretch;
  }
`

export const PrimaryActionSlot = styled.div`
  display: inline-flex;
  min-width: 0;

  @container (max-width: 47.99rem) {
    width: 100%;

    > * {
      width: 100%;
    }
  }
`

export const QuickActions = styled.div`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: var(--lsui-operational-list-action-gap);

  @container (max-width: 47.99rem) {
    margin-left: auto;
  }
`

export const EmptyCell = styled.td`
  padding: ${theme.spacing[8]} ${theme.spacing[4]};
  color: ${theme.colors.text.muted};
  text-align: center;

  @container (max-width: 71.99rem) {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 1px solid ${theme.colors.border.subtle};
    border-radius: ${theme.radius.card};
    background: ${theme.colors.palette.white};
  }
`

export const Footer = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin-top: ${theme.spacing[3]};
`

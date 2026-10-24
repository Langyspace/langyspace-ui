import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Container = styled.section.withConfig({
  componentId: 'lsui-sc-availability-calendar',
})`
  container-type: inline-size;
  min-width: 0;
  color: ${theme.colors.text.primary};
  overflow-wrap: anywhere;

  > header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: ${theme.spacing[2]};
    margin-bottom: ${theme.spacing[3]};
  }

  > header > h2 {
    margin: 0;
    font-size: ${theme.typography.fontSize.lg};
  }

  > header > div,
  > p {
    font-size: ${theme.typography.fontSize.sm};
  }

  > p {
    margin: 0 0 ${theme.spacing[4]};
    color: ${theme.colors.text.secondary};
  }
`

export const Days = styled.div<{ $dayCount: number }>`
  display: grid;
  min-width: 0;
  gap: ${theme.spacing[3]};

  @container (min-width: 56rem) {
    grid-template-columns: repeat(
      ${({ $dayCount }) => $dayCount},
      minmax(0, 1fr)
    );
  }
`

export const Day = styled.section`
  min-width: 0;
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  background: ${theme.semantic.background.surfaceSubtle};

  > h3 {
    margin: 0 0 ${theme.spacing[3]};
    font-size: ${theme.typography.fontSize.sm};
    line-height: ${theme.typography.lineHeight.normal};
  }

  > h3 > span {
    display: block;
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.medium};
  }
`

export const Slots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7rem), 1fr));
  gap: ${theme.spacing[2]};

  @container (min-width: 56rem) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const Slot = styled(Pressable)<{ $selected: boolean }>`
  display: flex;
  min-width: 0;
  min-height: ${theme.sizes.control.lg};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[1]};
  padding: ${theme.spacing[2]};
  border: 1px solid
    ${({ $selected }) => ($selected ? theme.semantic.foreground.brand : theme.semantic.border.default)};
  border-radius: ${theme.radius.control};
  background: ${({ $selected }) => ($selected ? theme.semantic.status.brand.background : theme.colors.palette.white)};
  color: ${({ $selected }) => ($selected ? theme.semantic.status.brand.foreground : theme.colors.text.primary)};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  text-align: center;

  > small {
    font-size: ${theme.typography.fontSize.xs};
  }

  &:hover:not(:disabled) {
    border-color: ${theme.semantic.foreground.brand};
  }

  &:disabled {
    border-color: ${theme.colors.border.subtle};
    background: ${theme.colors.palette.neutral[200]};
    color: ${theme.colors.text.muted};
  }
`

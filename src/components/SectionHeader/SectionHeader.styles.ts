import { styled } from 'styled-components'
import type { SectionHeaderSpacing } from './SectionHeader.types'
import { theme } from '../../foundations/theme/theme'

const titleFlexBasis = '16rem'

export const Header = styled.div.withConfig({
  componentId: 'lsui-sc-section-header',
})<{ $spacing: SectionHeaderSpacing }>`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  margin-top: ${({ $spacing }) => ($spacing === 'flush' ? 0 : theme.spacing[8])};
  margin-bottom: ${theme.spacing[4]};
`

export const Title = styled.h2`
  min-width: 0;
  flex: 1 1 ${titleFlexBasis};
  margin: 0;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.snug};
  overflow-wrap: anywhere;
`

export const Aside = styled.div`
  display: inline-flex;
  min-width: 0;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[2]};
  margin-left: auto;
`

export const Meta = styled.span`
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
`

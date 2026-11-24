import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-practice-pair',
})`
  container: practice-pair / inline-size;
  min-width: 0;
`
export const Selection = styled.div`
  display: none;
  margin-bottom: ${theme.spacing[3]};
  @container practice-pair (max-width: 32rem) {
    display: flex;
    justify-content: center;
  }
`
export const Screens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[5]};
  align-items: stretch;
  @container practice-pair (max-width: 32rem) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Screen = styled.div<{ $selected: boolean }>`
  display: flex;
  min-width: 0;
  @container practice-pair (max-width: 32rem) {
    display: ${(p) => (p.$selected ? 'flex' : 'none')};
  }
`

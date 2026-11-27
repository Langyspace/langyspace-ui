import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-device-gallery',
})`
  container: device-gallery / inline-size;
  width: 100%;
  min-width: 0;
`
export const Selection = styled.div`
  display: none;
  margin-bottom: ${theme.spacing[4]};
  @container device-gallery (max-width: 46rem) {
    display: flex;
    justify-content: center;
  }
`
export const Grid = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$count}, minmax(0, 1fr));
  gap: ${theme.spacing[8]};
  align-items: start;
  @container device-gallery (max-width: 46rem) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Item = styled.section<{ $selected: boolean }>`
  display: grid;
  min-width: 0;
  gap: ${theme.spacing[3]};
  > h3 {
    margin: 0;
    text-align: center;
    font: ${theme.typography.fontWeight.bold} ${theme.typography.fontSize.md} /
      1.4 ${theme.typography.fontFamily.sans};
  }
  @container device-gallery (max-width: 46rem) {
    display: ${(p) => (p.$selected ? 'grid' : 'none')};
    > h3 {
      display: none;
    }
  }
`

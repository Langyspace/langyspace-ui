import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'

export const Container = styled.section.withConfig({
  componentId: 'lsui-sc-availability-calendar',
})`
  container-type: inline-size;
  min-width: 0;
  color: ${token.colorContentDefault};
  overflow-wrap: anywhere;

  > header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: ${token.spacing2};
    margin-bottom: ${token.spacing3};
  }

  > header > h2 {
    margin: 0;
    font-size: ${token.typographyFontSizeLg};
  }

  > header > div,
  > p {
    font-size: ${token.typographyFontSizeSm};
  }

  > p {
    margin: 0 0 ${token.spacing4};
    color: ${token.colorContentSecondary};
  }
`

export const Days = styled.div<{ $dayCount: number }>`
  display: grid;
  min-width: 0;
  gap: ${token.spacing3};

  @container (min-width: 56rem) {
    grid-template-columns: repeat(
      ${({ $dayCount }) => $dayCount},
      minmax(0, 1fr)
    );
  }
`

export const Day = styled.section`
  min-width: 0;
  padding: ${token.spacing3};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  background: ${token.colorSurfaceSubtle};

  > h3 {
    margin: 0 0 ${token.spacing3};
    font-size: ${token.typographyFontSizeSm};
    line-height: ${token.typographyLineHeightNormal};
  }

  > h3 > span {
    display: block;
    color: ${token.colorContentMuted};
    font-size: ${token.typographyFontSizeXs};
    font-weight: ${token.typographyFontWeightMedium};
  }
`

export const Slots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7rem), 1fr));
  gap: ${token.spacing2};

  @container (min-width: 56rem) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const Slot = styled(Pressable)<{ $selected: boolean }>`
  display: flex;
  min-width: 0;
  min-height: ${token.controlHeightLg};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${token.spacing1};
  padding: ${token.spacing2};
  border: 1px solid
    ${({ $selected }) => ($selected ? token.colorBrandDefault : token.colorSurfaceBorderDefault)};
  border-radius: ${token.radiusControl};
  background: ${({ $selected }) => ($selected ? token.colorStatusBrandBackground : token.colorNeutral0)};
  color: ${({ $selected }) => ($selected ? token.colorStatusBrandForeground : token.colorContentDefault)};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
  text-align: center;

  > small {
    font-size: ${token.typographyFontSizeXs};
  }

  &:hover:not(:disabled) {
    border-color: ${token.colorBrandDefault};
  }

  &:disabled {
    border-color: ${token.colorSurfaceBorderSubtle};
    background: ${token.colorNeutral100};
    color: ${token.colorContentMuted};
  }
`

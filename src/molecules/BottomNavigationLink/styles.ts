import { styled } from 'styled-components'
export const Root = styled.a.withConfig({
  componentId: 'lsui-sc-bottom-navigation-link',
})`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 52px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: #6b6b6b;
  font: inherit;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.25;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: 2px;
  }
  &[aria-current]:not([aria-current='false']),
  &.active {
    color: #0a0a0a;
  }
`

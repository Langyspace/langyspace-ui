import type { LinkRender, LinkRenderProps } from '../../foundations/links/types'

export interface LinkElementProps extends LinkRenderProps {
  render?: LinkRender
}

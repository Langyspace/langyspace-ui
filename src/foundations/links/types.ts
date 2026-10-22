import type { ComponentPropsWithRef, ReactElement } from 'react'

/** Props a link component computes for the element it renders. */
export type LinkRenderProps = ComponentPropsWithRef<'a'>

/**
 * Renders the link through another element, usually a router link:
 * `render={(props) => <NavLink {...props} to="/alunos" />}`.
 * Spread every prop so the element keeps the library's styles and semantics.
 */
export type LinkRender = (props: LinkRenderProps) => ReactElement

/** A link either points at `href` or delegates navigation to `render`. */
export type LinkDestination =
  | { href: string; render?: LinkRender }
  | { href?: undefined; render: LinkRender }

import babel from '@rolldown/plugin-babel'

// Keep authored CSS readable; only the distributed JavaScript is compacted.
// Public owners already declare stable componentId values.
export function styledComponentsBuild() {
  return babel({
    include: /[/\\]src[/\\].*\.[jt]sx?$/,
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: false,
          ssr: true,
          minify: true,
          transpileTemplateLiterals: false,
          pure: true,
        },
      ],
    ],
  })
}

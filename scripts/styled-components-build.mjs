import babel from '@rolldown/plugin-babel'

// Keep authored CSS readable; only the distributed JavaScript is compacted.
// Public owners already declare stable componentId values.
export function styledComponentsBuild() {
  return [
    babel({
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
    }),
    {
      name: 'omit-build-region-markers',
      // Remove compiler file labels from distribution; retain licenses and pure annotations.
      renderChunk(code) {
        return {
          code: code.replace(/^\/\/#(?:end)?region[^\n]*(?:\n|$)/gm, ''),
          map: null,
        }
      },
    },
  ]
}

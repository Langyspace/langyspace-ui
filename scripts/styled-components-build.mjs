import babel from '@rolldown/plugin-babel'
import { themeBuild } from './inline-theme.mjs'
import { foldStyleTokens } from './fold-style-tokens.mjs'
import { compactJSXAnnotations } from './compact-jsx-annotations.mjs'

// Keep authored CSS readable; only the distributed JavaScript is compacted.
// Public owners already declare stable componentId values.
export function styledComponentsBuild() {
  const theme = themeBuild()
  return [
    theme.defaults,
    babel({
      include: /[/\\](?:src|stories)[/\\].*\.[jt]sx?$/,
      plugins: [
        theme.inline,
        foldStyleTokens,
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
          code: compactJSXAnnotations(code).replace(
            /^\/\/#(?:end)?region[^\n]*(?:\n|$)/gm,
            '',
          ),
          map: null,
        }
      },
    },
  ]
}

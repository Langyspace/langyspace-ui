import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import type { SlideDeckProps } from '../../../src/components/Slide/SlideDeck.types'
import { theme } from '../../../src/foundations/theme/theme'
import * as Styled from './LessonDeck.styles'

const themeKey = 'langyspace.materials.theme'
const { slides, buttons } = theme
const darkTheme = {
  slides: {
    ...slides,
    canvas: slides.inverseCanvas,
    surface: theme.colors.palette.neutral[800],
    foreground: slides.inverseForeground,
    muted: slides.inverseMuted,
    border: slides.inverseBorder,
    accent: slides.indicator,
    headerSurface: slides.inverseCanvas,
  },
  buttons: {
    ...buttons,
    secondary: {
      ...buttons.secondary,
      background: slides.inverseCanvas,
      backgroundHover: theme.colors.palette.neutral[800],
      backgroundActive: theme.colors.palette.neutral[700],
      color: slides.inverseForeground,
      colorHover: slides.inverseForeground,
      borderColor: slides.inverseMuted,
    },
    tertiary: {
      ...buttons.tertiary,
      color: slides.inverseForeground,
      backgroundHover: theme.colors.palette.neutral[800],
      backgroundActive: theme.colors.palette.neutral[700],
    },
  },
}

function activityGroup(label: string) {
  return /^(Warm up|Pronunciation) ·/.exec(label)?.[1]
}

function exerciseProgress(pages: SlideDeckProps['pages'], pageId?: string) {
  const index = pages.findIndex((page) => page.id === pageId)
  const group = activityGroup(pages[index]?.label ?? '')
  if (!group) return
  let start = index
  let end = index
  while (start > 0 && activityGroup(pages[start - 1]?.label ?? '') === group) {
    start--
  }
  while (activityGroup(pages[end + 1]?.label ?? '') === group) {
    end++
  }
  if (end > start) return `${index - start + 1}/${end - start + 1}`
}

export function MaterialSlideDeck({ actions, ...props }: SlideDeckProps) {
  const [light, setLight] = useState(() => {
    try {
      return window.localStorage.getItem(themeKey) === 'light'
    } catch {
      return false
    }
  })
  const progress = exerciseProgress(props.pages, props.pageId)
  return (
    <ThemeProvider theme={light ? theme : darkTheme}>
      <Styled.MaterialDeck
        {...props}
        data-material-theme={light ? 'light' : 'dark'}
        actions={
          <>
            {progress ? (
              <Styled.ExerciseProgress role="status">
                <Styled.ExerciseProgressLabel>
                  Exercício{' '}
                </Styled.ExerciseProgressLabel>
                {progress}
              </Styled.ExerciseProgress>
            ) : null}
            <Button
              variant="secondary"
              size="sm"
              aria-label={light ? 'Ativar tema escuro' : 'Ativar tema claro'}
              onClick={() => {
                try {
                  window.localStorage.setItem(
                    themeKey,
                    light ? 'dark' : 'light',
                  )
                } catch {
                  // The theme is still usable when storage is unavailable.
                }
                setLight(!light)
              }}
            >
              {light ? 'Escuro' : 'Claro'}
            </Button>
            {actions}
          </>
        }
      />
    </ThemeProvider>
  )
}

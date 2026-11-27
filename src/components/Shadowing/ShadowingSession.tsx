import { BackIcon } from '../../internal/PracticeSession/BackIcon'
import { SessionProgress } from '../SessionProgress/SessionProgress'
import { PracticePlaybackControls } from '../Practice/PracticePlaybackControls'
import { ShadowingPanel } from './ShadowingPanel'
import { ShadowingReader } from './ShadowingReader'
import { ShadowingPhraseStack } from './ShadowingPhraseStack'
import { ShadowingActivePhrase } from './ShadowingActivePhrase'
import { ShadowingContextPhrase } from './ShadowingContextPhrase'
import { ShadowingTranslation } from './ShadowingTranslation'
import { ShadowingControlDock } from './ShadowingControlDock'
import { ShadowingRepetitions } from './ShadowingRepetitions'
import type { ShadowingSessionProps } from './ShadowingSession.types'
import * as S from './ShadowingSession.styles'

/** Shared Student composition; word timing, repetition state and audio remain controlled. */
export function ShadowingSession<Speed extends string = string>({
  name,
  counter,
  progress,
  backAction,
  phrase,
  phraseKey,
  previous,
  next,
  rising,
  speaker,
  translation,
  repetitions,
  controls,
  children,
  ...props
}: ShadowingSessionProps<Speed>) {
  return (
    <S.Frame {...props} data-ui-shadowing-session="true">
      <ShadowingPanel>
        <S.Header>
          <S.BackButton
            type="button"
            aria-label={backAction.label}
            onClick={backAction.onClick}
          >
            <BackIcon />
          </S.BackButton>
          <SessionProgress name={name} counter={counter} value={progress} />
        </S.Header>
        {phrase != null && (
          <>
            <ShadowingReader>
              <ShadowingPhraseStack key={phraseKey} rising={rising}>
                <ShadowingContextPhrase>
                  {previous ?? ''}
                </ShadowingContextPhrase>
                <ShadowingActivePhrase speaker={speaker}>
                  {phrase}
                </ShadowingActivePhrase>
                <ShadowingContextPhrase>{next ?? ''}</ShadowingContextPhrase>
              </ShadowingPhraseStack>
              <ShadowingTranslation>{translation}</ShadowingTranslation>
            </ShadowingReader>
            <ShadowingControlDock>
              {repetitions && (
                <ShadowingRepetitions
                  total={repetitions.total}
                  value={repetitions.value}
                  playing={controls?.playing}
                >
                  {repetitions.label}
                </ShadowingRepetitions>
              )}
              {controls && <PracticePlaybackControls {...controls} />}
            </ShadowingControlDock>
          </>
        )}
        {children}
      </ShadowingPanel>
    </S.Frame>
  )
}

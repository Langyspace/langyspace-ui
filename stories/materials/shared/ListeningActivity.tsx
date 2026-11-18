import { AnswerDisclosure } from './AnswerDisclosure'
import { useId, useState } from 'react'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { Button } from '../../../src/components/Button/Button'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import * as Phone from '../../../src/components/VoiceMessage/VoiceMessageExercise.styles'
import { useMaterialSpeech } from './useMaterialSpeech'
import type { ListeningActivityProps } from './LessonActivities.types'

export function ListeningActivity({
  contact = 'Kim',
  avatarUrl,
  message,
  translation,
  questions,
  replyPrompt,
  support,
  greeting = 'Hi!',
  timestamp = '21:11',
}: ListeningActivityProps) {
  const id = useId()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [playedAgain, setPlayedAgain] = useState(false)
  const [transcript, setTranscript] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [rate, setRate] = useState(1)
  const speech = useMaterialSpeech()
  const all =
    questions.length > 0 &&
    questions.every((item) => answers[item.id] === item.correct)
  return (
    <Phone.Root>
      <Phone.Layout>
        <Phone.Phone>
          <Phone.StatusBar aria-hidden="true">
            <span>9:41</span>
            <Phone.Island />
            <Phone.StatusIcons>● ▰</Phone.StatusIcons>
          </Phone.StatusBar>
          <Phone.Contact>
            <Phone.Back aria-hidden="true">‹</Phone.Back>
            <Avatar
              imageUrl={avatarUrl}
              initials={contact.slice(0, 2)}
              size="sm"
            />
            <Phone.ContactText>
              <strong>{contact}</strong>
              <small>online</small>
            </Phone.ContactText>
          </Phone.Contact>
          <Phone.Conversation
            tabIndex={0}
            role="region"
            aria-label={`Conversa com ${contact}`}
          >
            <Phone.Bubble>
              {greeting}
              <Phone.Meta>
                <Phone.Time>21:10</Phone.Time>
              </Phone.Meta>
            </Phone.Bubble>
            <Phone.VoiceBubble>
              <Phone.Player>
                <Phone.Play
                  variant="brand"
                  aria-label={
                    speech.playing && !speech.paused
                      ? 'Pausar áudio'
                      : `Ouvir áudio de ${contact}`
                  }
                  onClick={() =>
                    speech.playing
                      ? speech.togglePause()
                      : speech.speak(message, rate)
                  }
                >
                  {speech.playing && !speech.paused ? 'Ⅱ' : '▶'}
                </Phone.Play>
                <Phone.Wave aria-hidden="true">
                  {Array.from({ length: 16 }, (_, index) => (
                    <Phone.Bar
                      key={`wave-${index}`}
                      $height={8 + ((index * 7) % 20)}
                      $played={false}
                    />
                  ))}
                </Phone.Wave>
                <Phone.Speed
                  variant="secondary"
                  aria-label={`Velocidade ${rate} vezes`}
                  onClick={() => setRate(rate === 1 ? 0.75 : 1)}
                >
                  {rate}x
                </Phone.Speed>
              </Phone.Player>
              <Phone.Meta>
                <Phone.Time>{timestamp}</Phone.Time>
              </Phone.Meta>
              <Common.Hint>Voz do navegador</Common.Hint>
            </Phone.VoiceBubble>
            {speech.error ? (
              <Phone.Error role="status">{speech.error}</Phone.Error>
            ) : null}
            {transcript && all && playedAgain ? (
              <Phone.Transcript id={id} $visible>
                <p>{message}</p>
                {translation ? <p>{translation}</p> : null}
              </Phone.Transcript>
            ) : null}
          </Phone.Conversation>
          <Phone.Composer aria-hidden="true">
            <Phone.MessagePlaceholder>Mensagem</Phone.MessagePlaceholder>
            <Phone.Microphone>●</Phone.Microphone>
          </Phone.Composer>
          <Phone.HomeIndicator />
        </Phone.Phone>
        <Phone.Side>
          <Common.Heading>{contact} disse isso?</Common.Heading>
          {questions.map((item) => (
            <Phone.Question key={item.id}>
              <legend>{item.text}</legend>
              <Phone.Choices>
                {(['Yes', 'No'] as const).map((choice) => (
                  <Phone.Choice
                    key={choice}
                    variant="secondary"
                    aria-pressed={answers[item.id] === choice}
                    $feedback={
                      answers[item.id] === choice
                        ? choice === item.correct
                          ? 'correct'
                          : 'incorrect'
                        : undefined
                    }
                    onClick={() =>
                      setAnswers((old) => ({ ...old, [item.id]: choice }))
                    }
                  >
                    {choice}
                  </Phone.Choice>
                ))}
              </Phone.Choices>
              <AnswerDisclosure question={item.text} answer={item.correct} />
              {answers[item.id] ? (
                <Common.Hint role="status">
                  {answers[item.id] === item.correct
                    ? 'Correto!'
                    : 'Tente novamente e diga o certo.'}
                </Common.Hint>
              ) : null}
            </Phone.Question>
          ))}
          {all ? (
            <>
              <Button
                variant="secondary"
                onClick={() => {
                  setPlayedAgain(true)
                  speech.speak(message, rate)
                }}
              >
                Listen again and check
              </Button>
              {playedAgain ? (
                <Button
                  variant="text"
                  aria-expanded={transcript}
                  aria-controls={id}
                  onClick={() => setTranscript(!transcript)}
                >
                  {transcript ? 'Hide transcription' : 'Show transcription'}
                </Button>
              ) : null}
              <Common.Surface>
                <b>{replyPrompt}</b>
                <Button
                  variant="secondary"
                  aria-expanded={showSupport}
                  onClick={() => setShowSupport(!showSupport)}
                >
                  {showSupport ? 'Esconder apoio' : 'Mostrar apoio'}
                </Button>
                {showSupport
                  ? support.map((line) => <p key={line}>{line}</p>)
                  : null}
              </Common.Surface>
            </>
          ) : null}
        </Phone.Side>
      </Phone.Layout>
    </Phone.Root>
  )
}

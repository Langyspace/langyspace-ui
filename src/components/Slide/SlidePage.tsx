import { SlideTitle } from './SlideTitle'
import { SlideAudioAction } from './SlideAudioAction'
import * as Styled from './SlidePage.styles'
import type { SlidePageProps } from './SlidePage.types'

export function SlidePage({
  title,
  titleAudio,
  eyebrow,
  instruction,
  tools,
  questions,
  questionsTitle = 'Questions',
  lead,
  cover,
  coverPlacement = 'before-heading',
  layout = 'stacked',
  density = 'regular',
  columns,
  width = 'wide',
  tone = 'default',
  children,
  ...props
}: SlidePageProps) {
  const contentColumns = questions ? 2 : columns
  const coverImage = cover ? (
    <Styled.Cover
      src={cover.src}
      alt={cover.alt}
      $afterHeading={coverPlacement === 'after-heading'}
      $split={layout === 'split'}
    />
  ) : null
  const introduction = (
    <>
      {coverPlacement === 'before-heading' ? coverImage : null}
      {lead ? <Styled.Lead>{lead}</Styled.Lead> : null}
      <Styled.Header
        $lead={Boolean(lead)}
        $compact={
          density !== 'regular' || contentColumns === 1 || width === 'focused'
        }
      >
        <Styled.Heading>
          {eyebrow ? (
            <Styled.Eyebrow $tone={tone}>{eyebrow}</Styled.Eyebrow>
          ) : null}
          <Styled.Title>
            {titleAudio && typeof title === 'string' ? (
              <SlideTitle
                title={title}
                action={<SlideAudioAction {...titleAudio} />}
              />
            ) : (
              title
            )}
          </Styled.Title>
          {instruction ? (
            <Styled.Instruction $tone={tone}>{instruction}</Styled.Instruction>
          ) : null}
        </Styled.Heading>
        {tools ? <Styled.Tools>{tools}</Styled.Tools> : null}
      </Styled.Header>
      {coverPlacement === 'after-heading' ? coverImage : null}
    </>
  )
  return (
    <Styled.Root {...props} $tone={tone}>
      <Styled.Content
        $width={questions ? 'expanded' : width}
        $columns={contentColumns}
        $layout={layout}
        $cover={Boolean(cover)}
        data-slide-columns={contentColumns}
      >
        {layout === 'split' ? (
          <div data-slide-introduction="true">{introduction}</div>
        ) : (
          introduction
        )}
        <Styled.Body $columns={contentColumns}>
          {questions ? (
            <Styled.Conversation data-guided-conversation="true">
              <Styled.ConversationText>{children}</Styled.ConversationText>
              <Styled.Questions
                aria-label={
                  typeof questionsTitle === 'string'
                    ? questionsTitle
                    : undefined
                }
              >
                {questionsTitle ? (
                  <Styled.QuestionsTitle>
                    {questionsTitle}
                  </Styled.QuestionsTitle>
                ) : null}
                {questions}
              </Styled.Questions>
            </Styled.Conversation>
          ) : (
            <Styled.Exercise>{children}</Styled.Exercise>
          )}
        </Styled.Body>
      </Styled.Content>
    </Styled.Root>
  )
}

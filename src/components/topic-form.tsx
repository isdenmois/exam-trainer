import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import { Topic } from 'typings'
import TextareaAutosize from 'react-textarea-autosize'

export type TopicEditFields = Pick<Topic, 'title' | 'content'>

type Props = {
  onSubmit: (data: TopicEditFields) => void
  initialData?: Partial<TopicEditFields>
  disabled?: boolean
}

export function TopicForm({ onSubmit, disabled, initialData = {} }: Props) {
  const { register, handleSubmit } = useForm()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Title</label>
        <input
          name='title'
          placeholder='Title'
          defaultValue={initialData.title}
          disabled={disabled}
          required
          ref={register}
        />
      </Form.Field>

      <Form.Field>
        <label>Content</label>
        <TextareaAutosize
          required
          name='content'
          placeholder='Content'
          defaultValue={initialData.content}
          disabled={disabled}
          ref={register}
        />
      </Form.Field>

      <Button type='submit' primary disabled={disabled}>
        Save
      </Button>
    </Form>
  )
}

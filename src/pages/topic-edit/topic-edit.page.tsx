import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'
import { Header } from 'semantic-ui-react'
import { useLoadingQuery } from 'utils/apollo'
import { TopicForm } from 'components/topic-form'

const TOPIC_EDIT_QUERY = gql`
  query TopicEdit($id: ID!) {
    topic(id: $id) {
      id
      title
      content
    }
  }
`

const UPDATE_TOPIC = gql`
  mutation UpdateTopic($id: ID!, $title: String, $content: String) {
    updateTopic(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`

export function TopicEditPage() {
  const { id } = useParams<any>()
  const { data, loading } = useLoadingQuery(TOPIC_EDIT_QUERY, { variables: { id } })
  const [mutate, { loading: disabled }] = useMutation(UPDATE_TOPIC)

  const history = useHistory()
  const onSubmit = async data => {
    await mutate({ variables: { id, ...data } })
    history.push(`/topic/${id}`)
  }

  if (loading) return loading

  const topic = data.topic

  return (
    <>
      <Header content='Edit topic' />

      <TopicForm onSubmit={onSubmit} initialData={topic} disabled={disabled} />
    </>
  )
}

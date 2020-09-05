import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoadingQuery } from 'utils/apollo'
import { gql } from '@apollo/client'
import { Header } from 'semantic-ui-react'
import Markdown from 'react-markdown'

const TOPIC_QUERY = gql`
  query GetTopic($id: ID!) {
    topic(id: $id) {
      id
      title
      content
    }
  }
`

export function TopicPage() {
  const { id } = useParams()
  const { data, loading } = useLoadingQuery(TOPIC_QUERY, { variables: { id } })
  if (loading) return loading
  const topic = data.topic

  return (
    <>
      <Header>{topic.title}</Header>

      <Markdown source={topic.content} />
    </>
  )
}

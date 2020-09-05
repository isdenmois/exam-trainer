import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLoadingQuery } from 'utils/apollo'
import { gql } from '@apollo/client'
import { Header, Icon } from 'semantic-ui-react'
import Markdown from 'react-markdown'
const s = require('./topic.css')

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
  const { id } = useParams<any>()
  const { data, loading } = useLoadingQuery(TOPIC_QUERY, { variables: { id } })
  if (loading) return loading
  const topic = data.topic

  return (
    <>
      <Header>
        {topic.title}

        <Link to={`/topic/${id}/edit`} className={s.editIcon}>
          <Icon name='edit' color='black' />
        </Link>
      </Header>

      <Markdown source={topic.content} />
    </>
  )
}

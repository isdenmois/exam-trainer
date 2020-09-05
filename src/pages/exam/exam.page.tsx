import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Loader, Header, Button, Icon } from 'semantic-ui-react'
import { TopicItem } from './topic-item'

export const EXAM_QUERY = gql`
  query Exam($id: ID!) {
    exam(id: $id) {
      id
      title
    }
    topics(examId: $id) {
      id
      title
    }
  }
`

export function ExamPage() {
  const { id } = useParams()
  const { data, loading } = useQuery(EXAM_QUERY, { variables: { id } })

  if (loading)
    return (
      <Loader active inline='centered'>
        Loading...
      </Loader>
    )

  const { exam, topics } = data

  return (
    <>
      <Header>{exam.title}</Header>

      {topics.map(topic => (
        <TopicItem key={topic.id} topic={topic} />
      ))}

      <Button animated='vertical' as={Link} to={`/exam/${id}/add-topic`}>
        <Button.Content hidden>Add topic</Button.Content>
        <Button.Content visible>
          <Icon name='add' />
        </Button.Content>
      </Button>
    </>
  )
}

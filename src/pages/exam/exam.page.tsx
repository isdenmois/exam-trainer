import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { gql } from '@apollo/client'
import { Header, Button, Icon, Card, Container } from 'semantic-ui-react'
import { useLoadingQuery } from 'utils/apollo'
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
  const { data, loading } = useLoadingQuery(EXAM_QUERY, { variables: { id } })

  if (loading) return loading

  const { exam, topics } = data

  return (
    <>
      <Header>{exam.title}</Header>

      <Card.Group>
        {topics.map(topic => (
          <TopicItem key={topic.id} topic={topic} />
        ))}
      </Card.Group>

      <div style={{ marginTop: '1em', textAlign: 'right' }}>
        <Button animated='vertical' as={Link} to={`/exam/${id}/add-topic`}>
          <Button.Content hidden>Add topic</Button.Content>
          <Button.Content visible>
            <Icon name='add' />
          </Button.Content>
        </Button>
      </div>
    </>
  )
}

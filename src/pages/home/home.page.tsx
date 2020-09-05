import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Dimmer, Loader, Image, Segment, Container, Card } from 'semantic-ui-react'
import { ExamItem } from './exam-item'

const EXAMS_QUERY = gql`
  query Exams {
    exams {
      id
      title
      image
      description
    }
  }
`

export function HomePage() {
  const { data, loading } = useQuery(EXAMS_QUERY)
  if (loading)
    return (
      <Loader active inline='centered'>
        Loading...
      </Loader>
    )

  return (
    <Card.Group>
      {data.exams.map(exam => (
        <ExamItem key={exam.id} exam={exam} />
      ))}
    </Card.Group>
  )
}

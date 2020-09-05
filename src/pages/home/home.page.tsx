import React from 'react'
import { gql } from '@apollo/client'
import { Loader, Card } from 'semantic-ui-react'
import { useQuery } from 'utils/apollo'
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

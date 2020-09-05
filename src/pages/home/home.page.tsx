import React from 'react'
import { gql } from '@apollo/client'
import { Card } from 'semantic-ui-react'
import { useLoadingQuery } from 'utils/apollo'
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
  const { data, loading } = useLoadingQuery(EXAMS_QUERY)
  if (loading) return loading

  return (
    <Card.Group>
      {data.exams.map(exam => (
        <ExamItem key={exam.id} exam={exam} />
      ))}
    </Card.Group>
  )
}

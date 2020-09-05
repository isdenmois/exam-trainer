import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'
import { Header } from 'semantic-ui-react'
import { EXAM_QUERY } from 'pages/exam/exam.page'
import { useLoadingQuery } from 'utils/apollo'
import { TopicForm } from 'components/topic-form'

const TOPIC_EXAM_QUERY = gql`
  query TopicExam($examId: ID!) {
    exam(id: $examId) {
      id
      title
    }
  }
`

const ADD_TOPIC = gql`
  mutation AddTopic($examId: ID!, $title: String!, $content: String!) {
    addTopic(examId: $examId, title: $title, content: $content) {
      id
      title
    }
  }
`

export function AddTopicPage() {
  const { examId } = useParams<any>()
  const { data, loading } = useLoadingQuery(TOPIC_EXAM_QUERY, { variables: { examId } })
  const [mutate, { loading: disabled }] = useMutation(ADD_TOPIC)

  const history = useHistory()
  const onSubmit = async data => {
    await mutate({
      variables: { examId, ...data },
      refetchQueries: [{ query: EXAM_QUERY, variables: { id: examId } }],
      awaitRefetchQueries: true,
    })
    history.push(`/exam/${examId}`)
  }

  if (loading) return loading

  const { exam } = data

  return (
    <>
      <Header content={exam.title} subheader='Add topic' />

      <TopicForm onSubmit={onSubmit} disabled={disabled} />
    </>
  )
}

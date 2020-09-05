import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import { Exam } from 'typings'

type Props = {
  exam: Exam
}

export function ExamItem({ exam }: Props) {
  return (
    <Card as={Link} to={`/exam/${exam.id}`}>
      {!!exam.image && <Image src={exam.image} wrapped ui={false} />}
      <Card.Content>
        <Card.Header>{exam.title}</Card.Header>
        <Card.Description>{exam.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

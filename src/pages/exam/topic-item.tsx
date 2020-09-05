import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { Topic } from 'typings'

type Props = {
  topic: Topic
}

export function TopicItem({ topic }: Props) {
  return (
    <Card as={Link} to={`/topic/${topic.id}`}>
      <Card.Content>
        <Card.Header>{topic.title}</Card.Header>
      </Card.Content>
    </Card>
  )
}

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'
import { HomePage } from 'pages/home/home.page'
import { ExamPage } from 'pages/exam/exam.page'
import { AddExamPage } from 'pages/add-exam.page'
import { AddTopicPage } from 'pages/add-topic/add-topic.page'

export function Routes() {
  return (
    <Router>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/'>
            <Icon name='home' />
            Home
          </Menu.Item>

          <Menu.Item as={Link} to='/exam/add'>
            <Icon name='add' />
            Add exam
          </Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route path='/exam/add'>
            <AddExamPage />
          </Route>

          <Route exact path='/exam/:id'>
            <ExamPage />
          </Route>

          <Route path='/exam/:examId/add-topic'>
            <AddTopicPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

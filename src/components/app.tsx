import * as React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { hot } from 'react-hot-loader/root'
import 'semantic-ui-css/semantic.min.css'
import { Routes } from './routes'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className='app'>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </div>
    )
  }
}

declare let module: Record<string, unknown>

export default hot(App)

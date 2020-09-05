import React from 'react'
import { useQuery as useQ, OperationVariables, DocumentNode, QueryHookOptions, QueryResult } from '@apollo/client'
import { Query } from 'typings'
import { Loader } from 'semantic-ui-react'

type UseQuery<TVariables = OperationVariables> = (query: DocumentNode, options?: QueryHookOptions<Query, TVariables>) => QueryResult<Query, TVariables>

export const useQuery: UseQuery = useQ

export const useLoadingQuery: UseQuery = function (query, options) {
  const result = useQ(query, options)

  if (result.loading) {
    result.loading = React.createElement(Loader, { active: true, inline: 'centered' }, 'Loading...') as any
  }

  return result
}

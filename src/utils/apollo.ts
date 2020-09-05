import { useQuery as useQ, OperationVariables, DocumentNode, QueryHookOptions, QueryResult } from '@apollo/client'
import { Query } from 'typings'

type UseQuery<TVariables = OperationVariables> = (query: DocumentNode, options?: QueryHookOptions<Query, TVariables>) => QueryResult<Query, TVariables>

export const useQuery: UseQuery = useQ

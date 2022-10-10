import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'
import { githubApi } from '@/services'
import {
  SearchIssuesByRepoParams,
  SearchIssuesResposta,
  UseSearchIssuesByRepoResponse,
} from './types'

export function useSearchIssuesByRepo(): UseSearchIssuesByRepoResponse {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError | null>(null)

  const searchIssuesByRepo = useCallback(
    async ({ searchString, username, repo }: SearchIssuesByRepoParams) => {
      try {
        setLoading(true)

        const { data: result } =
          await githubApi.get<SearchIssuesResposta | null>(`/search/issues`, {
            params: {
              q: `${searchString} repo:${username}/${repo}`,
            },
          })

        return result || null
      } catch (error) {
        setError(error as AxiosError)
      } finally {
        setLoading(false)
      }

      return null
    },
    [],
  )

  return [searchIssuesByRepo, { loading, error }]
}

import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'
import { githubApi } from '@/services'
import { Profile } from '@/models/profile'
import {
  SearchIssuesByRepoParams,
  UseSearchIssuesByRepoResponse,
} from './types'
import { Issue } from '@/models'

export function useSearchIssuesByRepo(): UseSearchIssuesByRepoResponse {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError | null>(null)

  const searchIssuesByRepo = useCallback(
    async ({ searchString, username, repo }: SearchIssuesByRepoParams) => {
      try {
        setLoading(true)

        const { data: result } = await githubApi.get<{
          total_count: number
          incomplete_results: boolean
          items: Issue[]
        } | null>(`/search/issues`, {
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

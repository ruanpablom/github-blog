import { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
import { githubApi, GetIssueParams, UseGetIssueReponse } from '@/services'
import { Issue } from '@/models'

export function useGetIssue(): UseGetIssueReponse {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError | null>(null)

  const getIssue = useCallback(
    async ({ username, repo, issueNumber }: GetIssueParams) => {
      try {
        setLoading(true)

        const { data: result } = await githubApi.get<Issue | null>(
          `/repos/${username}/${repo}/issues/${issueNumber}`,
        )

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

  return [getIssue, { loading, error }]
}

import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'
import { githubApi } from '@/services'
import { Profile } from '@/models/profile'
import { GetGithubProfileParams, UseGetGithubProfileResponse } from './types'

export function useGetGithubProfile(): UseGetGithubProfileResponse {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError | null>(null)

  const getGithubProfile = useCallback(
    async ({ username }: GetGithubProfileParams) => {
      try {
        setLoading(true)

        const { data: result } = await githubApi.get<Profile | null>(
          `/users/${username}`,
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

  return [getGithubProfile, { loading, error }]
}

import { AxiosError } from 'axios'
import { Profile } from '@/models/profile'

export type GetGithubProfileParams = {
  username: string
}

export type UseGetGithubProfileResponse = [
  (dado: GetGithubProfileParams) => Promise<Profile | null>,
  { loading: boolean; error: AxiosError | null },
]

import { AxiosError } from 'axios'
import { Issue } from '@/models'

export type SearchIssuesByRepoParams = {
  searchString: string
  username: string
  repo: string
}

export type SearchIssuesResposta = {
  total_count: number
  incomplete_results: boolean
  items: Issue[]
}

export type UseSearchIssuesByRepoResponse = [
  (data: SearchIssuesByRepoParams) => Promise<SearchIssuesResposta | null>,
  { loading: boolean; error: AxiosError | null },
]

export type GetIssueParams = {
  username: string
  repo: string
  issueNumber: number
}

export type UseGetIssueReponse = [
  (data: GetIssueParams) => Promise<Issue | null>,
  { loading: boolean; error: AxiosError | null },
]

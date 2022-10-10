import { PostList, Profile as ProfileComponet } from '@/components'
import { useCallback, useEffect, useState } from 'react'
import { Profile } from '@/models/profile'
import {
  SearchIssuesResposta,
  useGetGithubProfile,
  useSearchIssuesByRepo,
} from '@/services'
import { SearchForm } from './components/SearchForm'

import {
  HomeContainer,
  PostsContainer,
  PostsHead,
  PostsTitleContainer,
} from './styles'

export function Home() {
  const [profile, setProfile] = useState<Profile | null>()
  const [searchIssuesResult, setSearchIssuesResult] =
    useState<SearchIssuesResposta | null>(null)

  const [getGithubProfile] = useGetGithubProfile()
  const [searchIssuesByRepo] = useSearchIssuesByRepo()

  const searchIssues = useCallback(
    (searchString: string) => {
      searchIssuesByRepo({
        username: 'ruanpablom',
        repo: 'github-blog',
        searchString,
      }).then((searchResult) => {
        setSearchIssuesResult(searchResult)
      })
    },
    [searchIssuesByRepo],
  )

  useEffect(() => {
    getGithubProfile({ username: 'ruanpablom' }).then((profile) => {
      setProfile(profile)
    })
  }, [getGithubProfile])

  useEffect(() => {
    searchIssues('')
  }, [searchIssues])

  const posts = searchIssuesResult?.items || []

  return (
    <HomeContainer>
      {profile && (
        <ProfileComponet
          avatarUrl={profile.avatar_url}
          name={profile.name}
          bio={profile.bio}
          login={profile.login}
          company={profile.company}
          followersQtd={profile.followers}
        />
      )}
      {posts && (
        <PostsContainer>
          <PostsHead>
            <PostsTitleContainer>
              <strong>Publicações</strong>
              <span>{`${posts.length} ${
                posts.length === 1 ? 'publicação' : 'publicações'
              }`}</span>
            </PostsTitleContainer>
            <SearchForm searchIssues={searchIssues} />
          </PostsHead>
          <PostList posts={posts} />
        </PostsContainer>
      )}
    </HomeContainer>
  )
}

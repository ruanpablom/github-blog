import { PostList, Input, Profile as ProfileComponet } from '@/components'
import { Profile } from '@/models/profile'
import { useGetGithubProfile } from '@/services'
import { useEffect, useState } from 'react'
import {
  HomeContainer,
  PostsContainer,
  PostsHead,
  PostsTitleContainer,
} from './styles'

const posts = [
  {
    id: 1,
    title: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    creationDate: new Date(),
  },
  {
    id: 2,
    title: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    creationDate: new Date(),
  },
  {
    id: 3,
    title: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    creationDate: new Date(),
  },
  {
    id: 4,
    title: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    creationDate: new Date(),
  },
  {
    id: 5,
    title: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    creationDate: new Date(),
  },
  {
    id: 6,
    title: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    creationDate: new Date(),
  },
]

export function Home() {
  const [profile, setProfile] = useState<Profile | null>()
  const [getGithubProfile] = useGetGithubProfile()

  useEffect(() => {
    getGithubProfile({ username: 'ruanpablom' }).then((profile) => {
      setProfile(profile)
    })
  }, [getGithubProfile])

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
      <PostsContainer>
        <PostsHead>
          <PostsTitleContainer>
            <strong>Publicações</strong>
            <span>{`${posts.length} ${
              posts.length === 1 ? 'publicação' : 'publicações'
            }`}</span>
          </PostsTitleContainer>
          <Input name="searchInput" placeholder="Buscar conteúdo" />
        </PostsHead>
        <PostList posts={posts} />
      </PostsContainer>
    </HomeContainer>
  )
}

import { PostList } from '@/components/Post'
import { Profile } from '@/components/Profile'
import { HomeContainer } from './styles'

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
  return (
    <HomeContainer>
      <Profile
        avatarUrl="https://avatars.githubusercontent.com/u/10927682?v=4"
        name="Ruan Pablo Medeiros"
        bio="Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass."
        login="ruanpablom"
        company="RocketSeat"
        followersQtd={11}
      />
      <PostList posts={posts} />
    </HomeContainer>
  )
}

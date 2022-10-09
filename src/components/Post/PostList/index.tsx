import { PostItem } from '@/components/Post'
import { PostListContainer } from './styles'
import { PostListProps } from './types'

export function PostList({ posts }: PostListProps) {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

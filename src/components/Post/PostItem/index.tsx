import { formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostItemProps } from './types'
import { useNavigate } from 'react-router-dom'

import {
  CreationDate,
  Description,
  PostItemContainer,
  Title,
  TopContainer,
} from './styles'

export function PostItem({ post }: PostItemProps) {
  const { title, created_at: createdAt, body, number } = post
  const navigate = useNavigate()

  return (
    <PostItemContainer onClick={() => navigate(`/post/${number}`)}>
      <TopContainer>
        <Title>{title}</Title>
        <CreationDate>
          {`Há ${formatDistanceToNow(parseISO(createdAt), { locale: ptBR })}`}
        </CreationDate>
      </TopContainer>
      <Description>{body}</Description>
    </PostItemContainer>
  )
}

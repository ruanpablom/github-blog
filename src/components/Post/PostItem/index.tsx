import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostItemProps } from './types'
import {
  CreationDate,
  Description,
  PostItemContainer,
  Title,
  TopContainer,
} from './styles'

export function PostItem({ post }: PostItemProps) {
  const { title, creationDate, description } = post

  return (
    <PostItemContainer>
      <TopContainer>
        <Title>{title}</Title>
        <CreationDate>
          {`Há ${formatDistanceToNow(creationDate, { locale: ptBR })}`}
        </CreationDate>
      </TopContainer>
      <Description>{description}</Description>
    </PostItemContainer>
  )
}

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useGetIssue } from '@/services'
import { Issue } from '@/models'
import { AnchorIcon, IconSpan } from '@/components'
import githubIcon from '@/assets/icons/github.svg'
import {
  faCalendarDay,
  faComment,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

import {
  PostContainer,
  PostInfosContainer,
  PostInfosFoot,
  PostInfosHead,
  PostTitle,
} from './styles'
import { ArticleContent } from './ArticleContent'

export function Post() {
  const { issueNumber } = useParams()
  const navigate = useNavigate()
  const [getIssue] = useGetIssue()
  const [post, setPost] = useState<Issue | null>(null)

  useEffect(() => {
    if (issueNumber) {
      getIssue({
        username: 'ruanpablom',
        repo: 'github-blog',
        issueNumber: Number(issueNumber),
      }).then((issue) => {
        setPost(issue)
      })
    }
  }, [getIssue, issueNumber])

  return (
    <PostContainer>
      {post && (
        <>
          <PostInfosContainer>
            <PostInfosHead>
              <AnchorIcon
                iconProps={{ icon: faChevronLeft }}
                iconPosition="left"
                onClick={() => navigate('/')}
              >
                VOLTAR
              </AnchorIcon>
              <AnchorIcon
                href={post.html_url}
                iconProps={{ icon: faArrowUpRightFromSquare }}
                iconPosition="right"
              >
                VER NO GITHUB
              </AnchorIcon>
            </PostInfosHead>
            <PostTitle>{post.title}</PostTitle>
            <PostInfosFoot>
              <IconSpan
                icon={githubIcon}
                spanColor="base-span"
                iconColor="base-label"
                text={post.user.login}
              />
              <IconSpan
                icon={faCalendarDay}
                spanColor="base-span"
                iconColor="base-label"
                text={`Há ${formatDistanceToNow(parseISO(post.created_at), {
                  locale: ptBR,
                })}`}
              />
              <IconSpan
                icon={faComment}
                spanColor="base-span"
                iconColor="base-label"
                text={`${post.comments} ${
                  post.comments === 1 ? 'comentário' : 'comentários'
                }`}
              />
            </PostInfosFoot>
          </PostInfosContainer>
          <ArticleContent>{`${post.body}`}</ArticleContent>
        </>
      )}
    </PostContainer>
  )
}

import styled from 'styled-components'

export const PostItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 416px;
  height: 260px;
  padding: 32px;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const TopContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const Title = styled.strong`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.25rem;
  line-height: 160%;
  width: 283px;
`

export const CreationDate = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-span']};
`

export const Description = styled.p`
  display: -webkit-box;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
